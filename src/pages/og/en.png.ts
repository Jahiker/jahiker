// spec: specs/p2-02-og-images.md
import type { APIRoute } from 'astro'
import { generateOpenGraphImage } from 'astro-og-canvas'

export const GET: APIRoute = async () => {
  const png = await generateOpenGraphImage({
    title: 'Jahiker Rojas',
    description: 'Fullstack Web Developer',
    bgGradient: [[16, 16, 16]],
    border: { color: [231, 231, 216], width: 0 },
    padding: 80,
    font: {
      title: { color: [231, 231, 216], size: 80, weight: 'ExtraBold' },
      description: { color: [231, 231, 216], size: 44, weight: 'Normal' },
    },
    format: 'PNG',
  })

  return new Response(png, {
    headers: { 'Content-Type': 'image/png' },
  })
}
