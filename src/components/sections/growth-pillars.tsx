"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, useReducedMotion, AnimatePresence } from "framer-motion";
import { Search, ShieldCheck, TrendingUp, ChevronRight, type LucideIcon } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
import { cn } from "@/lib/utils";

/**
 * The "how we help" framework from Elvic Rank's core positioning: Get
 * Found → Get Chosen → Get More Jobs. Sits right after the Hero, before
 * the detailed 14-service grid, as the high-level version of the same
 * story the Services section tells in full — deliberately compact (3
 * cards, not another long grid) so it doesn't duplicate that section's
 * job, just frames it.
 *
 * Each item optionally links to the specific page it refers to (Sprint
 * 01, Phase 5) — only where a real, direct page exists. Items without a
 * clear match (e.g. "Trust Signals") stay plain text rather than being
 * forced to link somewhere approximate.
 */
const pillars: {
  icon: LucideIcon;
  number: string;
  title: string;
  description: string;
  items: { label: string; href?: string }[];
  accent: string;
  accentBg: string;
}[] = [
  {
    icon: Search,
    number: "01",
    title: "Get Found",
    description: "Show up when someone urgently searches Google for what you do.",
    items: [
      { label: "GBP & Google Maps", href: "/services/local-seo-google-business-profile" },
      { label: "Restoration SEO", href: "/industries/restoration-seo" },
      { label: "Emergency Service SEO", href: "/industries/emergency-service-seo" },
    ],
    accent: "text-blue-400",
    accentBg: "bg-blue-500/20",
  },
  {
    icon: ShieldCheck,
    number: "02",
    title: "Get Chosen",
    description: "Win the call once they land on your profile or your site.",
    items: [
      { label: "Website Design", href: "/services/website-design" },
      { label: "Restoration Web Design", href: "/industries/restoration-web-design" },
      { label: "Conversion Optimization", href: "/services/conversion-rate-optimization" },
    ],
    accent: "text-indigo-400",
    accentBg: "bg-indigo-500/20",
  },
  {
    icon: TrendingUp,
    number: "03",
    title: "Get More Jobs",
    description: "Know exactly what's working, and keep compounding it.",
    items: [
      { label: "Tracking" },
      { label: "Reporting", href: "/services/seo-reporting-analytics" },
      { label: "Growth Strategy" },
    ],
    accent: "text-cyan-400",
    accentBg: "bg-cyan-500/20",
  },
];

