"use client";

import type { CSSProperties, ReactNode } from "react";
import { useEffect, useRef, useState } from "react";

import { subscribeToMediaQueryChange } from "@/lib/mediaQuery";
import { cn } from "@/lib/utils";

type RevealProps = {
  children: ReactNode;
  className?: string;
  direction?: "left" | "right" | "up" | "down";
  delay?: number;
  distance?: number;
  duration?: number;
  once?: boolean;
};

function resolveInitialTransform(direction: RevealProps["direction"], distance: number) {
  switch (direction) {
    case "left":
      return `translate3d(-${distance}px, 0, 0)`;
    case "right":
      return `translate3d(${distance}px, 0, 0)`;
    case "up":
      return `translate3d(0, ${distance}px, 0)`;
    case "down":
      return `translate3d(0, -${distance}px, 0)`;
    default:
      return "translate3d(0, 0, 0)";
  }
}

function isElementInViewport(element: HTMLElement, threshold = 0.2) {
  const rect = element.getBoundingClientRect();
  const viewportHeight = window.innerHeight || document.documentElement.clientHeight;
  const visibleTop = rect.top < viewportHeight * (1 - threshold);
  const visibleBottom = rect.bottom > viewportHeight * threshold;

  return visibleTop && visibleBottom;
}

export function Reveal({
  children,
  className,
  direction = "left",
  delay = 0,
  distance = 48,
  duration = 0.6,
  once = true,
}: RevealProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [isVisible, setIsVisible] = useState(true);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const syncPreference = () => setPrefersReducedMotion(mediaQuery.matches);

    syncPreference();
    return subscribeToMediaQueryChange(mediaQuery, syncPreference);
  }, []);

  useEffect(() => {
    if (prefersReducedMotion) return;

    if (typeof window.IntersectionObserver !== "function") {
      return;
    }

    const element = ref.current;
    if (!element) return;

    if (once && isElementInViewport(element)) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (!entry) return;

        if (entry.isIntersecting) {
          setIsVisible(true);
          if (once) observer.disconnect();
          return;
        }

        setIsVisible(false);
      },
      {
        threshold: 0.2,
      },
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [once, prefersReducedMotion]);

  const style: CSSProperties = prefersReducedMotion
    ? {}
    : {
        opacity: isVisible ? 1 : 0,
        transform:
          isVisible
            ? "translate3d(0, 0, 0)"
            : resolveInitialTransform(direction, distance),
        transitionDuration: `${duration}s`,
        transitionDelay: `${delay}s`,
        transitionTimingFunction: "ease-out",
        transitionProperty: "opacity, transform",
      };

  return (
    <div ref={ref} className={cn("will-change-transform", className)} style={style}>
      {children}
    </div>
  );
}
