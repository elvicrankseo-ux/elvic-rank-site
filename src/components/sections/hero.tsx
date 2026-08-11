"use client";

import { useRef } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";
import {
  ArrowRight,
  Check,
  TrendingUp,
  Search,
  MapPin,
  MapPinCheck,
  LayoutTemplate,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/config/site";

const trustPoints = [
  "No long-term contracts",
  "Transparent weekly reporting",
  "White-hat SEO only",
];

const specialtyBadges = [
  { icon: Search, label: "Technical SEO" },
  { icon: MapPin, label: "Local SEO" },
  { icon: MapPinCheck, label: "Google Business Profile" },
  { icon: LayoutTemplate, label: "Website Design" },
];

const reportHighlights = [
  "Organic & local search visibility",
  "Calls & form submissions, not just rankings",
  "A monthly strategy call, not just a PDF",
];

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] as const},
  }),
};

export function Hero() {
  const prefersReducedMotion = useReducedMotion();
  const cardRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(cardRef, { once: true, margin: "-80px" });

  return (
    <section className="relative overflow-hidden">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, rgba(15,17,21,0.06) 1px, transparent 0)",
          backgroundSize: "28px 28px",
          maskImage:
            "radial-gradient(ellipse 80% 60% at 50% 0%, black 40%, transparent 100%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 80% 60% at 50% 0%, black 40%, transparent 100%)",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 right-[-10%] -z-10 h-[36rem] w-[36rem] rounded-full bg-accent/20 blur-[120px]"
      />

      <div className="mx-auto grid max-w-7xl gap-16 px-6 pb-20 pt-16 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-12 lg:px-8 lg:pb-28 lg:pt-24">
        <div>
          <motion.div
            initial="hidden"
            animate="show"
            custom={0}
            variants={fadeUp}
            className="inline-flex items-center gap-2 rounded-full border border-paper-border bg-paper-muted px-4 py-1.5 text-sm font-medium text-muted"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-accent" aria-hidden />
            SEO for local service businesses
          </motion.div>

          <motion.h1
            initial="hidden"
            animate="show"
            custom={1}
            variants={fadeUp}
            className="mt-6 font-display text-4xl font-medium leading-[1.08] tracking-tight text-foreground sm:text-5xl lg:text-6xl"
          >
            SEO That Brings More Calls, More Leads &{" "}
            <span className="text-accent-deep">More Booked Jobs</span>
          </motion.h1>

          <motion.p
            initial="hidden"
            animate="show"
            custom={2}
            variants={fadeUp}
            className="mt-6 max-w-xl text-lg leading-relaxed text-muted"
          >
            We help local businesses dominate Google through Technical SEO,
            Local SEO, Google Business Profile Optimization, Website Design,
            and digital marketing that generates real business growth.
          </motion.p>

          <motion.div
            initial="hidden"
            animate="show"
            custom={3}
            variants={fadeUp}
            className="mt-9 flex flex-col gap-4 sm:flex-row sm:items-center"
          >
            <Button
              href={siteConfig.cta.primary.href}
              variant="accent"
              size="lg"
              gaEvent="seo_audit_cta_click"
              gaParams={{ location: "hero" }}
            >
              {siteConfig.cta.primary.label}
              <ArrowRight size={18} aria-hidden />
            </Button>
            <Button href={siteConfig.cta.secondary.href} variant="outline" size="lg">
              {siteConfig.cta.secondary.label}
            </Button>
          </motion.div>

          <motion.div
            initial="hidden"
            animate="show"
            custom={4}
            variants={fadeUp}
            className="mt-8"
          >
            <p className="text-xs font-medium uppercase tracking-wider text-muted">
              Trusted SEO Partner
            </p>
            <ul className="mt-3 flex flex-wrap gap-2">
              {specialtyBadges.map((badge) => (
                <li
                  key={badge.label}
                  className="flex items-center gap-1.5 rounded-full border border-paper-border bg-paper-muted px-3 py-1.5 text-xs font-medium text-foreground"
                >
                  <badge.icon size={13} className="text-accent-deep" aria-hidden />
                  {badge.label}
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.ul
            initial="hidden"
            animate="show"
            custom={5}
            variants={fadeUp}
            className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-x-8 sm:gap-y-3"
          >
            {trustPoints.map((point) => (
              <li key={point} className="flex items-center gap-2 text-sm text-muted">
                <Check size={16} className="text-accent-deep" aria-hidden />
                {point}
              </li>
            ))}
          </motion.ul>
        </div>

        <motion.div
          ref={cardRef}
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] as const}}
          className="relative mx-auto w-full max-w-md lg:mx-0"
        >
          <motion.div
            animate={prefersReducedMotion ? undefined : { y: [0, -10, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="rounded-2xl border border-ink-border bg-ink p-6 shadow-2xl shadow-ink/20 sm:p-8"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs font-medium uppercase tracking-wider text-muted-dark">
                  How We Report
                </p>
                <p className="mt-1 font-display text-lg text-ink-foreground">
                  Plain-English SEO Reporting
                </p>
              </div>
              <TrendingUp size={20} className="text-accent-bright" aria-hidden />
            </div>

            <p className="mt-6 text-sm leading-relaxed text-muted-dark">
              Every engagement includes weekly, no-jargon reporting tied to
              what actually matters — not just where you rank.
            </p>

            <motion.ul
              initial={{ opacity: 0 }}
              animate={{ opacity: isInView ? 1 : 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-7 space-y-4 border-t border-ink-border pt-6"
            >
              {reportHighlights.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-2.5 text-sm text-ink-foreground"
                >
                  <Check
                    size={16}
                    className="mt-0.5 shrink-0 text-accent-bright"
                    aria-hidden
                  />
                  {item}
                </li>
              ))}
            </motion.ul>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
