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
    <section className="relative overflow-hidden py-24 lg:py-32 bg-transparent">
      <div className="relative z-10 mx-auto w-full max-w-[100rem] px-4 lg:px-8 text-center">
        <SectionHeading
          eyebrow="The Ecosystem"
          title="One Digital Strategy. Multiple Growth Channels."
          description="We don't just offer isolated tactics. We build a complete digital growth system that moves your business from foundation to scale."
        />

        <div className="mt-20 flex flex-col xl:flex-row flex-wrap xl:flex-nowrap gap-y-10 xl:gap-x-4 items-center xl:items-stretch justify-center w-full">
          {flowSteps.map((step, index) => (
            <div key={step.phase} className="relative flex flex-col xl:flex-row items-center w-full sm:w-auto flex-1">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: prefersReducedMotion ? 0 : index * 0.1 }}
                className={cn(
                  "relative w-full sm:w-[320px] xl:w-full h-full min-h-[220px] rounded-[2rem] p-6 lg:p-8 text-center border [box-shadow:var(--shadow-neo-flat)] transition-transform hover:-translate-y-2",
                  "bg-paper border-white/20 flex flex-col justify-center"
                )}
              >
                <div className="mb-4 flex justify-center">
                   <div className="flex h-10 w-10 items-center justify-center rounded-full bg-accent/10 text-accent font-black text-sm border border-accent/20">
                     0{index + 1}
                   </div>
                </div>
                <span className="text-[10px] font-bold uppercase tracking-widest text-accent-deep mb-2 block">
                  {step.phase}
                </span>
                <h3 className="font-display text-lg lg:text-xl font-bold text-ink-foreground mb-3">
                  {step.services}
                </h3>
                <p className="text-[13px] text-muted-dark font-medium leading-relaxed max-w-[200px] mx-auto">
                  {step.description}
                </p>
              </motion.div>

              {/* Right Arrow Connector */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.4, delay: index * 0.1 + 0.2 }}
                className="my-4 xl:my-0 xl:mx-2 flex justify-center text-accent-bright shrink-0"
              >
                <ArrowDown size={24} className="xl:-rotate-90 text-accent/50" />
              </motion.div>
            </div>
          ))}

          {/* Final Growth Step */}
          <div className="relative flex items-center justify-center w-full sm:w-auto flex-1">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="w-full sm:w-[320px] xl:w-full min-h-[220px] rounded-[2rem] bg-accent-deep p-6 lg:p-8 text-center shadow-[0_0_50px_rgba(37,99,235,0.25)] border border-accent-bright/30 flex flex-col justify-center h-full transition-transform hover:-translate-y-2"
            >
              <div className="mb-4 flex justify-center">
                 <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white font-black text-sm border border-white/20">
                   06
                 </div>
              </div>
              <span className="text-[10px] font-bold uppercase tracking-widest text-white/70 mb-4 block">
                Grow
              </span>
              <h3 className="font-display text-lg font-bold text-white mb-2 flex flex-col items-center gap-2">
                <span>More Visibility</span>
                <ArrowDown className="w-4 h-4 text-accent-bright" />
                <span>More Leads</span>
                <ArrowDown className="w-4 h-4 text-accent-bright" />
                <span>More Customers</span>
              </h3>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
