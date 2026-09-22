import type { APIRoute } from 'astro';
import { products } from '../data/products.js';

const staticPages = [
  '/',
  '/about/',
  '/contact/',
  '/disclosure/',
  '/privacy/',
  '/terms/',
  '/why-we-recommend/',
  '/products/',
  '/categories/',
  '/best/',
  '/guides/',
  '/comparisons/',
  '/trending/',
  '/deals/',
  '/search/'
];

const guidePages = [
  'best-tech',
  'best-home-kitchen',
  'best-tools-diy',
  'best-outdoor',
  'best-smart-home',
  'best-fitness-watches',
  'best-everyday-drinkware',
  'best-noise-canceling-headphones',
  'best-air-fryers',
  'best-vacuums',
  'best-homeowner-drills',
  'best-patio-heaters',
  'best-smart-plugs',
  'best-home-organization',
  'best-products-under-100',
  'best-everyday-products'
].map((slug) => `/guides/${slug}/`);

const comparisonPages = [
  'sony-wh-1000xm5-vs-airpods-4',
  'ninja-af101-vs-instant-vortex-plus',
  'dyson-v8-vs-shark-navigator',
  'yeti-rambler-vs-stanley-quencher',
  'tp-link-outdoor-plug-vs-ring-doorbell'
].map((slug) => `/comparisons/${slug}/`);

const categoryPages = [...new Set(products.map((product) =>
  product.category.toLowerCase().replace(/[^a-z0-9]+/g, '-')
))].map((slug) => `/categories/${slug}/`);

const productPages = products.map((product) => `/products/${product.slug}/`);
const extraPages = ['/categories/beauty-personal-care/cosmetics/'];

const pages = [...new Set([
  ...staticPages,
  ...categoryPages,
  ...guidePages,
  ...comparisonPages,
  ...productPages,
  ...extraPages
])];

const escapeXml = (value: string) => value
  .replace(/&/g, '&amp;')
  .replace(/</g, '&lt;')
  .replace(/>/g, '&gt;')
  .replace(/"/g, '&quot;')
  .replace(/'/g, '&apos;');

export const GET: APIRoute = () => {
  const urls = pages.map((path) => `  <url><loc>${escapeXml(`https://buybetterfinds.com${path}`)}</loc></url>`).join('\n');
  const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`;

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8'
    }
  });
};
