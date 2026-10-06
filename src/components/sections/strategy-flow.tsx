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

        <div className="mt-16 flex flex-col items-center">
          {flowSteps.map((step, index) => (
            <div key={step.phase} className="w-full flex flex-col items-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: prefersReducedMotion ? 0 : 0.1 }}
                className={cn(
                  "relative w-full sm:w-[400px] rounded-3xl p-6 md:p-8 text-center border [box-shadow:var(--shadow-neo-flat)] transition-all",
                  "bg-paper border-white/20"
                )}
              >
                <span className="text-xs font-bold uppercase tracking-widest text-accent-deep mb-2 block">
                  {step.phase}
                </span>
                <h3 className="font-display text-xl font-bold text-ink-foreground mb-2">
                  {step.services}
                </h3>
                <p className="text-sm text-muted-dark font-medium">
                  {step.description}
                </p>
              </motion.div>

              {/* Arrow Connector */}
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                whileInView={{ opacity: 1, height: 40 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.4, delay: 0.2 }}
                className="w-px bg-gradient-to-b from-accent-deep to-accent-bright my-4 flex items-center justify-center overflow-visible"
              >
                <div className="mt-8 bg-ink rounded-full p-1 border border-ink-border">
                  <ArrowDown size={14} className="text-accent-bright" />
                </div>
              </motion.div>
            </div>
          ))}

          {/* Final Growth Step */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="w-full sm:w-[450px] mt-4 rounded-3xl bg-accent-deep p-8 text-center shadow-[0_0_40px_rgba(37,99,235,0.3)] border border-accent-bright/50"
          >
            <span className="text-xs font-bold uppercase tracking-widest text-white/80 mb-2 block">
              Grow
            </span>
            <h3 className="font-display text-2xl md:text-3xl font-bold text-white mb-2">
              More Visibility <ArrowDown className="inline-block mx-1 w-5 h-5 text-accent-bright" /> More Leads <ArrowDown className="inline-block mx-1 w-5 h-5 text-accent-bright" /> More Customers
            </h3>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
