"use client";

import { motion, useReducedMotion } from "motion/react";

/**
 * The studio plate: a full suspension-bridge scene that builds itself
 * on scroll: towers rise, the cable draws across, hangers drop, the
 * deck lands, and the four stages take their places along the span.
 * Decorative (aria-hidden): the process section below stays the
 * readable source.
 */

// Hanger positions on the main cable (quadratic between the towers).
const HANGERS = [150, 180, 210, 240, 270, 300, 330].map((x) => {
  const t = (x - 120) / 240;
  return { x, y: 40 + 176 * t * (1 - t) };
});

const NODES_X = [144, 206, 274, 336];

export function StudioPlate({
  ghost,
  stages,
  caption,
  rtl,
}: {
  ghost: string;
  stages: string[];
  caption: { latin: string; arabic: string };
  rtl: boolean;
}) {
  const reduce = useReducedMotion();
  const orderedStages = rtl ? [...stages].reverse() : stages;

  const draw = (delay: number, duration = 0.8) =>
    reduce
      ? {}
      : {
          initial: { pathLength: 0 },
          whileInView: { pathLength: 1 },
          viewport: { once: true, amount: 0.5 },
          transition: { duration, delay, ease: [0.65, 0, 0.35, 1] as const },
        };
  const fade = (delay: number) =>
    reduce
      ? {}
      : {
          initial: { opacity: 0 },
          whileInView: { opacity: 1 },
          viewport: { once: true, amount: 0.5 },
          transition: { duration: 0.5, delay },
        };

  return (
    <div
      aria-hidden
      className="relative flex aspect-square items-center justify-center overflow-hidden rounded-card bg-linear-to-br from-accent-tint via-paper-raise to-[#efeaf9]"
    >
      {/* The wordmark, monumental and quiet. */}
      <span className="pointer-events-none absolute -top-9 select-none text-[11rem] font-extrabold leading-none text-accent/[0.06]">
        {ghost}
      </span>

      <svg viewBox="0 0 480 224" fill="none" className="relative w-[88%]">
        <defs>
          <linearGradient id="jisr-cable" x1="0" y1="0" x2="480" y2="0" gradientUnits="userSpaceOnUse">
            <stop offset="0" stopColor="var(--color-accent)" />
            <stop offset="0.5" stopColor="var(--color-accent-bright)" />
            <stop offset="1" stopColor="var(--color-accent)" />
          </linearGradient>
          <filter id="jisr-glow" x="-30%" y="-30%" width="160%" height="160%">
            <feGaussianBlur stdDeviation="5" />
          </filter>
        </defs>

        {/* Cable glow underlay */}
        <motion.path
          d="M10 138 Q66 48 120 40 Q240 128 360 40 Q414 48 470 138"
          stroke="var(--color-accent-bright)"
          strokeWidth="9"
          strokeLinecap="round"
          opacity="0.35"
          filter="url(#jisr-glow)"
          {...draw(0.35, 1.3)}
        />

        {/* Towers rise from the deck */}
        {[120, 360].map((x, i) => (
          <motion.path
            key={x}
            d={`M${x} 152 V38`}
            stroke="var(--color-accent-deep)"
            strokeWidth="9"
            strokeLinecap="round"
            initial={reduce ? undefined : { pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.55, delay: 0.05 + i * 0.12, ease: [0.16, 1, 0.3, 1] }}
          />
        ))}

        {/* Main cable and side spans, one continuous draw */}
        <motion.path
          d="M10 138 Q66 48 120 40 Q240 128 360 40 Q414 48 470 138"
          stroke="url(#jisr-cable)"
          strokeWidth="6.5"
          strokeLinecap="round"
          {...draw(0.35, 1.3)}
        />

        {/* Hangers drop from the cable */}
        {HANGERS.map((h, i) => (
          <motion.path
            key={h.x}
            d={`M${h.x} ${h.y.toFixed(1)} V140`}
            stroke="var(--color-accent-bright)"
            strokeWidth="2.5"
            strokeLinecap="round"
            opacity="0.8"
            {...draw(1.15 + i * 0.05, 0.3)}
          />
        ))}

        {/* Deck */}
        <motion.path
          d="M10 143 H470"
          stroke="var(--color-accent)"
          strokeWidth="7"
          strokeLinecap="round"
          {...draw(0.15, 0.9)}
        />
        <motion.path
          d="M18 151 H462"
          stroke="var(--color-accent-bright)"
          strokeWidth="2"
          strokeLinecap="round"
          opacity="0.5"
          {...draw(0.3, 0.9)}
        />

        {/* Stage nodes on the deck */}
        {NODES_X.map((x, i) => (
          <motion.g key={x} {...fade(1.5 + i * 0.15)}>
            <circle cx={x} cy={143} r={6.5} fill="var(--color-paper-raise)" stroke="var(--color-accent)" strokeWidth="3" />
            <text
              x={x}
              y={176}
              textAnchor="middle"
              fill="var(--color-ink)"
              fontSize={rtl ? 15 : 11.5}
              fontWeight="800"
            >
              {orderedStages[i]}
            </text>
          </motion.g>
        ))}

        {/* Water: quiet dashes beneath the crossing */}
        <motion.path d="M36 198 H150" stroke="var(--color-accent-bright)" strokeWidth="4" strokeLinecap="round" opacity="0.3" {...fade(1.35)} />
        <motion.path d="M196 208 H296" stroke="var(--color-accent-bright)" strokeWidth="4" strokeLinecap="round" opacity="0.22" {...fade(1.45)} />
        <motion.path d="M330 198 H444" stroke="var(--color-accent-bright)" strokeWidth="4" strokeLinecap="round" opacity="0.3" {...fade(1.55)} />
      </svg>

      <span className="absolute bottom-6 flex items-center gap-2.5 text-sm font-bold tracking-[0.18em] text-accent/60">
        {caption.latin}
        <span className="h-0.75 w-4 rounded-full bg-accent/40" />
        {caption.arabic}
      </span>
    </div>
  );
}
