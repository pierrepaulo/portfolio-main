import { Cpu, Download, Terminal } from "lucide-react";

import { Container } from "@/components/common/Container";
import { Button } from "@/components/ui/button";
import { HeroBackground } from "@/components/sections/HeroBackground";

const heroDescription =
  "Aplicacoes escalaveis com TypeScript/JavaScript (Node.js e React), com foco em arquitetura limpa, codigo limpo e decisoes tecnicas alinhadas ao negocio.";

export function Hero() {
  return (
    <section
      id="inicio"
      className="relative flex min-h-screen items-center overflow-hidden scroll-mt-24 py-24 bg-background"
    >
      <HeroBackground />

      <div className="absolute top-24 left-8 hidden lg:flex flex-col gap-2 text-[10px] sm:text-xs font-mono text-primary/40 select-none z-10">
        <span className="opacity-50">SYS.STATUS: ONLINE</span>
        <span className="opacity-50">LOC: 23.5505 S, 46.6333 W</span>
        <span className="animate-pulse text-primary">LIVE_FEED</span>
      </div>

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
          <div className="lg:col-span-8 flex flex-col gap-8">
            <div className="border-l-2 border-primary/30 pl-6 relative backdrop-blur-none md:backdrop-blur-sm bg-black/20 py-4 rounded-r-xl">
              <div className="absolute -left-[5px] top-0 w-2 h-2 bg-primary" />
              <div className="absolute -left-[5px] bottom-0 w-2 h-2 bg-primary" />

              <p className="flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.2em] text-primary mb-4 font-mono">
                <Terminal size={16} aria-hidden="true" />
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

            <p className="max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg border-l border-white/10 pl-6 backdrop-blur-none md:backdrop-blur-sm bg-black/10 py-2">
              {heroDescription}
            </p>

            <div className="flex flex-wrap gap-4 pl-6">
              <Button asChild size="lg" variant="cta" className="group">
                <a href="/cv-pierrepaulo.pdf" target="_blank" rel="noreferrer">
                  <Download className="btn-icon-slide" />
                  DOWNLOAD CV
                </a>
              </Button>

              <Button asChild size="lg" variant="ctaOutline" className="group">
                <a href="#projetos">
                  <Cpu className="btn-icon-slide" />
                  Ver Projetos
                </a>
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
