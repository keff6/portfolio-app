import { Project } from "@/lib/types";

export const projects: Project[] = [
  {
    id: 1,
    title: "Project One",
    description: "A brief description of your first project. Mention what it does and the tech stack used.",
    tags: ["React", "Node.js", "MongoDB"],
    githubUrl: "https://github.com",
    liveUrl: "https://example.com",
  },
  {
    id: 2,
    title: "Project Two",
    description: "A brief description of your second project. Highlight your role and key achievements.",
    tags: ["Next.js", "TypeScript", "Tailwind"],
    githubUrl: "https://github.com",
  },
  {
    id: 3,
    title: "Project Three",
    description: "A brief description of your third project. Include metrics or impact if possible.",
    tags: ["Python", "FastAPI", "PostgreSQL"],
    githubUrl: "https://github.com",
    liveUrl: "https://example.com",
  },
  {
    id: 4,
    title: "Project Four",
    description: "A brief description of your fourth project. Keep it concise and impactful.",
    tags: ["React Native", "Firebase"],
    liveUrl: "https://example.com",
  },
];
