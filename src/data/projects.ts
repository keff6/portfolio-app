import { Project } from "@/lib/types";

export const projects: Project[] = [
  {
    id: 1,
    title: "TimeIn - Team Productivity App",
    description: [
      "TimeIn is a full-stack web application designed to improve team productivity and workflow management. Built from scratch using Next.js, it allows teams to track tasks, manage time, and generate reports in a centralized system.",
      "I owned the entire development lifecycle, from architecture and implementation to deployment on Vercel, focusing on building a reliable and maintainable solution for real-world use.",
    ],
    tags: ["Next.js", "Vercel", "Prisma", "Tailwind CSS", "Azure", "PostgreSQL"],
  },
  {
    id: 2,
    title: "GamesCollection - Personal Game Library Manager",
    description: [
      "GamesCollection is a personal web application designed to manage and track my video game collection. Built with React, Node and MySQL, it allows users to organize games, track progress, and maintain a structured library.",
      "This project focuses on building a clean user experience while applying full-stack concepts in a practical, self-driven environment.",
    ],
    tags: ["React", "NodeJS", "Express", "MySQL", "Bootstrap" ],
    githubUrl: "https://github.com/keff6/gamescollection_fe",
    liveUrl: "https://gamescollection-app.onrender.com/",
  },
];
