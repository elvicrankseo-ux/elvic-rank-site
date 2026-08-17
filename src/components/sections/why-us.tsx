"use client";

import { motion, useReducedMotion } from "framer-motion";
import {
  BarChart3,
  Compass,
  MapPinCheck,
  Search,
  MessageCircle,
  TrendingUp,
  type LucideIcon,
} from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";

const reasons: { icon: LucideIcon; title: string; description: string }[] = [
  {
    icon: Compass,
    title: "Restoration & Emergency Service Specialists",
    description:
      "Not a generic agency that happens to mention restoration — we build every strategy around how customers search when something has already gone wrong.",
  },
  {
    icon: BarChart3,
    title: "Transparent Reporting",
    description:
      "Weekly, plain-English reports tied to rankings, local visibility, and booked jobs — never a black box you have to decode.",
  },
  {
    icon: MapPinCheck,
    title: "Google Business Profile Experts",
    description:
      "Deep, hands-on GBP optimization and ongoing management — the single highest-leverage lever for a business that lives or dies by Google Maps visibility.",
  },
  {
    icon: Search,
    title: "Technical SEO Specialists",
    description:
      "Core Web Vitals, crawl health, and mobile speed fixed by people who actually read the crawl reports — critical when a customer is searching on a weak connection mid-emergency.",
  },
  {
    icon: MessageCircle,
    title: "Fast Communication",
    description:
      "Real answers within one business day — not a support ticket queue you disappear into.",
  },
  {
    icon: TrendingUp,
    title: "Long-Term Growth",
    description:
      "SEO built to compound over months and years, not chase a short-term spike that fades the moment you stop paying.",
  },
];

export function WhyUs() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section id="why-us" className="bg-paper py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeading
          eyebrow="Why Elvic Rank"
          title="Why restoration & emergency service companies choose Elvic Rank"
          description="Not a generic marketing checklist — six things that actually change the outcome of an SEO engagement for a business that depends on urgent, local Google searches."
        />

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {reasons.map((reason, index) => {
            const Icon = reason.icon;
            return (
              <motion.div
                key={reason.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{
                  duration: 0.5,
                  delay: prefersReducedMotion ? 0 : (index % 3) * 0.08,
                  ease: [0.16, 1, 0.3, 1] as const,
                }}
                className="rounded-2xl border border-paper-border bg-paper-muted p-8"
              >
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10 text-accent-deep">
                  <Icon size={22} aria-hidden />
                </div>
                <h3 className="mt-6 font-display text-lg font-medium text-foreground">
                  {reason.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">
                  {reason.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
