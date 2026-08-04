"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/config/site";
import { services } from "@/data/services";

export function Services() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section id="services" className="bg-paper-muted py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeading
          eyebrow="What we do"
          title="SEO services built around booked jobs"
          description="Not a menu of tactics — a system. Every service below feeds the same goal: more of the right people finding you, and choosing you."
        />

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.slug}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{
                  duration: 0.5,
                  delay: prefersReducedMotion ? 0 : (index % 3) * 0.08,
                  ease: [0.16, 1, 0.3, 1] as const,
                }}
              >
                <Link
                  href={`/services/${service.slug}`}
                  className="group flex h-full flex-col rounded-2xl border border-paper-border bg-paper p-8 transition-colors duration-300 hover:border-accent/40"
                >
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10 text-accent-deep transition-colors duration-300 group-hover:bg-accent group-hover:text-accent-foreground">
                    <Icon size={22} aria-hidden />
                  </div>
                  <h3 className="mt-6 font-display text-xl font-medium text-foreground">
                    {service.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted">
                    {service.shortDescription}
                  </p>
                  <ul className="mt-5 space-y-2 border-t border-paper-border pt-5">
                    {service.points.map((point) => (
                      <li
                        key={point}
                        className="flex items-center gap-2 text-sm text-muted"
                      >
                        <span className="h-1 w-1 rounded-full bg-accent" aria-hidden />
                        {point}
                      </li>
                    ))}
                  </ul>
                  <span className="mt-6 flex items-center gap-1.5 text-sm font-medium text-accent-deep">
                    Learn more
                    <ArrowRight
                      size={15}
                      aria-hidden
                      className="transition-transform duration-200 group-hover:translate-x-1"
                    />
                  </span>
                </Link>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] as const }}
          className="mt-14 flex flex-col items-center gap-5 text-center"
        >
          <p className="text-muted">
            Not sure which service moves the needle for you?
          </p>
          <Button href={siteConfig.cta.primary.href} variant="primary" size="lg">
            {siteConfig.cta.primary.label}
            <ArrowRight size={18} aria-hidden />
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
