"use client";

import { motion } from "framer-motion";
import {
  MessageCircle,
  ShieldCheck,
  FileText,
  Ban,
  Compass,
  Handshake,
  type LucideIcon,
} from "lucide-react";
import { cn } from "@/lib/utils";

const trustPoints: { icon: LucideIcon; label: string; color: string; bg: string }[] = [
  { icon: MessageCircle, label: "Transparent Communication", color: "text-blue-500",   bg: "bg-blue-50" },
  { icon: ShieldCheck,   label: "White Hat SEO Only",        color: "text-green-500",  bg: "bg-green-50" },
  { icon: FileText,      label: "Monthly Reports",           color: "text-indigo-500", bg: "bg-indigo-50" },
  { icon: Ban,           label: "No Fake Guarantees",        color: "text-rose-500",   bg: "bg-rose-50" },
  { icon: Compass,       label: "Custom Growth Strategy",    color: "text-amber-500",  bg: "bg-amber-50" },
  { icon: Handshake,     label: "Long-Term Partnership",     color: "text-purple-500", bg: "bg-purple-50" },
];

export function TrustStrip() {
  return (
    <section className="pt-4 pb-10 sm:py-12 relative z-10">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">

        {/* Mobile: 2-col app-style icon grid */}
        <div className="grid grid-cols-2 gap-3 sm:hidden">
          {trustPoints.map((point, i) => {
            const Icon = point.icon;
            return (
              <motion.div
                key={point.label}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ delay: i * 0.07, duration: 0.3, ease: "easeOut" }}
                className="flex flex-col items-start gap-3 rounded-2xl bg-paper p-4 [box-shadow:var(--shadow-neo-flat)]"
              >
                <span className={cn("flex h-11 w-11 items-center justify-center rounded-2xl", point.bg)}>
                  <Icon size={22} className={point.color} aria-hidden />
                </span>
                <span className="text-[13px] font-bold text-foreground leading-snug">{point.label}</span>
              </motion.div>
            );
          })}
        </div>

        {/* Desktop: original horizontal pill strip */}
        <ul className="hidden sm:flex flex-wrap items-center justify-center gap-x-6 gap-y-6">
          {trustPoints.map((point) => {
            const Icon = point.icon;
            return (
              <li
                key={point.label}
                className="flex items-center gap-2.5 text-sm font-bold text-foreground bg-ink rounded-full px-6 py-3 transition-all duration-300 [box-shadow:var(--shadow-neo-flat)] hover:[box-shadow:var(--shadow-neo-pressed)] hover:-translate-y-0.5 cursor-default"
              >
                <Icon size={18} className="text-accent-deep" aria-hidden />
                {point.label}
              </li>
            );
          })}
        </ul>

      </div>
    </section>
  );
}
