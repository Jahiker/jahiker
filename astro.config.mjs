// @ts-check
import { defineConfig } from "astro/config";

import tailwind from "@astrojs/tailwind";

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
// spec: specs/00-project-cleanup.md, specs/02-astro-i18n-layout.md
export default defineConfig({
  site: 'https://jahiker.github.io',
  base: '/jahiker',
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'es'],
    routing: {
      prefixDefaultLocale: false,
    },
  },
  integrations: [tailwind(), sitemap()],
  compressHTML: true,
});
