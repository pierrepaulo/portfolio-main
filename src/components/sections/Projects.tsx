import { Container } from "../common/Container";
import { SectionHeader } from "../common/SectionHeader";

export function Projects() {
  return (
    <section id="projetos">
      <Container>
        <SectionHeader
          title="Projetos em destaque"
          subtitle="Projetos reais, com foco em impacto, arquitetura e boas práticas."
        />
        <div>Projetos</div>
      </Container>
    </section>
  );
}
