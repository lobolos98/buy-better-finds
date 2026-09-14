import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://buybetterfinds.com',
  trailingSlash: 'always',
  integrations: [sitemap()],
  redirects: {
    '/categories/home/': '/categories/home-kitchen/',
    '/categories/kitchen/': '/categories/home-kitchen/',
    '/comparisons/sony-wh-1000xm5-noise-canceling-headphones/': '/comparisons/sony-wh-1000xm5-vs-airpods-4/',
    '/comparisons/ninja-4-qt-air-fryer-af101/': '/comparisons/ninja-af101-vs-instant-vortex-plus/',
    '/comparisons/instant-vortex-plus-air-fryer/': '/comparisons/ninja-af101-vs-instant-vortex-plus/',
    '/comparisons/dyson-v8-cordless-vacuum/': '/comparisons/dyson-v8-vs-shark-navigator/',
    '/comparisons/yeti-rambler-drinkware/': '/comparisons/yeti-rambler-vs-stanley-quencher/',
    '/comparisons/stanley-quencher-h2-0-tumbler/': '/comparisons/yeti-rambler-vs-stanley-quencher/',
    '/comparisons/tp-link-kasa-smart-outdoor-plug-ep40m/': '/comparisons/tp-link-outdoor-plug-vs-ring-doorbell/'
  }
});
