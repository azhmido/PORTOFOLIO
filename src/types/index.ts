export type Lang = 'en' | 'id';

export interface Project {
  title: string;
  description: { en: string; id: string };
  techStack: string[];
  githubUrl: string;
  demoUrl?: string;
  image?: string;
  problem: { en: string; id: string };
  approach: { en: string; id: string };
  results: { en: string; id: string };
  highlights: string[];
}

export interface ExperienceItem {
  period: { en: string; id: string };
  title: { en: string; id: string };
  org: { en: string; id: string };
  description: { en: string; id: string };
  type: 'education' | 'experience' | 'training';
}

export interface TechCategory {
  category: { en: string; id: string };
  items: string[];
}

export type CertificateCategory = 'all' | 'fullstack' | 'frontend' | 'core' | 'database' | 'tools';

export interface Certificate {
  id: string;
  title: { en: string; id: string };
  issuer: { en: string; id: string };
  date: { en: string; id: string };
  grade: string;
  sessions: { en: string; id: string };
  category: 'fullstack' | 'frontend' | 'core' | 'database' | 'tools';
  image: string;
  skills: string[];
  description: { en: string; id: string };
}
