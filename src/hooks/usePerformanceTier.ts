"use client";

import { useEffect, useState } from "react";

import { subscribeToMediaQueryChange } from "@/lib/mediaQuery";

export type PerformanceTier = "high" | "medium" | "low";

type NavigatorWithHints = Navigator & {
  deviceMemory?: number;
  connection?: {
    saveData?: boolean;
    effectiveType?: string;
  };
};

const MOBILE_BREAKPOINT = 768;

function resolvePerformanceTier(): PerformanceTier {
  if (typeof window === "undefined") {
    return "high";
  }

  const nav = window.navigator as NavigatorWithHints;
  const reducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)",
  ).matches;
  const saveData = Boolean(nav.connection?.saveData);
  const hasMemoryHint = typeof nav.deviceMemory === "number";
  const deviceMemory = hasMemoryHint ? (nav.deviceMemory as number) : 4;
  const cpuCores = nav.hardwareConcurrency ?? 8;
  const isMobileViewport = window.innerWidth < MOBILE_BREAKPOINT;

  if (reducedMotion || saveData || deviceMemory <= 2 || cpuCores <= 4) {
    return "low";
  }

  if (isMobileViewport || deviceMemory <= 6 || cpuCores <= 10) {
    return "medium";
  }

  return "high";
}

export function usePerformanceTier() {
  const [tier, setTier] = useState<PerformanceTier>("high");

  useEffect(() => {
    const updateTier = () => {
      setTier(resolvePerformanceTier());
    };

    updateTier();

    window.addEventListener("resize", updateTier, { passive: true });
    window.addEventListener("orientationchange", updateTier, { passive: true });

    const reduceMotionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const unsubscribe = subscribeToMediaQueryChange(reduceMotionQuery, updateTier);

    return () => {
      window.removeEventListener("resize", updateTier);
      window.removeEventListener("orientationchange", updateTier);
      unsubscribe();
    };
  }, []);

  return tier;
}
