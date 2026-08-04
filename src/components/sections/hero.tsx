"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";
import { ArrowRight, Check, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/config/site";

const trustPoints = [
  "No long-term contracts",
  "Transparent weekly reporting",
  "White-hat SEO only",
];

const rankMetrics = [
  { label: "Organic traffic", value: "+184%" },
  { label: "Keywords in top 3", value: "47" },
  { label: "Avg. position gain", value: "+18" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] as const},
  }),
};

function useCountUp(target: number, shouldAnimate: boolean, duration = 1200) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!shouldAnimate) return;
    let frame: number;
    const start = performance.now();
    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(Math.round(eased * target));
      if (progress < 1) frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [shouldAnimate, target, duration]);

  return shouldAnimate ? value : target;
}

export function Hero() {
  const prefersReducedMotion = useReducedMotion();
  const cardRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(cardRef, { once: true, margin: "-80px" });
  const score = useCountUp(92, isInView && !prefersReducedMotion);

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
            SEO that turns searches into{" "}
            <span className="text-accent-deep">booked jobs</span>.
          </motion.h1>

          <motion.p
            initial="hidden"
            animate="show"
            custom={2}
            variants={fadeUp}
            className="mt-6 max-w-xl text-lg leading-relaxed text-muted"
          >
            {siteConfig.name} builds the technical foundation, content, and
            Google Business Profile visibility that compound over time — so
            local service businesses show up first, and get chosen first.
          </motion.p>

          <motion.div
            initial="hidden"
            animate="show"
            custom={3}
            variants={fadeUp}
            className="mt-9 flex flex-col gap-4 sm:flex-row sm:items-center"
          >
            <Button href={siteConfig.cta.primary.href} variant="accent" size="lg">
              {siteConfig.cta.primary.label}
              <ArrowRight size={18} aria-hidden />
            </Button>
            <Button href={siteConfig.cta.secondary.href} variant="outline" size="lg">
              {siteConfig.cta.secondary.label}
            </Button>
          </motion.div>

          <motion.ul
            initial="hidden"
            animate="show"
            custom={4}
            variants={fadeUp}
            className="mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-x-8 sm:gap-y-3"
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
                  Sample client snapshot
                </p>
                <p className="mt-1 font-display text-lg text-ink-foreground">
                  Rank Health Score
                </p>
              </div>
              <TrendingUp size={20} className="text-accent-bright" aria-hidden />
            </div>

            <div className="mt-6 flex items-end gap-3">
              <span className="font-display text-6xl font-medium text-ink-foreground">
                {score}
              </span>
              <span className="mb-2 text-sm text-muted-dark">/ 100</span>
            </div>

            <div className="mt-3 h-2 w-full overflow-hidden rounded-full bg-ink-elevated">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: isInView ? `${score}%` : 0 }}
                transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] as const}}
                className="h-full rounded-full bg-gradient-to-r from-accent to-accent-bright"
              />
            </div>

            <dl className="mt-7 space-y-4 border-t border-ink-border pt-6">
              {rankMetrics.map((metric) => (
                <div
                  key={metric.label}
                  className="flex items-center justify-between text-sm"
                >
                  <dt className="text-muted-dark">{metric.label}</dt>
                  <dd className="font-medium text-ink-foreground">
                    {metric.value}
                  </dd>
                </div>
              ))}
            </dl>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
