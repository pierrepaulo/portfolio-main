import { projects } from "@/data/projects";

export function getProjects() {
  return projects;
}

export function getProjectSlugs() {
  return projects.map((project) => project.slug);
}

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug) ?? null;
}
