// spec: specs/01-types-tailwind-global.md
import type { ImageMetadata } from 'astro'

export interface NavLink {
  label: string
  href: string
}

export interface Project {
  name: string
  description: string
  tags: string[]
  image: ImageMetadata
  siteUrl: string
  sourceCodeUrl: string | null
  year: number
}

export interface Skill {
  name: string
  category: 'frontend' | 'backend' | 'tools' | 'other'
  icon?: string
}

export interface ExperienceItem {
  company: string
  role: string
  period: string
  description: string
  stack?: string[]
}

export interface HeroContent {
  greeting: string
  name: string
  tagline: string
  cta: string
}

export interface AboutContent {
  text: string
}

export interface ContactContent {
  heading: string
  email: string
  linkedin: string
  github: string
}

export interface SiteContent {
  hero: HeroContent
  about: AboutContent
  nav: NavLink[]
  contact: ContactContent
}
