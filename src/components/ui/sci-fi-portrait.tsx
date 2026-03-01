import Image from "next/image";
import { cn } from "@/lib/utils";

interface SciFiPortraitProps {
  src: string;
  alt: string;
  className?: string;
}

export function SciFiPortrait({ src, alt, className }: SciFiPortraitProps) {
  return (
    <div
      className={cn(
        "relative w-full aspect-4/5 max-w-sm mx-auto group",
        className,
      )}
    >
      {/* Background Frame / Glow */}
      <div className="absolute inset-0 bg-primary/5 clip-chamfer-opposite rounded-sm transition-all duration-500 group-hover:bg-primary/10" />
      <div className="absolute inset-0 ring-1 ring-primary/20 clip-chamfer-opposite rounded-sm transition-all duration-500 group-hover:ring-primary/40 group-hover:shadow-[0_0_30px_rgba(0,240,255,0.15)]" />

      {/* Cyber Grid Background */}
      <div
        className="absolute inset-2 clip-chamfer-opposite opacity-20 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,240,255,0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(0,240,255,0.2) 1px, transparent 1px)",
          backgroundSize: "20px 20px",
        }}
      />

      {/* The Image Container */}
      <div className="absolute inset-2 clip-chamfer-opposite overflow-hidden bg-[#020813]">
        <Image
          src={src}
          alt={alt}
          fill
          sizes="(max-width: 768px) 100vw, 384px"
          priority
          className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
        />
      </div>

      {/* HUD Brackets (Top Left & Bottom Right) */}
      <div className="absolute -top-1 -left-1 w-8 h-8 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-[2px] bg-primary/80 shadow-[0_0_8px_rgba(0,240,255,0.6)]" />
        <div className="absolute top-0 left-0 w-[2px] h-full bg-primary/80 shadow-[0_0_8px_rgba(0,240,255,0.6)]" />
      </div>

      <div className="absolute -bottom-1 -right-1 w-8 h-8 pointer-events-none">
        <div className="absolute bottom-0 right-0 w-full h-[2px] bg-primary/80 shadow-[0_0_8px_rgba(0,240,255,0.6)]" />
        <div className="absolute bottom-0 right-0 w-[2px] h-full bg-primary/80 shadow-[0_0_8px_rgba(0,240,255,0.6)]" />
      </div>

      {/* Decorative scanline for the image */}
      <div className="absolute inset-2 pointer-events-none overflow-hidden clip-chamfer-opposite">
        <div className="w-full h-full bg-linear-to-b from-transparent via-primary/5 to-transparent bg-size-[100%_4px] opacity-30" />
      </div>
    </div>
  );
}
