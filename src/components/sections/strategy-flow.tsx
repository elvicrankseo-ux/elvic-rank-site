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

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-12 max-w-5xl mx-auto items-stretch justify-items-center">
          {flowSteps.map((step, index) => (
            <div key={step.phase} className="relative w-full flex items-center justify-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: prefersReducedMotion ? 0 : index * 0.1 }}
                className={cn(
                  "relative w-full max-w-[380px] h-full rounded-3xl p-8 text-center border [box-shadow:var(--shadow-neo-flat)] transition-all",
                  "bg-paper border-white/20 flex flex-col justify-center"
                )}
              >
                <span className="text-xs font-bold uppercase tracking-widest text-accent-deep mb-2 block">
                  {step.phase}
                </span>
                <h3 className="font-display text-2xl font-bold text-ink-foreground mb-3">
                  {step.services}
                </h3>
                <p className="text-sm text-muted-dark font-medium leading-relaxed">
                  {step.description}
                </p>
              </motion.div>

              {/* Right Arrow Connector (from left to right column) */}
              {index % 2 === 0 && (
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.4, delay: index * 0.1 + 0.2 }}
                  className="hidden md:flex absolute -right-6 top-1/2 -translate-y-1/2 z-10 text-accent-bright"
                >
                  <ArrowDown size={18} className="-rotate-90" />
                </motion.div>
              )}

              {/* Diagonal Arrow Connector (from right column back to left column of next row) */}
              {(index === 1 || index === 3) && (
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.4, delay: index * 0.1 + 0.2 }}
                  className="hidden md:flex absolute -bottom-10 right-full translate-x-12 z-10 text-accent-bright/50"
                >
                  <ArrowDown size={20} className="rotate-45" />
                </motion.div>
              )}
            </div>
          ))}

          {/* Final Growth Step */}
          <div className="relative w-full flex items-center justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="w-full max-w-[380px] rounded-3xl bg-accent-deep p-8 text-center shadow-[0_0_40px_rgba(37,99,235,0.3)] border border-accent-bright/50 flex flex-col justify-center h-full"
            >
              <span className="text-xs font-bold uppercase tracking-widest text-white/80 mb-4 block">
                Grow
              </span>
              <h3 className="font-display text-xl sm:text-2xl font-bold text-white mb-2 flex flex-row flex-wrap justify-center gap-2 items-center">
                <span>More Visibility</span>
                <ArrowDown className="w-5 h-5 text-accent-bright -rotate-90" />
                <span>More Leads</span>
                <ArrowDown className="w-5 h-5 text-accent-bright -rotate-90" />
                <span>More Customers</span>
              </h3>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
