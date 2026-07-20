"use client";

import { motion, useReducedMotion, useScroll, useSpring } from "motion/react";

/**
 * A hairline of accent at the very top that fills with reading
 * progress. RTL-aware origin; absent under reduced motion (it is
 * pure motion feedback).
 */
export function ScrollProgress() {
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 140, damping: 28 });

  if (reduce) return null;

  return (
    <motion.div
      aria-hidden
      style={{ scaleX }}
      className="fixed inset-x-0 top-0 z-[60] h-0.75 origin-left bg-accent rtl:origin-right"
    />
  );
}
