"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/config/site";
import { services } from "@/data/services";

export function Services({ limit }: { limit?: number }) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section id="services" className="relative overflow-hidden pt-20 pb-10 lg:pt-28 lg:pb-16">
      {/* Subtle Background Glow */}
      <div className="absolute left-1/2 top-0 h-[40rem] w-[40rem] -translate-x-1/2 rounded-full bg-accent/5 blur-[120px] pointer-events-none" aria-hidden />

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeading
          eyebrow="What we do"
          title="Everything Your Business Needs to Grow Online"
          description="From building your digital foundation to increasing visibility and generating leads, we bring the essential pieces of digital growth together."
        />

        <div className="mt-20 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {(limit ? services.slice(0, limit) : services).map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.slug}
                initial={{ opacity: 0, y: 30, rotateX: 10 }}
                whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{
                  duration: 0.6,
                  delay: prefersReducedMotion ? 0 : (index % 3) * 0.1,
                  ease: "easeOut",
                }}
              >
                <Link
                  href={`/services/${service.slug}`}
                  className="group relative flex h-full flex-col overflow-hidden rounded-3xl bg-ink p-8 transition-all duration-300 hover:-translate-y-2 hover:rotate-1 [box-shadow:var(--shadow-neo-flat)] border-t border-white/20 hover:[box-shadow:var(--shadow-neo-pressed)]"
                >
                  <div className="flex items-center justify-between mb-6">
                    <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-accent-deep/10 text-accent-bright transition-transform duration-300 group-hover:scale-110 group-hover:bg-accent/20 [box-shadow:var(--shadow-neo-pressed)]">
                      <Icon size={24} aria-hidden />
                    </div>
                    <div className="h-2 w-2 rounded-full bg-paper-border transition-colors duration-300 group-hover:bg-accent-bright" aria-hidden />
                  </div>
                  
                  <h3 className="font-display text-xl font-bold text-ink-foreground transition-colors group-hover:text-accent-deep">
                    {service.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-dark min-h-[4rem]">
                    {service.shortDescription}
                  </p>
                  
                  <ul className="mt-6 space-y-3 border-t border-ink-border pt-6 flex-grow">
                    {service.points.map((point) => (
                      <li
                        key={point}
                        className="flex items-center gap-3 text-sm font-medium text-ink-foreground"
                      >
                        <div className="flex h-5 w-5 items-center justify-center rounded-full bg-paper [box-shadow:var(--shadow-neo-sm)]">
                          <div className="h-1 w-1 rounded-full bg-accent-deep transition-transform duration-300 group-hover:scale-150" aria-hidden />
                        </div>
                        {point}
                      </li>
                    ))}
                  </ul>
                  
                  <div className="mt-8 flex items-center justify-between border-t border-ink-border pt-4">
                    <span className="text-sm font-bold text-accent-deep transition-colors group-hover:text-accent-bright">
                      Explore service
                    </span>
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-paper-muted text-accent-deep transition-all duration-300 group-hover:bg-accent-bright group-hover:text-white [box-shadow:var(--shadow-neo-sm)] group-hover:[box-shadow:var(--shadow-neo-flat)]">
                      <ArrowRight
                        size={16}
                        aria-hidden
                        className="transition-transform duration-300 group-hover:translate-x-0.5"
                      />
                    </div>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>

        {limit && limit < services.length && (
          <div className="mt-12 flex justify-center">
            <Button href="/services" variant="accent" size="lg" className="px-8 py-4">
              See all services
            </Button>
          </div>
        )}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
          className="mt-20 flex flex-col items-center gap-6 text-center"
        >
          <div className="inline-flex items-center justify-center rounded-2xl bg-ink p-8 [box-shadow:var(--shadow-neo-flat)] border-t border-white/20">
            <div className="flex flex-col items-center gap-4">
              <p className="text-sm font-bold uppercase tracking-wider text-muted-dark">
                Not sure which service moves the needle for you?
              </p>
              <Button
                href={siteConfig.cta.primary.href}
                variant="primary"
                size="lg"
                gaEvent="visibility_audit_cta_click"
                gaParams={{ location: "services_section" }}
                className="w-full sm:w-auto shadow-xl shadow-accent/20"
              >
                Get a Free Visibility Audit
                <ArrowRight size={18} aria-hidden className="ml-2" />
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
