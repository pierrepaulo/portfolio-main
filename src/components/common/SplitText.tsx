"use client";

import type { CSSProperties } from "react";
import { useEffect, useMemo, useState } from "react";

import { subscribeToMediaQueryChange } from "@/lib/mediaQuery";
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

type WordToken =
  | { type: "space"; value: string }
  | { type: "word"; chars: string[]; startIndex: number };

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
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const characters = useMemo(() => Array.from(text), [text]);

  const wordTokens = useMemo<WordToken[]>(() => {
    if (splitBy !== "word") return [];

    const parts = text.split(/(\s+)/);
    let charOffset = 0;

    return parts
      .filter((part) => part.length > 0)
      .map((part) => {
        if (/^\s+$/.test(part)) {
          charOffset += part.length;
          return { type: "space", value: part };
        }

        const chars = Array.from(part);
        const startIndex = charOffset;
        charOffset += chars.length;

        return { type: "word", chars, startIndex };
      });
  }, [splitBy, text]);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const syncPreference = () => setPrefersReducedMotion(mediaQuery.matches);

    syncPreference();
    return subscribeToMediaQueryChange(mediaQuery, syncPreference);
  }, []);

  const wrapperClassName = cn(
    preserveWhitespace ? "whitespace-pre" : "whitespace-normal",
    className,
  );

  if (prefersReducedMotion) {
    return <span className={wrapperClassName}>{text}</span>;
  }

  const getAnimatedStyle = (index: number): CSSProperties => {
    const style: CSSProperties & Record<"--split-text-y-offset", string> = {
      display: "inline-block",
      "--split-text-y-offset": `${yOffset}px`,
      animationName: "split-text-in",
      animationDuration: `${duration}s`,
      animationDelay: `${delay + index * stagger}s`,
      animationTimingFunction: "ease-out",
      animationFillMode: "both",
    };

    return style;
  };

  if (splitBy === "word") {
    return (
      <span className={wrapperClassName}>
        <span className="sr-only">{text}</span>
        <span aria-hidden="true">
          {wordTokens.map((token, tokenIndex) => {
            if (token.type === "space") {
              return (
                <span key={`space-${tokenIndex}`}>
                  {preserveWhitespace ? token.value.replace(/ /g, "\u00A0") : token.value}
                </span>
              );
            }

            return (
              <span key={`word-${tokenIndex}`} className="inline-block">
                {token.chars.map((char, charIndex) => (
                  <span
                    key={`${char}-${charIndex}`}
                    style={getAnimatedStyle(token.startIndex + charIndex)}
                  >
                    {char}
                  </span>
                ))}
              </span>
            );
          })}
        </span>
      </span>
    );
  }

  return (
    <span className={wrapperClassName}>
      <span className="sr-only">{text}</span>
      <span aria-hidden="true">
        {characters.map((char, index) => (
          <span key={`${char}-${index}`} style={getAnimatedStyle(index)}>
            {char === " " && preserveWhitespace ? "\u00A0" : char}
          </span>
        ))}
      </span>
    </span>
  );
}
