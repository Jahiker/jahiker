// spec: specs/05-content-data.md
import type { SiteContent } from '../types'

export const content: SiteContent = {
  hero: {
    greeting: "Hi, I'm",
    name: 'Jahiker Rojas',
    tagline: 'Fullstack Developer building fast, beautiful web experiences.',
    cta: 'See my work',
  },
  about: {
    text: "I'm a Fullstack Developer passionate about crafting clean, performant web experiences from front to back. I enjoy turning complex problems into simple, intuitive interfaces — whether that's a snappy React app or a robust API. When I'm not coding, I'm exploring new technologies and pushing the boundaries of what the web can do.",
  },
  nav: [
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Experience', href: '#experience' },
    { label: 'Contact', href: '#contact' },
  ],
  contact: {
    heading: 'Get in touch',
    email: 'rojasjahiker@gmail.com',
    linkedin: 'jahikerrojas',
    github: 'jahiker',
  },
}
