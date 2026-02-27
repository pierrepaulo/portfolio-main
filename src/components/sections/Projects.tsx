"use client";

import Image from "next/image";
import Link from "next/link";

import { SectionHeader } from "../common/SectionHeader";
import { Reveal } from "../common/Reveal";
import { Container } from "../common/Container";
import { getProjects } from "@/lib/projects";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type ProjectMediaProps = {
  title: string;
  images: string[];
  priorityFirstImage: boolean;
};

function ProjectMedia({ title, images, priorityFirstImage }: ProjectMediaProps) {
  const hasImages = images.length > 0;

  if (!hasImages) {
    return null;
  }

  return (
    <div className="project-media-inner relative h-full w-full">
      <Image
        src={images[0]}
        alt={`${title} preview`}
        fill
        priority={priorityFirstImage}
        loading={priorityFirstImage ? undefined : "lazy"}
        className="object-contain object-center opacity-85 group-hover:opacity-100 transition-opacity duration-500"
        sizes="(min-width: 1280px) 52vw, (min-width: 768px) 48vw, 100vw"
        quality={65}
      />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] z-20 bg-size-[100%_2px,3px_100%] pointer-events-none opacity-20" />
    </div>
  );
}

export function Projects() {
  const projectList = getProjects();

  return (
    <section id="projetos" className="projects-timeline relative overflow-hidden py-24 sm:py-28">
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_14%,rgba(0,240,255,0.12)_0%,transparent_46%),radial-gradient(circle_at_88%_30%,rgba(0,112,255,0.12)_0%,transparent_44%),radial-gradient(circle_at_50%_88%,rgba(0,240,255,0.08)_0%,transparent_50%)]"
        aria-hidden="true"
      />

      <Container>
        <Reveal direction="left">
          <SectionHeader
            title="Projetos em destaque"
            subtitle="Timeline de produtos reais, com contexto tecnico e caminho completo ate o case study."
            className="mb-16"
          />
        </Reveal>

        <div className="projects-timeline-shell relative">
          <ol className="space-y-12 md:space-y-16">
            {projectList.map((project, index) => {
              const Icon = project.icon;
              const images = project.images;
              const hasImages = images.length > 0;
              const displayedHighlights = project.highlights.slice(0, 3);
              const displayedTechs = project.techs.slice(0, 5);
              const chapter = String(index + 1).padStart(2, "0");
              const isImageLeft = index % 2 === 0;

              return (
                <Reveal
                  key={project.id}
                  direction={isImageLeft ? "left" : "right"}
                  delay={index * 0.08}
                >
                  <li className="project-entry w-full">
                    <article className="project-panel group">
                      <div className="project-panel-grid">
                        <div
                          className={cn(
                            "project-media-slot",
                            isImageLeft
                              ? "project-media-left lg:order-1"
                              : "project-media-right lg:order-2",
                          )}
                        >
                          <div className="project-cinematic-frame">
                            {hasImages ? (
                              <ProjectMedia
                                title={project.title}
                                images={images}
                                priorityFirstImage={index === 0}
                              />
                            ) : (
                              <div className="flex h-full items-center justify-center bg-black/50 text-muted-foreground">
                                <Icon className="text-5xl opacity-30" />
                              </div>
                            )}

                            <div className="project-cinematic-overlay" aria-hidden="true" />
                          </div>
                        </div>

                        <div
                          className={cn(
                            "project-panel-body",
                            isImageLeft ? "lg:order-2" : "lg:order-1",
                          )}
                        >
                          <div className="project-title-wrap">
                            <span className="project-kicker">Case Study {chapter}</span>
                            <h3 className="project-title text-xl font-bold text-white sm:text-2xl">
                              {project.title}
                            </h3>
                            <p className="project-teaser text-sm leading-relaxed text-muted-foreground sm:text-base">
                              {project.teaser}
                            </p>
                          </div>

                          <ul className="project-highlights" aria-label={`Highlights de ${project.title}`}>
                            {displayedHighlights.map((highlight) => (
                              <li key={`${project.id}-${highlight}`} className="project-highlight-item">
                                {highlight}
                              </li>
                            ))}
                          </ul>

                          <div className="project-techs flex flex-wrap gap-2">
                            {displayedTechs.map((tech) => (
                              <Badge
                                key={`${project.id}-${tech}`}
                                variant="outline"
                                className="rounded-none border-primary/35 bg-primary/5 font-mono text-[11px] tracking-wide text-primary/85"
                              >
                                {tech}
                              </Badge>
                            ))}
                          </div>

                          <div className="project-actions mt-2 flex flex-wrap gap-3">
                            <Button
                              asChild
                              size="sm"
                              className="bg-primary text-black hover:bg-white hover:text-black"
                            >
                              <Link href={`/projetos/${project.slug}`}>Ver Case Study</Link>
                            </Button>
                          </div>
                        </div>
                      </div>
                    </article>
                  </li>
                </Reveal>
              );
            })}
          </ol>
        </div>
      </Container>
    </section>
  );
}
