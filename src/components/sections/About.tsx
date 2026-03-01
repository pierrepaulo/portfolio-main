import { Container } from "../common/Container";
import { SectionHeader } from "../common/SectionHeader";
import { Reveal } from "../common/Reveal";
import { Card, CardContent } from "@/components/ui/card";
import { SciFiPortrait } from "@/components/ui/sci-fi-portrait";

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
              Desenvolvedor Full Stack com 2+ anos de experiência em TypeScript,
              Node.js, React e Next.js. Atuei na migração de um ERP desktop para
              web (50+ lojas, 300 usuários) e no desenvolvimento do Portal do
              Jogador com Next.js (App Router, SSR, Server Components).
              Experiência com APIs REST (JWT), validações com Zod,
              PostgreSQL/Prisma e testes automatizados (Jest, Supertest).
              Atuação com AWS, Docker e CI/CD (GitHub Actions), contribuindo com
              padronização de código e documentação técnica para facilitar o
              trabalho em equipe. No aspecto comportamental, sou frequentemente
              elogiado por ótimas soft skills, boa comunicação, organização e
              pensamento crítico, atuando de forma colaborativa, com atenção aos
              detalhes, agilidade no aprendizado e foco constante em qualidade.
            </p>
          </Reveal>

          <Reveal direction="right">
            <Card className="mx-auto w-full max-w-sm surface-card">
              <CardContent className="flex flex-col items-center gap-4 text-center">
                <SciFiPortrait
                  src="/images/profile.png"
                  alt="Foto de Pierre Paulo"
                  className=""
                />
              </CardContent>
            </Card>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
