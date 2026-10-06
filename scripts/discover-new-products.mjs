import fs from 'node:fs/promises';

const TAG = process.env.AMAZON_PARTNER_TAG || 'buybetterfi06-20';
const OUTPUT = new URL('../src/data/auto-products.js', import.meta.url);
const EXISTING = new URL('../src/data/products.js', import.meta.url);
const MAX_NEW = Number(process.env.MAX_NEW_PRODUCTS || 10);

const queries = [
  ['Tech', 'site:amazon.com/dp best new tech gadgets 2026'],
  ['Home & Kitchen', 'site:amazon.com/dp best new kitchen home products 2026'],
  ['Tools & DIY', 'site:amazon.com/dp best new tools DIY products 2026'],
  ['Outdoor', 'site:amazon.com/dp best new outdoor products 2026'],
  ['Smart Home', 'site:amazon.com/dp best new smart home products 2026'],
  ['Fitness', 'site:amazon.com/dp best new fitness products 2026'],
  ['Lifestyle', 'site:amazon.com/dp best new lifestyle products 2026'],
  ['Gifts & Collectibles', 'site:amazon.com/dp best new gifts collectibles 2026'],
  ['Toys & Games', 'site:amazon.com/dp best new toys games 2026'],
  ['Beauty & Personal Care', 'site:amazon.com/dp best new beauty personal care products 2026'],
  ['Seasonal & Holidays', 'site:amazon.com/dp best new seasonal holiday products 2026']
];

const iconByCategory = {
  Tech: '◉',
  'Home & Kitchen': '◇',
  'Tools & DIY': '⚙',
  Outdoor: '☼',
  'Smart Home': '⌂',
  Fitness: '◎',
  Lifestyle: '◈',
  'Gifts & Collectibles': '✦',
  'Toys & Games': '★',
  'Beauty & Personal Care': '✿',
  'Seasonal & Holidays': '✦'
};

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

function htmlDecode(value) {
  return value
    .replace(/<!\[CDATA\[|\]\]>/g, '')
    .replace(/&amp;/g, '&')
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>');
}

function extractAsin(url) {
  const m = url.match(/\\/(?:dp|gp\\/product)\\/([A-Z0-9]{10})/i);
  return m?.[1]?.toUpperCase() || null;
}

function slugify(value) {
  return value.toLowerCase().replace(/&/g, 'and').replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '').slice(0, 70);
}

function js(value) {
  return JSON.stringify(value).replace(/\\u2028/g, '\\u2028').replace(/\\u2029/g, '\\u2029');
}

async function fetchText(url) {
  const response = await fetch(url, {
    headers: {
      'User-Agent': 'Mozilla/5.0 (compatible; BuyBetterFindsProductDiscovery/1.0)',
      'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8'
    }
  });
  if (!response.ok) throw new Error(`${response.status} ${url}`);
  return response.text();
}

async function bingRss(query) {
  const url = 'https://www.bing.com/search?format=rss&q=' + encodeURIComponent(query);
  const xml = await fetchText(url);
  const items = [];
  for (const block of xml.matchAll(/<item>([\\s\\S]*?)<\\/item>/gi)) {
    const item = block[1];
    const title = item.match(/<title>([\\s\\S]*?)<\\/title>/i)?.[1];
    const link = item.match(/<link>([\\s\\S]*?)<\\/link>/i)?.[1];
    if (title && link) items.push({ title: htmlDecode(title.trim()), link: htmlDecode(link.trim()) });
  }
  return items;
}

