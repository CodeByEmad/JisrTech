"use client";

import { useEffect, useState } from "react";
import { ArrowRight } from "@phosphor-icons/react";
import { useReducedMotion } from "motion/react";

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
      className="rounded-card border border-line bg-paper-raise/70 p-7 shadow-raise backdrop-blur-md"
      onPointerEnter={() => setPaused(true)}
      onPointerLeave={() => setPaused(false)}
    >
      <p className="flex items-center gap-2.5 text-sm font-bold tracking-[0.12em] text-accent">
        <span aria-hidden className="h-px w-5 bg-accent" />
        {heading}
      </p>
      <ul className="mt-4 divide-y divide-line">
        {items.map((item, i) => {
          const lit = !reduce && !paused && active === i;
          return (
            <li key={item.name}>
              <a
                href="#models"
                className={`group -mx-3 block rounded-field px-3 py-4 transition-colors duration-500 ${
                  lit ? "bg-accent-tint/70" : ""
                }`}
              >
                <span
                  className={`flex items-center justify-between gap-3 font-extrabold transition-colors duration-500 group-hover:text-accent ${
                    lit ? "text-accent-deep" : "text-ink"
                  }`}
                >
                  {item.name}
                  <ArrowRight
                    aria-hidden
                    className={`size-4 shrink-0 transition-[color,transform] duration-500 group-hover:translate-x-0.5 group-hover:text-accent rtl:-scale-x-100 rtl:group-hover:-translate-x-0.5 ${
                      lit ? "translate-x-0.5 text-accent rtl:-translate-x-0.5" : "text-ink-soft"
                    }`}
                  />
                </span>
                <span className="mt-1 block text-sm leading-relaxed text-ink-soft">
                  {item.forWho}
                </span>
              </a>
            </li>
          );
        })}
      </ul>
    </aside>
  );
}
