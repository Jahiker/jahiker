// spec: specs/p2-02-og-images.md, specs/fixes/code-review-fixes.md
import type { APIRoute } from 'astro'
import { renderOgCard } from './_card'

export const GET: APIRoute = () => renderOgCard('Desarrollador Web Fullstack')
