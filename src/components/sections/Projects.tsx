"use client";

import dynamic from "next/dynamic";
import Image from "next/image";
import { Code2, ExternalLink, Github } from "lucide-react";
import { useEffect, useRef, useState } from "react";

import { SectionHeader } from "../common/SectionHeader";
import { Reveal } from "../common/Reveal";
import { Container } from "../common/Container";
import { projects } from "@/data/projects";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { usePerformanceTier } from "@/hooks/usePerformanceTier";

const ProjectCarousel = dynamic(
  () => import("@/components/common/ProjectCarousel").then((mod) => mod.ProjectCarousel),
  { ssr: false },
);

const normalizeUrl = (url: string) => (url.startsWith("http") ? url : `https://${url}`);

type ProjectMediaProps = {
  projectId: string;
  title: string;
  images: string[];
  priorityFirstImage: boolean;
  allowCarousel: boolean;
};

function ProjectMedia({
  projectId,
  title,
  images,
  priorityFirstImage,
  allowCarousel,
}: ProjectMediaProps) {
  const hasImages = images.length > 0;
  const hasMultipleImages = images.length > 1;
  const wrapperRef = useRef<HTMLDivElement | null>(null);
  const [shouldLoadCarousel, setShouldLoadCarousel] = useState(false);
  const canRenderCarousel = allowCarousel && hasMultipleImages;

  useEffect(() => {
    if (!canRenderCarousel) return;

    const wrapper = wrapperRef.current;
    if (!wrapper) return;

    if (typeof window.IntersectionObserver !== "function") {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry?.isIntersecting) {
          setShouldLoadCarousel(true);
          observer.disconnect();
        }
      },
      {
        rootMargin: "220px 0px",
        threshold: 0.01,
      },
    );

    observer.observe(wrapper);
    return () => observer.disconnect();
  }, [canRenderCarousel]);

  const handleIntentToInteract = () => {
    if (canRenderCarousel) {
      setShouldLoadCarousel(true);
    }
  };

  if (!hasImages) {
    return null;
  }

  return (
    <div
      ref={wrapperRef}
      className="relative aspect-video w-full h-full"
      onPointerEnter={handleIntentToInteract}
      onFocusCapture={handleIntentToInteract}
    >
      {canRenderCarousel && shouldLoadCarousel ? (
        <ProjectCarousel
          projectId={projectId}
          title={title}
          images={images}
          priorityFirst={priorityFirstImage}
        />
      ) : (
        <>
          <Image
            src={images[0]}
            alt={`${title} preview`}
            fill
            priority={priorityFirstImage}
            loading={priorityFirstImage ? undefined : "lazy"}
            className="object-cover object-top opacity-80 group-hover:opacity-100 transition-opacity duration-500"
            sizes="(min-width: 1024px) 50vw, 100vw"
            quality={65}
          />
          <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] z-20 bg-size-[100%_2px,3px_100%] pointer-events-none opacity-20" />
        </>
      )}
    </div>
  );
}

export function Projects() {
  const tier = usePerformanceTier();
  const allowInteractiveCarousel = tier !== "low";

  return (
    <section id="projetos" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,240,255,0.03)_0%,transparent_70%)] pointer-events-none" />

      <Container>
        <Reveal direction="left">
          <SectionHeader
            title="Projetos em destaque"
            subtitle="Projetos reais, com foco em impacto, arquitetura e boas praticas."
            className="mb-16"
          />
        </Reveal>

        <div className="grid gap-12">
          {projects.map((project, index) => {
            const Icon = project.icon;
            const images = project.images;
            const hasImages = images.length > 0;
            const liveUrl = project.liveUrl ? normalizeUrl(project.liveUrl) : "";

            return (
              <Reveal key={project.id} direction="up" delay={index * 0.1}>
                <div className="group relative">
                  <div className="absolute -inset-0.5 bg-linear-to-r from-primary/30 to-blue-600/30 rounded-xl blur opacity-30 group-hover:opacity-75 transition duration-500" />

                  <Card className="relative tech-card border-none bg-black/60 backdrop-blur-xl">
                    <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-start p-6 sm:p-8">
                      <div className="relative rounded-lg overflow-hidden border border-white/10 bg-black/50 aspect-video lg:aspect-auto lg:h-full">
                        <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-primary/50 rounded-tl-lg z-10" />
                        <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-primary/50 rounded-br-lg z-10" />

                        {hasImages ? (
                          <ProjectMedia
                            projectId={project.id}
                            title={project.title}
                            images={images}
                            priorityFirstImage={index === 0}
                            allowCarousel={allowInteractiveCarousel}
                          />
                        ) : (
                          <div className="flex h-full items-center justify-center text-muted-foreground bg-black/50">
                            <Icon className="text-4xl opacity-20" />
                          </div>
                        )}
                      </div>

                      <div className="flex flex-col h-full space-y-6">
                        <div className="space-y-4">
                          <div className="flex items-center gap-3 text-primary">
                            <Code2 className="text-xl" />
                            <h3 className="text-2xl font-bold font-display tracking-wide uppercase text-white shadow-primary/20 drop-shadow-md">
                              {project.title}
                            </h3>
                          </div>

                          <p className="text-muted-foreground leading-relaxed border-l-2 border-primary/20 pl-4 py-1">
                            {project.description}
                          </p>
                        </div>

                        <div className="flex flex-wrap gap-2">
                          {project.techs.map((tech) => (
                            <Badge
                              key={`${project.id}-${tech}`}
                              variant="outline"
                              className="rounded-none border-primary/30 text-primary/80 bg-primary/5 hover:bg-primary/10 hover:border-primary transition-colors font-mono text-xs"
                            >
                              {tech}
                            </Badge>
                          ))}
                        </div>

                        <div className="pt-4 mt-auto flex flex-wrap gap-4">
                          {liveUrl ? (
                            <Button
                              asChild
                              size="sm"
                              className="clip-chamfer-sm bg-primary text-black hover:bg-white hover:text-black font-bold tracking-wider"
                            >
                              <a
                                href={liveUrl}
                                target="_blank"
                                rel="noreferrer"
                                className="flex items-center gap-2"
                              >
                                <ExternalLink size={16} /> Ver Deploy
                              </a>
                            </Button>
                          ) : (
                            <Button
                              disabled
                              size="sm"
                              variant="secondary"
                              className="clip-chamfer-sm opacity-50 cursor-not-allowed"
                            >
                              OFFLINE
                            </Button>
                          )}

                          {project.repoUrl && (
                            <Button
                              asChild
                              size="sm"
                              variant="outline"
                              className="clip-chamfer-sm border-primary/50 text-primary hover:bg-primary/20"
                            >
                              <a
                                href={project.repoUrl}
                                target="_blank"
                                rel="noreferrer"
                                className="flex items-center gap-2"
                              >
                                <Github size={16} /> Ver Codigo
                              </a>
                            </Button>
                          )}
                        </div>
                      </div>
                    </div>
                  </Card>
                </div>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
