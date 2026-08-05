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

  const relatedPosts = blogPosts.filter((p) => p.slug !== post.slug).slice(0, 2);

  const jsonLd = [
    getArticleSchema(post),
    getBreadcrumbSchema([
      { name: "Home", path: "/" },
      { name: "Blog", path: "/blog" },
      { name: post.title, path: `/blog/${post.slug}` },
    ]),
  ];

  return (
    <main className="flex-1">
      {jsonLd.map((schema) => (
        <script
          key={schema["@type"]}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}

      <article>
        <header className="bg-paper py-16 lg:py-20">
          <div className="mx-auto max-w-3xl px-6 lg:px-8">
            <Breadcrumbs
              items={[
                { name: "Home", href: "/" },
                { name: "Blog", href: "/blog" },
                { name: post.title },
              ]}
            />
            <span className="mt-6 inline-flex items-center rounded-full border border-paper-border px-3 py-1 text-xs font-medium text-muted">
              {post.category}
            </span>
            <h1 className="mt-4 font-display text-3xl font-medium leading-[1.15] tracking-tight text-foreground sm:text-4xl">
              {post.title}
            </h1>
            <div className="mt-6 flex items-center gap-5 text-sm text-muted">
              <span className="flex items-center gap-1.5">
                <Calendar size={14} aria-hidden />
                <time dateTime={post.publishDate}>{formatDate(post.publishDate)}</time>
              </span>
              <span className="flex items-center gap-1.5">
                <Clock size={14} aria-hidden />
                {post.readingTime}
              </span>
            </div>
          </div>
        </header>

        <div className="bg-paper py-4">
          <div className="mx-auto max-w-3xl px-6 lg:px-8">
            <ArticleContent blocks={post.content} />
          </div>
        </div>
      </article>

      <section className="bg-paper py-12">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          <div className="flex flex-col items-center gap-5 rounded-2xl border border-paper-border bg-paper-muted p-8 text-center">
            <h2 className="font-display text-xl font-medium text-foreground">
              See where your own site stands
            </h2>
            <p className="max-w-md text-sm text-muted">
              A free SEO audit shows you exactly what&apos;s helping — and
              what&apos;s quietly costing you rankings.
            </p>
            <Button href={siteConfig.cta.primary.href} variant="accent" size="lg">
              {siteConfig.cta.primary.label}
              <ArrowRight size={18} aria-hidden />
            </Button>
          </div>
        </div>
      </section>

      {relatedPosts.length > 0 && (
        <section className="bg-paper-muted py-16 lg:py-20">
          <div className="mx-auto max-w-3xl px-6 lg:px-8">
            <h2 className="font-display text-xl font-medium text-foreground">
              More from the blog
            </h2>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {relatedPosts.map((related) => (
                <Link
                  key={related.slug}
                  href={`/blog/${related.slug}`}
                  className="group flex flex-col rounded-2xl border border-paper-border bg-paper p-6 transition-colors hover:border-accent/40"
                >
                  <span className="text-xs font-medium uppercase tracking-wider text-muted-dark">
                    {related.category}
                  </span>
                  <span className="mt-2 text-sm font-medium text-foreground">
                    {related.title}
                  </span>
                  <span className="mt-3 flex items-center gap-1 text-xs font-medium text-accent-deep">
                    Read article
                    <ArrowRight
                      size={12}
                      aria-hidden
                      className="transition-transform duration-200 group-hover:translate-x-1"
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
