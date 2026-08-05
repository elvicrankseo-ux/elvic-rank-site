import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import { blogPosts } from "@/data/blog";
import { buildMetadata } from "@/lib/metadata";
import { getBreadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = buildMetadata({
  title: "SEO Blog & Resources",
  description:
    "Practical, no-fluff SEO guides for local service businesses — technical SEO, local SEO, Google Business Profile, and website performance.",
  path: "/blog",
});

export default function BlogIndexPage() {
  const jsonLd = getBreadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "Blog", path: "/blog" },
  ]);

  const sortedPosts = [...blogPosts].sort(
    (a, b) => new Date(b.publishDate).getTime() - new Date(a.publishDate).getTime()
  );

  return (
    <main className="flex-1">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <section className="bg-paper py-16 lg:py-20">
        <div className="mx-auto max-w-5xl px-6 lg:px-8">
          <Breadcrumbs items={[{ name: "Home", href: "/" }, { name: "Blog" }]} />
          <h1 className="mt-6 font-display text-4xl font-medium leading-[1.1] tracking-tight text-foreground sm:text-5xl">
            SEO Blog & Resources
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted">
            Practical, no-fluff guides for local service businesses — technical
            SEO, local SEO, Google Business Profile, and everything in
            between.
          </p>
        </div>
      </section>

      <section className="bg-paper-muted py-16 lg:py-20">
        <div className="mx-auto max-w-5xl px-6 lg:px-8">
          <div className="grid gap-6 sm:grid-cols-2">
            {sortedPosts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group flex flex-col rounded-2xl border border-paper-border bg-paper p-8 transition-colors hover:border-accent/40"
              >
                <div className="flex items-center gap-3 text-xs font-medium uppercase tracking-wider text-muted-dark">
                  <span className="rounded-full border border-paper-border px-3 py-1 text-muted">
                    {post.category}
                  </span>
                  <span>{post.readingTime}</span>
                </div>
                <h2 className="mt-4 font-display text-xl font-medium leading-snug text-foreground">
                  {post.title}
                </h2>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">
                  {post.excerpt}
                </p>
                <span className="mt-6 flex items-center gap-1.5 text-sm font-medium text-accent-deep">
                  Read article
                  <ArrowRight
                    size={15}
                    aria-hidden
                    className="transition-transform duration-200 group-hover:translate-x-1"
                  />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
