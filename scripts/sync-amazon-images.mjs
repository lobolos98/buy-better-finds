import fs from 'node:fs/promises';

const ROOT = new URL('../', import.meta.url);
const PRODUCTS_FILE = new URL('../src/data/products.js', import.meta.url);
const OVERRIDES_FILE = new URL('../src/data/amazon-images.js', import.meta.url);

const clientId = process.env.CREATORS_API_CLIENT_ID;
const clientSecret = process.env.CREATORS_API_CLIENT_SECRET;
const partnerTag = process.env.AMAZON_PARTNER_TAG;
const marketplace = process.env.AMAZON_MARKETPLACE || 'www.amazon.com';
const tokenEndpoint = process.env.CREATORS_API_TOKEN_ENDPOINT || 'https://api.amazon.com/auth/o2/token';

const source = await fs.readFile(PRODUCTS_FILE, 'utf8');
const products = [];
for (const match of source.matchAll(/slug:\s*'([^']+)'[^]*?name:\s*'([^']+)'[^]*?(?:amazonAsin:\s*'([^']+)')?[^]*?image:\s*'([^']+)'/g)) {
  products.push({ slug: match[1], name: match[2], asin: match[3] || null, image: match[4] });
}

const tempProducts = products.filter((p) => p.image.startsWith('/images/products/'));
const targetProducts = products.filter((p) => p.asin || tempProducts.some((t) => t.slug === p.slug));

if (!clientId || !clientSecret || !partnerTag) {
  console.log('[Amazon Creators] Credentials not configured; keeping existing product imagery.');
  console.log('[Amazon Creators] Set CREATORS_API_CLIENT_ID, CREATORS_API_CLIENT_SECRET, and AMAZON_PARTNER_TAG to enable image sync.');
  process.exit(0);
}

async function getToken() {
  const response = await fetch(tokenEndpoint, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      grant_type: 'client_credentials',
      client_id: clientId,
      client_secret: clientSecret,
      scope: 'creatorsapi::default'
    })
  });
  if (!response.ok) throw new Error(`Token request failed: ${response.status} ${await response.text()}`);
  return (await response.json()).access_token;
}

const token = await getToken();

async function creators(path, payload) {
  const response = await fetch(`https://creatorsapi.amazon/catalog/v1/${path}`, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
      'x-marketplace': marketplace
    },
    body: JSON.stringify(payload)
  });
  if (!response.ok) {
    const body = await response.text();
    throw new Error(`${path} failed: ${response.status} ${body}`);
  }
  return response.json();
}

const overrides = {};
const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

function imageUrl(item) {
  return item?.images?.primary?.large?.url
    || item?.images?.primary?.medium?.url
    || item?.images?.primary?.small?.url
    || null;
}

function normalize(value) {
  return value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, ' ')
    .split(/\\s+/)
    .filter((word) => word.length > 2);
}

function similarity(a, b) {
  const aa = new Set(normalize(a));
  const bb = new Set(normalize(b));
  const overlap = [...aa].filter((word) => bb.has(word)).length;
  return overlap / Math.max(1, Math.min(aa.size, bb.size));
}

// Known ASINs: GetItems is the authoritative lookup for the exact item.
const known = targetProducts.filter((p) => p.asin);
for (let i = 0; i < known.length; i += 10) {
  const batch = known.slice(i, i + 10);
  const data = await creators('getItems', {
    itemIds: batch.map((p) => p.asin),
    itemIdType: 'ASIN',
    marketplace,
    partnerTag,
    resources: ['images.primary.large', 'itemInfo.title']
  });
  for (const item of data?.itemsResult?.items || []) {
    const product = known.find((p) => p.asin === item.asin);
    const image = imageUrl(item);
    if (product && image) overrides[product.slug] = { asin: item.asin, image };
  }
  await sleep(250);
}

// Temporary-image products without an ASIN: search Amazon, but only accept a strong title match.
const searchable = tempProducts.filter((p) => !p.asin);
for (const product of searchable) {
  try {
    const data = await creators('searchItems', {
      keywords: product.name,
      searchIndex: 'All',
      marketplace,
      partnerTag,
      itemCount: 10,
      resources: ['images.primary.large', 'itemInfo.title']
    });
    const candidates = (data?.searchResult?.items || [])
      .map((item) => ({
        item,
        title: item?.itemInfo?.title?.displayValue || '',
        score: similarity(product.name, item?.itemInfo?.title?.displayValue || '')
      }))
      .filter((candidate) => imageUrl(candidate.item))
      .sort((a, b) => b.score - a.score);
    const best = candidates[0];
    if (best && best.score >= 0.55) {
      overrides[product.slug] = { asin: best.item.asin, image: imageUrl(best.item) };
      console.log(`[Amazon Creators] matched ${product.name} -> ${best.title} (${best.score.toFixed(2)})`);
    } else {
      console.log(`[Amazon Creators] no confident match for ${product.name}`);
    }
  } catch (error) {
    console.warn(`[Amazon Creators] search failed for ${product.name}: ${error.message}`);
  }
  await sleep(400);
}

const output = `// Generated by scripts/sync-amazon-images.mjs. Do not edit by hand.\\nexport const amazonImageOverrides = ${JSON.stringify(overrides, null, 2)};\\n`;
await fs.writeFile(OVERRIDES_FILE, output, 'utf8');
console.log(`[Amazon Creators] synced ${Object.keys(overrides).length} product image(s).`);
