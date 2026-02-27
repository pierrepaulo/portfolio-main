import { Container } from "../common/Container";
import { SectionHeader } from "../common/SectionHeader";
import { Reveal } from "../common/Reveal";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

export function About() {
  return (
    <section id="sobre" className="py-20">
      <Container>
        <Reveal direction="left">
          <SectionHeader
            title="Sobre mim"
            subtitle="Desenvolvedor Full Stack com foco em produto, qualidade e consistência."
          />
        </Reveal>
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1.3fr)_minmax(0,0.7fr)] lg:items-center">
          <Reveal direction="left">
            <p className="text-base leading-relaxed text-muted-foreground sm:text-lg">
              Desenvolvedor full stack com mais de 2 anos de experiência
              construindo aplicações, sistemas distribuídos escaláveis e
              pipelines de dados de alta performance, gerando aumento de 40% na
              conversão e redução de 60% no suporte. Proficiência em nível
              profissional em TypeScript + React (testes de componentes com
              Jest/Vitest/React Testing Library), back-end com
              Node.js/TypeScript (APIs REST/GraphQL, autenticação, cache) e
              PostgreSQL (modelagem de schema e otimização de performance).
              Implantação de infraestrutura em nuvem na AWS (Lambda, ECS, S3,
              CloudWatch), com containers Docker e pipelines de CI/CD (GitHub
              Actions, Vercel). No aspecto comportamental, sou frequentemente
              elogiado por ótimas soft skills, boa comunicação, organização e
              pensamento crítico, atuando de forma colaborativa, com atenção aos
              detalhes, agilidade no aprendizado e foco constante em qualidade.
            </p>
          </Reveal>

          <Reveal direction="right">
            <Card className="mx-auto w-full max-w-sm surface-card">
              <CardContent className="flex flex-col items-center gap-4 text-center">
                <Image
                  src="/images/profile.png"
                  alt="Foto de Pierre Paulo"
                  width={160}
                  height={160}
                  quality={70}
                  className="rounded-full border border-border/60 object-cover"
                />
                <div>
                  <h3 className="text-xl font-semibold text-foreground">
                    Pierre Paulo
                  </h3>
                  <p className="mt-2 text-sm text-muted-foreground sm:text-base">
                    Desenvolvedor FullStack com mais de 2 anos de experiencia
                  </p>
                </div>
              </CardContent>
            </Card>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
