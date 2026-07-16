"use client";

import { motion, useReducedMotion } from "motion/react";

/**
 * The studio plate: the brand's whole story in one picture. The cable
 * draws itself over the deck, and the four stages land along the span
 * as nodes. Decorative (aria-hidden): the real stages are read in the
 * process section below.
 */
export function StudioPlate({
  ghost,
  stages,
  caption,
}: {
  ghost: string;
  stages: string[];
  caption: { latin: string; arabic: string };
}) {
  const reduce = useReducedMotion();

  return (
    <div
      aria-hidden
      className="relative flex aspect-square items-center justify-center overflow-hidden rounded-card bg-linear-to-br from-accent-tint via-paper-raise to-[#efeaf9]"
    >
      {/* The wordmark, monumental and quiet. */}
      <span className="pointer-events-none absolute -top-8 select-none text-[11rem] font-extrabold leading-none text-accent/[0.06]">
        {ghost}
      </span>

      <div className="relative w-3/4">
        {/* Cable, drawing itself across. */}
        <svg viewBox="0 0 400 96" fill="none" className="w-full rtl:-scale-x-100">
          <motion.path
            d="M12 92 Q200 -28 388 92"
            stroke="var(--color-accent)"
            strokeWidth="9"
            strokeLinecap="round"
            initial={reduce ? undefined : { pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: 1.4, ease: [0.65, 0, 0.35, 1] }}
          />
        </svg>

        {/* Deck with the four stages as nodes. */}
        <div className="relative mt-0 border-t-2 border-accent-bright/80">
          <div className="absolute inset-x-0 -top-[5px] flex justify-between px-0.5">
            {stages.map((stage, i) => (
              <motion.span
                key={stage}
                className="flex flex-col items-center"
                initial={reduce ? false : { opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.5 + i * 0.18, ease: [0.16, 1, 0.3, 1] }}
              >
                <span className="size-2 rounded-full border-2 border-accent bg-paper-raise" />
                <span className="mt-3 text-xs font-extrabold text-ink-soft">{stage}</span>
              </motion.span>
            ))}
          </div>
        </div>
      </div>

      <span className="absolute bottom-6 flex items-center gap-2.5 text-sm font-bold tracking-[0.18em] text-accent/60">
        {caption.latin}
        <span className="h-0.75 w-4 rounded-full bg-accent/40" />
        {caption.arabic}
      </span>
    </div>
  );
}
