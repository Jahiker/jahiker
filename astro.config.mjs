// @ts-check
import { defineConfig } from "astro/config";

import tailwind from "@astrojs/tailwind";

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
// spec: specs/00-project-cleanup.md
export default defineConfig({
  site: 'https://jahiker.github.io',
  base: '/jahiker',
  integrations: [tailwind(), sitemap()],
  compressHTML: true,
});
