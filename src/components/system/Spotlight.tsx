"use client";

import { useRef } from "react";

/**
 * Cursor-tracked spotlight for cards: a soft violet glow follows the
 * pointer. CSS-variable driven, no re-renders, inert on touch.
 */
export function Spotlight({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  return (
    <div
      ref={ref}
      className={`group/spot relative ${className}`}
      onPointerMove={(e) => {
        if (e.pointerType !== "mouse" || !ref.current) return;
        const rect = ref.current.getBoundingClientRect();
        ref.current.style.setProperty("--spot-x", `${e.clientX - rect.left}px`);
        ref.current.style.setProperty("--spot-y", `${e.clientY - rect.top}px`);
      }}
    >
      {children}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 rounded-card opacity-0 transition-opacity duration-300 group-hover/spot:opacity-100"
        style={{
          background:
            "radial-gradient(300px circle at var(--spot-x, 50%) var(--spot-y, 50%), rgb(96 35 192 / 0.09), transparent 70%)",
        }}
      />
    </div>
  );
}
