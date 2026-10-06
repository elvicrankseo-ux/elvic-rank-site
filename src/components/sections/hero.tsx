"use client";

import { useRef } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";
import {
  ArrowRight,
  Check,
  TrendingUp,
  Droplets,
  MapPinCheck,
  Zap,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/config/site";

const trustPoints = [
  "No long-term contracts",
  "Transparent weekly reporting",
  "White-hat SEO only",
];

const specialtyBadges = [
  { icon: Droplets, label: "Restoration SEO" },
  { icon: Zap, label: "Emergency Service SEO" },
  { icon: MapPinCheck, label: "Google Business Profile" },
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
    <section className="relative min-h-[90vh] flex flex-col items-center justify-center pt-24 pb-32">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, rgba(15,17,21,0.06) 1px, transparent 0)",
          backgroundSize: "28px 28px",
          maskImage:
            "radial-gradient(ellipse 100% 100% at 50% 50%, black 20%, transparent 100%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 100% 100% at 50% 50%, black 20%, transparent 100%)",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute top-[20%] left-1/2 -translate-x-1/2 -z-10 h-[40rem] w-[40rem] rounded-full bg-accent/15 blur-[120px]"
      />

      <div className="mx-auto w-full max-w-6xl px-6 flex flex-col items-center text-center z-10">
        <motion.div
          initial="hidden"
          animate="show"
          custom={0}
          variants={fadeUp}
          className="inline-flex items-center gap-2 rounded-full border border-paper-border bg-paper-muted px-5 py-2 text-sm font-semibold text-muted [box-shadow:var(--shadow-neo-sm)]"
        >
          <span className="h-2 w-2 rounded-full bg-accent-deep animate-pulse" aria-hidden />
          SEO for Restoration &amp; Emergency Services
        </motion.div>

        <motion.h1
          initial="hidden"
          animate="show"
          custom={1}
          variants={fadeUp}
          className="mt-8 font-display text-5xl font-bold leading-[1.05] tracking-tight text-foreground sm:text-7xl lg:text-[5.5rem]"
        >
          Dominate Local Search. <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-deep to-accent-bright drop-shadow-sm">
            Book More Jobs.
          </span>
        </motion.h1>

        <motion.p
          initial="hidden"
          animate="show"
          custom={2}
          variants={fadeUp}
          className="mt-6 max-w-2xl text-lg sm:text-xl leading-relaxed text-muted font-medium"
        >
          Get found, get called, and get booked with SEO and conversion-focused websites designed strictly for emergency-service companies.
        </motion.p>

        <motion.div
          initial="hidden"
          animate="show"
          custom={3}
          variants={fadeUp}
          className="mt-10 flex flex-col gap-5 sm:flex-row sm:items-center justify-center"
        >
          <Button
            href={siteConfig.cta.primary.href}
            variant="accent"
            size="lg"
            className="text-lg px-10 py-6 font-bold"
            gaEvent="seo_audit_cta_click"
            gaParams={{ location: "hero" }}
          >
            {siteConfig.cta.primary.label}
            <ArrowRight size={20} aria-hidden />
          </Button>
          <Button href={siteConfig.cta.secondary.href} variant="outline" size="lg" className="text-lg px-10 py-6 font-bold">
            {siteConfig.cta.secondary.label}
          </Button>
        </motion.div>
      </div>

      {/* 3D Realistic Stage */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
        className="relative mt-24 w-full max-w-[1200px] px-6 h-[400px] flex justify-center perspective-[2000px]"
        style={{ perspective: 2000 }}
      >
        {/* Main Center Dashboard */}
        <motion.div
          animate={prefersReducedMotion ? undefined : { y: [0, -20, 0], rotateX: [25, 30, 25] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute z-20 w-full max-w-2xl rounded-3xl bg-ink p-8 [box-shadow:var(--shadow-neo-flat)] [transform-style:preserve-3d] border-t border-white/40"
        >
          <div className="flex items-center justify-between mb-8 border-b border-ink-border pb-4">
            <div>
              <p className="text-sm font-bold uppercase tracking-wider text-accent-deep">
                Live Reporting Dashboard
              </p>
              <p className="mt-1 font-display text-2xl font-semibold text-ink-foreground">
                Plain-English SEO Metrics
              </p>
            </div>
            <div className="h-12 w-12 rounded-full bg-accent/10 flex items-center justify-center [box-shadow:var(--shadow-neo-pressed)]">
              <TrendingUp size={24} className="text-accent-deep" aria-hidden />
            </div>
          </div>

          <div className="space-y-5">
            {reportHighlights.map((item, i) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, translateZ: -50 }}
                animate={{ opacity: 1, translateZ: i * 20 + 20 }}
                className="flex items-center gap-4 rounded-xl bg-paper p-4 [box-shadow:var(--shadow-neo-sm)]"
              >
                <div className="h-8 w-8 rounded-full bg-accent-deep flex items-center justify-center text-white [box-shadow:var(--shadow-neo-flat)]">
                  <Check size={16} aria-hidden />
                </div>
                <span className="font-medium text-foreground">{item}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Floating Side Element Left */}
        <motion.div
          animate={prefersReducedMotion ? undefined : { y: [0, 15, 0], rotateX: [35, 40, 35], rotateY: [15, 20, 15], rotateZ: [-5, -2, -5] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute -left-2 lg:-left-8 top-36 z-10 w-[22rem] rounded-2xl bg-ink p-6 [box-shadow:var(--shadow-neo-flat)] hidden md:block"
        >
          <p className="text-xs font-bold uppercase text-muted mb-4">TRUSTED SEO PARTNER</p>
          <div className="space-y-3">
            {specialtyBadges.map(badge => (
              <div key={badge.label} className="flex items-center gap-3 text-sm font-medium">
                <badge.icon size={16} className="text-accent-deep" />
                {badge.label}
              </div>
            ))}
          </div>
        </motion.div>

        {/* Floating Side Element Right */}
        <motion.div
          animate={prefersReducedMotion ? undefined : { y: [0, -10, 0], rotateX: [30, 35, 30], rotateY: [-15, -20, -15], rotateZ: [5, 8, 5] }}
          transition={{ duration: 9, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
          className="absolute -right-2 lg:-right-6 top-20 z-10 w-[18rem] rounded-2xl bg-ink p-6 [box-shadow:var(--shadow-neo-flat)] hidden md:block border-t border-white/50"
        >
          <p className="text-xs font-bold uppercase text-muted mb-4">Guarantees</p>
          <div className="space-y-3">
            {trustPoints.map(point => (
              <div key={point} className="flex items-center gap-2 text-sm font-medium">
                <Check size={14} className="text-accent-deep" />
                {point}
              </div>
            ))}
          </div>
        </motion.div>

      </motion.div>
    </section>
  );
}
