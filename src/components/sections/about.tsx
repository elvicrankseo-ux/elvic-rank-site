/* eslint-disable */
"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Target, ShieldCheck, Eye, Handshake, type LucideIcon } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";

const principles: { icon: LucideIcon; title: string; description: string }[] = [
  {
    icon: Target,
    title: "Rankings are a means, not the goal",
    description: "Position #1 means nothing if it doesn't turn into a booked job.",
  },
  {
    icon: ShieldCheck,
    title: "White-hat, always",
    description: "No shortcuts that risk your domain for a short-term spike.",
  },
  {
    icon: Eye,
    title: "No black box",
    description: "You should understand your strategy, not just trust it.",
  },
  {
    icon: Handshake,
    title: "Small enough to care",
    description: "Focused enough to actually deliver on what we promise.",
  },
];

export function About() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section id="about" className="relative overflow-hidden pt-4 pb-10 lg:pt-8 lg:pb-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-12 lg:gap-16 lg:items-start">
          {/* Left Column: Sticky Manifesto Header */}
          <div className="lg:col-span-5 lg:sticky lg:top-32">
            <div className="flex flex-col items-start text-left">
              <span className="inline-flex items-center rounded-full bg-accent/10 px-3 py-1 text-xs font-medium text-accent-deep">
                About Elvic Rank
              </span>
              <h2 className="mt-6 font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
                SEO, run like it's personal — <span className="text-accent-deep">because it is.</span>
              </h2>
              <p className="mt-6 text-base leading-relaxed text-muted-dark max-w-md">
                Elvic Rank exists because most local service businesses get treated like a line item — handed off to a junior account manager, buried in vague reports, locked into a contract that outlasts the results.
              </p>
              <p className="mt-4 text-sm font-medium leading-relaxed text-foreground max-w-md">
                We built something smaller and more accountable: one clear strategy, and rankings judged by whether the phone rings.
              </p>
            </div>
          </div>

          {/* Right Column: Stacked Principles */}
          <div className="mt-16 lg:mt-0 lg:col-span-7 flex flex-col gap-12">
            {principles.map((principle, index) => {
              const Icon = principle.icon;
              return (
                <motion.div
                  key={principle.title}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{
                    duration: 0.5,
                    delay: prefersReducedMotion ? 0 : index * 0.1,
                    ease: "easeOut",
                  }}
                  className="group flex flex-col sm:flex-row gap-6 items-start"
                >
                  <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-paper border border-black/5 [box-shadow:var(--shadow-neo-flat)] transition-transform duration-500 group-hover:-translate-y-2 group-hover:bg-accent/5">
                    <Icon size={28} className="text-accent-deep" aria-hidden />
                  </div>
                  <div>
                    <h3 className="font-display text-2xl font-bold text-foreground group-hover:text-accent-deep transition-colors duration-300">
                      {principle.title}
                    </h3>
                    <p className="mt-3 text-base leading-relaxed text-muted-dark">
                      {principle.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

