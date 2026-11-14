// spec: specs/p2-02-og-images.md, specs/fixes/code-review-fixes.md
// Shared OG card: both locale endpoints call this so the visual treatment stays identical (AC-02.4).
import { generateOpenGraphImage } from 'astro-og-canvas'

export async function renderOgCard(description: string): Promise<Response> {
  const png = await generateOpenGraphImage({
    title: 'Jahiker Rojas',
    description,
    bgGradient: [[16, 16, 16]],
    padding: 80,
    // Local files (SIL OFL, see src/fonts/og/OFL.txt): no network at build time, and a real 800 weight for the title.
    fonts: [
      './src/fonts/og/noto-sans-latin-400-normal.ttf',
      './src/fonts/og/noto-sans-latin-800-normal.ttf',
    ],
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
