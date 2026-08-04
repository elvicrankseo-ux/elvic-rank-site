"use client";

import { useId, useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

export type FaqItem = { question: string; answer: string };

type FaqAccordionProps = {
  items: FaqItem[];
  className?: string;
};

export function FaqAccordion({ items, className }: FaqAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const idPrefix = useId();

  return (
    <div
      className={
        className ??
        "divide-y divide-paper-border border-t border-paper-border"
      }
    >
      {items.map((faq, index) => {
        const isOpen = openIndex === index;
        const buttonId = `${idPrefix}-faq-button-${index}`;
        const panelId = `${idPrefix}-faq-panel-${index}`;
        return (
          <motion.div
            key={faq.question}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{
              duration: 0.4,
              delay: Math.min(index, 4) * 0.05,
              ease: [0.16, 1, 0.3, 1] as const,
            }}
          >
            <h3>
              <button
                type="button"
                id={buttonId}
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => setOpenIndex(isOpen ? null : index)}
                className="flex w-full items-center justify-between gap-4 py-5 text-left"
              >
                <span className="font-display text-base font-medium text-foreground sm:text-lg">
                  {faq.question}
                </span>
                <ChevronDown
                  size={18}
                  aria-hidden
                  className={`shrink-0 text-accent-deep transition-transform duration-300 ${
                    isOpen ? "rotate-180" : ""
                  }`}
                />
              </button>
            </h3>
            <div
              id={panelId}
              role="region"
              aria-labelledby={buttonId}
              className="grid transition-[grid-template-rows] duration-300 ease-out"
              style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}
            >
              <div className="overflow-hidden">
                <p className="pb-5 text-sm leading-relaxed text-muted">
                  {faq.answer}
                </p>
              </div>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}
