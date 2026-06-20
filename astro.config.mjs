import { defineConfig } from 'astro/config';
import node from '@astrojs/node';

// SSR site: fetches content from the Wagtail CMS API at request time.
// Multi-language with German primary, all locales prefixed (/de /en /es).
export default defineConfig({
  output: 'server',
  adapter: node({ mode: 'standalone' }),
  i18n: {
    defaultLocale: 'de',
    locales: ['de', 'en'],
    routing: {
      prefixDefaultLocale: true,
      redirectToDefaultLocale: true,
    },
  },
});
