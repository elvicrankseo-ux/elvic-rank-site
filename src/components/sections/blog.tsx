"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
import { Button } from "@/components/ui/button";
import { blogPosts } from "@/data/blog";

const featuredPosts = [...blogPosts]
  .sort((a, b) => new Date(b.publishDate).getTime() - new Date(a.publishDate).getTime())
  .slice(0, 3);

export function Blog() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section id="blog" className="relative overflow-hidden pt-4 pb-10 lg:pt-8 lg:pb-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeading
          eyebrow="From the blog"
          title="SEO knowledge, not gatekeeping"
          description="Practical, no-fluff guides for local service businesses — no gated content, no email wall."
        />

        <div className="mt-10 lg:mt-14 grid gap-6 lg:grid-cols-12">
          {/* Main Feature (First Post) */}
          {featuredPosts[0] && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5 }}
              className="lg:col-span-7"
            >
              <Link
                href={`/blog/${featuredPosts[0].slug}`}
                className="group flex h-full flex-col justify-end overflow-hidden rounded-3xl bg-ink [box-shadow:var(--shadow-neo-flat)] border-t border-white/20 p-8 lg:p-12 transition-transform duration-500 hover:-translate-y-2"
              >
                <div className="mb-auto flex items-center justify-between pb-8">
                  <span className="inline-flex items-center rounded-full bg-accent/10 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-accent-deep border border-accent/20">
                    {featuredPosts[0].category}
                  </span>
                  <span className="rounded-full bg-paper px-3 py-1 text-xs font-bold text-muted-dark [box-shadow:var(--shadow-neo-pressed)]">
                    {featuredPosts[0].readingTime}
                  </span>
                </div>
                
                <h3 className="mt-8 font-display text-3xl font-bold leading-tight text-foreground sm:text-4xl group-hover:text-accent-deep transition-colors duration-300">
                  {featuredPosts[0].title}
                </h3>
                <p className="mt-6 text-lg leading-relaxed text-muted-dark max-w-2xl">
                  {featuredPosts[0].excerpt}
                </p>
                
                <div className="mt-8 flex items-center gap-2 text-sm font-bold text-accent-deep">
                  <span className="relative overflow-hidden">
                    Read full article
                    <span className="absolute bottom-0 left-0 h-0.5 w-full -translate-x-full bg-accent-deep transition-transform duration-300 group-hover:translate-x-0" />
                  </span>
                  <ArrowRight size={16} aria-hidden className="transition-transform duration-300 group-hover:translate-x-2" />
                </div>
              </Link>
            </motion.div>
          )}

          {/* Side Stack (Remaining Posts) */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            {featuredPosts.slice(1, 3).map((post, index) => (
              <motion.div
                key={post.slug}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{
                  duration: 0.5,
                  delay: prefersReducedMotion ? 0 : 0.1 + index * 0.1,
                }}
                className="flex-1"
              >
                <Link
                  href={`/blog/${post.slug}`}
                  className="group flex h-full flex-col rounded-3xl bg-paper p-8 [box-shadow:var(--shadow-neo-flat)] transition-transform duration-500 hover:-translate-y-1 hover:shadow-xl border border-black/5"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold uppercase tracking-wider text-accent">
                      {post.category}
                    </span>
                    <span className="text-xs font-medium text-muted">
                      {post.readingTime}
                    </span>
                  </div>
                  <h3 className="mt-4 font-display text-xl font-bold leading-snug text-foreground group-hover:text-accent-deep transition-colors duration-300">
                    {post.title}
                  </h3>
                  <p className="mt-3 line-clamp-2 text-sm leading-relaxed text-muted-dark">
                    {post.excerpt}
                  </p>
                  <div className="mt-auto pt-6 flex items-center gap-2 text-sm font-bold text-foreground group-hover:text-accent-deep transition-colors duration-300">
                    Read article
                    <ArrowRight size={16} aria-hidden className="transition-transform duration-300 group-hover:translate-x-1" />
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] as const }}
          className="mt-14 flex justify-center"
        >
          <Button href="/blog" variant="outline" size="lg">
            View All Articles
            <ArrowRight size={18} aria-hidden />
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
