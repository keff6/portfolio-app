import { Project } from "@/lib/types";

export const projects: Project[] = [
  {
    id: 1,
    title: "TimeIn - Team Productivity App",
    description: [
      "TimeIn is a full-stack web application designed to improve team productivity and workflow management. Built from scratch using Next.js, it allows teams to track tasks, manage time, and generate reports in a centralized system.",
      "Used daily by 100+ users across multiple countries in Central America.",
      "I owned the entire development lifecycle, from architecture and implementation to deployment on Vercel, focusing on building a reliable and maintainable solution for real-world use.",
    ],
    tags: ["Next.js", "Vercel", "Prisma", "Tailwind CSS", "Azure", "PostgreSQL"],
    thumbnail: "/images/timein.png",
  },
  {
    id: 2,
    title: "GamesCollection - Personal Game Library Manager",
    description: [
      "GamesCollection is a full-stack web application for managing and tracking a personal video game collection. Originally built with React, Node.js, and MySQL, it has been rebuilt with Next.js, TypeScript, PostgreSQL, and Prisma as a modern full-stack application.",
      "The rebuild was developed and deployed using an AI-assisted engineering workflow, combining specification-driven development, AI-assisted implementation, testing, code review, and iterative refinement. The project demonstrates end-to-end ownership while exploring modern approaches to building maintainable and reliable software.",
    ],
    tags: ["React", "NodeJS", "Express", "MySQL", "Bootstrap", "Next.js", "TypeScript", "PostgreSQL", "Prisma", "AI-assisted development"],
    thumbnail: "/images/gamescollection.png",
    githubUrl: "https://github.com/keff6/gamescollection_ai",
    liveUrl: "https://gamescollection-kappa.vercel.app/",
  },
];
