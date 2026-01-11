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
    <section id="contato" className="py-20">
      <Container>
        <Reveal direction="left">
          <SectionHeader
            title="Entre em contato"
            subtitle="Vamos alinhar expectativas, stack e proximos passos."
          />
        </Reveal>
        <div className="grid gap-10 lg:grid-cols-2 lg:items-stretch">
          <Reveal direction="left">
            <div className="flex h-full flex-col gap-6">
              <p className="text-base leading-relaxed text-muted-foreground sm:text-lg">
                Fique à vontade para entrar em contato pelo canal que preferir.
                Responderei o mais breve possível.
              </p>
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
                {contactChannels.map((channel) => {
                  const Icon = channel.icon;
                  const isExternal = channel.href.startsWith("http");

                  return (
                    <Card
                      key={channel.label}
                      className="border-border/60 bg-card/40 py-0 lift-glow"
                    >
                      <CardContent className="flex items-center gap-3 p-4">
                        <span className="flex h-11 w-11 items-center justify-center rounded-xl border border-border/60 bg-background/40 text-brand">
                          <Icon className="text-lg" aria-hidden="true" />
                        </span>
                        <div className="min-w-0">
                          <p className="text-sm font-semibold text-foreground">
                            {channel.label}
                          </p>
                          <a
                            href={channel.href}
                            className="block truncate text-sm text-muted-foreground transition-colors hover:text-foreground"
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
          <Reveal direction="right">
            <Card className="h-full rounded-2xl border-border/60 bg-card/40 py-0">
              <CardContent className="flex h-full flex-col p-6 sm:p-8">
                <Form {...form}>
                  <form
                    className="flex h-full flex-col gap-5"
                    onSubmit={form.handleSubmit(onSubmit)}
                    noValidate
                  >
                    <div className="grid gap-5 sm:grid-cols-2">
                      <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Nome</FormLabel>
                            <FormControl>
                              <Input
                                {...field}
                                type="text"
                                autoComplete="name"
                                placeholder="Seu nome"
                                className="h-auto border-border/60 bg-background/40 px-4 py-3 text-sm"
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
                            <FormLabel>Email</FormLabel>
                            <FormControl>
                              <Input
                                {...field}
                                type="email"
                                autoComplete="email"
                                placeholder="seu@email.com"
                                className="h-auto border-border/60 bg-background/40 px-4 py-3 text-sm"
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
                          <FormLabel>Mensagem</FormLabel>
                          <FormControl>
                            <textarea
                              {...field}
                              rows={7}
                              className="w-full resize-none rounded-lg border border-border/60 bg-background/40 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground outline-none transition focus-visible:ring-2 focus-visible:ring-ring/40 lg:min-h-40"
                              placeholder="Conte um pouco sobre o que voce precisa"
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
                      <label htmlFor="company">Company</label>
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
                        className="lift-glow accent-fill rounded-full cursor-pointer"
                      >
                        {form.formState.isSubmitting
                          ? "Enviando..."
                          : "Enviar mensagem"}
                      </Button>

                      <div className="text-sm" aria-live="polite">
                        {status === "success" ? (
                          <span className="text-green-500">
                            Mensagem enviada com sucesso.
                          </span>
                        ) : null}
                        {status === "error" ? (
                          <span className="text-destructive">
                            Nao foi possivel enviar. Tente novamente.
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
