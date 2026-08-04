import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://dinghaoluo.github.io',
  base: '/the-zone-site',
  output: 'static',
  integrations: [sitemap()],
});
