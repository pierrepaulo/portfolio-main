import { Container } from "../common/Container";
import { SectionHeader } from "../common/SectionHeader";
import { Reveal } from "../common/Reveal";
import { projects } from "@/data/projects";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import Image from "next/image";

const normalizeUrl = (url: string) =>
  url.startsWith("http") ? url : `https://${url}`;

export function Projects() {
  return (
    <section id="projetos" className="py-20">
      <Container>
        <Reveal direction="left">
          <SectionHeader
            title="Projetos em destaque"
            subtitle="Projetos reais, com foco em impacto, arquitetura e boas prǭticas."
          />
        </Reveal>
        <div className="grid gap-6">
          {projects.map((project, index) => {
            const Icon = project.icon;
            const image = project.images[0];
            const liveUrl = project.liveUrl
              ? normalizeUrl(project.liveUrl)
              : "";
            const direction = index % 2 === 0 ? "left" : "right";

            return (
              <Reveal key={project.id} direction={direction}>
                <Card className="overflow-hidden py-0 lift-glow">
                  <div className="grid gap-6 md:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] md:items-stretch">
                    <div className="p-4 md:self-center">
                      <div className="relative min-h-65 overflow-hidden rounded-lg sm:min-h-70 lg:min-h-75">
                        {image ? (
                          <Image
                            src={image}
                            alt={`Preview do projeto ${project.title}`}
                            fill
                            className="object-contain"
                            sizes="(min-width: 768px) 45vw, 100vw"
                          />
                        ) : (
                          <div className="flex h-full items-center justify-center gap-3 text-muted-foreground">
                            <Icon className="text-2xl" aria-hidden="true" />
                            <span className="text-sm">Sem imagem</span>
                          </div>
                        )}
                      </div>
                    </div>

                    <div className="flex flex-col">
                      <CardContent className="flex flex-col gap-4 pt-6 pb-0">
                        <div className="flex items-center gap-3">
                          <span className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border/60 bg-background/60 text-brand">
                            <Icon className="text-lg" aria-hidden="true" />
                          </span>
                          <h3 className="text-xl font-semibold text-foreground sm:text-2xl">
                            {project.title}
                          </h3>
                        </div>

                        <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">
                          {project.description}
                        </p>

                        <div className="flex flex-wrap gap-2">
                          {project.techs.map((tech) => (
                            <Badge
                              key={`${project.id}-${tech}`}
                              variant="secondary"
                              className="bg-background/70 text-foreground/90 border-border/60"
                            >
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </CardContent>

                      <CardFooter className="mt-auto flex flex-wrap gap-3 px-6 pb-6 pt-4">
                        {liveUrl ? (
                          <Button
                            asChild
                            className="lift-glow accent-fill rounded-full"
                          >
                            <a href={liveUrl} target="_blank" rel="noreferrer">
                              Ver deploy
                            </a>
                          </Button>
                        ) : (
                          <Button
                            disabled
                            variant="secondary"
                            className="rounded-full"
                          >
                            Ver deploy
                          </Button>
                        )}

                        {project.repoUrl ? (
                          <Button
                            asChild
                            variant="outline"
                            className="lift-glow accent-outline rounded-full"
                          >
                            <a
                              href={project.repoUrl}
                              target="_blank"
                              rel="noreferrer"
                            >
                              Ver repositorio
                            </a>
                          </Button>
                        ) : null}
                      </CardFooter>
                    </div>
                  </div>
                </Card>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
