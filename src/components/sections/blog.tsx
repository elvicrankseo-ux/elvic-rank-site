"use client";

import { motion, useReducedMotion } from "framer-motion";
import { PenLine } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";

/**
 * TODO(elvic): no CMS/blog route exists yet. These are planned content
 * pillars, not published posts — no fake dates, authors, or read times,
 * since that would misrepresent an active blog we don't have yet. Once
 * real posts exist, this becomes a live /blog index with real teasers.
 */
const topics = [
  {
    category: "Local SEO",
    title: "How Google actually ranks the map pack in 2026",
    description:
      "The ranking factors that matter for local service businesses — and the ones that are a waste of your time.",
  },
  {
    category: "Technical SEO",
    title: "The Core Web Vitals checklist for service businesses",
    description:
      "A practical, non-developer-jargon walkthrough of what to fix first, and why it affects rankings.",
  },
  {
    category: "Content Strategy",
    title: "Why \"near me\" keywords are the wrong target",
    description:
      "The search intent shift local businesses are missing, and what to optimize for instead.",
  },
];

export function Blog() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section id="blog" className="bg-paper py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeading
          eyebrow="From the blog"
          title="SEO knowledge, not gatekeeping"
          description="We're building out a library of practical, no-fluff guides for local service businesses. Here's what's coming first."
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {topics.map((topic, index) => (
            <motion.article
              key={topic.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{
                duration: 0.5,
                delay: prefersReducedMotion ? 0 : index * 0.1,
                ease: [0.16, 1, 0.3, 1] as const,
              }}
              className="flex flex-col rounded-2xl border border-paper-border bg-paper-muted p-8"
            >
              <div className="flex items-center justify-between">
                <span className="inline-flex items-center rounded-full border border-paper-border bg-paper px-3 py-1 text-xs font-medium text-muted">
                  {topic.category}
                </span>
                <span className="text-xs font-medium uppercase tracking-wider text-muted-dark">
                  Coming soon
                </span>
              </div>
              <h3 className="mt-5 font-display text-lg font-medium leading-snug text-foreground">
                {topic.title}
              </h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">
                {topic.description}
              </p>
              <div className="mt-6 flex items-center gap-2 border-t border-paper-border pt-5 text-sm font-medium text-muted-dark">
                <PenLine size={15} aria-hidden />
                In progress
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
