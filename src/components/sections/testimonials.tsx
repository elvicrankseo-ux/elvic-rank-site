"use client";

import { motion, useReducedMotion } from "framer-motion";
import { BadgeCheck, ClipboardCheck, MessageCircle, ArrowRight } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
import { Button } from "@/components/ui/button";

const trustPrinciples = [
  {
    icon: ClipboardCheck,
    title: "Show the work",
    description:
      "We share real project progress while campaigns are underway instead of turning early work into a polished success story.",
  },
  {
    icon: BadgeCheck,
    title: "Publish proof when it exists",
    description:
      "Client results and testimonials are added only when they are real, measurable, and approved to share.",
  },
  {
    icon: MessageCircle,
    title: "Start with a direct conversation",
    description:
      "Ask about your site, goals, and fit before deciding whether an engagement makes sense.",
  },
];

export function Testimonials() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section id="testimonials" className="bg-paper py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeading
          eyebrow="Trust, built honestly"
          title="Proof before promises"
          description="We do not fill this site with invented quotes, ratings, or results. As client work matures, we will publish verified proof with the context behind it."
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {trustPrinciples.map((principle, index) => {
            const Icon = principle.icon;
            return (
              <motion.div
                key={principle.title}
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
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent/10 text-accent-deep">
                  <Icon size={20} aria-hidden />
                </span>
                <h3 className="mt-6 font-display text-lg font-medium text-foreground">
                  {principle.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">
                  {principle.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] as const }}
          className="mt-10 flex flex-col items-center gap-4 text-center"
        >
          <p className="text-muted">See the work in progress, or ask us a direct question.</p>
          <Button
            href="#case-studies"
            variant="outline"
            size="md"
          >
            See Current Work
            <ArrowRight size={16} aria-hidden />
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
