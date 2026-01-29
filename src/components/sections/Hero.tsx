"use client";

import dynamic from "next/dynamic";
import { Container } from "@/components/common/Container";
import { SplitText } from "@/components/common/SplitText";
import { Button } from "@/components/ui/button";
import { FiArrowDown, FiDownload, FiTerminal, FiCpu } from "react-icons/fi";

const FloatingLines = dynamic(() => import("@/components/FloatingLines"), {
  ssr: false,
  loading: () => (
    <div className="absolute inset-0 bg-background animate-pulse" />
  ),
});

const sciFiGradient = ["#00f0ff", "#0099ff", "#0055ff"]; // Cyan to Deep Blue
const heroDescription =
  "Aplicações escaláveis com TypeScript/JavaScript (Node.js e React), com foco em arquitetura limpa, código limpo e decisões técnicas alinhadas ao negócio.";

export function Hero() {
  return (
    <section
      id="inicio"
      className="relative flex min-h-screen items-center overflow-hidden scroll-mt-24 py-24 bg-background"
    >
      {/* Background with FloatingLines - Immersive Layer */}
      <div className="absolute inset-0 z-0">
        <FloatingLines
          linesGradient={sciFiGradient}
          animationSpeed={0.3} // Slower for background
          interactive
          parallax={true}
          mixBlendMode="screen"
          lineDistance={15} // Spread out more
          lineCount={5} // Fewer lines for less noise
        />
        {/* Subtle noise/grid overlay on top of lines */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(2,4,10,0.8),rgba(2,4,10,0.6))] pointer-events-none" />
      </div>

      {/* HUD Decorations - Top Left */}
      <div className="absolute top-24 left-8 hidden lg:flex flex-col gap-2 text-[10px] sm:text-xs font-mono text-primary/40 select-none z-10">
        <span className="opacity-50">SYS.STATUS: ONLINE</span>
        <span className="opacity-50">LOC: 23.5505° S, 46.6333° W</span>
        <span className="animate-pulse text-primary">● LIVE_FEED</span>
      </div>

      {/* HUD Decorations - Bottom Right */}
      <div className="absolute bottom-12 right-8 hidden lg:block text-right z-10">
        <div className="flex gap-4 text-xs font-mono text-primary/40">
          <span>CPU: 12%</span>
          <span>MEM: 4.2GB</span>
          <span>NET: CONNECTED</span>
        </div>
        <div className="mt-2 h-1 w-32 bg-primary/20 ml-auto">
          <div className="h-full w-2/3 bg-primary/60 animate-pulse" />
        </div>
      </div>

      <Container className="relative z-10 w-full">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:items-center">
          {/* LEFT COLUMN: Data/Text (Expanded to 8 cols for dominance) */}
          <div className="lg:col-span-8 flex flex-col gap-8">
            <div className="border-l-2 border-primary/30 pl-6 relative backdrop-blur-sm bg-black/20 py-4 rounded-r-xl">
              <div className="absolute -left-[5px] top-0 w-2 h-2 bg-primary" />
              <div className="absolute -left-[5px] bottom-0 w-2 h-2 bg-primary" />

              <p className="flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.2em] text-primary mb-4 font-mono">
                <FiTerminal aria-hidden="true" />
                <span>System Initialized</span>
              </p>

              <h1
                className="text-5xl font-bold leading-none tracking-tighter sm:text-7xl lg:text-8xl text-transparent bg-clip-text bg-linear-to-br from-white to-white/50 text-glitch cursor-default"
                data-text="PIERRE PAULO"
              >
                PIERRE <br /> PAULO
              </h1>

              <h2 className="mt-4 text-2xl font-medium text-muted-foreground sm:text-3xl font-mono">
                &lt;FullStack Developer /&gt;
              </h2>
            </div>

            <p className="max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg border-l border-white/10 pl-6 backdrop-blur-sm bg-black/10 py-2">
              {heroDescription}
            </p>

            <div className="flex flex-wrap gap-4 pl-6">
              <Button asChild size="lg" className="group">
                <a href="/cv-pierrepaulo.pdf" target="_blank" rel="noreferrer">
                  <FiDownload className="group-hover:translate-y-1 transition-transform" />
                  DOWNLOAD CV
                </a>
              </Button>

              <Button asChild size="lg" variant="outline" className="group">
                <a href="#projetos">
                  <FiCpu className="group-hover:rotate-90 transition-transform" />
                  Ver Projetos
                </a>
              </Button>
            </div>
          </div>

          {/* RIGHT COLUMN: Just HUD Elements or Empty (Asymmetry) */}
          <div className="hidden lg:flex lg:col-span-4 justify-center items-center opacity-30">
            {/* Simple decorative HUD Circle instead of full 3D canvas */}
            <div className="w-64 h-64 border border-primary/20 rounded-full flex items-center justify-center animate-spin-slow">
              <div className="w-48 h-48 border border-dashed border-primary/20 rounded-full animate-spin-reverse" />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
