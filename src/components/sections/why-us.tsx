"use client";

import { motion, useReducedMotion } from "framer-motion";
import {
  BarChart3,
  Compass,
  MapPinCheck,
  Search,
  MessageCircle,
  TrendingUp,
  type LucideIcon,
} from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";

const reasons: { icon: LucideIcon; title: string; description: string }[] = [
  {
    icon: Compass,
    title: "Restoration & Emergency Service Specialists",
    description:
      "Not a generic agency that happens to mention restoration — we build every strategy around how customers search when something has already gone wrong.",
  },
  {
    icon: BarChart3,
    title: "Transparent Reporting",
    description:
      "Weekly, plain-English reports tied to rankings, local visibility, and booked jobs — never a black box you have to decode.",
  },
  {
    icon: MapPinCheck,
    title: "Google Business Profile Experts",
    description:
      "Deep, hands-on GBP optimization and ongoing management — the single highest-leverage lever for a business that lives or dies by Google Maps visibility.",
  },
  {
    icon: Search,
    title: "Technical SEO Specialists",
    description:
      "Core Web Vitals, crawl health, and mobile speed fixed by people who actually read the crawl reports — critical when a customer is searching on a weak connection mid-emergency.",
  },
  {
    icon: MessageCircle,
    title: "Fast Communication",
    description:
      "Real answers within one business day — not a support ticket queue you disappear into.",
  },
  {
    icon: TrendingUp,
    title: "Long-Term Growth",
    description:
      "SEO built to compound over months and years, not chase a short-term spike that fades the moment you stop paying.",
  },
];

export function WhyUs() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section id="why-us" className="relative overflow-hidden pt-10 pb-20 lg:pt-16 lg:pb-28">
      {/* Background Accent Lines */}
      <div className="absolute inset-0 z-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" aria-hidden />

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeading
          eyebrow="Why Elvic Rank"
          title="Why restoration & emergency service companies choose Elvic Rank"
          description="Not a generic marketing checklist — six things that actually change the outcome of an SEO engagement for a business that depends on urgent, local Google searches."
        />

        <div className="mt-20 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {reasons.map((reason, index) => {
            const Icon = reason.icon;
            
            // Interlocking Bento Grid Spans
            let spanClasses = "sm:col-span-1 lg:col-span-1";
            if (index === 0) spanClasses = "sm:col-span-2 lg:col-span-2"; // Row 1 Left
            if (index === 3) spanClasses = "sm:col-span-2 lg:col-span-2"; // Row 2 Right
            if (index === 4) spanClasses = "sm:col-span-2 lg:col-span-2"; // Row 3 Left

            // Card Styles
            let cardStyle = "bg-ink [box-shadow:var(--shadow-neo-flat)] border-t border-white/20";
            let iconStyle = "bg-accent-deep/10 text-accent-bright [box-shadow:var(--shadow-neo-pressed)]";
            let textStyle = "text-ink-foreground";
            let descStyle = "text-muted-dark";

            if (index === 0) {
              // Special styling for the first card
              cardStyle = "bg-accent text-white [box-shadow:var(--shadow-neo-flat)] border-t border-white/40 overflow-hidden";
              iconStyle = "bg-white/20 text-white backdrop-blur-md shadow-[0_8px_32px_0_rgba(0,0,0,0.1)]";
              textStyle = "text-white";
              descStyle = "text-white/90";
            } else if (index === 3 || index === 4) {
               // Give the other wide cards a subtle gradient
               cardStyle = "bg-gradient-to-br from-ink to-paper-muted [box-shadow:var(--shadow-neo-flat)] border-t border-white/20";
            }

            return (
              <motion.div
                key={reason.title}
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{
                  duration: 0.5,
                  delay: prefersReducedMotion ? 0 : index * 0.1,
                  ease: "easeOut",
                }}
                className={`group relative flex flex-col justify-start rounded-3xl p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl ${spanClasses} ${cardStyle}`}
              >
                {/* Background Watermark Icon for index 0 */}
                {index === 0 && (
                  <Icon
                    className="absolute -right-4 -bottom-4 h-48 w-48 text-white opacity-10 transition-transform duration-700 group-hover:scale-110 group-hover:-rotate-12"
                    aria-hidden
                  />
                )}

                <div>
                  <div className={`inline-flex h-14 w-14 items-center justify-center rounded-2xl transition-transform duration-300 group-hover:scale-110 ${iconStyle}`}>
                    <Icon size={24} aria-hidden />
                  </div>
                  <h3 className={`mt-6 font-display text-xl font-bold ${textStyle}`}>
                    {reason.title}
                  </h3>
                </div>
                
                <p className={`mt-4 text-sm leading-relaxed ${descStyle}`}>
                  {reason.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
