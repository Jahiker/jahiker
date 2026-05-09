// spec: specs/07-skills-data.md, specs/13-skills-section.md
import type { Skill } from './types'

export const skills: Skill[] = [
  // Frontend
  { name: 'HTML', category: 'frontend', icon: 'html5', color: '#E34F26' },
  { name: 'CSS', category: 'frontend', icon: 'css3', color: '#1572B6' },
  { name: 'JavaScript', category: 'frontend', icon: 'javascript', color: '#F7DF1E' },
  { name: 'TypeScript', category: 'frontend', icon: 'typescript', color: '#3178C6' },
  { name: 'React', category: 'frontend', icon: 'react', color: '#61DAFB' },
  { name: 'Vue', category: 'frontend', icon: 'vuejs', color: '#4FC08D' },
  { name: 'Svelte', category: 'frontend', icon: 'svelte', color: '#FF3E00' },
  { name: 'Astro', category: 'frontend', icon: 'astro', color: '#FF5D01' },
  { name: 'Tailwind CSS', category: 'frontend', icon: 'tailwindcss', color: '#06B6D4' },
  { name: 'Framer Motion', category: 'frontend', icon: 'framer', color: '#0055FF' },
  { name: 'Shopify', category: 'frontend', color: '#96BF48' },
  { name: 'WordPress', category: 'frontend', color: '#21759B' },
  { name: 'GSAP', category: 'frontend', color: '#88CE02' },

  // Backend
  { name: 'Node.js', category: 'backend', icon: 'nodejs', color: '#339933' },
  { name: 'Express', category: 'backend', icon: 'express', color: '#888888' },
  { name: 'GraphQL', category: 'backend', icon: 'graphql', color: '#E10098' },
  { name: 'REST APIs', category: 'backend', icon: 'fastapi', color: '#FF6C37' },
  { name: 'MongoDB', category: 'backend', icon: 'mongodb', color: '#47A248' },
  { name: 'PostgreSQL', category: 'backend', icon: 'postgresql', color: '#4169E1' },
  { name: 'PHP', category: 'backend', color: '#777BB4' },
  { name: 'Laravel', category: 'backend', color: '#FF2D20' },
  { name: 'MySQL', category: 'backend', color: '#4479A1' },

  // Tools
  { name: 'Git', category: 'tools', icon: 'git', color: '#F05032' },
  { name: 'GitHub', category: 'tools', icon: 'github', color: '#6E5494' },
  { name: 'Vite', category: 'tools', icon: 'vitejs', color: '#646CFF' },
  { name: 'Figma', category: 'tools', icon: 'figma', color: '#F24E1E' },
  { name: 'Docker', category: 'tools', icon: 'docker', color: '#2496ED' },
  { name: 'VS Code', category: 'tools', icon: 'vscode', color: '#007ACC' },
  { name: 'Claude', category: 'tools', color: '#CC6B4D' },
  { name: 'Claude Code', category: 'tools', color: '#E8845E' },
  { name: 'Cursor', category: 'tools', color: '#6366F1' },
  { name: 'Gemini CLI', category: 'tools', color: '#4285F4' },
]
