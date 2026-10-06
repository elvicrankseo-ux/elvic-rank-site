"use client";

import { motion, useReducedMotion } from "framer-motion";
import { SectionHeading } from "@/components/ui/section-heading";
import { 
  Droplets, 
  Home, 
  Thermometer, 
  Wrench, 
  Truck, 
  Hammer, 
  Briefcase, 
  LineChart, 
  Building2, 
  Zap 
} from "lucide-react";
import { cn } from "@/lib/utils";

const newIndustries = [
  { label: "Restoration", icon: Droplets },
  { label: "Roofing", icon: Home },
  { label: "HVAC", icon: Thermometer },
  { label: "Plumbing", icon: Wrench },
  { label: "Towing", icon: Truck },
  { label: "Remodeling", icon: Hammer },
  { label: "Home Services", icon: Building2 },
  { label: "Local Service Businesses", icon: Zap },
  { label: "Professional Services", icon: Briefcase },
  { label: "Growth-Focused Businesses", icon: LineChart },
];

export function Industries() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section id="industries" className="relative overflow-hidden pt-10 pb-10 lg:pt-16 lg:pb-16">
      {/* Subtle Background Glow */}
      <div className="absolute right-0 top-1/2 h-[30rem] w-[30rem] -translate-y-1/2 rounded-full bg-accent-deep/5 blur-[100px] pointer-events-none" aria-hidden />

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeading
          eyebrow="Who We Help"
          title="Built for businesses that depend on local visibility"
          description="From emergency home services to professional practices, our strongest expertise is helping companies that rely on high-intent online searches and predictable customer acquisition."
        />

        <div className="mt-16 flex flex-wrap justify-center gap-4 lg:gap-6">
          {newIndustries.map((industry, index) => {
            const Icon = industry.icon;
            return (
              <motion.div
                key={industry.label}
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{
                  duration: 0.5,
                  delay: prefersReducedMotion ? 0 : (index % 5) * 0.08,
                  ease: "easeOut",
                }}
              >
                <div
                  className={cn(
                    "group flex items-center gap-4 rounded-full bg-ink py-3 pl-3 pr-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl [box-shadow:var(--shadow-neo-flat)] border-t border-white/20 hover:[box-shadow:var(--shadow-neo-pressed)]",
                    "cursor-default"
                  )}
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-accent-deep/10 text-accent-bright transition-transform duration-300 group-hover:scale-110 group-hover:bg-accent/20 [box-shadow:var(--shadow-neo-pressed)]">
                    <Icon size={18} aria-hidden />
                  </div>
                  <span className="font-display text-sm font-bold text-ink-foreground transition-colors group-hover:text-accent-deep">
                    {industry.label}
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
