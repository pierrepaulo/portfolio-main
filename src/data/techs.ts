import type { LucideIcon } from "lucide-react";
import {
  Atom,
  Braces,
  Cloud,
  Container,
  Database,
  FileJson2,
  FlaskConical,
  Gauge,
  GitBranch,
  Globe,
  HardDrive,
  KeyRound,
  Layers3,
  Network,
  Server,
  ShieldCheck,
  TestTube2,
  Wind,
} from "lucide-react";

export type Tech = {
  id: string;
  name: string;
  icon: LucideIcon;
  color: string;
};

export const techs: Tech[] = [
  {
    id: "typescript",
    name: "TypeScript",
    icon: Braces,
    color: "#3178C6",
  },
  {
    id: "javascript",
    name: "JavaScript",
    icon: FileJson2,
    color: "#F7DF1E",
  },
  {
    id: "nodejs",
    name: "Node.js",
    icon: Server,
    color: "#339933",
  },
  {
    id: "express",
    name: "Express",
    icon: Network,
    color: "#FFFFFF",
  },
  {
    id: "fastify",
    name: "Fastify",
    icon: Gauge,
    color: "#FFFFFF",
  },
  {
    id: "postgresql",
    name: "PostgreSQL",
    icon: Database,
    color: "#4169E1",
  },
  {
    id: "mongodb",
    name: "MongoDB",
    icon: HardDrive,
    color: "#47A248",
  },
  {
    id: "prisma",
    name: "Prisma",
    icon: Layers3,
    color: "#339933",
  },
  {
    id: "docker",
    name: "Docker",
    icon: Container,
    color: "#2496ED",
  },
  {
    id: "aws",
    name: "AWS",
    icon: Cloud,
    color: "#FF9900",
  },
  {
    id: "react",
    name: "React",
    icon: Atom,
    color: "#61DAFB",
  },
  {
    id: "nextjs",
    name: "Next.js",
    icon: Globe,
    color: "#FFFFFF",
  },
  {
    id: "tailwind",
    name: "Tailwind CSS",
    icon: Wind,
    color: "#38BDF8",
  },
  {
    id: "jwt",
    name: "JWT",
    icon: KeyRound,
    color: "#FFFFFF",
  },
  {
    id: "zod",
    name: "Zod",
    icon: ShieldCheck,
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
    icon: FlaskConical,
    color: "#6E9F18",
  },
  {
    id: "jest",
    name: "Jest",
    icon: TestTube2,
    color: "#C21325",
  },
];

