"use client";

import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useSpring } from "motion/react";

/**
 * The four stages on one line: on wide screens the accent line draws
 * across the stages as the visitor scrolls, progress across the
 * engagement mirrored by progress down the page. Static hairlines on
 * smaller screens and under reduced motion.
 */
export function ProcessFlow({
  stages,
  digits,
}: {
  stages: { name: string; detail: string }[];
  digits: string[];
}) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.82", "end 0.55"],
  });
  const scaleX = useSpring(scrollYProgress, { stiffness: 90, damping: 26 });

  return (
    <div ref={ref} className="relative mt-12">
      {/* The span: track and scroll-driven fill (desktop only). */}
      <div aria-hidden className="absolute inset-x-0 top-0 hidden h-px bg-line xl:block" />
      <motion.div
        aria-hidden
        style={reduce ? undefined : { scaleX }}
        className="absolute inset-x-0 top-0 hidden h-[2px] origin-left bg-accent rtl:origin-right xl:block"
      />

      <ol className="grid gap-x-10 gap-y-10 md:grid-cols-2 xl:grid-cols-4">
        {stages.map((stage, i) => (
          <li key={stage.name} className="relative border-t border-line pt-6 xl:border-t-0 xl:pt-9">
            <span
              aria-hidden
              className="absolute -top-[5px] start-0 hidden size-2.5 rounded-full border-2 border-accent bg-paper xl:block"
            />
            <div className="flex items-start gap-5 xl:block">
              <span aria-hidden className="text-3xl font-extrabold leading-none text-accent/60">
                {digits[i]}
              </span>
              <div className="xl:mt-3">
                <h3 className="text-heading font-extrabold text-ink">{stage.name}</h3>
                <p className="mt-2 max-w-[48ch] text-[0.95rem] leading-relaxed text-ink-soft">
                  {stage.detail}
                </p>
              </div>
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
}
