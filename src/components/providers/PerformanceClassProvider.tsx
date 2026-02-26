"use client";

import { useEffect } from "react";

import { usePerformanceTier } from "@/hooks/usePerformanceTier";

const TIER_CLASSES = ["perf-tier-high", "perf-tier-medium", "perf-tier-low"];

export function PerformanceClassProvider() {
  const tier = usePerformanceTier();

  useEffect(() => {
    const html = document.documentElement;

    html.classList.remove(...TIER_CLASSES);
    html.classList.add(`perf-tier-${tier}`);
    html.dataset.performanceTier = tier;
  }, [tier]);

  return null;
}

