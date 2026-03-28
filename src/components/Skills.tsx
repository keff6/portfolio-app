"use client";

import { motion } from "framer-motion";
import { skills } from "@/data/skills";

/**
 * Gets the abbreviated initials for a skill name.
 * Uses a predefined mapping for common skills, falls back to first 2 characters.
 * 
 * @param name - The full skill name
 * @returns The abbreviated initials (e.g., "JS" for "JavaScript")
 */
const getInitials = (name: string): string => {
  const exceptions: Record<string, string> = {
    "JavaScript": "JS",
    "TypeScript": "TS",
    "HTML5": "HTML",
    "C#": "C#",
    "React": "React",
    "Next.js": "Next",
    "Node.js": "Node",
    "Tailwind CSS": "TW",
    "Prisma": "Prisma",
    "Express": "Express",
    "PostgreSQL": "PG",
    "MySQL": "MySQL",
    "SQL Server": "SQL",
    "DynamoDB": "DDB",
    "AWS": "AWS",
    "Microsoft Azure": "Azure",
    "AWS Lambda": "Lambda",
    "AWS S3": "S3",
    "AWS EC2": "EC2",
    "AWS Cognito": "Cogn",
    "AWS API Gateway": "APIG",
    "Vercel": "Vercel",
    "Git": "Git",
    "Docker": "Docker",
    "OpenCode": "OC",
    "GitHub Copilot": "Co-p",
    "REST APIs": "REST",
  };
  return exceptions[name] || name.substring(0, 2).toUpperCase();
};

/**
 * Renders the Skills section displaying categorized expertise with icons.
 * Uses Framer Motion for scroll-triggered animations.
 * 
 * @returns The Skills section JSX element
 */
export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6 bg-gray-950/50">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-6xl mx-auto"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">
          Skills & Expertise
        </h2>
        <div className="space-y-10">
          {skills.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
            >
              <h3 className="text-lg font-semibold text-blue-400 mb-4">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.3,
                      delay: categoryIndex * 0.1 + skillIndex * 0.05,
                    }}
                    className="group flex items-center gap-2 px-4 py-2 bg-gray-900 border border-gray-800 rounded-lg hover:border-blue-600 hover:bg-gray-800 transition-all duration-300 cursor-default"
                  >
                    {skill.icon ? (
                      <img
                        src={`/icons/skills/${skill.icon}.svg`}
                        alt={skill.name}
                        className="w-6 h-6"
                      />
                    ) : (
                      <span className="flex items-center justify-center w-6 h-6 text-xs font-bold bg-blue-600 text-white rounded">
                        {getInitials(skill.name)}
                      </span>
                    )}
                    <span className="text-gray-300 group-hover:text-white transition-colors">
                      {skill.name}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
