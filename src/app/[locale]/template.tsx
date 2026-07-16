"use client";

import { motion, useReducedMotion } from "motion/react";

/**
 * Route transition: each page fades up while the chrome persists.
 * Motivation: spatial continuity between pages. Instant under
 * reduced motion.
 */
export default function Template({ children }: { children: React.ReactNode }) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      initial={reduce ? false : { opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  );
}
