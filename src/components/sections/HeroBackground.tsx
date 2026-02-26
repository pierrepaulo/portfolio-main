"use client";

import { useEffect, useRef, useState } from "react";

import { usePerformanceTier } from "@/hooks/usePerformanceTier";

const sciFiGradient = ["#00f0ff", "#0099ff", "#0055ff"];

function useIsMobile(breakpoint = 768) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < breakpoint);
    checkMobile();
    window.addEventListener("resize", checkMobile, { passive: true });

    return () => window.removeEventListener("resize", checkMobile);
  }, [breakpoint]);

  return isMobile;
}

export function HeroBackground() {
  const isMobile = useIsMobile();
  const tier = usePerformanceTier();
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const [isHeroVisible, setIsHeroVisible] = useState(false);
  const [isDocumentVisible, setIsDocumentVisible] = useState(true);
  const [hasLoadedLines, setHasLoadedLines] = useState(false);
  const [FloatingLinesComponent, setFloatingLinesComponent] = useState<
    null | (typeof import("@/components/FloatingLines"))["default"]
  >(null);

  const canUseAnimatedBackground = !isMobile && tier === "high";
  const shouldRenderLines =
    canUseAnimatedBackground && hasLoadedLines && isHeroVisible && isDocumentVisible;

  useEffect(() => {
    const element = sectionRef.current;
    if (!element) return;

    if (typeof window.IntersectionObserver !== "function") {
      setIsHeroVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        setIsHeroVisible(Boolean(entry?.isIntersecting));
      },
      {
        rootMargin: "-10% 0px -10% 0px",
        threshold: 0.05,
      },
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const onVisibilityChange = () => {
      setIsDocumentVisible(document.visibilityState === "visible");
    };

    onVisibilityChange();
    document.addEventListener("visibilitychange", onVisibilityChange);

    return () => document.removeEventListener("visibilitychange", onVisibilityChange);
  }, []);

  useEffect(() => {
    if (!canUseAnimatedBackground || !isHeroVisible || !isDocumentVisible) return;

    let timeoutId = 0;
    let idleId: number | undefined;

    const start = () => {
      timeoutId = window.setTimeout(() => setHasLoadedLines(true), 120);
    };

    if ("requestIdleCallback" in window) {
      idleId = window.requestIdleCallback(() => start(), { timeout: 1000 });
    } else {
      start();
    }

    return () => {
      window.clearTimeout(timeoutId);
      if (typeof idleId === "number" && "cancelIdleCallback" in window) {
        window.cancelIdleCallback(idleId);
      }
    };
  }, [canUseAnimatedBackground, isHeroVisible, isDocumentVisible]);

  useEffect(() => {
    if (!shouldRenderLines || FloatingLinesComponent) return;

    let cancelled = false;

    import("@/components/FloatingLines").then((mod) => {
      if (!cancelled) {
        setFloatingLinesComponent(() => mod.default);
      }
    });

    return () => {
      cancelled = true;
    };
  }, [shouldRenderLines, FloatingLinesComponent]);

  return (
    <div ref={sectionRef} className="absolute inset-0 z-0">
      {shouldRenderLines && FloatingLinesComponent ? (
        <FloatingLinesComponent
          linesGradient={sciFiGradient}
          animationSpeed={0.3}
          interactive
          parallax
          mixBlendMode="screen"
          lineDistance={15}
          lineCount={5}
          maxFps={60}
          dprCap={1.5}
          isActive={shouldRenderLines}
        />
      ) : (
        <div className="absolute inset-0 bg-linear-to-br from-primary/10 via-transparent to-blue-600/10" />
      )}

      <div className="absolute inset-0 bg-[linear-gradient(rgba(2,4,10,0.8),rgba(2,4,10,0.6))] pointer-events-none" />
    </div>
  );
}
