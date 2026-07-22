"use client";

import { useEffect, useState } from "react";
import { ArrowRight } from "@phosphor-icons/react";
import { motion, useReducedMotion } from "motion/react";

/**
 * The hero's second read: a soft highlight strolls across the three
 * engagement models, inviting the eye back after the claim. Pauses on
 * hover, inert under reduced motion.
 */
export function ModelsPanel({
  heading,
  items,
}: {
  heading: string;
  items: { name: string; forWho: string }[];
}) {
  const reduce = useReducedMotion();
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (reduce || paused) return;
    const id = setInterval(() => setActive((a) => (a + 1) % items.length), 3_400);
    return () => clearInterval(id);
  }, [reduce, paused, items.length]);

  return (
    <aside
      className="relative overflow-hidden rounded-card border border-white/15 bg-white/10 p-7 shadow-raise backdrop-blur-md"
      onPointerEnter={() => setPaused(true)}
      onPointerLeave={() => setPaused(false)}
    >
      <span
        aria-hidden
        className="absolute inset-x-0 top-0 h-1 bg-linear-to-r from-accent via-accent-bright to-accent"
      />
      <p className="flex items-center gap-2.5 text-sm font-bold tracking-[0.12em] text-accent-bright">
        <span aria-hidden className="h-px w-5 bg-accent-bright" />
        {heading}
      </p>
      <ul className="mt-4 divide-y divide-white/10">
        {items.map((item, i) => {
          const lit = !reduce && !paused && active === i;
          return (
            <motion.li
              key={item.name}
              initial={reduce ? false : { opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.55 + i * 0.13, ease: [0.16, 1, 0.3, 1] }}
            >
              <a
                href="#models"
                className={`group -mx-3 block rounded-field px-3 py-4 transition-colors duration-500 ${
                  lit ? "bg-white/10" : ""
                }`}
              >
                <span
                  className={`flex items-center justify-between gap-3 font-extrabold transition-colors duration-500 group-hover:text-accent-bright ${
                    lit ? "text-accent-bright" : "text-white"
                  }`}
                >
                  {item.name}
                  <ArrowRight
                    aria-hidden
                    className={`size-4 shrink-0 transition-[color,transform] duration-500 group-hover:translate-x-0.5 group-hover:text-accent-bright rtl:-scale-x-100 rtl:group-hover:-translate-x-0.5 ${
                      lit
                        ? "translate-x-0.5 text-accent-bright rtl:-translate-x-0.5"
                        : "text-night-soft"
                    }`}
                  />
                </span>
                <span className="mt-1 block text-sm leading-relaxed text-night-soft">
                  {item.forWho}
                </span>
              </a>
            </motion.li>
          );
        })}
      </ul>
    </aside>
  );
}
