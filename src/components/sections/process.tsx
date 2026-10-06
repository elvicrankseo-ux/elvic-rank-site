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
    icon: Search,
    title: "Discover",
    description:
      "Understand the business, market, competitors, customers, and current digital presence.",
  },
  {
    number: "02",
    icon: Compass,
    title: "Strategize",
    description:
      "Identify the best combination of technology, visibility, marketing, and growth channels.",
  },
  {
    number: "03",
    icon: ClipboardCheck,
    title: "Build",
    description:
      "Create or improve the website, content, infrastructure, and digital assets.",
  },
  {
    number: "04",
    icon: Rocket,
    title: "Optimize",
    description:
      "Improve SEO, Local SEO, GEO, conversion paths, and technical performance.",
  },
  {
    number: "05",
    icon: BarChart3,
    title: "Grow",
    description:
      "Use advertising, content, social media, AI, and ongoing optimization to increase visibility and opportunities.",
  },
];

export function Process() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section id="process" className="relative overflow-hidden pt-10 pb-10 lg:pt-16 lg:pb-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeading
          eyebrow="Our process"
          title="From strategy to scale, without the guesswork"
          description="A clear five-step framework to build your digital presence, increase visibility, and drive predictable customer acquisition."
        />

        {/* Desktop: horizontal timeline */}
        <div className="relative mt-32 hidden lg:flex lg:justify-between lg:gap-6">
          <div
            aria-hidden
            className="absolute left-24 right-24 top-6 h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent"
          />
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{
                  duration: 0.6,
                  delay: prefersReducedMotion ? 0 : index * 0.1,
                  ease: "easeOut",
                }}
                className="group relative flex w-56 flex-col items-center text-center"
              >
                {/* Massive Background Number */}
                <span className="absolute -top-16 z-0 font-display text-[8rem] font-bold leading-none text-accent/5 transition-colors duration-500 group-hover:text-accent/10 select-none">
                  {step.number}
                </span>

                <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-paper border border-accent/20 transition-transform duration-300 group-hover:scale-110 group-hover:bg-accent group-hover:border-accent">
                  <span className="font-display text-sm font-bold text-accent group-hover:text-white transition-colors duration-300">
                    {step.number}
                  </span>
                </div>
                
                <div className="relative z-10 mt-10 flex flex-col items-center">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-accent-deep/5 text-accent-deep transition-transform duration-300 group-hover:-translate-y-2 group-hover:text-accent-bright">
                    <Icon size={24} aria-hidden />
                  </div>
                  <h3 className="mt-4 font-display text-lg font-bold text-foreground transition-colors duration-300 group-hover:text-accent-deep">
                    {step.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted transition-colors duration-300 group-hover:text-foreground">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Mobile / tablet: vertical timeline */}
        <div className="mt-20 flex flex-col lg:hidden">
          {steps.map((step, index) => {
            const Icon = step.icon;
            const isLast = index === steps.length - 1;
            return (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{
                  duration: 0.5,
                  delay: prefersReducedMotion ? 0 : index * 0.1,
                  ease: "easeOut",
                }}
                className="group flex gap-6"
              >
                <div className="flex flex-col items-center">
                  <div className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-paper border border-accent/20 transition-colors duration-300 group-hover:bg-accent group-hover:border-accent">
                    <span className="font-display text-xs font-bold text-accent group-hover:text-white transition-colors duration-300">
                      {step.number}
                    </span>
                  </div>
                  {!isLast && (
                    <div aria-hidden className="my-2 w-px flex-1 bg-gradient-to-b from-accent/30 to-transparent" />
                  )}
                </div>
                <div className={`relative flex-1 ${isLast ? "pb-0" : "pb-16"}`}>
                  <span className="absolute -left-2 -top-6 z-0 font-display text-[6rem] font-bold leading-none text-accent/5 select-none transition-colors duration-500 group-hover:text-accent/10">
                    {step.number}
                  </span>
                  <div className="relative z-10 flex flex-col">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent-deep/5 text-accent-deep mb-3 transition-colors duration-300 group-hover:text-accent-bright">
                      <Icon size={20} aria-hidden />
                    </div>
                    <h3 className="font-display text-lg font-bold text-foreground transition-colors duration-300 group-hover:text-accent-deep">
                      {step.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted transition-colors duration-300 group-hover:text-foreground">
                      {step.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
