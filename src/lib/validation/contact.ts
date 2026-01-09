import { z } from "zod";

export const contactSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, "Informe seu nome.")
    .max(80, "Nome muito longo."),
  email: z
    .string()
    .trim()
    .email("Email invalido.")
    .max(120, "Email muito longo."),
  message: z
    .string()
    .trim()
    .min(10, "Mensagem muito curta.")
    .max(1000, "Mensagem muito longa."),
  company: z.string().trim().max(120).optional(),
});

export type ContactFormValues = z.infer<typeof contactSchema>;
