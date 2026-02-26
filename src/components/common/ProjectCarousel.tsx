"use client";

import Image from "next/image";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

type ProjectCarouselProps = {
  projectId: string;
  title: string;
  images: string[];
  priorityFirst?: boolean;
};

export function ProjectCarousel({
  projectId,
  title,
  images,
  priorityFirst = false,
}: ProjectCarouselProps) {
  const hasMultipleImages = images.length > 1;

  return (
    <Carousel className="w-full h-full" opts={{ align: "start", loop: hasMultipleImages }}>
      <CarouselContent>
        {images.map((image, imageIndex) => (
          <CarouselItem key={`${projectId}-image-${imageIndex}`} className="pl-0">
            <div className="relative aspect-video w-full h-full">
              <Image
                src={image}
                alt={`${title} preview`}
                fill
                priority={priorityFirst && imageIndex === 0}
                loading={priorityFirst && imageIndex === 0 ? undefined : "lazy"}
                className="object-cover object-top opacity-80 group-hover:opacity-100 transition-opacity duration-500"
                sizes="(min-width: 1024px) 50vw, 100vw"
                quality={65}
              />
              <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] z-20 bg-size-[100%_2px,3px_100%] pointer-events-none opacity-20" />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>

      {hasMultipleImages && (
        <div className="absolute bottom-4 right-4 flex gap-2 z-30">
          <CarouselPrevious className="static translate-y-0 rounded-none border-primary/50 bg-black/50 text-primary hover:bg-primary hover:text-black" />
          <CarouselNext className="static translate-y-0 rounded-none border-primary/50 bg-black/50 text-primary hover:bg-primary hover:text-black" />
        </div>
      )}
    </Carousel>
  );
}

