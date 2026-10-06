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
    <div className={className ?? "flex flex-col gap-4"}>
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
            className={`overflow-hidden rounded-2xl bg-paper px-6 transition-all duration-300 [box-shadow:var(--shadow-neo-flat)] border border-black/5 ${
              isOpen ? "ring-2 ring-accent/10" : "hover:shadow-lg"
            }`}
          >
            <h3>
              <button
                type="button"
                id={buttonId}
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => setOpenIndex(isOpen ? null : index)}
                className="flex w-full items-center justify-between gap-4 py-5 text-left outline-none"
              >
                <span
                  className={`font-display text-base font-bold sm:text-lg transition-colors ${
                    isOpen ? "text-accent-deep" : "text-foreground"
                  }`}
                >
                  {faq.question}
                </span>
                <span
                  className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full transition-all duration-300 ${
                    isOpen
                      ? "bg-accent text-white rotate-180 shadow-md"
                      : "bg-accent/10 text-accent-deep"
                  }`}
                >
                  <ChevronDown size={16} aria-hidden />
                </span>
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
                <p className="pb-6 text-base leading-relaxed text-muted-dark">
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
