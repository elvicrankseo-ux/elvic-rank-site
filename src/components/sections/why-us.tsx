"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Check, X } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
import { siteConfig } from "@/config/site";

const comparisons = [
  {
    typical: "12-month lock-in contracts",
    elvic: "No long-term contracts — you stay because it works",
  },
  {
    typical: "Vague monthly PDF reports",
    elvic: "Weekly, plain-English updates you'll actually read",
  },
  {
    typical: "Cookie-cutter SEO templates",
    elvic: "Strategy built around your trade and service area",
  },
  {
    typical: "Bulk, risky link building",
    elvic: "White-hat links from relevant, real sites",
  },
  {
    typical: "Account manager rotates every few months",
    elvic: "Direct access to the person actually doing the work",
  },
  {
    typical: "Chases vanity keyword rankings",
    elvic: "Optimizes for booked jobs, not just rankings",
  },
];

export function WhyUs() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section id="why-us" className="bg-paper py-20 lg:py-28">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <SectionHeading
          eyebrow="Why Elvic Rank"
          title="Built different from typical SEO agencies"
          description="Most agencies are built to retain you. We're built to earn you — one ranking, one booked job at a time."
        />

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] as const }}
            className="rounded-2xl border border-paper-border bg-paper-muted p-8"
          >
            <p className="text-sm font-medium uppercase tracking-wider text-muted">
              Typical SEO agencies
            </p>
            <ul className="mt-6 space-y-5">
              {comparisons.map((item) => (
                <li key={item.typical} className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-paper text-muted">
                    <X size={12} aria-hidden />
                  </span>
                  <span className="text-sm leading-relaxed text-muted">
                    {item.typical}
                  </span>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{
              duration: 0.5,
              delay: prefersReducedMotion ? 0 : 0.1,
              ease: [0.16, 1, 0.3, 1] as const,
            }}
            className="rounded-2xl border border-ink-border bg-ink p-8 shadow-2xl shadow-ink/20"
          >
            <p className="text-sm font-medium uppercase tracking-wider text-accent-bright">
              {siteConfig.name}
            </p>
            <ul className="mt-6 space-y-5">
              {comparisons.map((item) => (
                <li key={item.elvic} className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-accent text-accent-foreground">
                    <Check size={12} aria-hidden />
                  </span>
                  <span className="text-sm leading-relaxed text-ink-foreground">
                    {item.elvic}
                  </span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
