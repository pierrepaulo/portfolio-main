"use client";

import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import { Container } from "../common/Container";
import { SectionHeader } from "../common/SectionHeader";
import { Reveal } from "../common/Reveal";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { contactChannels } from "@/data/social";
import {
  contactSchema,
  type ContactFormValues,
} from "@/lib/validation/contact";

const defaultValues: ContactFormValues = {
  name: "",
  email: "",
  message: "",
  company: "",
};

export function Contact() {
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues,
  });

  const onSubmit = async (values: ContactFormValues) => {
    setStatus("idle");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });

      if (!response.ok) {
        setStatus("error");
        return;
      }

      setStatus("success");
      form.reset(defaultValues);
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="contato" className="py-24 relative overflow-hidden">
      {/* Background circuit decoration */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(0,240,255,0.05)_0%,transparent_70%)] pointer-events-none" />

      <Container>
        <Reveal direction="left">
          <SectionHeader
            title="Entre em contato"
            subtitle="Vamos conversar? Envie uma mensagem e vamos alinhar expectativas."
          />
        </Reveal>
        <div className="grid gap-10 lg:grid-cols-2 lg:items-stretch">
          <Reveal direction="left" delay={0.2}>
            <div className="flex h-full flex-col gap-6">
              <p className="text-base leading-relaxed text-muted-foreground sm:text-lg border-l-2 border-primary/20 pl-4">
                Canais de comunicação abertos. Selecione a frequência abaixo ou
                transmita dados via formulário criptografado.
              </p>
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
                {contactChannels.map((channel) => {
                  const Icon = channel.icon;
                  const isExternal = channel.href.startsWith("http");

                  return (
                    <Card
                      key={channel.label}
                      className="border-white/10 bg-black/40 py-0 hover:border-primary/50 transition-colors group"
                    >
                      <CardContent className="flex items-center gap-4 p-4">
                        <span className="flex h-12 w-12 items-center justify-center clip-chamfer-sm bg-primary/10 text-primary group-hover:bg-primary group-hover:text-black transition-all">
                          <Icon className="text-xl" aria-hidden="true" />
                        </span>
                        <div className="min-w-0 flex-1">
                          <p className="text-xs font-mono text-primary/60 uppercase tracking-wider mb-1">
                            {channel.label}
                          </p>
                          <a
                            href={channel.href}
                            className="block truncate text-sm text-foreground font-medium hover:text-primary transition-colors"
                            target={isExternal ? "_blank" : undefined}
                            rel={isExternal ? "noreferrer" : undefined}
                          >
                            {channel.detail}
                          </a>
                        </div>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </div>
          </Reveal>
          <Reveal direction="right" delay={0.4}>
            <Card className="h-full border-white/10 bg-black/60 backdrop-blur-md py-0 tech-card">
              <CardContent className="flex h-full flex-col p-6 sm:p-8">
                <Form {...form}>
                  <form
                    className="flex h-full flex-col gap-6"
                    onSubmit={form.handleSubmit(onSubmit)}
                    noValidate
                  >
                    <div className="grid gap-6 sm:grid-cols-2">
                      <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-primary/80 font-mono text-xs uppercase">
                              Identifique-se (Nome)
                            </FormLabel>
                            <FormControl>
                              <Input
                                {...field}
                                type="text"
                                autoComplete="name"
                                placeholder="Digite seu nome..."
                                className="h-12 border-white/10 bg-black/40 text-sm focus-visible:ring-primary/50 focus-visible:border-primary"
                              />
                            </FormControl>
                            <div className="min-h-4">
                              <FormMessage className="text-xs" />
                            </div>
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-primary/80 font-mono text-xs uppercase">
                              Comunicação (Email)
                            </FormLabel>
                            <FormControl>
                              <Input
                                {...field}
                                type="email"
                                autoComplete="email"
                                placeholder="pierre@exemplo.com"
                                className="h-12 border-white/10 bg-black/40 text-sm focus-visible:ring-primary/50 focus-visible:border-primary"
                              />
                            </FormControl>
                            <div className="min-h-4">
                              <FormMessage className="text-xs" />
                            </div>
                          </FormItem>
                        )}
                      />
                    </div>

                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-primary/80 font-mono text-xs uppercase">
                            PACOTE DE DADOS (Mensagem)
                          </FormLabel>
                          <FormControl>
                            <textarea
                              {...field}
                              rows={7}
                              className="w-full resize-none rounded-none border border-white/10 bg-black/40 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground outline-none transition focus-visible:ring-1 focus-visible:ring-primary/50 focus-visible:border-primary lg:min-h-40"
                              placeholder="Digite sua mensagem..."
                            />
                          </FormControl>
                          <div className="min-h-4">
                            <FormMessage className="text-xs" />
                          </div>
                        </FormItem>
                      )}
                    />

                    <div
                      className="absolute -left-2499.75 top-auto h-0 w-0 overflow-hidden"
                      aria-hidden="true"
                    >
                      <label htmlFor="company">Empresa</label>
                      <input
                        id="company"
                        type="text"
                        autoComplete="off"
                        tabIndex={-1}
                        {...form.register("company")}
                      />
                    </div>

                    <div className="mt-auto flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                      <Button
                        type="submit"
                        disabled={form.formState.isSubmitting}
                        className="clip-chamfer bg-primary text-black hover:bg-white hover:text-black font-bold tracking-wider px-8"
                      >
                        {form.formState.isSubmitting
                          ? "TRANSMITINDO..."
                          : "INICIAR TRANSMISSÃO"}
                      </Button>

                      <div className="text-sm font-mono" aria-live="polite">
                        {status === "success" ? (
                          <span className="text-green-500 animate-pulse">
                            [SUCCESSo] Mensagem enviada com sucesso.
                          </span>
                        ) : null}
                        {status === "error" ? (
                          <span className="text-destructive">
                            [ERROR] Falha na transmissão. Tente novamente.
                          </span>
                        ) : null}
                      </div>
                    </div>
                  </form>
                </Form>
              </CardContent>
            </Card>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
