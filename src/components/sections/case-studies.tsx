"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { CheckCircle2, LoaderCircle, Clock } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";

const projectStatuses = [
  {
    icon: CheckCircle2,
    label: "Website Design",
    href: "/services/website-design",
    status: "Completed",
    state: "done" as const,
  },
  {
    icon: LoaderCircle,
    label: "Google Business Profile Optimization",
    href: "/services/local-seo-google-business-profile",
    status: "In Progress",
    state: "active" as const,
  },
  {
    icon: Clock,
    label: "SEO Campaign",
    // No href: this line item spans multiple services (audit, on-page,
    // content, etc.) rather than mapping to one specific page, and it
    // hasn't started yet — a link here would be arbitrary, not genuine.
    href: undefined,
    status: "Coming Soon",
    state: "pending" as const,
  },
];

const stateStyles = {
  done: "bg-accent/10 text-accent-deep",
  active: "bg-accent/10 text-accent-deep",
  pending: "bg-paper text-muted-dark",
};

export function CaseStudies() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section id="case-studies" className="relative overflow-hidden pt-4 pb-10 lg:pt-8 lg:pb-16">
      {/* Background Accent Lines */}
      <div className="absolute inset-0 z-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" aria-hidden />

      <div className="relative z-10 mx-auto max-w-4xl px-6 lg:px-8">
        <SectionHeading
          eyebrow="Current Projects"
          title="Real work, in progress"
          description="We only publish real client results. Detailed case studies will be added as campaigns mature."
        />

        <div className="mt-10 flex flex-col gap-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5 }}
            className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-8 rounded-3xl bg-ink [box-shadow:var(--shadow-neo-flat)] border-t border-white/20"
          >
            <div>
              <div className="flex items-center gap-3">
                <span className="inline-flex items-center rounded-full bg-accent/10 px-3 py-1 text-xs font-medium text-accent-deep">
                  Towing & Logistics
                </span>
                <span className="flex h-2 w-2 rounded-full bg-accent animate-pulse" />
              </div>
              <h3 className="mt-4 font-display text-2xl font-medium text-foreground">
                Akanaby Logistics Inc.
              </h3>
            </div>
          </motion.div>

          <div className="flex flex-col gap-4 pl-4 sm:pl-12">
            {projectStatuses.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{
                    duration: 0.5,
                    delay: 0.1 + index * 0.1,
                  }}
                  className="group flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-5 rounded-full bg-paper/50 backdrop-blur-md border border-white/60 [box-shadow:var(--shadow-neo-sm)] hover:-translate-y-1 hover:[box-shadow:var(--shadow-neo-flat)] transition-all duration-300"
                >
                  <div className="flex items-center gap-5">
                    <span
                      className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-full [box-shadow:var(--shadow-neo-pressed)] ${
                        item.state === "pending"
                          ? "bg-paper text-muted"
                          : "bg-accent-deep/10 text-accent-deep"
                      }`}
                    >
                      <Icon
                        size={20}
                        aria-hidden
                        className={
                          item.state === "active" && !prefersReducedMotion
                            ? "animate-spin [animation-duration:3s]"
                            : undefined
                        }
                      />
                    </span>
                    {item.href ? (
                      <Link
                        href={item.href}
                        className="font-display text-lg font-bold transition-colors duration-300 text-foreground hover:text-accent"
                      >
                        {item.label}
                      </Link>
                    ) : (
                      <span className={`font-display text-lg font-bold ${
                        item.state === "pending" ? "text-muted" : "text-foreground"
                      }`}>
                        {item.label}
                      </span>
                    )}
                  </div>
                  <span className={`shrink-0 rounded-full px-5 py-2 text-sm font-bold tracking-wide border ${
                    item.state === "done" 
                      ? "border-accent/20 bg-accent/5 text-accent-deep" 
                      : item.state === "active"
                      ? "border-accent-bright/30 bg-accent-bright/10 text-accent-bright"
                      : "border-transparent bg-transparent text-muted"
                  }`}>
                    {item.status}
                  </span>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
