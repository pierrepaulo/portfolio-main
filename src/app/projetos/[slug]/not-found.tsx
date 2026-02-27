import Link from "next/link";

import { Container } from "@/components/common/Container";
import { Button } from "@/components/ui/button";

export default function ProjectNotFound() {
  return (
    <main className="case-layout py-20">
      <Container className="relative z-10 flex min-h-[55vh] flex-col items-center justify-center gap-6 text-center">
        <p className="font-mono text-xs tracking-[0.24em] text-primary/80">404 // PROJECT NOT FOUND</p>
        <h1 className="text-3xl font-bold text-white sm:text-4xl">
          Esse case study nao existe.
        </h1>
        <p className="max-w-xl text-muted-foreground">
          O link pode estar desatualizado ou o projeto foi removido.
        </p>
        <Button asChild className="bg-primary text-black hover:bg-white hover:text-black">
          <Link href="/#projetos">Voltar para projetos</Link>
        </Button>
      </Container>
    </main>
  );
}
