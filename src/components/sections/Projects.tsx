"use client";

import { Container } from "../common/Container";
import { SectionHeader } from "../common/SectionHeader";
import { Reveal } from "../common/Reveal";
import { projects } from "@/data/projects";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import { FiCode, FiExternalLink, FiGithub } from "react-icons/fi";

const normalizeUrl = (url: string) =>
  url.startsWith("http") ? url : `https://${url}`;

export function Projects() {
  return (
    <section id="projetos" className="py-24 relative overflow-hidden">
      {/* Background circuit decoration */}
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
            const hasMultipleImages = images.length > 1;
            const liveUrl = project.liveUrl
              ? normalizeUrl(project.liveUrl)
              : "";

            return (
              <Reveal key={project.id} direction="up" delay={index * 0.1}>
                {/* Tech Card Container */}
                <div className="group relative">
                  {/* Holographic Border */}
                  <div className="absolute -inset-0.5 bg-linear-to-r from-primary/30 to-blue-600/30 rounded-xl blur opacity-30 group-hover:opacity-75 transition duration-500" />

                  <Card className="relative tech-card border-none bg-black/60 backdrop-blur-xl">
                    <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-start p-6 sm:p-8">
                      {/* Image Module */}
                      <div className="relative rounded-lg overflow-hidden border border-white/10 bg-black/50 aspect-video lg:aspect-auto lg:h-full">
                        {/* Corner accents */}
                        <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-primary/50 rounded-tl-lg z-10" />
                        <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-primary/50 rounded-br-lg z-10" />

                        {hasImages ? (
                          <Carousel
                            className="w-full h-full"
                            opts={{ align: "start", loop: hasMultipleImages }}
                          >
                            <CarouselContent>
                              {images.map((image, imageIndex) => (
                                <CarouselItem
                                  key={`${project.id}-image-${imageIndex}`}
                                  className="pl-0"
                                >
                                  <div className="relative aspect-video w-full h-full">
                                    <Image
                                      src={image}
                                      alt={`${project.title} preview`}
                                      fill
                                      loading="lazy"
                                      className="object-cover object-top opacity-80 group-hover:opacity-100 transition-opacity duration-500"
                                      sizes="(min-width: 1024px) 50vw, 100vw"
                                    />
                                    {/* Scanline overlay on image */}
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
                        ) : (
                          <div className="flex h-full items-center justify-center text-muted-foreground bg-black/50">
                            <Icon className="text-4xl opacity-20" />
                          </div>
                        )}
                      </div>

                      {/* Content Module */}
                      <div className="flex flex-col h-full space-y-6">
                        <div className="space-y-4">
                          <div className="flex items-center gap-3 text-primary">
                            <FiCode className="text-xl" />
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
                                <FiExternalLink /> Ver Deploy
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
                                <FiGithub /> Ver Codigo
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
