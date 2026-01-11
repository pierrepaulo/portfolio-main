import { Container } from "@/components/common/Container";
import { contactChannels } from "@/data/social";
import { FaMapPin } from "react-icons/fa";

const navLinks = [
  { href: "#inicio", label: "Inicio" },
  { href: "#projetos", label: "Projetos" },
  { href: "#sobre", label: "Sobre" },
  { href: "#techs", label: "Techs" },
  { href: "#contato", label: "Contato" },
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className=" border-t border-border/60 bg-background/80">
      <Container className="py-12">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_auto] ">
          <div className="space-y-3">
            <a
              href="#inicio"
              className="text-2xl font-semibold text-foreground"
            >
              Pierre Paulo
            </a>
            <p className="text-sm leading-relaxed text-muted-foreground">
              Portfolio 2026
            </p>
            <p className="flex items-center gap-1 text-sm leading-relaxed text-muted-foreground">
              <FaMapPin className="" aria-hidden="true" />
              Belo Horizonte - MG
            </p>
            <div className="flex items-center gap-1">
              {contactChannels.map((social) => {
                const Icon = social.icon;
                const isExternal = social.href.startsWith("http");

                return (
                  <a
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border/60 text-muted-foreground transition-[box-shadow,color,background-color,border-color,transform] duration-300 hover:border-brand hover:bg-card/60 hover:text-foreground hover:shadow-[0_10px_24px_rgb(var(--brand-rgb)/0.35)]"
                    target={isExternal ? "_blank" : undefined}
                    rel={isExternal ? "noreferrer" : undefined}
                  >
                    <Icon className="text-lg" aria-hidden="true" />
                  </a>
                );
              })}
            </div>
          </div>

          <div className="space-y-2 lg:justify-self-end lg:text-right">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-muted-foreground">
              Secoes
            </p>
            <ul className="space-y-1 text-sm">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-5 flex flex-col gap-3 border-t border-border/60 pt-6 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <span>(c) {year} Pierre Paulo. Todos os direitos reservados.</span>
          <span>Feito com React(Next), Tailwind e Typescript.</span>
        </div>
      </Container>
    </footer>
  );
}
