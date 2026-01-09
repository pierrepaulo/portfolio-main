import { Container } from "../common/Container";
import { SectionHeader } from "../common/SectionHeader";

export function About() {
  return (
    <section id="sobre">
      <Container>
        <SectionHeader
          title="Sobre mim"
          subtitle="Desenvolvedor Full Stack com foco em produto, qualidade e consistência."
        />
        <div>Sobre</div>
      </Container>
    </section>
  );
}
