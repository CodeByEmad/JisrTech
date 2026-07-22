"use client";

import { motion, useReducedMotion } from "motion/react";

/**
 * The claim arrives in three staggered breaths, blur resolving into
 * focus. Accent words carry the brand violet (reference register:
 * colored words inside the headline, no decoration).
 */
export function HeroClaim({
  pre,
  accent,
  post,
  joinPost,
  dark = false,
  className = "",
}: {
  pre: string;
  accent: string;
  post: string;
  joinPost: boolean;
  dark?: boolean;
  className?: string;
}) {
  const reduce = useReducedMotion();
  // Opacity stays 1 so the claim paints at first render (it is the LCP
  // element); only blur and position resolve.
  const part = (i: number) =>
    reduce
      ? {}
      : {
          initial: { y: 22, filter: "blur(8px)" },
          animate: { y: 0, filter: "blur(0px)" },
          transition: { duration: 0.85, delay: 0.08 + i * 0.14, ease: [0.16, 1, 0.3, 1] as const },
        };

  return (
    <h1
      className={`text-display max-w-[22ch] font-extrabold text-balance ${
        dark ? "text-white" : "text-ink"
      } ${className}`}
    >
      <motion.span className="inline-block" {...part(0)}>
        {pre}
      </motion.span>{" "}
      <motion.span className="inline-block" {...part(1)}>
        <span className={dark ? "text-accent-bright" : "text-accent"}>{accent}</span>
        {joinPost ? <span className={dark ? "text-white" : "text-ink"}>{post}</span> : null}
      </motion.span>
      {!joinPost && (
        <>
          {" "}
          <motion.span className="inline-block" {...part(2)}>
            {post}
          </motion.span>
        </>
      )}
    </h1>
  );
}
