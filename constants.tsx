import React from 'react';
import { Project, Experience, Skill } from './types';

export const PROJECTS: Project[] = [
  {
    id: 'p1',
    title: 'BakingForCraving',
    description: 'A delicious, fast-loading digital experience showcasing artisanal baked goods and desserts, built with modern web technology for smooth browsing and instant indulgence discovery.',
    longDescription: 'BakingForCraving is a warm, responsive platform designed to celebrate handcrafted pastries and desserts, combining beautiful visuals with seamless navigation to help customers explore, order, and savor our creations.',
    tags: ['React 19', 'TypeScript 5.8', 'Tailwind CSS', 'Vite'],
    imageUrl: 'bakekravingsco.jpg',
    featured: true,
    githubUrl: 'https://github.com/muhammadibrahimshujasheikh12/-BakingForCraving',
    demoUrl: 'https://bakingforcraving.netlify.app/'
  },
  {
    id: 'p2',
    title: 'DevVortex',
    description: 'An advanced ecosystem for developers designed to streamline project management and team collaboration through a centralized interface.',
    longDescription: 'DevVortex is a sophisticated software solution focused on increasing developer productivity by integrating real-time communication tools with automated workflow tracking.',
    tags: ['React 19', 'TypeScript 5.7+', 'Supabase', 'Tailwind CSS'],
    imageUrl: 'devvortex.jpg',
    featured: true,
    githubUrl: 'https://github.com/muhammadibrahimshujasheikh12',
    demoUrl: 'https://devorrtexco.netlify.app'
  }
];

export const EXPERIENCES: Experience[] = [
  {
    id: 'exp1',
    company: 'Aptech Learning Pakistan',
    role: 'Software Engineering Student (ACCP-AI)',
    period: '2024 - Present',
    description: [
      'Currently enrolled in ACCP-AI (Advanced Certificate in Computer Programming – Artificial Intelligence) at Aptech Learning.',
      'Completed coursework in web development, databases, and software engineering fundamentals.',
      'Built responsive web applications using HTML, CSS, JavaScript, and modern UI frameworks.',
      'Worked with SQL Server, MySQL, and backend technologies including PHP and .NET Core MVC.',
      'Currently advancing skills in TypeScript, C#, and structured full-stack application development.'
    ],
    technologies: ['HTML', 'CSS', 'JavaScript', 'TypeScript', 'PHP', 'Laravel', 'MySQL', 'SQL Server', 'C#', '.NET Core MVC'],
  },
  {
    id: 'exp2',
    company: 'Scrimba',
    role: 'Frontend Development Path – Scrimba Ambassador',
    period: '2026 - Present',
    description: [
      'Currently completing Scrimba’s Frontend Developer Path with a strong focus on hands-on projects.',
      'Proud Scrimba Ambassador, advocating for interactive coding education.',
      'Building responsive user interfaces using HTML, CSS, JavaScript, and React.',
      'Strengthening problem-solving skills through real-world frontend challenges.'
    ],
    technologies: ['HTML5', 'CSS3', 'JavaScript (ES6+)', 'TypeScript', 'React', 'Material UI', 'Bootstrap'],
  }
];

export const SKILLS: Skill[] = [
  { name: 'React & TypeScript', category: 'frontend', proficiency: 98 },
  { name: 'JavaScript (ES6+)', category: 'frontend', proficiency: 95 },
  { name: 'HTML5 & CSS3', category: 'frontend', proficiency: 96 },
  { name: 'C# & .NET Core MVC', category: 'backend', proficiency: 85 },
  { name: 'PHP & Laravel', category: 'backend', proficiency: 82 },
  { name: 'SQL & Database Design', category: 'backend', proficiency: 88 },
];

export const Icons = {
  Github: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path></svg>
  ),
  Linkedin: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect width="4" height="12" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg>
  ),
  Mail: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"></rect><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path></svg>
  ),
  Download: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>
  ),
  ExternalLink: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
  ),
  Award: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="8" r="7"></circle><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline></svg>
  ),
  Bot: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 8V4H8"/><rect width="16" height="12" x="4" y="8" rx="2"/><path d="M2 14h2"/><path d="M20 14h2"/><path d="M15 13v2"/><path d="M9 13v2"/></svg>
  ),
  Send: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg>
  )
};