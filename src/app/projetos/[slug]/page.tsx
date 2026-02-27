import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ExternalLink, Github } from "lucide-react";

import { Container } from "@/components/common/Container";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Carousel, type CarouselSlide } from "@/components/ui/carousel";
import { getProjectBySlug, getProjectSlugs } from "@/lib/projects";

type ProjectPageProps = {
  params: Promise<{ slug: string }>;
};

const normalizeUrl = (url: string) => (url.startsWith("http") ? url : `https://${url}`);

export async function generateStaticParams() {
  return getProjectSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return {
      title: "Projeto nao encontrado | Pierre Paulo",
    };
  }

  return {
    title: `${project.title} | Case Study | Pierre Paulo`,
    description: project.teaser,
  };
}

export default async function ProjectCasePage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  const Icon = project.icon;
  const liveUrl = project.liveUrl ? normalizeUrl(project.liveUrl) : "";
  const hasActionLinks = Boolean(liveUrl || project.repoUrl);
  const slides: CarouselSlide[] = project.images.map((image, index) => ({
    src: image,
    alt: `${project.title} frame ${index + 1}`,
    priority: index === 0,
  }));

  return (
    <main className="case-layout py-12 sm:py-16 lg:py-20">
      <Container className="relative space-y-8">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <Button
            asChild
            variant="outline"
            className="border-primary/45 text-primary hover:bg-primary/15"
          >
            <Link href="/#projetos" className="flex items-center gap-2">
              <ArrowLeft size={16} /> Voltar para projetos
            </Link>
          </Button>

          <span className="case-chip">Case Study</span>
        </div>

        {slides.length > 0 ? (
          <section className="case-top-carousel">
            <Carousel slides={slides} className="h-full w-full" showIndicators showSlideOverlay={false} />
          </section>
        ) : null}

        <section className="case-dossier">
          <div>
            <div className="flex items-center gap-3 text-primary">
              <Icon className="text-2xl" aria-hidden="true" />
              <p className="font-mono text-xs tracking-[0.28em] text-primary/80">PROJECT DOSSIER</p>
            </div>

            <h1 className="mt-4 text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
              {project.title}
            </h1>

            <p className="case-teaser">
              {project.teaser}
            </p>

            <p className="case-description">
              {project.description}
            </p>

            <div className="mt-6 flex flex-wrap gap-2">
              {project.techs.map((tech) => (
                <Badge
                  key={`${project.id}-${tech}`}
                  variant="outline"
                  className="rounded-none border-primary/35 bg-primary/5 font-mono text-[11px] tracking-wide text-primary/85"
                >
                  {tech}
                </Badge>
              ))}
            </div>

            {hasActionLinks ? (
              <div className="mt-6 flex flex-wrap gap-3">
                {liveUrl ? (
                  <Button
                    asChild
                    size="sm"
                    className="bg-primary text-black hover:bg-white hover:text-black"
                  >
                    <a
                      href={liveUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-2"
                    >
                      <ExternalLink size={16} /> Ver deploy
                    </a>
                  </Button>
                ) : null}

                {project.repoUrl ? (
                  <Button
                    asChild
                    size="sm"
                    variant="outline"
                    className="border-primary/45 text-primary hover:bg-primary/15"
                  >
                    <a
                      href={project.repoUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-2"
                    >
                      <Github size={16} /> Ver codigo
                    </a>
                  </Button>
                ) : null}
              </div>
            ) : null}
          </div>
        </section>

        <section className="case-grid">
          <article className="case-panel">
            <h2 className="case-panel-title">Desafio</h2>
            <p className="case-panel-copy">{project.caseStudy.challenge}</p>
          </article>

          <article className="case-panel">
            <h2 className="case-panel-title">Solucao</h2>
            <p className="case-panel-copy">{project.caseStudy.solution}</p>
          </article>
        </section>

        <section className="case-panel">
          <h2 className="case-panel-title">Arquitetura aplicada</h2>
          <ul className="case-architecture-list">
            {project.caseStudy.architecture.map((item) => (
              <li key={`${project.id}-${item}`} className="case-architecture-item">
                {item}
              </li>
            ))}
          </ul>
        </section>

        <section className="case-panel">
          <h2 className="case-panel-title">Resultado</h2>
          <p className="case-panel-copy">{project.caseStudy.outcome}</p>
        </section>
      </Container>
    </main>
  );
}
