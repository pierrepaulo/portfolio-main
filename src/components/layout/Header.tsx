"use client";

import Link from "next/link";
import { Menu, type LucideIcon } from "lucide-react";
import type { AnchorHTMLAttributes } from "react";
import { useEffect, useMemo, useRef, useState } from "react";

import { Container } from "@/components/common/Container";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import { headerSocials } from "@/data/social";
import { useScrollSpy } from "@/hooks/useScrollSpy";

const navLinks = [
  { id: "inicio", label: "Inicio" },
  { id: "projetos", label: "Projetos" },
  { id: "sobre", label: "Sobre" },
  { id: "techs", label: "Techs" },
  { id: "contato", label: "Contato" },
];

type IconButtonProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  label: string;
  icon: LucideIcon;
  variant?: "ghost" | "solid";
};

function IconButton({
  label,
  icon: Icon,
  variant = "ghost",
  className,
  ...props
}: IconButtonProps) {
  return (
    <a
      aria-label={label}
      className={cn(
        "inline-flex h-11 w-11 items-center justify-center rounded-full border text-base transition-[box-shadow,color,background-color,border-color,transform] duration-300 hover:shadow-[0_10px_24px_rgb(var(--brand-rgb)/0.35)] focus-visible:outline focus-visible:outline-offset-2 focus-visible:outline-brand",
        variant === "solid"
          ? "border-transparent bg-linear-to-r from-brand-start to-brand-end text-foreground"
          : "border-primary text-muted-foreground hover:border-brand hover:bg-primary/5 hover:text-foreground hover:shadow-[0_0_15px_rgba(0,240,255,0.4)]",
        className,
      )}
      {...props}
    >
      <Icon className="text-xl" aria-hidden="true" />
    </a>
  );
}

export function Header() {
  const sectionIds = useMemo(() => navLinks.map((link) => link.id), []);
  const activeId = useScrollSpy(sectionIds);
  const [isScrolled, setIsScrolled] = useState(false);
  const navRef = useRef<HTMLElement | null>(null);
  const linkRefs = useRef<Record<string, HTMLAnchorElement | null>>({});
  const [indicator, setIndicator] = useState({
    left: 0,
    width: 0,
    opacity: 0,
  });

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    let frame = 0;
    const updateIndicator = () => {
      frame = window.requestAnimationFrame(() => {
        const navEl = navRef.current;
        const linkEl = linkRefs.current[activeId];
        if (!navEl || !linkEl) {
          setIndicator((prev) => ({ ...prev, opacity: 0 }));
          return;
        }

        const navRect = navEl.getBoundingClientRect();
        const linkRect = linkEl.getBoundingClientRect();
        setIndicator({
          left: linkRect.left - navRect.left,
          width: linkRect.width,
          opacity: 1,
        });
      });
    };

    updateIndicator();
    window.addEventListener("resize", updateIndicator);
    return () => {
      window.removeEventListener("resize", updateIndicator);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, [activeId]);

  return (
    <header
      className={cn(
        "app-fixed-header fixed inset-x-0 top-0 z-50 transition-all",
        isScrolled
          ? "border-b border-border/60 bg-background/80 shadow-sm backdrop-blur"
          : "bg-transparent",
      )}
    >
      <Container className="flex h-18 items-center justify-between gap-4 px-6 md:px-0">
        <Link
          href="#inicio"
          className="text-xl font-semibold text-foreground sm:text-2xl"
        >
          Pierre Paulo
        </Link>

        <nav
          ref={navRef}
          className="relative hidden items-center gap-7 md:flex"
        >
          <span
            aria-hidden="true"
            className="pointer-events-none absolute -bottom-1 h-0.5 bg-linear-to-r from-primary to-blue-600 shadow-[0_0_12px_rgb(0,240,255,0.8)] transition-[transform,width,opacity] duration-300 ease-out"
            style={{
              width: `${indicator.width}px`,
              transform: `translateX(${indicator.left}px)`,
              opacity: indicator.opacity,
            }}
          />
          {navLinks.map((link) => (
            <a
              key={link.id}
              ref={(element) => {
                linkRefs.current[link.id] = element;
              }}
              href={`#${link.id}`}
              className={cn(
                "text-base font-medium text-muted-foreground/80 transition-[color,filter] duration-300 hover:text-foreground hover:drop-shadow-[0_4px_12px_rgb(var(--brand-rgb)/0.35)] sm:text-lg",
                activeId === link.id && "text-brand",
              )}
              aria-current={activeId === link.id ? "page" : undefined}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-2 md:flex">
          {headerSocials.map((social) => (
            <IconButton
              key={social.label}
              href={social.href}
              label={social.label}
              icon={social.icon}
              target={social.href.startsWith("http") ? "_blank" : undefined}
              rel={social.href.startsWith("http") ? "noreferrer" : undefined}
            />
          ))}
        </div>

        <div className="flex items-center md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <button
                type="button"
                aria-label="Abrir menu"
                className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-border/70 text-foreground transition-[box-shadow,color,background-color,border-color,transform] duration-300 hover:bg-card/60 hover:shadow-[0_10px_24px_rgb(var(--brand-rgb)/0.35)] focus-visible:outline focus-visible:outline-offset-2 focus-visible:outline-brand"
              >
                <Menu className="text-2xl" aria-hidden="true" />
              </button>
            </SheetTrigger>
            <SheetContent>
              <SheetHeader className="px-6">
                <SheetTitle>Pierre Paulo</SheetTitle>
                <p className="text-base text-muted-foreground">
                  Navegue pelas seções do portfólio
                </p>
              </SheetHeader>
              <div className="mt-6 flex flex-col gap-3 px-6">
                {navLinks.map((link) => (
                  <SheetClose asChild key={link.id}>
                    <a
                      href={`#${link.id}`}
                      className={cn(
                        "rounded-xl border border-border/70 px-5 py-3 text-base font-medium text-foreground transition-[box-shadow,color,background-color,border-color] duration-300 hover:border-brand hover:bg-card/60 hover:shadow-[0_10px_24px_rgb(var(--brand-rgb)/0.2)]",
                        activeId === link.id &&
                          "border-brand/80 bg-brand/15 text-foreground",
                      )}
                    >
                      {link.label}
                    </a>
                  </SheetClose>
                ))}
              </div>
              <div className="mt-6 flex items-center gap-3 px-6">
                {headerSocials.map((social) => (
                  <IconButton
                    key={social.label}
                    href={social.href}
                    label={social.label}
                    icon={social.icon}
                    target={
                      social.href.startsWith("http") ? "_blank" : undefined
                    }
                    rel={
                      social.href.startsWith("http") ? "noreferrer" : undefined
                    }
                  />
                ))}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </Container>
    </header>
  );
}
