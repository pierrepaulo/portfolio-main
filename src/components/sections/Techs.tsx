import { Container } from "../common/Container";
import { SectionHeader } from "../common/SectionHeader";
import { Reveal } from "../common/Reveal";
import { techs } from "@/data/techs";

export function Techs() {
  return (
    <section id="techs" className="py-20">
      <Container>
        <Reveal direction="left">
          <SectionHeader
            title="Tecnologias"
            subtitle="Linguagens, frameworks e ferramentas que fazem parte da minha rotina."
          />
        </Reveal>
        <Reveal direction="right">
          <ul className="grid w-full gap-3 sm:gap-4 grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6">
            {techs.map((tech) => {
              const Icon = tech.icon;

              return (
                <li
                  key={tech.id}
                  className="flex flex-col items-center gap-2 rounded-xl border border-border/60 bg-card/40 px-3 py-4 text-center transition-colors duration-300 hover:border-brand/60 hover:bg-card/60"
                >
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl  ">
                    <Icon
                      className="text-2xl sm:text-3xl"
                      style={{ color: tech.color }}
                      aria-hidden="true"
                    />
                  </span>
                  <span className="text-xs font-medium text-foreground sm:text-sm">
                    {tech.name}
                  </span>
                </li>
              );
            })}
          </ul>
        </Reveal>
      </Container>
    </section>
  );
}
