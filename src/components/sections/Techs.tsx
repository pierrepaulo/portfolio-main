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
                  className="flex flex-col items-center gap-2 clip-chamfer-sm border border-white/5 bg-black/40 px-3 py-4 text-center transition-all duration-300 hover:border-primary/50 hover:bg-primary/5 hover:shadow-[0_0_15px_rgba(0,240,255,0.1)] group"
                >
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/5 group-hover:bg-primary/10 transition-colors">
                    <Icon
                      className="text-2xl sm:text-3xl transition-transform group-hover:scale-110"
                      style={{
                        color:
                          tech.color === "#000000" ? "#FFFFFF" : tech.color,
                        filter:
                          tech.color === "#000000"
                            ? "drop-shadow(0 0 2px rgba(255,255,255,0.5))"
                            : undefined,
                      }}
                      aria-hidden="true"
                    />
                  </span>
                  <span className="text-xs font-mono text-muted-foreground group-hover:text-primary sm:text-sm">
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
