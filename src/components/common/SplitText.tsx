"use client";

import { useMemo } from "react";
import { motion, useReducedMotion } from "motion/react";

import { cn } from "@/lib/utils";

type SplitTextProps = {
  text: string;
  className?: string;
  delay?: number;
  stagger?: number;
  duration?: number;
  yOffset?: number;
  splitBy?: "char" | "word";
  preserveWhitespace?: boolean;
};

export function SplitText({
  text,
  className,
  delay = 0,
  stagger = 0.04,
  duration = 0.5,
  yOffset = 12,
  splitBy = "char",
  preserveWhitespace = true,
}: SplitTextProps) {
  const prefersReducedMotion = useReducedMotion();
  const characters = useMemo(() => Array.from(text), [text]);
  const wordTokens = useMemo(() => {
    if (splitBy !== "word") return [];

    const parts = text.split(/(\s+)/);
    let charOffset = 0;

    return parts
      .filter((part) => part.length > 0)
      .map((part) => {
        if (/^\s+$/.test(part)) {
          charOffset += part.length;
          return { type: "space" as const, value: part };
        }

        const chars = Array.from(part);
        const startIndex = charOffset;
        charOffset += chars.length;

        return {
          type: "word" as const,
          chars,
          startIndex,
        };
      });
  }, [splitBy, text]);

  const wrapperClassName = cn(
    preserveWhitespace ? "whitespace-pre" : "whitespace-normal",
    className
  );

  if (prefersReducedMotion) {
    return <span className={wrapperClassName}>{text}</span>;
  }

  if (splitBy === "word") {
    return (
      <span className={wrapperClassName}>
        <span className="sr-only">{text}</span>
        <span aria-hidden="true">
          {wordTokens.map((token, tokenIndex) => {
            if (token.type === "space") {
              return (
                <span key={`space-${tokenIndex}`}>
                  {preserveWhitespace
                    ? token.value.replace(/ /g, "\u00A0")
                    : token.value}
                </span>
              );
            }

            const wordDelay = delay + token.startIndex * stagger;

            return (
              <motion.span
                key={`word-${tokenIndex}`}
                className="inline-block"
                initial="hidden"
                animate="visible"
                transition={{
                  staggerChildren: stagger,
                  delayChildren: wordDelay,
                }}
              >
                {token.chars.map((char, charIndex) => (
                  <motion.span
                    key={`${char}-${charIndex}`}
                    className="inline-block"
                    variants={{
                      hidden: { opacity: 0, y: yOffset },
                      visible: {
                        opacity: 1,
                        y: 0,
                        transition: { duration, ease: "easeOut" },
                      },
                    }}
                  >
                    {char}
                  </motion.span>
                ))}
              </motion.span>
            );
          })}
        </span>
      </span>
    );
  }

  return (
    <span className={wrapperClassName}>
      <span className="sr-only">{text}</span>
      <motion.span
        aria-hidden="true"
        initial="hidden"
        animate="visible"
        variants={{
          visible: {
            transition: {
              staggerChildren: stagger,
              delayChildren: delay,
            },
          },
          hidden: {},
        }}
      >
        {characters.map((char, index) => (
          <motion.span
            key={`${char}-${index}`}
            className="inline-block"
            variants={{
              hidden: { opacity: 0, y: yOffset },
              visible: {
                opacity: 1,
                y: 0,
                transition: { duration, ease: "easeOut" },
              },
            }}
          >
            {char === " " && preserveWhitespace ? "\u00A0" : char}
          </motion.span>
        ))}
      </motion.span>
    </span>
  );
}
