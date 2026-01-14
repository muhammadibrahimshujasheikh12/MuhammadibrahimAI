
export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  tags: string[];
  imageUrl: string;
  demoUrl?: string;
  githubUrl?: string;
  featured: boolean;
}

export interface Experience {
  id: string;
  company: string;
  role: string;
  period: string;
  description: string[];
  technologies: string[];
}

export interface Skill {
  name: string;
  category: 'frontend' | 'backend' | 'devops' | 'tools';
  proficiency: number; // 0 to 100
}

// Added ChatMessage interface to fix import errors in AI components and services
export interface ChatMessage {
  role: 'user' | 'assistant';
  content: string;
  timestamp: Date;
}
