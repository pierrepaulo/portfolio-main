import Link from "next/link";
import { ArrowLeft } from "lucide-react";

import { Container } from "@/components/common/Container";
import { Button } from "@/components/ui/button";

export default function ProjectNotFound() {
  return (
    <main className="case-layout py-20">
      <Container className="relative z-10 flex min-h-[55vh] flex-col items-center justify-center gap-6 text-center">
        <p className="font-mono text-xs tracking-[0.24em] text-primary/80">404 // PROJECT NOT FOUND</p>
        <h1 className="text-3xl font-bold text-white sm:text-4xl">
          Esse estudo de caso nao existe.
        </h1>
        <p className="max-w-xl text-muted-foreground">
          O link pode estar desatualizado ou o projeto foi removido.
        </p>
        <Button asChild variant="cta" className="group">
          <Link href="/#projetos" className="flex items-center gap-2">
            <ArrowLeft className="btn-icon-slide-back" />
            Voltar para projetos
          </Link>
        </Button>
      </Container>
    </main>
  );
}
