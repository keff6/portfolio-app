import { Job } from "@/lib/types";

export const jobs: Job[] = [
  {
    id: 1,
    title: "Software Engineer",
    company: "Freelance",
    period: "2023 - Present",
    description: [
      "Designed and developed TimeIn, a full-stack web application for CCK focused on improving team productivity and workflow management. Owned the entire development lifecycle, from architecture and implementation to deployment and maintenance, using Next.js and backend services.",
      "The application includes authentication, reporting, and task tracking features, and is deployed on Vercel.",
      "Also contributed to the architecture and frontend development of an online car marketplace using Next.js. Although the project was discontinued, it demonstrates experience in building scalable applications and adapting to evolving project requirements.",
    ],
  },
  {
    id: 2,
    title: "Senior Consultant",
    company: "Gorilla Logic",
    period: "2019 - 2022",
    description: [
      "Worked on a project for Zero to Three, a non-governmental organization, building an application to track child cases and generate reports. Implemented an end-to-end file upload and download system using Amazon S3, improving data handling capabilities.",
      "Additionally, optimized reporting APIs, improving performance by up to 30% and ensuring responses completed within AWS API Gateway time limits.",
    ],
  },
  {
    id: 3,
    title: "Software Engineer",
    company: "First Factory",
    period: "2018 - 2019",
    description: [
      "Contributed to multiple projects, including a high-impact initiative for the International Centre for Missing & Exploited Children. Helped design and build an application capable of comparing images of potential suspects against criminal databases using Amazon Rekognition.",
      "This work focused on leveraging cloud-based machine learning services to support real-world investigations, providing both technical challenges and meaningful social impact.",
    ],
  },
  {
    id: 4,
    title: "Software Engineer",
    company: "Fiserv",
    period: "2013 - 2015",
    description: [
      "Worked on multiple projects for U.S. and U.K. banking clients, contributing to production systems in a fintech environment. Collaborated with distributed, cross-functional teams across regions including the U.S. and New Zealand.",
      "Gained experience building reliable solutions in regulated, high-impact environments and working effectively in fully remote teams.",
    ],
  },
  {
    id: 5,
    title: "Software Engineer",
    company: "Softland",
    period: "2011 - 2013",
    description: [
      "Contributed to core modules of the Softland ERP system, including Billing and Purchasing, working on business-critical functionality.",
      "Designed and developed a web service to expose key business indicators through APIs, enabling integration with an iOS application. This role provided early experience in both technical problem-solving and understanding business requirements in real-world systems.",
    ],
  },
];
