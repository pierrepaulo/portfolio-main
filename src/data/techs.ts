import type { IconType } from "react-icons";
import {
  SiAmazonwebservices,
  SiDocker,
  SiExpress,
  SiFastify,
  SiJavascript,
  SiJest,
  SiJsonwebtokens,
  SiMongodb,
  SiNextdotjs,
  SiNodedotjs,
  SiPostgresql,
  SiPrisma,
  SiReact,
  SiReactquery,
  SiTailwindcss,
  SiTypescript,
  SiVitest,
  SiZod,
} from "react-icons/si";

export type Tech = {
  id: string;
  name: string;
  icon: IconType;
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
    id: "nodejs",
    name: "Node.js",
    icon: SiNodedotjs,
    color: "#339933",
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
    icon: SiReactquery,
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
