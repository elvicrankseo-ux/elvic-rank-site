"use client";

import { motion, useReducedMotion } from "framer-motion";
import { SectionHeading } from "@/components/ui/section-heading";

/**
 * TODO(elvic): replace with real, named case studies (Akanaby Logistics is
 * a confirmed client) as engagements complete and results are verified.
 * These are illustrative industry examples, not claims about a specific
 * business — keep the disclosure line below until real data lands.
 */
const caseStudies = [
  {
    industry: "Home Services",
    title: "From page 3 to the map pack in 90 days",
    description:
      "A residential HVAC company was invisible outside their own zip code. We rebuilt their Google Business Profile, fixed sitewide technical debt, and mapped content to every service area they actually cover.",
    stats: [
      { value: "+165%", label: "Organic traffic" },
      { value: "Top 3", label: "Map pack ranking" },
      { value: "+48", label: "Monthly calls" },
    ],
  },
  {
    industry: "Towing & Logistics",
    title: "Turning 2am emergencies into dispatched calls",
    description:
      "A towing and logistics company needed to win “near me” searches around the clock, not just during business hours. We restructured service-area pages and closed the technical gaps quietly blocking indexation.",
    stats: [
      { value: "+210%", label: "Local search visibility" },
      { value: "4.9★", label: "Review rating" },
      { value: "-62%", label: "Cost per lead" },
    ],
  },
  {
    industry: "Legal & Professional",
    title: "Outranking firms with 10x the marketing budget",
    description:
      "A boutique law firm was competing against national brands for the same keywords. We narrowed focus to practice-area and city-specific pages built around real buyer intent.",
    stats: [
      { value: "+140%", label: "Qualified leads" },
      { value: "Page 1", label: "Priority keywords" },
      { value: "6 mo.", label: "Time to results" },
    ],
  },
];

export function CaseStudies() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section id="case-studies" className="bg-paper-muted py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeading
          eyebrow="Case studies"
          title="What this process is built to produce"
          description="These examples illustrate the kind of results our process is designed to produce. Full, named client case studies are being published as engagements complete."
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {caseStudies.map((study, index) => (
            <motion.article
              key={study.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{
                duration: 0.5,
                delay: prefersReducedMotion ? 0 : index * 0.1,
                ease: [0.16, 1, 0.3, 1] as const,
              }}
              className="flex flex-col overflow-hidden rounded-2xl border border-paper-border bg-paper"
            >
              <div
                aria-hidden
                className="h-1 bg-gradient-to-r from-accent to-accent-bright"
              />
              <div className="flex flex-1 flex-col p-8">
                <div className="flex items-center justify-between">
                  <span className="inline-flex items-center rounded-full border border-paper-border px-3 py-1 text-xs font-medium text-muted">
                    {study.industry}
                  </span>
                  <span className="text-xs font-medium uppercase tracking-wider text-muted-dark">
                    Sample results
                  </span>
                </div>

                <h3 className="mt-5 font-display text-xl font-medium leading-snug text-foreground">
                  {study.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">
                  {study.description}
                </p>

                <div className="mt-6 grid grid-cols-3 divide-x divide-paper-border border-t border-paper-border pt-5">
                  {study.stats.map((stat) => (
                    <div key={stat.label} className="px-2 text-center first:pl-0 last:pr-0">
                      <p className="font-display text-xl font-medium text-accent-deep">
                        {stat.value}
                      </p>
                      <p className="mt-1 text-xs leading-tight text-muted">
                        {stat.label}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
