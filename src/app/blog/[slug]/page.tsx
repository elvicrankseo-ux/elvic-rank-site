import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, Calendar, Clock } from "lucide-react";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import { Button } from "@/components/ui/button";
import { ArticleContent } from "@/components/ui/article-content";
import { blogPosts, getBlogPostBySlug } from "@/data/blog";
import { siteConfig } from "@/config/site";
import { buildMetadata } from "@/lib/metadata";
import { getArticleSchema, getBreadcrumbSchema } from "@/lib/schema";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);
  if (!post) return {};

  return buildMetadata({
    title: post.metaTitle,
    description: post.metaDescription,
    path: `/blog/${post.slug}`,
  });
}

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);
  if (!post) notFound();

  // Curated relationships first (see BlogPost.relatedSlugs) — falls back to
  // the previous positional selection only for a post that hasn't been
  // editorially mapped yet, so "More from the blog" never renders empty.
  const curatedRelated = (post.relatedSlugs ?? [])
    .map((relatedSlug) => getBlogPostBySlug(relatedSlug))
    .filter(
      (p): p is NonNullable<typeof p> => p !== undefined && p.slug !== post.slug
    );
  const relatedPosts =
    curatedRelated.length > 0
      ? curatedRelated
      : blogPosts.filter((p) => p.slug !== post.slug).slice(0, 2);

  const jsonLd = [
    getArticleSchema(post),
    getBreadcrumbSchema([
      { name: "Home", path: "/" },
      { name: "Blog", path: "/blog" },
      { name: post.title, path: `/blog/${post.slug}` },
    ]),
  ];

  return (
    <main className="flex-1 relative pb-24 lg:pb-32">
      {/* Subtle Background Glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute top-[5%] left-1/2 -translate-x-1/2 -z-10 h-[30rem] w-[30rem] rounded-full bg-accent/15 blur-[120px]"
      />

      {jsonLd.map((schema) => (
        <script
          key={schema["@type"]}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}

      <article>
        <header className="pt-32 sm:pt-40 pb-12 lg:pb-16 text-center">
          <div className="mx-auto max-w-4xl px-6 lg:px-8 flex flex-col items-center">
            <Breadcrumbs
              items={[
                { name: "Home", href: "/" },
                { name: "Blog", href: "/blog" },
                { name: post.title },
              ]}
            />
            <span className="mt-8 inline-flex items-center rounded-full bg-accent-deep/10 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-accent-deep [box-shadow:var(--shadow-neo-pressed)]">
              {post.category}
            </span>
            <h1 className="mt-8 font-display text-4xl font-bold leading-tight tracking-tight text-foreground sm:text-5xl">
              {post.title}
            </h1>
            <div className="mt-8 flex items-center gap-6 text-sm font-medium text-muted-dark uppercase tracking-wider">
              <span className="flex items-center gap-2">
                <Calendar size={16} aria-hidden />
                <time dateTime={post.publishDate}>{formatDate(post.publishDate)}</time>
              </span>
              <span className="flex items-center gap-2">
                <Clock size={16} aria-hidden />
                {post.readingTime}
              </span>
            </div>
          </div>
        </header>

        <div className="py-8">
          <div className="mx-auto max-w-3xl px-6 lg:px-8 prose prose-lg prose-slate">
            <ArticleContent blocks={post.content} />
          </div>
        </div>
      </article>

      <section className="py-16 mt-16">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          <div className="flex flex-col items-center gap-6 rounded-3xl bg-accent-deep p-12 sm:p-16 text-center shadow-[0_20px_40px_-10px_rgba(37,99,235,0.4)] relative overflow-hidden transition-transform duration-500 hover:-translate-y-1 hover:shadow-[0_30px_60px_-10px_rgba(37,99,235,0.5)]">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff1a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff1a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none" />
            <h2 className="font-display text-3xl font-bold text-white relative z-10">
              See where your own site stands
            </h2>
            <p className="max-w-md text-lg text-white/80 relative z-10">
              A free SEO audit shows you exactly what&apos;s helping — and
              what&apos;s quietly costing you rankings.
            </p>
            <Button
              href={siteConfig.cta.primary.href}
              variant="primary"
              size="lg"
              className="mt-4 bg-white text-accent-deep hover:bg-gray-50 font-bold px-8 py-6 text-lg relative z-10 shadow-[0_8px_20px_-5px_rgba(0,0,0,0.2)]"
              gaEvent="seo_audit_cta_click"
              gaParams={{ location: "blog_post", post: post.slug }}
            >
              {siteConfig.cta.primary.label}
              <ArrowRight size={18} aria-hidden />
            </Button>
          </div>
        </div>
      </section>

      {relatedPosts.length > 0 && (
        <section className="py-16">
          <div className="mx-auto max-w-3xl px-6 lg:px-8">
            <h2 className="font-display text-3xl font-bold text-foreground">
              More from the blog
            </h2>
            <div className="mt-10 grid gap-8 sm:grid-cols-2">
              {relatedPosts.map((related) => (
                <Link
                  key={related.slug}
                  href={`/blog/${related.slug}`}
                  className="group flex flex-col bg-ink rounded-3xl p-8 transition-all duration-300 [box-shadow:var(--shadow-neo-flat)] hover:[box-shadow:var(--shadow-neo-pressed)]"
                >
                  <span className="inline-block self-start rounded-full bg-accent-deep/10 px-3 py-1 text-xs font-bold uppercase tracking-wider text-accent-deep [box-shadow:var(--shadow-neo-pressed)]">
                    {related.category}
                  </span>
                  <span className="mt-6 font-display text-xl font-bold leading-snug text-foreground">
                    {related.title}
                  </span>
                  <span className="mt-8 flex items-center gap-2 text-sm font-bold text-accent-deep">
                    Read article
                    <ArrowRight
                      size={16}
                      aria-hidden
                      className="transition-transform duration-300 group-hover:translate-x-1"
                    />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </main>
  );
}
