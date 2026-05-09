// @ts-check
import { defineConfig } from "astro/config";

import tailwind from "@astrojs/tailwind";

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
// spec: specs/00-project-cleanup.md, specs/02-astro-i18n-layout.md, specs/18-seo-sitemap-qa.md
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
  integrations: [
    tailwind(),
    sitemap({
      i18n: {
        defaultLocale: 'en',
        locales: {
          en: 'en-US',
          es: 'es-ES',
        },
      },
    }),
  ],
  compressHTML: true,
});
