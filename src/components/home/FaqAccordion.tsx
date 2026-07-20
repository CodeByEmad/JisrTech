"use client";

import { useId, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { Plus } from "@phosphor-icons/react";

/**
 * Fluid single-open accordion, spring height with no bounce (adapted
 * from a 21st.dev pattern, rebuilt on our own motion dependency).
 * Reduced motion collapses to instant open/close.
 */
export function FaqAccordion({ items }: { items: { q: string; a: string }[] }) {
  const [open, setOpen] = useState<number | null>(null);
  const reduce = useReducedMotion();
  const baseId = useId();

  return (
    <div className="border-t border-line">
      {items.map((item, i) => {
        const isOpen = open === i;
        const buttonId = `${baseId}-q-${i}`;
        const panelId = `${baseId}-a-${i}`;
        return (
          <div key={item.q} className="border-b border-line">
            <button
              type="button"
              id={buttonId}
              aria-expanded={isOpen}
              aria-controls={panelId}
              onClick={() => setOpen(isOpen ? null : i)}
              className="-mx-3 flex w-[calc(100%+1.5rem)] cursor-pointer items-center justify-between gap-6 rounded-field px-3 py-5 text-start transition-colors duration-200 hover:bg-accent-tint/40"
            >
              <span className="text-lg font-bold text-ink">{item.q}</span>
              <motion.span
                aria-hidden
                animate={{ rotate: isOpen ? 45 : 0 }}
                transition={
                  reduce ? { duration: 0 } : { type: "spring", duration: 0.3, bounce: 0 }
                }
                className="shrink-0 text-accent"
              >
                <Plus weight="bold" className="size-5" />
              </motion.span>
            </button>
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  id={panelId}
                  role="region"
                  aria-labelledby={buttonId}
                  initial={reduce ? false : { height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={reduce ? undefined : { height: 0, opacity: 0 }}
                  transition={
                    reduce ? { duration: 0 } : { type: "spring", duration: 0.4, bounce: 0 }
                  }
                  className="overflow-hidden"
                >
                  <p className="max-w-[70ch] pb-6 leading-relaxed text-ink-soft">{item.a}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
