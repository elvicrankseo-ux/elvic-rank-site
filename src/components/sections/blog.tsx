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
    <section id="blog" className="bg-paper py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeading
          eyebrow="From the blog"
          title="SEO knowledge, not gatekeeping"
          description="Practical, no-fluff guides for local service businesses — no gated content, no email wall."
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {featuredPosts.map((post, index) => (
            <motion.div
              key={post.slug}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{
                duration: 0.5,
                delay: prefersReducedMotion ? 0 : index * 0.1,
                ease: [0.16, 1, 0.3, 1] as const,
              }}
            >
              <Link
                href={`/blog/${post.slug}`}
                className="group flex h-full flex-col rounded-2xl border border-paper-border bg-paper-muted p-8 transition-colors hover:border-accent/40"
              >
                <div className="flex items-center justify-between">
                  <span className="inline-flex items-center rounded-full border border-paper-border bg-paper px-3 py-1 text-xs font-medium text-muted">
                    {post.category}
                  </span>
                  <span className="text-xs font-medium text-muted-dark">
                    {post.readingTime}
                  </span>
                </div>
                <h3 className="mt-5 font-display text-lg font-medium leading-snug text-foreground">
                  {post.title}
                </h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">
                  {post.excerpt}
                </p>
                <span className="mt-6 flex items-center gap-1.5 border-t border-paper-border pt-5 text-sm font-medium text-accent-deep">
                  Read article
                  <ArrowRight
                    size={15}
                    aria-hidden
                    className="transition-transform duration-200 group-hover:translate-x-1"
                  />
                </span>
              </Link>
            </motion.div>
          ))}
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
