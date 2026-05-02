// spec: specs/08-experience-data.md
import type { ExperienceItem } from '../types'

export const experience: ExperienceItem[] = [
  {
    company: 'Smk',
    role: 'Contractor Fullstack Developer',
    period: 'Dec 2025 – Present',
    description:
      'Developed a headless WordPress theme using React 18 and TypeScript, with WordPress as CMS and a client-side SPA handling all routing and rendering. Built a REST API with Laravel 12 to enforce password security policies for Shopify stores, including bcrypt-based reuse detection, rate limiting, and a full audit logging system.',
    stack: ['React', 'TypeScript', 'WordPress', 'Laravel', 'PHP'],
  },
  {
    company: 'Softlimit',
    role: 'Subcontractor Shopify Developer',
    period: 'Apr 2026 – Present',
    description:
      'Shopify theme development and customization as a subcontractor, working on client storefronts.',
    stack: ['Shopify', 'Liquid', 'JavaScript'],
  },
  {
    company: 'Rainy City Agency',
    role: 'Shopify Developer',
    period: 'Oct 2024 – Dec 2025',
    description:
      'Developed and customized Shopify Plus storefronts for international e-commerce brands. Optimized theme performance and accessibility to improve client store conversion rates, collaborating with cross-functional teams of designers, PMs, and QA.',
    stack: ['Shopify Plus', 'Liquid', 'JavaScript', 'CSS'],
  },
  {
    company: 'SMk Online',
    role: 'Web Developer',
    period: 'Oct 2020 – Oct 2024',
    description:
      'Built and maintained responsive websites using React, Vue, Laravel, and WordPress. Developed custom Shopify and WordPress themes, integrated third-party APIs, and consistently delivered projects on time under agile methodologies.',
    stack: ['React', 'Vue', 'Laravel', 'WordPress', 'Shopify'],
  },
  {
    company: 'Freelance',
    role: 'Web Developer',
    period: 'Jan 2019 – Sep 2019',
    description:
      'Created custom WordPress and Shopify solutions for small businesses. Developed dynamic single-page applications using React.js and Vue.js.',
    stack: ['WordPress', 'Shopify', 'React', 'Vue'],
  },
  {
    company: 'Eurofeed de Venezuela',
    role: 'Project Engineer',
    period: 'Sep 2012 – Jun 2018',
    description:
      'Led the design and implementation of agro-industrial plant projects. Managed client technical support, supplier logistics, and project budgeting — analytical and problem-solving skills later transferred into web project management.',
    stack: [],
  },
]
