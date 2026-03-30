/**
 * Represents a portfolio project with metadata and links.
 */
export interface Project {
  id: number;
  title: string;
  description: string[];
  tags: string[];
  thumbnail?: string;
  githubUrl?: string;
  liveUrl?: string;
}

/**
 * Represents a job or position in the career journey timeline.
 */
export interface Job {
  id: number;
  title: string;
  company: string;
  country: string;
  period: string;
  description: string[];
}
