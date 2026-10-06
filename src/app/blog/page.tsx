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
    <main className="flex-1 relative pb-24 lg:pb-32">
      {/* Subtle Background Glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute top-[10%] left-1/2 -translate-x-1/2 -z-10 h-[40rem] w-[40rem] rounded-full bg-accent/15 blur-[120px]"
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="mx-auto max-w-7xl px-6 pt-24 sm:pt-32 lg:px-8">
        <div className="mx-auto max-w-3xl text-center mb-20">
          <Breadcrumbs items={[{ name: "Home", href: "/" }, { name: "Blog" }]} />
          <h1 className="mt-8 font-display text-5xl font-bold tracking-tight text-foreground sm:text-7xl">
            SEO Blog & Resources
          </h1>
          <p className="mt-8 text-2xl leading-relaxed text-muted-dark font-medium">
            Practical, no-fluff guides for local service businesses — technical
            SEO, local SEO, Google Business Profile, and everything in
            between.
          </p>
        </div>

        <div className="mx-auto max-w-5xl">
          <div className="grid gap-8 sm:grid-cols-2">
            {sortedPosts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group flex flex-col bg-ink rounded-3xl p-10 transition-all duration-300 [box-shadow:var(--shadow-neo-flat)] hover:[box-shadow:var(--shadow-neo-pressed)]"
              >
                <div className="flex items-center gap-3 text-xs font-bold uppercase tracking-wider text-muted-dark">
                  <span className="rounded-full bg-accent-deep/10 text-accent-deep px-4 py-1.5 [box-shadow:var(--shadow-neo-pressed)]">
                    {post.category}
                  </span>
                  <span>{post.readingTime}</span>
                </div>
                <h2 className="mt-6 font-display text-2xl font-bold leading-snug text-foreground">
                  {post.title}
                </h2>
                <p className="mt-4 flex-1 text-base leading-relaxed text-muted-dark">
                  {post.excerpt}
                </p>
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
      </div>
    </main>
  );
}
