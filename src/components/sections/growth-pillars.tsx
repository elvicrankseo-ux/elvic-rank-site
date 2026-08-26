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
    <section className="bg-paper py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeading
          eyebrow="How we help"
          title="Found, chosen, and booked — in that order"
          description="Rankings alone don't pay the bills. Every piece of work we do fits into one of three stages, and every stage feeds the next."
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {pillars.map((pillar, index) => {
            const Icon = pillar.icon;
            return (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{
                  duration: 0.5,
                  delay: prefersReducedMotion ? 0 : index * 0.1,
                  ease: [0.16, 1, 0.3, 1] as const,
                }}
                className="rounded-2xl border border-paper-border bg-paper-muted p-8"
              >
                <div className="flex items-center justify-between">
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10 text-accent-deep">
                    <Icon size={22} aria-hidden />
                  </span>
                  <span className="font-display text-sm font-medium text-muted" aria-hidden>
                    {pillar.number}
                  </span>
                </div>
                <h3 className="mt-6 font-display text-xl font-medium text-foreground">
                  {pillar.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {pillar.description}
                </p>
                <ul className="mt-6 space-y-2 border-t border-paper-border pt-5">
                  {pillar.items.map((item) => (
                    <li
                      key={item.label}
                      className="flex items-center gap-2 text-sm font-medium text-foreground"
                    >
                      <span className="h-1 w-1 rounded-full bg-accent" aria-hidden />
                      {item.href ? (
                        <Link href={item.href} className="transition-colors hover:text-accent-deep">
                          {item.label}
                        </Link>
                      ) : (
                        item.label
                      )}
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
