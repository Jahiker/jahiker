// spec: specs/08-experience-data.md
import type { ExperienceItem } from '../types'

export const experience: ExperienceItem[] = [
  {
    company: 'Smk',
    role: 'Contractor Fullstack Developer',
    period: 'Dic 2025 – Presente',
    description:
      'Desarrollé un tema WordPress headless con React 18 y TypeScript, usando WordPress como CMS y una SPA del lado del cliente para todo el enrutamiento y renderizado. Construí una API REST con Laravel 12 para aplicar políticas de seguridad de contraseñas en tiendas Shopify, incluyendo detección de reutilización con bcrypt, limitación de tasa y un sistema completo de auditoría.',
    stack: ['React', 'TypeScript', 'WordPress', 'Laravel', 'PHP'],
  },
  {
    company: 'Softlimit',
    role: 'Subcontractor Shopify Developer',
    period: 'Abr 2026 – Presente',
    description:
      'Desarrollo y personalización de temas Shopify como subcontratista, trabajando en storefronts de clientes.',
    stack: ['Shopify', 'Liquid', 'JavaScript'],
  },
  {
    company: 'Rainy City Agency',
    role: 'Shopify Developer',
    period: 'Oct 2024 – Dic 2025',
    description:
      'Desarrollé y personalicé storefronts Shopify Plus para marcas internacionales de e-commerce. Optimicé el rendimiento y la accesibilidad de los temas para mejorar las tasas de conversión, colaborando con equipos multidisciplinarios de diseñadores, PMs y QA.',
    stack: ['Shopify Plus', 'Liquid', 'JavaScript', 'CSS'],
  },
  {
    company: 'SMk Online',
    role: 'Web Developer',
    period: 'Oct 2020 – Oct 2024',
    description:
      'Construí y mantuve sitios web responsivos con React, Vue, Laravel y WordPress. Desarrollé temas personalizados para Shopify y WordPress, integré APIs de terceros y entregué proyectos a tiempo bajo metodologías ágiles.',
    stack: ['React', 'Vue', 'Laravel', 'WordPress', 'Shopify'],
  },
  {
    company: 'Freelance',
    role: 'Web Developer',
    period: 'Ene 2019 – Sep 2019',
    description:
      'Creé soluciones personalizadas en WordPress y Shopify para pequeñas empresas. Desarrollé aplicaciones de página única usando React.js y Vue.js.',
    stack: ['WordPress', 'Shopify', 'React', 'Vue'],
  },
  {
    company: 'Eurofeed de Venezuela',
    role: 'Ingeniero de Proyectos',
    period: 'Sep 2012 – Jun 2018',
    description:
      'Lideré el diseño e implementación de proyectos de plantas agroindustriales. Gestioné soporte técnico a clientes, logística de proveedores y presupuestos — habilidades analíticas y de resolución de problemas que luego trasladé a la gestión de proyectos web.',
    stack: [],
  },
]
