// spec: specs/05-content-data.md
import type { SiteContent } from '../types'

export const content: SiteContent = {
  hero: {
    greeting: 'Hola, soy',
    name: 'Jahiker Rojas',
    tagline: 'Desarrollador Fullstack creando experiencias web rápidas y atractivas.',
    cta: 'Ver mi trabajo',
  },
  about: {
    text: 'Soy un Desarrollador Fullstack apasionado por crear experiencias web limpias y de alto rendimiento, de principio a fin. Disfruto transformar problemas complejos en interfaces simples e intuitivas, ya sea una app React ágil o una API robusta. Cuando no estoy programando, exploro nuevas tecnologías y empujo los límites de lo que la web puede hacer.',
  },
  nav: [
    { label: 'Sobre mí', href: '#about' },
    { label: 'Habilidades', href: '#skills' },
    { label: 'Proyectos', href: '#projects' },
    { label: 'Experiencia', href: '#experience' },
    { label: 'Contacto', href: '#contact' },
  ],
  contact: {
    heading: 'Hablemos',
    email: 'rojasjahiker@gmail.com',
    linkedin: 'jahikerrojas',
    github: 'jahiker',
  },
}
