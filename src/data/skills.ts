// spec: specs/07-skills-data.md
import type { Skill } from './types'

export const skills: Skill[] = [
  // Frontend
  { name: 'HTML', category: 'frontend', icon: 'html5' },
  { name: 'CSS', category: 'frontend', icon: 'css3' },
  { name: 'JavaScript', category: 'frontend', icon: 'javascript' },
  { name: 'TypeScript', category: 'frontend', icon: 'typescript' },
  { name: 'React', category: 'frontend', icon: 'react' },
  { name: 'Vue', category: 'frontend', icon: 'vuejs' },
  { name: 'Svelte', category: 'frontend', icon: 'svelte' },
  { name: 'Astro', category: 'frontend', icon: 'astro' },
  { name: 'Tailwind CSS', category: 'frontend', icon: 'tailwindcss' },
  { name: 'Framer Motion', category: 'frontend', icon: 'framer' },

  // Backend
  { name: 'Node.js', category: 'backend', icon: 'nodejs' },
  { name: 'Express', category: 'backend', icon: 'express' },
  { name: 'GraphQL', category: 'backend', icon: 'graphql' },
  { name: 'REST APIs', category: 'backend', icon: 'fastapi' },
  { name: 'MongoDB', category: 'backend', icon: 'mongodb' },
  { name: 'PostgreSQL', category: 'backend', icon: 'postgresql' },

  // Tools
  { name: 'Git', category: 'tools', icon: 'git' },
  { name: 'GitHub', category: 'tools', icon: 'github' },
  { name: 'Vite', category: 'tools', icon: 'vitejs' },
  { name: 'Figma', category: 'tools', icon: 'figma' },
  { name: 'Docker', category: 'tools', icon: 'docker' },
  { name: 'VS Code', category: 'tools', icon: 'vscode' },
]
