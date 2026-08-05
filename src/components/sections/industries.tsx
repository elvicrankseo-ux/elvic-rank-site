"use client";

import { motion, useReducedMotion } from "framer-motion";
import {
  HardHat,
  Truck,
  Scale,
  UtensilsCrossed,
  Stethoscope,
  Building2,
  Hammer,
  Wrench,
  Car,
  Briefcase,
  type LucideIcon,
} from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";

const industries: { icon: LucideIcon; label: string }[] = [
  { icon: HardHat, label: "Roofing" },
  { icon: Truck, label: "Towing" },
  { icon: Scale, label: "Law Firms" },
  { icon: UtensilsCrossed, label: "Restaurants" },
  { icon: Stethoscope, label: "Medical Clinics" },
  { icon: Building2, label: "Real Estate" },
  { icon: Hammer, label: "Construction" },
  { icon: Wrench, label: "Home Services" },
  { icon: Car, label: "Automotive" },
  { icon: Briefcase, label: "Professional Services" },
];

export function Industries() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section id="industries" className="bg-paper-muted py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeading
          eyebrow="Industries"
          title="Built for local service businesses"
          description="Different trades, same fundamentals: buyers search before they call. We rank the businesses that show up first."
        />

        <div className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
          {industries.map((industry, index) => {
            const Icon = industry.icon;
            return (
              <motion.div
                key={industry.label}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{
                  duration: 0.5,
                  delay: prefersReducedMotion ? 0 : (index % 5) * 0.06,
                  ease: [0.16, 1, 0.3, 1] as const,
                }}
                className="flex flex-col items-center gap-3 rounded-2xl border border-paper-border bg-paper p-6 text-center transition-colors hover:border-accent/40"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10 text-accent-deep">
                  <Icon size={22} aria-hidden />
                </span>
                <span className="text-sm font-medium text-foreground">
                  {industry.label}
                </span>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
