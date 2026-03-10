import type { LucideIcon } from "lucide-react";
import { Building2, Dumbbell, Package, Store, UtensilsCrossed } from "lucide-react";

export type CaseStudy = {
  challenge: string;
  solution: string;
  architecture: string[];
  outcome: string;
};

export type Project = {
  id: string;
  slug: string;
  title: string;
  icon: LucideIcon;
  teaser: string;
  description: string;
  highlights: string[];
  techs: string[];
  images: string[];
  liveUrl: string;
  repoUrl: string;
  caseStudy: CaseStudy;
};

export const projects: Project[] = [
  {
    id: "stock-control",
    slug: "stock-control",
    title: "Stock Control",
    icon: Package,
    teaser:
      "Sistema completo de gerenciamento de estoque com dashboard analítico, movimentações e 103 testes automatizados.",
    description:
      "Stock Control é um sistema full stack de gerenciamento de estoque com controle de produtos, categorias, movimentações e dashboard analítico. O administrador gerencia usuários, categorias e produtos com limites de quantidade (mínimo/máximo), enquanto as movimentações de entrada e saída atualizam o estoque automaticamente em transações seguras. O dashboard exibe valor total do estoque, gráfico de entradas/saídas, alertas de estoque baixo e produtos estagnados. Conta com autenticação Bearer, documentação Swagger, dark mode e 103 testes automatizados (unitários, integração e E2E) com CI/CD via GitHub Actions.",
    highlights: [
      "Dashboard analítico com gráficos e alertas de estoque",
      "103 testes automatizados com CI/CD (GitHub Actions)",
      "Movimentações com transações seguras e soft-delete",
    ],
    techs: [
      "TypeScript",
      "Next.js",
      "React",
      "Node.js",
      "Express",
      "PostgreSQL",
      "Drizzle ORM",
      "Zod",
      "TanStack Query",
      "Vitest",
    ],
    images: [
      "/images/projects/StockControl/image-1.png",
      "/images/projects/StockControl/image-2.png",
      "/images/projects/StockControl/image-3.png",
      "/images/projects/StockControl/image-4.png",
      "/images/projects/StockControl/image-5.png",
      "/images/projects/StockControl/image-6.png",
    ],
    liveUrl: "",
    repoUrl: "https://github.com/pierrepaulo/stock-control",
    caseStudy: {
      challenge:
        "Construir um sistema de estoque confiável com rastreabilidade completa de movimentações, alertas inteligentes e cobertura de testes robusta.",
      solution:
        "Desenvolver uma arquitetura full stack com monorepo, transações seguras para movimentações, dashboard analítico com múltiplos endpoints e pipeline de CI/CD com 103 testes automatizados.",
      architecture: [
        "API Express 5 com arquitetura Routes → Controllers → Services → Drizzle ORM",
        "Frontend Next.js 16 App Router com TanStack Query e React Hook Form",
        "PostgreSQL com soft-delete e transações seguras para movimentações",
        "103 testes (Vitest + Testcontainers + Supertest) com CI/CD no GitHub Actions",
      ],
      outcome:
        "Resultado: sistema de estoque com operação completa, rastreabilidade de movimentações, dashboard com visibilidade analítica e qualidade garantida por cobertura de testes acima de 80%.",
    },
  },
  {
    id: "restaurant-app",
    slug: "restaurant-app",
    title: "RestaurantApp",
    icon: UtensilsCrossed,
    teaser:
      "Operacao de restaurante em tempo real, conectando fluxo de pedidos do garcom ao painel administrativo.",
    description:
      "MVP de um sistema para restaurantes que centraliza a gestao do cardapio e o fluxo de pedidos. O administrador cadastra e organiza categorias e produtos, enquanto o garcom realiza os pedidos pelo celular. Assim que um pedido e enviado, ele e registrado no backend e exibido imediatamente no sistema, facilitando o acompanhamento e a operacao do atendimento.",
    highlights: [
      "Fluxo de pedido em tempo real entre garcom e painel",
      "Gestao de cardapio com categorias e produtos",
      "Backend orientado a operacao continua de atendimento",
    ],
    techs: [
      "Node.js",
      "Express",
      "TypeScript",
      "Docker",
      "PostgreSQL",
      "Prisma",
      "React",
      "React Native",
    ],
    images: [
      "/images/projects/RestaurantApp/image-1.png",
      "/images/projects/RestaurantApp/image-2.png",
      "/images/projects/RestaurantApp/image-3.png",
      "/images/projects/RestaurantApp/image-4.png",
      "/images/projects/RestaurantApp/image-5.png",
    ],
    liveUrl: "",
    repoUrl: "https://github.com/pierrepaulo/restaurant-app",
    caseStudy: {
      challenge:
        "Criar um fluxo de pedidos rapido para restaurante, reduzindo erro manual e atrasos entre salao e operacao interna.",
      solution:
        "Desenvolver um MVP full stack em que o garcom registra pedidos em segundos e o painel administrativo acompanha o status sem refresh manual.",
      architecture: [
        "API Node.js + Express para regras de negocio e persistencia",
        "Banco relacional com Prisma para modelagem do cardapio e pedidos",
        "Interface web para administracao e acompanhamento operacional",
        "Experiencia mobile focada em velocidade de uso pelo garcom",
      ],
      outcome:
        "Resultado: processo mais previsivel para o time de atendimento, com visibilidade centralizada dos pedidos e base pronta para evolucao para ambientes com maior volume.",
    },
  },
  {
    id: "futstore",
    slug: "futstore",
    title: "Futstore",
    icon: Store,
    teaser:
      "E-commerce full stack com foco em navegacao rapida, checkout confiavel e automacao do ciclo de pedido.",
    description:
      "FutStore e uma loja online de camisetas de futebol construida full stack, com sistema de cadastro, navegacao rapida, filtros e checkout integrado. O frontend em Next.js (App Router) exibe vitrine, banners e paginas de produto, enquanto o backend em Express + Prisma gerencia catalogo, carrinho, pedidos e metricas de vendas/visitas. O pagamento e feito via Stripe, com webhooks garantindo a atualizacao automatica do status do pedido apos a compra.",
    highlights: [
      "Checkout Stripe com atualizacao de pedido por webhook",
      "Catalogo, carrinho e pedidos em fluxo unificado",
      "Arquitetura orientada a operacao de loja real",
    ],
    techs: [
      "Node.js",
      "Express",
      "TypeScript",
      "Prisma",
      "PostgreSQL",
      "Stripe",
      "JWT",
      "Next.js",
      "React",
    ],
    images: [
      "/images/projects/Futstore/image-1.png",
      "/images/projects/Futstore/image-2.png",
      "/images/projects/Futstore/image-3.png",
      "/images/projects/Futstore/image-4.png",
      "/images/projects/Futstore/image-5.png",
    ],
    liveUrl: "",
    repoUrl: "https://github.com/pierrepaulo/futstore",
    caseStudy: {
      challenge:
        "Entregar uma experiencia de compra fluida e segura, conectando catalogo, pagamento e status de pedidos sem friccao.",
      solution:
        "Implementar um stack full stack com Next.js no frontend e Express no backend, integrando Stripe e webhooks para consistencia no pos-pagamento.",
      architecture: [
        "Frontend Next.js App Router com foco em vitrine e paginas de produto",
        "Backend Express + Prisma para dominio de carrinho e pedidos",
        "PostgreSQL para persistencia de catalogo, usuarios e transacoes",
        "Webhook Stripe para sincronizar status de pagamento e pedido",
      ],
      outcome:
        "Resultado: base solida para e-commerce com fluxo de compra confiavel, operacao observavel e caminho claro para escalar novos recursos comerciais.",
    },
  },
  {
    id: "clinica-pro",
    slug: "clinica-pro",
    title: "ClinicaPRO",
    icon: Building2,
    teaser:
      "SaaS de agendamento com planos, periodo de teste e experiencia de marcacao pensada para clinicas e pacientes.",
    description:
      "ClinicaPRO e uma SaaS de agendamento para clinicas, com assinaturas Basic e Pro e 2 dias de teste gratis no cadastro. A clinica configura seu perfil (nome, foto, endereco e horarios de funcionamento) e cadastra servicos com duracao e valor, alem de acompanhar as consultas marcadas em um dashboard. Para o paciente, o agendamento e simples: escolhe o servico e o horario disponivel, e ao confirmar a consulta o horario e bloqueado automaticamente, evitando conflitos com outros agendamentos.",
    highlights: [
      "Fluxo completo de assinatura com trial",
      "Agenda com bloqueio automatico de horarios",
      "Dashboard operacional para clinica acompanhar consultas",
    ],
    techs: [
      "TypeScript",
      "React",
      "Next",
      "Node.js",
      "PostgreSQL",
      "Webhooks",
      "Zod",
      "TanStack Query",
    ],
    images: [
      "/images/projects/ClinicaPRO/image-1.png",
      "/images/projects/ClinicaPRO/image-2.png",
      "/images/projects/ClinicaPRO/image-3.png",
      "/images/projects/ClinicaPRO/image-4.png",
      "/images/projects/ClinicaPRO/image-5.png",
    ],
    liveUrl: "saas-agendamento-five.vercel.app",
    repoUrl: "https://github.com/pierrepaulo/saas-agendamento",
    caseStudy: {
      challenge:
        "Montar um SaaS de agendamento que atendesse operacao de clinicas com monetizacao por planos desde o primeiro dia.",
      solution:
        "Construir um fluxo ponta a ponta: onboarding da clinica, definicao de servicos, agenda publica para pacientes e logica de bloqueio de horarios.",
      architecture: [
        "Frontend React/Next.js para dashboard e experiencia de agendamento",
        "Node.js e banco relacional para regras de disponibilidade",
        "Zod para validacao consistente de contratos de dados",
        "TanStack Query para sincronizacao de estado de servidor no cliente",
      ],
      outcome:
        "Resultado: produto com proposta clara de valor para clinicas, com estrutura de assinatura e operacao pronta para evolucao comercial.",
    },
  },
  {
    id: "easy-diet",
    slug: "easy-diet",
    title: "EasyDiet",
    icon: Dumbbell,
    teaser:
      "Plataforma que transforma dados de perfil em plano alimentar personalizado usando IA como motor de recomendacao.",
    description:
      "EasyDiete e um gerador inteligente de dietas integrado com IA. O usuario informa dados como peso, altura, frequencia de exercicios e objetivo (perder peso, manter ou ganhar massa), e o sistema utiliza o ChatGPT para criar um plano alimentar personalizado de acordo com as caracteristicas e o foco de cada pessoa.",
    highlights: [
      "Questionario objetivo para montar contexto nutricional",
      "Geracao automatica de plano alimentar com IA",
      "Fluxo direto para acelerar tempo ate valor do usuario",
    ],
    techs: ["TypeScript", "Nodejs", "Fastify", "OpenAi", "Zod", "React"],
    images: [
      "/images/projects/EasyDiet/image-1.png",
      "/images/projects/EasyDiet/image-2.png",
    ],
    liveUrl: "",
    repoUrl: "https://github.com/pierrepaulo/easy-diet",
    caseStudy: {
      challenge:
        "Criar uma experiencia simples que convertesse informacoes pessoais em recomendacoes alimentares personalizadas rapidamente.",
      solution:
        "Estruturar um fluxo de entrada enxuto e integrar modelo de IA para gerar plano alimentar orientado ao objetivo do usuario.",
      architecture: [
        "API Fastify para processamento de entrada e orquestracao da IA",
        "Camada de validacao com Zod para garantir dados consistentes",
        "Frontend React para coleta de contexto e exibicao do plano",
        "Integracao com OpenAI para geracao de recomendacoes",
      ],
      outcome:
        "Resultado: experiencia de geracao de dieta mais rapida e personalizada, com base tecnica preparada para evoluir historico, ajustes e recorrencia.",
    },
  },
];
