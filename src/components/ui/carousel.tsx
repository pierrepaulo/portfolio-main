"use client";

import * as React from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export type CarouselSlide = {
  src: string;
  alt: string;
  priority?: boolean;
};

type CarouselProps = {
  slides: CarouselSlide[];
  className?: string;
  imageClassName?: string;
  showIndicators?: boolean;
  showSlideOverlay?: boolean;
  loop?: boolean;
};

export function Carousel({
  slides,
  className,
  imageClassName,
  showIndicators = true,
  showSlideOverlay = true,
  loop = true,
}: CarouselProps) {
  const viewportRef = React.useRef<HTMLDivElement | null>(null);
  const [activeIndex, setActiveIndex] = React.useState(0);
  const slideCount = slides.length;
  const hasNavigation = slideCount > 1;

  const scrollToIndex = React.useCallback(
    (index: number, behavior: ScrollBehavior = "smooth") => {
      const viewport = viewportRef.current;
      if (!viewport || slideCount === 0) return;

      const nextIndex = Math.max(0, Math.min(index, slideCount - 1));
      const left = nextIndex * viewport.clientWidth;
      viewport.scrollTo({ left, behavior });
      setActiveIndex(nextIndex);
    },
    [slideCount],
  );

  const handlePrev = React.useCallback(() => {
    if (!hasNavigation) return;
    if (loop) {
      const prevIndex = activeIndex === 0 ? slideCount - 1 : activeIndex - 1;
      scrollToIndex(prevIndex);
      return;
    }

    scrollToIndex(activeIndex - 1);
  }, [activeIndex, hasNavigation, loop, scrollToIndex, slideCount]);

  const handleNext = React.useCallback(() => {
    if (!hasNavigation) return;
    if (loop) {
      const nextIndex = activeIndex === slideCount - 1 ? 0 : activeIndex + 1;
      scrollToIndex(nextIndex);
      return;
    }

    scrollToIndex(activeIndex + 1);
  }, [activeIndex, hasNavigation, loop, scrollToIndex, slideCount]);

  const handleKeyDown = React.useCallback(
    (event: React.KeyboardEvent<HTMLDivElement>) => {
      if (!hasNavigation) return;

      if (event.key === "ArrowLeft") {
        event.preventDefault();
        handlePrev();
      }

      if (event.key === "ArrowRight") {
        event.preventDefault();
        handleNext();
      }
    },
    [handleNext, handlePrev, hasNavigation],
  );

  React.useEffect(() => {
    const viewport = viewportRef.current;
    if (!viewport || slideCount === 0) return;

    let ticking = false;

    const onScroll = () => {
      if (ticking) return;
      ticking = true;

      window.requestAnimationFrame(() => {
        const width = viewport.clientWidth || 1;
        const index = Math.round(viewport.scrollLeft / width);
        const clampedIndex = Math.max(0, Math.min(index, slideCount - 1));
        setActiveIndex((prev) => (prev === clampedIndex ? prev : clampedIndex));
        ticking = false;
      });
    };

    viewport.addEventListener("scroll", onScroll, { passive: true });
    return () => viewport.removeEventListener("scroll", onScroll);
  }, [slideCount]);

  React.useEffect(() => {
    const handleResize = () => scrollToIndex(activeIndex, "auto");

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [activeIndex, scrollToIndex]);

  React.useEffect(() => {
    if (activeIndex > slideCount - 1) {
      setActiveIndex(Math.max(0, slideCount - 1));
    }
  }, [activeIndex, slideCount]);

  if (slideCount === 0) {
    return null;
  }

  return (
    <div
      className={cn("relative h-full w-full", className)}
      role="region"
      aria-roledescription="carousel"
      aria-label="Galeria de imagens do projeto"
      onKeyDown={handleKeyDown}
      tabIndex={0}
      data-slot="carousel-root"
    >
      <div
        ref={viewportRef}
        className="case-carousel-viewport h-full overflow-x-auto scroll-smooth snap-x snap-mandatory [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
      >
        <div className="case-carousel-track flex h-full">
          {slides.map((slide, index) => (
            <div
              key={`${slide.src}-${index}`}
              className="case-carousel-slide relative h-full min-w-full snap-start"
              role="group"
              aria-roledescription="slide"
              aria-label={`Slide ${index + 1} de ${slideCount}`}
            >
              <Image
                src={slide.src}
                alt={slide.alt}
                fill
                priority={slide.priority}
                loading={slide.priority ? undefined : "lazy"}
                className={cn("object-contain object-center", imageClassName)}
                sizes="(min-width: 1280px) 1200px, (min-width: 768px) 90vw, 100vw"
                quality={70}
              />
              {showSlideOverlay ? (
                <div
                  className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.12),rgba(0,0,0,0.35)),linear-gradient(90deg,rgba(0,240,255,0.08),transparent_32%,transparent_68%,rgba(0,240,255,0.08))]"
                  aria-hidden="true"
                />
              ) : null}
            </div>
          ))}
        </div>
      </div>

      {hasNavigation ? (
        <div className="pointer-events-none absolute inset-x-0 top-1/2 z-30 flex -translate-y-1/2 items-center justify-between px-3">
          <Button
            type="button"
            size="icon"
            variant="outline"
            onClick={handlePrev}
            disabled={!loop && activeIndex === 0}
            className="pointer-events-auto border-primary/55 bg-black/45 text-primary hover:bg-primary hover:text-black"
            aria-label="Imagem anterior"
          >
            <ChevronLeft />
          </Button>

          <Button
            type="button"
            size="icon"
            variant="outline"
            onClick={handleNext}
            disabled={!loop && activeIndex === slideCount - 1}
            className="pointer-events-auto border-primary/55 bg-black/45 text-primary hover:bg-primary hover:text-black"
            aria-label="Proxima imagem"
          >
            <ChevronRight />
          </Button>
        </div>
      ) : null}

      {showIndicators && hasNavigation ? (
        <div className="case-carousel-indicators absolute inset-x-0 bottom-3 z-30 flex items-center justify-center gap-2 px-3">
          {slides.map((slide, index) => (
            <button
              key={`${slide.src}-indicator-${index}`}
              type="button"
              onClick={() => scrollToIndex(index)}
              aria-label={`Ir para imagem ${index + 1}`}
              aria-pressed={index === activeIndex}
              className={cn(
                "h-2.5 rounded-full border transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/70",
                index === activeIndex
                  ? "w-8 border-primary bg-primary"
                  : "w-2.5 border-primary/50 bg-black/60 hover:bg-primary/45",
              )}
            />
          ))}
        </div>
      ) : null}
    </div>
  );
}


