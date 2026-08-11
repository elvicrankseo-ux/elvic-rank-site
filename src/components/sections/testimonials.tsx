"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Quote, Star, User, ArrowRight } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
import { Button } from "@/components/ui/button";

/**
 * TODO(elvic): swap these placeholder cards for real client testimonials
 * as they're collected. Deliberately not using fabricated quotes/names —
 * a fake testimonial is a materially different (and riskier) claim than
 * a generic case-study illustration, so this renders an honest "coming
 * soon" skeleton instead.
 */
const placeholderCount = 3;

export function Testimonials() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section id="testimonials" className="bg-paper py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeading
          eyebrow="Testimonials"
          title="What clients are saying"
          description="Real client testimonials will appear here as our clients begin seeing measurable results."
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {Array.from({ length: placeholderCount }).map((_, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{
                duration: 0.5,
                delay: prefersReducedMotion ? 0 : index * 0.1,
                ease: [0.16, 1, 0.3, 1] as const,
              }}
              className="relative flex flex-col rounded-2xl border border-dashed border-paper-border bg-paper-muted p-8"
            >
              <span className="absolute right-6 top-6 rounded-full border border-paper-border bg-paper px-3 py-1 text-xs font-medium text-muted">
                Coming soon
              </span>

              <Quote size={28} className="text-paper-border" aria-hidden />

              <div className="mt-5 flex gap-1" aria-hidden>
                {Array.from({ length: 5 }).map((_, starIndex) => (
                  <Star key={starIndex} size={14} className="text-paper-border" />
                ))}
              </div>

              <div className="mt-5 space-y-2" aria-hidden>
                <div className="h-2.5 w-full rounded-full bg-paper-border" />
                <div className="h-2.5 w-full rounded-full bg-paper-border" />
                <div className="h-2.5 w-2/3 rounded-full bg-paper-border" />
              </div>

              <div className="mt-7 flex items-center gap-3 border-t border-paper-border pt-6">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-paper text-muted-dark">
                  <User size={18} aria-hidden />
                </span>
                <div className="space-y-1.5">
                  <div className="h-2 w-24 rounded-full bg-paper-border" aria-hidden />
                  <div className="h-2 w-16 rounded-full bg-paper-border" aria-hidden />
                </div>
              </div>

              <span className="sr-only">Testimonial coming soon</span>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] as const }}
          className="mt-10 flex flex-col items-center gap-4 text-center"
        >
          <p className="text-muted">Worked with us already?</p>
          <Button
            href="#contact"
            variant="outline"
            size="md"
            gaEvent="contact_cta_click"
            gaParams={{ location: "testimonials_section" }}
          >
            Share your experience
            <ArrowRight size={16} aria-hidden />
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
