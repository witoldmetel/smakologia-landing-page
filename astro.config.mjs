import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

const site = process.env.ASTRO_SITE || 'https://smakologia.com';
const base = process.env.ASTRO_BASE || undefined;

export default defineConfig({
  site,
  base,
  output: 'static',
  compressHTML: true,
  trailingSlash: 'ignore',
  build: {
    inlineStylesheets: 'always',
  },
  integrations: [
    sitemap({
      i18n: {
        defaultLocale: 'pl',
        locales: {
          pl: 'pl-PL',
        },
      },
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
