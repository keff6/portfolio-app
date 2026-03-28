export interface Skill {
  name: string;
  icon?: string;
}

export interface SkillCategory {
  title: string;
  skills: Skill[];
}

export const skills: SkillCategory[] = [
  {
    title: "Languages",
    skills: [
      { name: "JavaScript", icon: "javascript" },
      { name: "TypeScript", icon: "typescript" },
      { name: "HTML5", icon: "html" },
      { name: "CSS", icon: "css" },
      { name: "C#", icon: "csharp" },
    ],
  },
  {
    title: "Frameworks & Libraries",
    skills: [
      { name: "React", icon: "react" },
      { name: "Next.js", icon: "nextjs" },
      { name: "Node.js", icon: "nodejs" },
      { name: "Tailwind CSS", icon: "tailwind" },
      { name: "Prisma", icon: "prisma" },
      { name: "Express", icon: "express" },
    ],
  },
  {
    title: "Databases",
    skills: [
      { name: "PostgreSQL", icon: "postgresql" },
      { name: "MySQL", icon: "mysql" },
      { name: "SQL Server", icon: "sqlserver" },
      { name: "DynamoDB", icon: "dynamodb" },
    ],
  },
  {
    title: "Cloud",
    skills: [
      { name: "AWS", icon: "aws" },
      { name: "Microsoft Azure", icon: "azure" },
      { name: "AWS Lambda", icon: "lambda" },
      { name: "AWS S3", icon: "s3" },
      { name: "AWS EC2", icon: "ec2" },
      { name: "AWS Cognito", icon: "cognito" },
      { name: "AWS API Gateway", icon: "apigateway" },
      { name: "Vercel", icon: "vercel" },
    ],
  },
  {
    title: "Tools & Platforms",
    skills: [
      { name: "Git", icon: "git" },
      { name: "Docker", icon: "docker" },
      { name: "OpenCode", icon: "opencode" },
      { name: "GitHub Copilot", icon: "copilot" },
      { name: "REST APIs", icon: "api" },
    ],
  },
];
