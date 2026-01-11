"use client";

import type { ReactNode } from "react";
import { motion, type Variants, useReducedMotion } from "motion/react";

import { cn } from "@/lib/utils";

type RevealProps = {
  children: ReactNode;
  className?: string;
  direction?: "left" | "right";
  delay?: number;
  distance?: number;
  duration?: number;
  once?: boolean;
};

export function Reveal({
  children,
  className,
  direction = "left",
  delay = 0,
  distance = 48,
  duration = 0.6,
  once = true,
}: RevealProps) {
  const prefersReducedMotion = useReducedMotion();
  const offset = direction === "left" ? -distance : distance;
  const variants: Variants = {
    hidden: prefersReducedMotion
      ? { opacity: 1, x: 0 }
      : { opacity: 0, x: offset },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <motion.div
      className={cn("will-change-transform", className)}
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount: 0.2 }}
      transition={
        prefersReducedMotion
          ? { duration: 0 }
          : { duration, delay, ease: "easeOut" }
      }
    >
      {children}
    </motion.div>
  );
}
