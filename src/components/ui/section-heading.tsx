"use client";

import type { ReactNode } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  eyebrow?: string;
  title: ReactNode;
  description?: string;
  align?: "left" | "center";
  /** "dark" for sections on the ink background (e.g. Free Audit). */
  tone?: "light" | "dark";
  className?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  tone = "light",
  className,
}: SectionHeadingProps) {
  const isDark = tone === "dark";

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] as const }}
      className={cn(
        "max-w-2xl",
        align === "center" ? "mx-auto text-center" : "text-left",
        className
      )}
    >
      {eyebrow && (
        <span
          className={cn(
            "inline-flex items-center gap-2 rounded-full border px-4 py-1.5 text-sm font-medium",
            isDark
              ? "border-ink-border bg-ink-elevated text-muted-dark"
              : "border-paper-border bg-paper text-muted"
          )}
        >
          <span className="h-1.5 w-1.5 rounded-full bg-accent" aria-hidden />
          {eyebrow}
        </span>
      )}
      <h2
        className={cn(
          "mt-5 font-display text-3xl font-medium tracking-tight sm:text-4xl",
          isDark ? "text-ink-foreground" : "text-foreground"
        )}
      >
        {title}
      </h2>
      {description && (
        <p
          className={cn(
            "mt-4 text-lg leading-relaxed",
            isDark ? "text-muted-dark" : "text-muted"
          )}
        >
          {description}
        </p>
      )}
    </motion.div>
  );
}