/** Mobile swipeable pillar card carousel */
function MobilePillarCarousel() {
  const [active, setActive] = useState(0);
  const prefersReducedMotion = useReducedMotion();

  const pillar = pillars[active];
  const Icon = pillar.icon;

  return (
    <div className="mt-10 sm:hidden">
      {/* Step tabs */}
      <div className="flex gap-2 mb-6 px-1">
        {pillars.map((p, i) => (
          <button
            key={p.number}
            onClick={() => setActive(i)}
            className={cn(
              "flex-1 flex flex-col items-center gap-1.5 rounded-2xl py-3 px-2 transition-all duration-300",
              i === active
                ? "bg-accent-deep text-white shadow-md"
                : "bg-ink text-muted hover:text-ink-foreground"
            )}
          >
            <span className="text-[10px] font-black uppercase tracking-widest opacity-60">{p.number}</span>
            <span className="text-xs font-bold leading-tight">{p.title}</span>
          </button>
        ))}
      </div>

      {/* Animated card */}
      <AnimatePresence mode="wait">
        <motion.div
          key={active}
          initial={prefersReducedMotion ? { opacity: 0 } : { opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          exit={prefersReducedMotion ? { opacity: 0 } : { opacity: 0, x: -40 }}
          transition={{ duration: 0.28, ease: "easeOut" }}
          className="relative overflow-hidden rounded-3xl bg-ink p-7 [box-shadow:var(--shadow-neo-flat)] border-t border-white/10"
        >
          {/* Watermark */}
          <div
            className="absolute -bottom-4 -right-4 text-[9rem] font-black leading-none select-none pointer-events-none text-white/[0.04]"
            aria-hidden
          >
            {pillar.number}
          </div>

          {/* Icon + pulse */}
          <div className="flex items-center justify-between mb-6">
            <div className={cn(
              "flex h-14 w-14 items-center justify-center rounded-2xl [box-shadow:var(--shadow-neo-pressed)]",
              pillar.accentBg, pillar.accent
            )}>
              <Icon size={26} aria-hidden />
            </div>
            <div className={cn("h-2 w-2 rounded-full animate-pulse", pillar.accent.replace("text-", "bg-"))} aria-hidden />
          </div>

          <h3 className="font-display text-2xl font-bold text-ink-foreground">{pillar.title}</h3>
          <p className="mt-2 text-sm leading-relaxed text-muted-dark">{pillar.description}</p>

          <ul className="mt-6 space-y-3 pt-5 border-t border-ink-border">
            {pillar.items.map((item) => (
              <li key={item.label} className="flex items-center gap-3 text-sm font-semibold text-ink-foreground">
                <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-paper [box-shadow:var(--shadow-neo-sm)]">
                  <div className="h-1.5 w-1.5 rounded-full bg-accent-deep" aria-hidden />
                </div>
                {item.href ? (
                  <Link href={item.href} className="flex items-center gap-1 transition-colors hover:text-accent-bright">
                    {item.label}
                    <ChevronRight size={13} className="opacity-50" />
                  </Link>
                ) : item.label}
              </li>
            ))}
          </ul>

          {/* Next step hint */}
          {active < pillars.length - 1 && (
            <button
              onClick={() => setActive(active + 1)}
              className="mt-6 flex items-center gap-2 text-xs font-bold text-accent-bright"
            >
              Next: {pillars[active + 1].title}
              <ChevronRight size={14} />
            </button>
          )}
        </motion.div>
      </AnimatePresence>

      {/* Dot progress indicator */}
      <div className="flex justify-center gap-2 mt-5">
        {pillars.map((_, i) => (
          <button
            key={i}
            onClick={() => setActive(i)}
            className={cn(
              "rounded-full transition-all duration-300",
              i === active ? "w-6 h-2 bg-accent-deep" : "w-2 h-2 bg-ink"
            )}
            aria-label={`Go to step ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

export function GrowthPillars() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section id="growth-pillars" className="relative overflow-hidden pt-10 pb-8 lg:pt-16 lg:pb-32">
      {/* Background Glows */}
      <div className="absolute -left-40 top-20 h-[30rem] w-[30rem] rounded-full bg-accent/10 blur-[100px]" aria-hidden />
      <div className="absolute right-0 bottom-0 h-[40rem] w-[40rem] rounded-full bg-accent-deep/5 blur-[120px]" aria-hidden />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8 z-10">
        <SectionHeading
          eyebrow="How we help"
          title="Found, chosen, and booked — in that order"
          description="Rankings alone don't pay the bills. Every piece of work we do fits into one of three stages, and every stage feeds the next."
        />

        {/* Mobile: app-style tabbed carousel */}
        <MobilePillarCarousel />

        {/* Desktop: 3D staggered grid */}
        <div className="hidden sm:grid mt-20 gap-10 lg:grid-cols-3 perspective-[2000px]">
          {pillars.map((pillar, index) => {
            const Icon = pillar.icon;
            const translateY = index === 1 ? "lg:translate-y-12" : index === 2 ? "lg:translate-y-24" : "";

            return (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, rotateX: 20, y: 50 }}
                whileInView={{ opacity: 1, rotateX: 0, y: 0 }}
                whileHover={{ y: -10, rotateX: 5, rotateY: -5 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{
                  duration: 0.7,
                  delay: prefersReducedMotion ? 0 : index * 0.2,
                  ease: "easeOut",
                }}
                className={`relative overflow-hidden rounded-3xl bg-ink p-8 [box-shadow:var(--shadow-neo-flat)] border-t border-white/20 [transform-style:preserve-3d] ${translateY}`}
              >
                <div className="absolute -bottom-6 -right-6 text-[12rem] font-black text-white/[0.03] leading-none select-none pointer-events-none" aria-hidden>
                  {pillar.number}
                </div>

                <div className="relative z-10 flex flex-col h-full">
                  <div className="flex items-center justify-between mb-8">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-accent-deep/20 text-accent-bright [box-shadow:var(--shadow-neo-pressed)]">
                      <Icon size={28} aria-hidden />
                    </div>
                    <div className="h-2 w-2 rounded-full bg-accent-bright animate-pulse" aria-hidden />
                  </div>

                  <h3 className="font-display text-2xl font-bold text-ink-foreground">{pillar.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-dark min-h-[3rem]">{pillar.description}</p>

                  <ul className="mt-8 space-y-4 pt-6 border-t border-ink-border flex-grow">
                    {pillar.items.map((item) => (
                      <li key={item.label} className="flex items-center gap-3 text-sm font-semibold text-ink-foreground">
                        <div className="flex h-6 w-6 items-center justify-center rounded-full bg-paper [box-shadow:var(--shadow-neo-sm)]">
                          <div className="h-1.5 w-1.5 rounded-full bg-accent-deep" aria-hidden />
                        </div>
                        {item.href ? (
                          <Link href={item.href} className="transition-colors hover:text-accent-bright hover:underline underline-offset-4 decoration-accent/30">
                            {item.label}
                          </Link>
                        ) : item.label}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
