import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://smakologia.com',
  output: 'static',
  compressHTML: true,
  trailingSlash: 'ignore',
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
