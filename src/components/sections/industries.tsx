"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { SectionHeading } from "@/components/ui/section-heading";
import { industries } from "@/data/industries";

// Pulled directly from src/data/industries.ts (the same data that powers
// each /industries/[slug] page) rather than a separately maintained list,
// so this grid can never drift out of sync with what pages actually
// exist. Hub pages (isHub: true) are reachable from primary nav instead,
// and excludeFromGrid pages (e.g. Restoration Web Design — a service
// angle, not a customer vertical) are reachable via contextual links
// elsewhere — this grid shows only the 10 individual customer verticals.
const industryCards = industries.filter(
  (industry) => !industry.isHub && !industry.excludeFromGrid
);

export function Industries() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section id="industries" className="relative overflow-hidden pt-10 pb-10 lg:pt-16 lg:pb-16">
      {/* Subtle Background Glow */}
      <div className="absolute right-0 top-1/2 h-[30rem] w-[30rem] -translate-y-1/2 rounded-full bg-accent-deep/5 blur-[100px] pointer-events-none" aria-hidden />

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeading
          eyebrow="Industries"
          title="Built for restoration & emergency service businesses"
          description="Two categories, one shared fundamental: customers search Google because something has already gone wrong, and they call whoever shows up first."
        />

        <div className="mt-16 flex flex-wrap justify-center gap-4 lg:gap-6">
          {industryCards.map((industry, index) => {
            const Icon = industry.icon;
            return (
              <motion.div
                key={industry.slug}
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{
                  duration: 0.5,
                  delay: prefersReducedMotion ? 0 : (index % 5) * 0.08,
                  ease: "easeOut",
                }}
              >
                <Link
                  href={`/industries/${industry.slug}`}
                  className="group flex items-center gap-4 rounded-full bg-ink py-3 pl-3 pr-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl [box-shadow:var(--shadow-neo-flat)] border-t border-white/20 hover:[box-shadow:var(--shadow-neo-pressed)]"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-accent-deep/10 text-accent-bright transition-transform duration-300 group-hover:scale-110 group-hover:bg-accent/20 [box-shadow:var(--shadow-neo-pressed)]">
                    <Icon size={18} aria-hidden />
                  </div>
                  <span className="font-display text-sm font-bold text-ink-foreground transition-colors group-hover:text-accent-deep">
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
