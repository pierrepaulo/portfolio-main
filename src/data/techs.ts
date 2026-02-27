import type { LucideIcon } from "lucide-react";
import { Bot, GitBranch } from "lucide-react";
import type { IconType } from "react-icons";
import {
  SiAmazonwebservices,
  SiDocker,
  SiDrizzle,
  SiExpress,
  SiFastify,
  SiGithubactions,
  SiJavascript,
  SiJest,
  SiJsonwebtokens,
  SiMongodb,
  SiNestjs,
  SiNextdotjs,
  SiNodedotjs,
  SiPostgresql,
  SiPrisma,
  SiPython,
  SiReact,
  SiTailwindcss,
  SiTypescript,
  SiVitest,
  SiZod,
} from "react-icons/si";

type TechIcon = LucideIcon | IconType;

export type Tech = {
  id: string;
  name: string;
  icon: TechIcon;
  color: string;
};

export const techs: Tech[] = [
  {
    id: "typescript",
    name: "TypeScript",
    icon: SiTypescript,
    color: "#3178C6",
  },
  {
    id: "javascript",
    name: "JavaScript",
    icon: SiJavascript,
    color: "#F7DF1E",
  },
  {
    id: "python",
    name: "Python",
    icon: SiPython,
    color: "#3776AB",
  },
  {
    id: "nodejs",
    name: "Node.js",
    icon: SiNodedotjs,
    color: "#339933",
  },
  {
    id: "nestjs",
    name: "NestJS",
    icon: SiNestjs,
    color: "#E0234E",
  },
  {
    id: "express",
    name: "Express",
    icon: SiExpress,
    color: "#000000",
  },
  {
    id: "fastify",
    name: "Fastify",
    icon: SiFastify,
    color: "#000000",
  },
  {
    id: "ai-agents",
    name: "AI Agents",
    icon: Bot,
    color: "#00F0FF",
  },
  {
    id: "postgresql",
    name: "PostgreSQL",
    icon: SiPostgresql,
    color: "#4169E1",
  },
  {
    id: "mongodb",
    name: "MongoDB",
    icon: SiMongodb,
    color: "#47A248",
  },
  {
    id: "prisma",
    name: "Prisma",
    icon: SiPrisma,
    color: "#2D3748",
  },
  {
    id: "drizzle",
    name: "Drizzle",
    icon: SiDrizzle,
    color: "#C5F74F",
  },
  {
    id: "docker",
    name: "Docker",
    icon: SiDocker,
    color: "#2496ED",
  },
  {
    id: "aws",
    name: "AWS",
    icon: SiAmazonwebservices,
    color: "#FF9900",
  },
  {
    id: "github-actions",
    name: "GitHub Actions",
    icon: SiGithubactions,
    color: "#2088FF",
  },
  {
    id: "react",
    name: "React",
    icon: SiReact,
    color: "#61DAFB",
  },
  {
    id: "nextjs",
    name: "Next.js",
    icon: SiNextdotjs,
    color: "#000000",
  },
  {
    id: "tailwind",
    name: "Tailwind CSS",
    icon: SiTailwindcss,
    color: "#38BDF8",
  },
  {
    id: "jwt",
    name: "JWT",
    icon: SiJsonwebtokens,
    color: "#000000",
  },
  {
    id: "zod",
    name: "Zod",
    icon: SiZod,
    color: "#3E67B1",
  },
  {
    id: "tanstack-query",
    name: "TanStack Query",
    icon: GitBranch,
    color: "#FF4154",
  },
  {
    id: "vitest",
    name: "Vitest",
    icon: SiVitest,
    color: "#6E9F18",
  },
  {
    id: "jest",
    name: "Jest",
    icon: SiJest,
    color: "#C21325",
  },
];
