"use client";

import { motion } from "framer-motion";
import { skills } from "@/data/skills";

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

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6 relative">
      <div className="absolute inset-0 bg-slate-950/50" />
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full bg-blue-500/5 blur-[100px]" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full bg-blue-500/3 blur-[80px]" />
      </div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-6xl mx-auto relative z-10"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">
          Skills & Expertise
        </h2>
        <div className="space-y-12">
          {skills.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
            >
              <h3 className="text-lg font-semibold text-blue-400 mb-5 flex items-center gap-3">
                <span className="w-8 h-px bg-gradient-to-r from-blue-500/50 to-transparent" />
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.3,
                      delay: categoryIndex * 0.1 + skillIndex * 0.05,
                    }}
                    whileHover={{ scale: 1.03 }}
                    className="group relative"
                  >
                    <div className="absolute inset-0 rounded-lg bg-blue-500/20 blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="relative flex items-center gap-2 px-4 py-2.5 bg-slate-900/80 border border-slate-800 rounded-lg group-hover:border-blue-500/40 transition-all duration-300">
                      {skill.icon ? (
                        <img
                          src={`/icons/skills/${skill.icon}.svg`}
                          alt={skill.name}
                          className="w-5 h-5"
                        />
                      ) : (
                        <span className="flex items-center justify-center w-5 h-5 text-[10px] font-bold bg-blue-500/20 text-blue-300 rounded">
                          {getInitials(skill.name)}
                        </span>
                      )}
                      <span className="text-sm text-slate-300 group-hover:text-white transition-colors">
                        {skill.name}
                      </span>
                    </div>
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