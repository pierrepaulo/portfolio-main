import type { IconType } from "react-icons";
import {
  FaDumbbell,
  FaHouseChimneyMedical,
  FaStore,
  FaUtensils,
} from "react-icons/fa6";

export type Project = {
  id: string;
  title: string;
  icon: IconType;
  description: string;
  techs: string[];
  images: string[];
  liveUrl: string;
  repoUrl: string;
};

export const projects: Project[] = [
  {
    id: "RestauranteAPP - Pedidos via Garçom + Painel Administrativo",
    title: "RestaurantApp",
    icon: FaUtensils,
    description:
      "MVP de um sistema para restaurantes que centraliza a gestão do cardápio e o fluxo de pedidos. O administrador cadastra e organiza categorias e produtos, enquanto o garçom realiza os pedidos pelo celular. Assim que um pedido é enviado, ele é registrado no backend e exibido imediatamente no sistema, facilitando o acompanhamento e a operação do atendimento.",
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
    icon: FaStore,
    description:
      "FutStore é uma loja online de camisetas de futebol construída full stack, com sistema de cadastro, navegação rápida, filtros e checkout integrado. O frontend em Next.js (App Router) exibe vitrine, banners e páginas de produto, enquanto o backend em Express + Prisma gerencia catálogo, carrinho, pedidos e métricas de vendas/visitas. O pagamento é feito via Stripe, com webhooks garantindo a atualização automática do status do pedido após a compra.",
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
    icon: FaHouseChimneyMedical,
    description:
      "ClinicaPRO é uma SaaS de agendamento para clínicas, com assinaturas Basic e Pro e 2 dias de teste grátis no cadastro. A clínica configura seu perfil (nome, foto, endereço e horários de funcionamento) e cadastra serviços com duração e valor, além de acompanhar as consultas marcadas em um dashboard. Para o paciente, o agendamento é simples: escolhe o serviço e o horário disponível, e ao confirmar a consulta o horário é bloqueado automaticamente, evitando conflitos com outros agendamentos.",
    techs: [
      "TypeScript",
      "React",
      "Next",
      "Node.js",
      "PostgreSQL",
      "Webhhooks",
      "Zod",
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
    title: "EasyDiet - ",
    icon: FaDumbbell,
    description:
      "EasyDiete é um gerador inteligente de dietas integrado com IA. O usuário informa dados como peso, altura, frequência de exercícios e objetivo (perder peso, manter ou ganhar massa), e o sistema utiliza o ChatGPT para criar um plano alimentar personalizado de acordo com as características e o foco de cada pessoa.",
    techs: ["TypeScript", "Nodejs", "Fastify", "OpenAi", "Zod", "React"],
    images: [
      "/images/projects/EasyDiet/image-1.png",
      "/images/projects/EasyDiet/image-2.png",
    ],
    liveUrl: "",
    repoUrl: "https://github.com/pierrepaulo/easy-diet",
  },
];
