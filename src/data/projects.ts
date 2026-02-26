import type { LucideIcon } from "lucide-react";
import { Building2, Dumbbell, Store, UtensilsCrossed } from "lucide-react";

export type Project = {
  id: string;
  title: string;
  icon: LucideIcon;
  description: string;
  techs: string[];
  images: string[];
  liveUrl: string;
  repoUrl: string;
};

export const projects: Project[] = [
  {
    id: "RestauranteAPP",
    title: "RestaurantApp - Pedidos via Garcom + Painel Administrativo",
    icon: UtensilsCrossed,
    description:
      "MVP de um sistema para restaurantes que centraliza a gestao do cardapio e o fluxo de pedidos. O administrador cadastra e organiza categorias e produtos, enquanto o garcom realiza os pedidos pelo celular. Assim que um pedido e enviado, ele e registrado no backend e exibido imediatamente no sistema, facilitando o acompanhamento e a operacao do atendimento.",
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
  },
  {
    id: "futstore",
    title: "Futstore - E-commerce de camisetas de futebol",
    icon: Store,
    description:
      "FutStore e uma loja online de camisetas de futebol construida full stack, com sistema de cadastro, navegacao rapida, filtros e checkout integrado. O frontend em Next.js (App Router) exibe vitrine, banners e paginas de produto, enquanto o backend em Express + Prisma gerencia catalogo, carrinho, pedidos e metricas de vendas/visitas. O pagamento e feito via Stripe, com webhooks garantindo a atualizacao automatica do status do pedido apos a compra.",
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
  },
  {
    id: "clinicapro",
    title: "ClinicaPRO - SaaS de agendamentos",
    icon: Building2,
    description:
      "ClinicaPRO e uma SaaS de agendamento para clinicas, com assinaturas Basic e Pro e 2 dias de teste gratis no cadastro. A clinica configura seu perfil (nome, foto, endereco e horarios de funcionamento) e cadastra servicos com duracao e valor, alem de acompanhar as consultas marcadas em um dashboard. Para o paciente, o agendamento e simples: escolhe o servico e o horario disponivel, e ao confirmar a consulta o horario e bloqueado automaticamente, evitando conflitos com outros agendamentos.",
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
  },
  {
    id: "easydiet",
    title: "EasyDiet - Gerador de dietas com IA",
    icon: Dumbbell,
    description:
      "EasyDiete e um gerador inteligente de dietas integrado com IA. O usuario informa dados como peso, altura, frequencia de exercicios e objetivo (perder peso, manter ou ganhar massa), e o sistema utiliza o ChatGPT para criar um plano alimentar personalizado de acordo com as caracteristicas e o foco de cada pessoa.",
    techs: ["TypeScript", "Nodejs", "Fastify", "OpenAi", "Zod", "React"],
    images: [
      "/images/projects/EasyDiet/image-1.png",
      "/images/projects/EasyDiet/image-2.png",
    ],
    liveUrl: "",
    repoUrl: "https://github.com/pierrepaulo/easy-diet",
  },
];

