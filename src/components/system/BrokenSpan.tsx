"use client";

import { motion, useReducedMotion } from "motion/react";

/**
 * The 404 mark: the crossing with its middle section missing. Both
 * halves draw in from the banks and stop short; the gap is the page
 * that isn't here. Decorative, aria-hidden by the caller.
 */
export function BrokenSpan() {
  const reduce = useReducedMotion();
  const draw = (delay: number) =>
    reduce
      ? {}
      : {
          initial: { pathLength: 0 },
          animate: { pathLength: 1 },
          transition: { duration: 0.9, delay, ease: [0.65, 0, 0.35, 1] as const },
        };

  return (
    <svg viewBox="0 0 480 120" fill="none" className="mx-auto w-72 max-w-full sm:w-96">
      {/* Towers */}
      {[120, 360].map((x, i) => (
        <motion.path
          key={x}
          d={`M${x} 96 V28`}
          stroke="var(--color-accent-deep)"
          strokeWidth="8"
          strokeLinecap="round"
          initial={reduce ? undefined : { pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 0.5, delay: 0.05 + i * 0.1, ease: [0.16, 1, 0.3, 1] }}
        />
      ))}
      {/* Cable halves, stopping short of the middle */}
      <motion.path
        d="M10 88 Q66 38 120 30 Q168 52 196 62"
        stroke="var(--color-accent)"
        strokeWidth="6"
        strokeLinecap="round"
        {...draw(0.3)}
      />
      <motion.path
        d="M470 88 Q414 38 360 30 Q312 52 284 62"
        stroke="var(--color-accent)"
        strokeWidth="6"
        strokeLinecap="round"
        {...draw(0.3)}
      />
      {/* Deck halves with the gap */}
      <motion.path d="M10 90 H198" stroke="var(--color-accent)" strokeWidth="6.5" strokeLinecap="round" {...draw(0.15)} />
      <motion.path d="M282 90 H470" stroke="var(--color-accent)" strokeWidth="6.5" strokeLinecap="round" {...draw(0.15)} />
      {/* The missing piece, hinted */}
      <motion.path
        d="M214 90 H266"
        stroke="var(--color-accent-bright)"
        strokeWidth="6.5"
        strokeLinecap="round"
        strokeDasharray="2 14"
        initial={reduce ? undefined : { opacity: 0 }}
        animate={{ opacity: 0.7 }}
        transition={{ duration: 0.6, delay: 1.1 }}
      />
    </svg>
  );
}
