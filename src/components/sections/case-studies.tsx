"use client";

import { motion, useReducedMotion } from "framer-motion";
import { CheckCircle2, LoaderCircle, Clock } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";

const projectStatuses = [
  {
    icon: CheckCircle2,
    label: "Website Design",
    status: "Completed",
    state: "done" as const,
  },
  {
    icon: LoaderCircle,
    label: "Google Business Profile Optimization",
    status: "In Progress",
    state: "active" as const,
  },
  {
    icon: Clock,
    label: "SEO Campaign",
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
    <section id="case-studies" className="bg-paper-muted py-20 lg:py-28">
      <div className="mx-auto max-w-3xl px-6 lg:px-8">
        <SectionHeading
          eyebrow="Current Projects"
          title="Real work, in progress"
          description="We only publish real client results. Detailed case studies will be added as campaigns mature."
        />

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{
            duration: 0.5,
            ease: [0.16, 1, 0.3, 1] as const,
          }}
          className="mt-14 overflow-hidden rounded-2xl border border-paper-border bg-paper"
        >
          <div className="border-b border-paper-border p-8">
            <span className="inline-flex items-center rounded-full border border-paper-border px-3 py-1 text-xs font-medium text-muted">
              Towing & Logistics
            </span>
            <h3 className="mt-4 font-display text-2xl font-medium text-foreground">
              Akanaby Logistics Inc.
            </h3>
          </div>

          <ul className="divide-y divide-paper-border">
            {projectStatuses.map((item) => {
              const Icon = item.icon;
              return (
                <li
                  key={item.label}
                  className="flex items-center justify-between gap-4 p-6"
                >
                  <div className="flex items-center gap-3">
                    <span
                      className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full ${stateStyles[item.state]}`}
                    >
                      <Icon
                        size={16}
                        aria-hidden
                        className={
                          item.state === "active" && !prefersReducedMotion
                            ? "animate-spin [animation-duration:2.5s]"
                            : undefined
                        }
                      />
                    </span>
                    <span className="text-sm font-medium text-foreground">
                      {item.label}
                    </span>
                  </div>
                  <span className="shrink-0 text-sm font-medium text-muted">
                    {item.status}
                  </span>
                </li>
              );
            })}
          </ul>
        </motion.div>
      </div>
    </section>
  );
}
