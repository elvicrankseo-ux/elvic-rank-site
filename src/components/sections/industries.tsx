"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { SectionHeading } from "@/components/ui/section-heading";
import { industries } from "@/data/industries";

// Pulled directly from src/data/industries.ts (the same data that powers
// each /industries/[slug] page) rather than a separately maintained list,
// so this grid can never drift out of sync with what pages actually
// exist. Hub pages (isHub: true) are reachable from primary nav instead —
// this grid shows the 10 individual verticals.
const industryCards = industries.filter((industry) => !industry.isHub);

export function Industries() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section id="industries" className="bg-paper-muted py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeading
          eyebrow="Industries"
          title="Built for restoration & emergency service businesses"
          description="Two categories, one shared fundamental: customers search Google because something has already gone wrong, and they call whoever shows up first."
        />

        <div className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
          {industryCards.map((industry, index) => {
            const Icon = industry.icon;
            return (
              <motion.div
                key={industry.slug}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{
                  duration: 0.5,
                  delay: prefersReducedMotion ? 0 : (index % 5) * 0.06,
                  ease: [0.16, 1, 0.3, 1] as const,
                }}
              >
                <Link
                  href={`/industries/${industry.slug}`}
                  className="flex flex-col items-center gap-3 rounded-2xl border border-paper-border bg-paper p-6 text-center transition-colors hover:border-accent/40"
                >
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10 text-accent-deep">
                    <Icon size={22} aria-hidden />
                  </span>
                  <span className="text-sm font-medium text-foreground">
                    {industry.label}
                  </span>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
