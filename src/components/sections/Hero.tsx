"use client";

import { Container } from "@/components/common/Container";
import FloatingLines from "@/components/FloatingLines";
import { Button } from "@/components/ui/button";
import { FiArrowDown, FiDownload } from "react-icons/fi";

const heroLinesGradient = ["#7c3aed", "#8b5cf6", "#6366f1"];

export function Hero() {
  return (
    <section
      id="inicio"
      className="relative flex min-h-screen items-center overflow-hidden scroll-mt-24 py-24"
    >
      <div className="pointer-events-none absolute inset-0 -z-10">
        <FloatingLines
          linesGradient={heroLinesGradient}
          animationSpeed={0.9}
          interactive
          parallax={false}
          mixBlendMode="screen"
        />
      </div>
      <Container>
        <div className="mx-auto max-w-3xl space-y-8 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-brand">
            Portfolio
          </p>
          <div className="space-y-2">
            <h1 className="text-4xl font-semibold leading-tight text-foreground sm:text-5xl lg:text-6xl text-center">
              Pierre Paulo
            </h1>
            <h2 className="text-3xl font-semibold leading-tight text-foreground sm:text-4xl lg:text-5xl text-center">
              Desenvolvedor FullStack
            </h2>
          </div>
          <p className="mx-auto max-w-prose text-base leading-relaxed text-muted-foreground sm:text-lg">
            Aplicações escaláveis com TypeScript/JavaScript (Node.js e React),
            com foco em arquitetura limpa, código limpo e decisões técnicas
            alinhadas ao negócio.
          </p>

          <div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <Button
              asChild
              size="lg"
              className="lift-glow accent-fill rounded-full px-8 py-3 text-base"
            >
              <a href="/curriculo.pdf" target="_blank" rel="noreferrer">
                <FiDownload className="text-base" aria-hidden="true" />
                Ver curriculo
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="ghost"
              className="lift-glow accent-outline rounded-full px-8 py-3 text-base"
            >
              <a href="#contato">
                <FiArrowDown className="text-base" aria-hidden="true" />
                Ver projetos
              </a>
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
