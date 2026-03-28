export interface Project {
  id: number;
  title: string;
  description: string;
  tags: string[];
  githubUrl?: string;
  liveUrl?: string;
}

export interface Job {
  id: number;
  title: string;
  company: string;
  period: string;
  description: string;
}
