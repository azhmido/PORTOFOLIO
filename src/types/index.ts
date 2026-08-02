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

export interface StatItem {
  label: { en: string; id: string };
  value: { en: string; id: string };
}

export interface ExperienceItem {
  period: { en: string; id: string };
  title: { en: string; id: string };
  org: { en: string; id: string };
  description: { en: string; id: string };
  type: 'education' | 'training' | 'certification';
}

export interface TechCategory {
  category: { en: string; id: string };
  items: string[];
}
