import { Resend } from "resend";
import { contactSchema } from "@/lib/validation/contact";

export const runtime = "nodejs";

const DEFAULT_FROM = "onboarding@resend.dev";
const DEFAULT_TO = "pierresantista@hotmail.com";
const DEFAULT_SUBJECT = "Contato do portfolio";

const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000;
const RATE_LIMIT_MAX = 3;
const rateLimitStore = new Map<string, number[]>();

const escapeHtml = (value: string) =>
  value.replace(/[&<>"']/g, (char) => {
    const map: Record<string, string> = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;",
    };
    return map[char] ?? char;
  });

const getClientIp = (request: Request) => {
  const forwarded = request.headers.get("x-forwarded-for");
  if (forwarded) {
    return forwarded.split(",")[0]?.trim() || "unknown";
  }
  return request.headers.get("x-real-ip") ?? "unknown";
};

const isRateLimited = (ip: string) => {
  const now = Date.now();
  const history = rateLimitStore.get(ip) ?? [];
  const recent = history.filter(
    (timestamp) => now - timestamp < RATE_LIMIT_WINDOW_MS
  );
  recent.push(now);
  rateLimitStore.set(ip, recent);
  return recent.length > RATE_LIMIT_MAX;
};

export async function POST(request: Request) {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    return Response.json(
      { ok: false, message: "RESEND_API_KEY ausente." },
      { status: 500 }
    );
  }

  const payload = await request.json().catch(() => null);
  const parsed = contactSchema.safeParse(payload);
  if (!parsed.success) {
    return Response.json(
      {
        ok: false,
        message: "Dados invalidos.",
        errors: parsed.error.flatten(),
      },
      { status: 400 }
    );
  }

  const data = parsed.data;
  if (data.company) {
    return Response.json({ ok: true });
  }

  const ip = getClientIp(request);
  if (isRateLimited(ip)) {
    return Response.json(
      { ok: false, message: "Muitas requisicoes. Tente novamente depois." },
      { status: 429 }
    );
  }

  const resend = new Resend(apiKey);
  const from = process.env.RESEND_FROM ?? DEFAULT_FROM;
  const to = process.env.CONTACT_TO ?? DEFAULT_TO;
  const subject = process.env.CONTACT_SUBJECT ?? DEFAULT_SUBJECT;

  const safeName = escapeHtml(data.name);
  const safeEmail = escapeHtml(data.email);
  const safeMessage = escapeHtml(data.message);

  const text = `Nome: ${data.name}\nEmail: ${data.email}\nMensagem:\n${data.message}`;
  const html = `
    <div>
      <p><strong>Nome:</strong> ${safeName}</p>
      <p><strong>Email:</strong> ${safeEmail}</p>
      <p><strong>Mensagem:</strong></p>
      <p>${safeMessage.replace(/\n/g, "<br />")}</p>
    </div>
  `;

  const { error } = await resend.emails.send({
    from,
    to,
    subject,
    replyTo: data.email,
    text,
    html,
  });

  if (error) {
    const debug =
      process.env.NODE_ENV !== "production"
        ? { resendError: error }
        : undefined;
    return Response.json(
      { ok: false, message: "Falha ao enviar email.", ...(debug ?? {}) },
      { status: 500 }
    );
  }

  return Response.json({ ok: true });
}
