"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { Search, ShieldCheck, TrendingUp, type LucideIcon } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";

/**
 * The "how we help" framework from Elvic Rank's core positioning: Get
 * Found → Get Chosen → Get More Jobs. Sits right after the Hero, before
 * the detailed 14-service grid, as the high-level version of the same
 * story the Services section tells in full — deliberately compact (3
 * cards, not another long grid) so it doesn't duplicate that section's
 * job, just frames it.
 *
 * Each item optionally links to the specific page it refers to (Sprint
 * 01, Phase 5) — only where a real, direct page exists. Items without a
 * clear match (e.g. "Trust Signals") stay plain text rather than being
 * forced to link somewhere approximate.
 */
const pillars: {
  icon: LucideIcon;
  number: string;
  title: string;
  description: string;
  items: { label: string; href?: string }[];
}[] = [
  {
    icon: Search,
    number: "01",
    title: "Get Found",
    description:
      "Show up when someone urgently searches Google for what you do.",
    items: [
      { label: "GBP & Google Maps", href: "/services/local-seo-google-business-profile" },
      { label: "Restoration SEO", href: "/industries/restoration-seo" },
      { label: "Emergency Service SEO", href: "/industries/emergency-service-seo" },
    ],
  },
  {
    icon: ShieldCheck,
    number: "02",
    title: "Get Chosen",
    description:
      "Win the call once they land on your profile or your site.",
    items: [
      { label: "Website Design", href: "/services/website-design" },
      { label: "Restoration Web Design", href: "/industries/restoration-web-design" },
      { label: "Conversion Optimization", href: "/services/conversion-rate-optimization" },
    ],
  },
  {
    icon: TrendingUp,
    number: "03",
    title: "Get More Jobs",
    description:
      "Know exactly what's working, and keep compounding it.",
    items: [
      { label: "Tracking" },
      { label: "Reporting", href: "/services/seo-reporting-analytics" },
      { label: "Growth Strategy" },
    ],
  },
];

export function GrowthPillars() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section className="relative overflow-hidden bg-paper-muted pt-10 pb-24 lg:pt-16 lg:pb-32">
      {/* Background Glows */}
      <div className="absolute -left-40 top-20 h-[30rem] w-[30rem] rounded-full bg-accent/10 blur-[100px]" aria-hidden />
      <div className="absolute right-0 bottom-0 h-[40rem] w-[40rem] rounded-full bg-accent-deep/5 blur-[120px]" aria-hidden />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8 z-10">
        <SectionHeading
          eyebrow="How we help"
          title="Found, chosen, and booked — in that order"
          description="Rankings alone don't pay the bills. Every piece of work we do fits into one of three stages, and every stage feeds the next."
        />

        <div className="mt-20 grid gap-10 lg:grid-cols-3 perspective-[2000px]">
          {pillars.map((pillar, index) => {
            const Icon = pillar.icon;
            // Create a staggered layout
            const translateY = index === 1 ? "lg:translate-y-12" : index === 2 ? "lg:translate-y-24" : "";

            return (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, rotateX: 20, y: 50 }}
                whileInView={{ opacity: 1, rotateX: 0, y: 0 }}
                whileHover={{ y: -10, rotateX: 5, rotateY: -5 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{
                  duration: 0.7,
                  delay: prefersReducedMotion ? 0 : index * 0.2,
                  ease: "easeOut",
                }}
                className={`relative overflow-hidden rounded-3xl bg-ink p-8 [box-shadow:var(--shadow-neo-flat)] border-t border-white/20 [transform-style:preserve-3d] ${translateY}`}
              >
                {/* Massive watermark number */}
                <div className="absolute -bottom-6 -right-6 text-[12rem] font-black text-white/[0.03] leading-none select-none pointer-events-none" aria-hidden>
                  {pillar.number}
                </div>

                <div className="relative z-10 flex flex-col h-full">
                  <div className="flex items-center justify-between mb-8">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-accent-deep/20 text-accent-bright [box-shadow:var(--shadow-neo-pressed)]">
                      <Icon size={28} aria-hidden />
                    </div>
                    <div className="h-2 w-2 rounded-full bg-accent-bright animate-pulse" aria-hidden />
                  </div>

                  <h3 className="font-display text-2xl font-bold text-ink-foreground">
                    {pillar.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-dark min-h-[3rem]">
                    {pillar.description}
                  </p>

                  <ul className="mt-8 space-y-4 pt-6 border-t border-ink-border flex-grow">
                    {pillar.items.map((item) => (
                      <li
                        key={item.label}
                        className="flex items-center gap-3 text-sm font-semibold text-ink-foreground"
                      >
                        <div className="flex h-6 w-6 items-center justify-center rounded-full bg-paper [box-shadow:var(--shadow-neo-sm)]">
                          <div className="h-1.5 w-1.5 rounded-full bg-accent-deep" aria-hidden />
                        </div>
                        {item.href ? (
                          <Link href={item.href} className="transition-colors hover:text-accent-bright hover:underline underline-offset-4 decoration-accent/30">
                            {item.label}
                          </Link>
                        ) : (
                          item.label
                        )}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
