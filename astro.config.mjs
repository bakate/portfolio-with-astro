import { defineConfig, envField, fontProviders } from 'astro/config';

import react from '@astrojs/react';

import mdx from '@astrojs/mdx';

import tailwindcss from '@tailwindcss/vite';
import { unified } from '@astrojs/markdown-remark';
import { remarkReadingTime } from './src/lib/remark-reading-time.mjs';

import vercel from '@astrojs/vercel';

// https://astro.build/config
export default defineConfig({
  site: 'https://bakateba.tech',

  integrations: [
    react(),
    mdx({
      processor: unified({
        remarkPlugins: [remarkReadingTime],
      }),
      syntaxHighlight: {
        type: 'shiki',
        themes: {
          light: 'github-light',
          dark: 'github-dark',
        },
        excludeLangs: ['mermaid'],
      },
    }),
  ],

  // Bloomflow left the projects list: it is an employer, told on the Experience page.
  redirects: {
    '/projects/bloomflow': '/experience',
    '/en/projects/bloomflow': '/en/experience',
  },

  env: {
    schema: {
      // Umami Cloud website ID. Unset (local, preview, tests): no analytics script.
      PUBLIC_UMAMI_WEBSITE_ID: envField.string({
        context: 'client',
        access: 'public',
        optional: true,
      }),
    },
  },

  i18n: {
    locales: ['fr', 'en'],
    defaultLocale: 'fr',
    routing: {
      prefixDefaultLocale: false,
    },
  },

  // Self-hosted at build time: the files ship with the site, no font CDN at runtime.
  fonts: [
    {
      provider: fontProviders.fontsource(),
      name: 'Geist',
      cssVariable: '--font-geist',
      weights: ['300 700'],
      subsets: ['latin', 'latin-ext'],
      fallbacks: ['ui-sans-serif', 'system-ui', 'sans-serif'],
    },
    {
      provider: fontProviders.fontsource(),
      name: 'Bricolage Grotesque',
      cssVariable: '--font-bricolage',
      weights: ['500 800'],
      subsets: ['latin', 'latin-ext'],
      fallbacks: ['ui-sans-serif', 'system-ui', 'sans-serif'],
    },
  ],

  vite: {
    plugins: [tailwindcss()],
  },

  adapter: vercel(),
});