function parseAmazonPage(html, asin) {
  const title =
    html.match(/<meta[^>]+property=["']og:title["'][^>]+content=["']([^"']+)["']/i)?.[1] ||
    html.match(/<meta[^>]+name=["']title["'][^>]+content=["']([^"']+)["']/i)?.[1] ||
    html.match(/<title>([\\s\\S]*?)<\\/title>/i)?.[1];

  const image =
    html.match(/<meta[^>]+property=["']og:image["'][^>]+content=["']([^"']+)["']/i)?.[1] ||
    html.match(/<meta[^>]+name=["']twitter:image["'][^>]+content=["']([^"']+)["']/i)?.[1];

  if (!title || !image || /captcha|robot check|sorry/i.test(title)) return null;
  return { asin, title: htmlDecode(title.replace(/\\s*[-|]\\s*Amazon.*$/i, '').trim()), image };
}

function parseManufacturerImage(html) {
  const image =
    html.match(/<meta[^>]+property=["']og:image["'][^>]+content=["']([^"']+)["']/i)?.[1] ||
    html.match(/<meta[^>]+name=["']twitter:image["'][^>]+content=["']([^"']+)["']/i)?.[1];
  return image && /^https?:\\/\\//i.test(image) ? image : null;
}

function existingAsins(source) {
  return new Set([...source.matchAll(/(?:amazonAsin|asin):\\s*['"]([A-Z0-9]{10})['"]/gi)].map((m) => m[1].toUpperCase()));
}

function existingSlugs(source) {
  return new Set([...source.matchAll(/slug:\s*['"]([^'"]+)['"]/g)].map((m) => m[1]));
}

const existingSource = await fs.readFile(EXISTING, 'utf8');
const knownAsins = existingAsins(existingSource);
const knownSlugs = existingSlugs(existingSource);

let current = [];
try {
  const autoSource = await fs.readFile(OUTPUT, 'utf8');
  current = [...autoSource.matchAll(/amazonAsin:\s*['"]([A-Z0-9]{10})['"]/gi)].map((m) => m[1].toUpperCase());
  current.forEach((asin) => knownAsins.add(asin));
} catch {}

const candidates = [];
for (const [category, query] of queries) {
  try {
    const results = await bingRss(query);
    for (const result of results) {
      const asin = extractAsin(result.link);
      if (!asin || knownAsins.has(asin)) continue;
      candidates.push({ category, asin, link: result.link });
      if (candidates.length >= MAX_NEW * 4) break;
    }
  } catch (error) {
    console.warn(`[Discovery] search failed for ${category}: ${error.message}`);
  }
  await sleep(500);
  if (candidates.length >= MAX_NEW * 4) break;
}

const additions = [];
for (const candidate of candidates) {
  if (additions.length >= MAX_NEW) break;
  try {
    const amazonHtml = await fetchText(candidate.link);
    const product = parseAmazonPage(amazonHtml, candidate.asin);
    if (!product) continue;

    const slug = slugify(product.title) + '-' + candidate.asin.toLowerCase().slice(-4);
    if (knownSlugs.has(slug) || knownAsins.has(candidate.asin)) continue;

    // Use a manufacturer/brand image when discoverable. We deliberately do not
    // auto-publish Amazon-hosted images while Creators API access is unavailable.
    const manufacturerSearch = await bingRss(`"${product.title}" manufacturer official product`);
    let manufacturerImage = null;
    for (const result of manufacturerSearch.slice(0, 5)) {
      if (!/^https?:\\/\\//i.test(result.link) || /amazon\\.com/i.test(result.link)) continue;
      try {
        const html = await fetchText(result.link);
        manufacturerImage = parseManufacturerImage(html);
        if (manufacturerImage && !/amazon\\.com|bing\\.com/i.test(manufacturerImage)) break;
      } catch {}
      await sleep(300);
    }
    if (!manufacturerImage) continue;

    additions.push({
      slug,
      name: product.title,
      category: candidate.category,
      price: 'Check price',
      icon: iconByCategory[candidate.category] || '✦',
      image: manufacturerImage,
      imageAlt: product.title,
      bestFor: `Useful ${candidate.category.toLowerCase()} find`,
      why: `A newly discovered ${candidate.category.toLowerCase()} product selected for the Buy Better Finds catalog.`,
      watch: 'Check the exact model, current availability, and specifications before buying.',
      amazonAsin: candidate.asin,
      amazonUrl: `https://www.amazon.com/dp/${candidate.asin}?tag=${TAG}`,
      url: `https://www.amazon.com/dp/${candidate.asin}?tag=${TAG}`
    });

    knownAsins.add(candidate.asin);
    knownSlugs.add(slug);
    console.log(`[Discovery] approved ${product.title} (${candidate.category})`);
  } catch (error) {
    console.warn(`[Discovery] product check failed for ${candidate.asin}: ${error.message}`);
  }
  await sleep(700);
}

if (!additions.length) {
  console.log('[Discovery] No new products met all verification rules. Existing catalog unchanged.');
  process.exit(0);
}

const entryText = additions.map((p) => `  {\\n    slug: ${js(p.slug)}, name: ${js(p.name)}, category: ${js(p.category)}, price: 'Check price', icon: ${js(p.icon)},\\n    image: ${js(p.image)}, imageAlt: ${js(p.imageAlt)},\\n    bestFor: ${js(p.bestFor)}, why: ${js(p.why)}, watch: ${js(p.watch)},\\n    amazonAsin: ${js(p.amazonAsin)}, amazonUrl: ${js(p.amazonUrl)}, url: ${js(p.url)}\\n  }`).join(',\\n');

const old = await fs.readFile(OUTPUT, 'utf8');
const updated = old.replace(/export const autoDiscoveredProducts = \[[\\s\\S]*?\\];/, (match) => {
  const inner = match.replace(/export const autoDiscoveredProducts = \[/, '').replace(/\];$/, '').trim();
  return `export const autoDiscoveredProducts = [\\n${inner ? inner + ',\\n' : ''}${entryText}\\n];`;
});
await fs.writeFile(OUTPUT, updated, 'utf8');
console.log(`[Discovery] added ${additions.length} new product(s); existing products were not removed.`);
