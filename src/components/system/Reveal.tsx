"use client";

import { motion, useReducedMotion } from "motion/react";

/**
 * Scroll-entrance for section content: one soft rise, once, honoring
 * prefers-reduced-motion. Motivation: hierarchy, content arrives in
 * reading order as the visitor reaches it.
 */
export function Reveal({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      className={className}
      // Under reduced motion the visible values are the *initial* state,
      // so the SSR-injected hidden style is overwritten on mount.
      initial={reduce ? { opacity: 1, y: 0 } : { opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15, margin: "0px 0px -8% 0px" }}
      transition={{ duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  );
}
