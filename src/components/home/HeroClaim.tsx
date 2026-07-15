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
}: {
  pre: string;
  accent: string;
  post: string;
  joinPost: boolean;
}) {
  const reduce = useReducedMotion();
  const part = (i: number) =>
    reduce
      ? {}
      : {
          initial: { opacity: 0, y: 26, filter: "blur(10px)" },
          animate: { opacity: 1, y: 0, filter: "blur(0px)" },
          transition: { duration: 0.9, delay: 0.1 + i * 0.15, ease: [0.16, 1, 0.3, 1] as const },
        };

  return (
    <h1 className="text-display max-w-[22ch] font-extrabold text-ink text-balance">
      <motion.span className="inline-block" {...part(0)}>
        {pre}
      </motion.span>{" "}
      <motion.span className="inline-block" {...part(1)}>
        <span className="text-accent">{accent}</span>
        {joinPost ? <span className="text-ink">{post}</span> : null}
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
