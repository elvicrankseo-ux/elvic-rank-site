"use client";

import { motion, useReducedMotion } from "framer-motion";
import {
  ClipboardCheck,
  Compass,
  Rocket,
  Search,
  BarChart3,
  type LucideIcon,
} from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";

const steps: { number: string; icon: LucideIcon; title: string; description: string }[] = [
  {
    number: "01",
    icon: ClipboardCheck,
    title: "Free SEO Audit",
    description:
      "We crawl your site, analyze competitors, and map exactly where you're losing visibility — and why.",
  },
  {
    number: "02",
    icon: Compass,
    title: "Strategy Session",
    description:
      "A no-templates roadmap built around your services, service area, and buyer intent — walked through with you, not just emailed over.",
  },
  {
    number: "03",
    icon: Rocket,
    title: "Technical Implementation",
    description:
      "Technical fixes, site structure, and Google Business Profile work — done for you, not handed to you as homework.",
  },
  {
    number: "04",
    icon: Search,
    title: "SEO Optimization",
    description:
      "On-page content, internal linking, and metadata tuned to the keywords that actually drive booked jobs.",
  },
  {
    number: "05",
    icon: BarChart3,
    title: "Growth Tracking",
    description:
      "Weekly reporting and monthly strategy calls. We double down on what's working and cut what isn't.",
  },
];

export function Process() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section id="process" className="bg-paper py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeading
          eyebrow="Our process"
          title="From audit to ranked, without the guesswork"
          description="Five steps, one accountable partner. No black box, no vanishing after the contract's signed."
        />

        {/* Desktop: horizontal timeline. justify-between flush-aligns the
            first/last item to the row edges, so the line's inset only
            needs to match half of an item's width (w-48 = 192px -> 96px
            = left-24/right-24) to land exactly on each centered badge,
            regardless of how the middle gaps distribute or how many
            items there are. */}
        <div className="relative mt-16 hidden lg:flex lg:justify-between lg:gap-6">
          <div
            aria-hidden
            className="absolute left-24 right-24 top-6 h-px bg-paper-border"
          />
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{
                  duration: 0.5,
                  delay: prefersReducedMotion ? 0 : index * 0.1,
                  ease: [0.16, 1, 0.3, 1] as const,
                }}
                className="relative flex w-48 flex-col items-center text-center"
              >
                <span className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full border-2 border-accent-deep bg-paper font-display text-lg font-medium text-accent-deep">
                  {step.number}
                </span>
                <Icon size={20} className="mt-5 text-accent-deep" aria-hidden />
                <h3 className="mt-3 font-display text-lg font-medium text-foreground">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {step.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Mobile / tablet: vertical timeline */}
        <div className="mt-14 flex flex-col lg:hidden">
          {steps.map((step, index) => {
            const Icon = step.icon;
            const isLast = index === steps.length - 1;
            return (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{
                  duration: 0.5,
                  delay: prefersReducedMotion ? 0 : index * 0.08,
                  ease: [0.16, 1, 0.3, 1] as const,
                }}
                className="flex gap-5"
              >
                <div className="flex flex-col items-center">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border-2 border-accent-deep bg-paper font-display text-lg font-medium text-accent-deep">
                    {step.number}
                  </span>
                  {!isLast && (
                    <span aria-hidden className="mt-2 w-px flex-1 bg-paper-border" />
                  )}
                </div>
                <div className={isLast ? "pb-0" : "pb-10"}>
                  <Icon size={18} className="text-accent-deep" aria-hidden />
                  <h3 className="mt-2 font-display text-lg font-medium text-foreground">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
