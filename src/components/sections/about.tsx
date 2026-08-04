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
    <section id="about" className="bg-paper-muted py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeading
          eyebrow="About Elvic Rank"
          title="SEO, run like it's personal — because it is"
          description="Elvic Rank exists because most local service businesses get treated like a line item — handed off to a junior account manager, buried in vague reports, locked into a contract that outlasts the results. We built something smaller and more accountable: one point of contact, one clear strategy, and rankings judged by whether the phone rings."
        />

        <div className="mt-16 grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
          {principles.map((principle, index) => {
            const Icon = principle.icon;
            return (
              <motion.div
                key={principle.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{
                  duration: 0.5,
                  delay: prefersReducedMotion ? 0 : index * 0.08,
                  ease: [0.16, 1, 0.3, 1] as const,
                }}
                className="text-center sm:text-left"
              >
                <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-accent/10 text-accent-deep">
                  <Icon size={20} aria-hidden />
                </div>
                <h3 className="mt-4 font-display text-base font-medium text-foreground">
                  {principle.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {principle.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
