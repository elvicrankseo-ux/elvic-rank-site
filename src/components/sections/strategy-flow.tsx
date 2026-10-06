"use client";

import { motion, useReducedMotion } from "framer-motion";
import { SectionHeading } from "@/components/ui/section-heading";
import { ArrowDown } from "lucide-react";
import { cn } from "@/lib/utils";

const flowSteps = [
  {
    phase: "Build",
    services: "Web Development",
    description: "Create a fast, conversion-focused digital foundation.",
  },
  {
    phase: "Optimize",
    services: "SEO + Local SEO",
    description: "Ensure your business ranks where buyers are searching.",
  },
  {
    phase: "Expand",
    services: "GEO + AI Visibility",
    description: "Establish authority across modern AI search engines.",
  },
  {
    phase: "Reach",
    services: "Google Ads + Meta Ads",
    description: "Capture immediate high-intent traffic and build awareness.",
  },
  {
    phase: "Engage",
    services: "Content + Social Media",
    description: "Build trust and stay top-of-mind with your audience.",
  },
];

export function StrategyFlow() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section className="relative overflow-hidden py-20 lg:py-28 bg-transparent">
      <div className="relative z-10 mx-auto max-w-4xl px-6 lg:px-8 text-center">
        <SectionHeading
          eyebrow="The Ecosystem"
          title="One Digital Strategy. Multiple Growth Channels."
          description="We don't just offer isolated tactics. We build a complete digital growth system that moves your business from foundation to scale."
        />

        <div className="mt-16 flex flex-col lg:flex-row flex-wrap justify-center items-center lg:items-stretch gap-y-6 lg:gap-y-8 lg:gap-x-4">
          {flowSteps.map((step, index) => (
            <div key={step.phase} className="flex flex-col lg:flex-row items-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: prefersReducedMotion ? 0 : index * 0.1 }}
                className={cn(
                  "relative w-full sm:w-[320px] lg:w-[260px] h-full rounded-3xl p-6 text-center border [box-shadow:var(--shadow-neo-flat)] transition-all",
                  "bg-paper border-white/20 flex flex-col justify-center"
                )}
              >
                <span className="text-xs font-bold uppercase tracking-widest text-accent-deep mb-2 block">
                  {step.phase}
                </span>
                <h3 className="font-display text-lg font-bold text-ink-foreground mb-2">
                  {step.services}
                </h3>
                <p className="text-sm text-muted-dark font-medium">
                  {step.description}
                </p>
              </motion.div>

              {/* Arrow Connector */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.4, delay: index * 0.1 + 0.2 }}
                className="lg:w-8 h-8 lg:h-px bg-transparent my-2 lg:my-0 flex flex-col lg:flex-row items-center justify-center overflow-visible"
              >
                <div className="bg-ink rounded-full p-1 border border-ink-border">
                  <ArrowDown size={14} className="text-accent-bright lg:-rotate-90" />
                </div>
              </motion.div>
            </div>
          ))}

          {/* Final Growth Step */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="w-full sm:w-[350px] lg:w-[300px] rounded-3xl bg-accent-deep p-6 text-center shadow-[0_0_40px_rgba(37,99,235,0.3)] border border-accent-bright/50 flex flex-col justify-center"
          >
            <span className="text-xs font-bold uppercase tracking-widest text-white/80 mb-2 block">
              Grow
            </span>
            <h3 className="font-display text-xl font-bold text-white mb-2 flex flex-col gap-1 items-center">
              <span>More Visibility</span>
              <ArrowDown className="w-4 h-4 text-accent-bright" />
              <span>More Leads</span>
              <ArrowDown className="w-4 h-4 text-accent-bright" />
              <span>More Customers</span>
            </h3>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
