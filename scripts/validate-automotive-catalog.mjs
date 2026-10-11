// Run with: node scripts/validate-automotive-catalog.mjs
// Strict static gate; it does not replace checking image HTTP responses and Amazon listing identities.
import { products } from '../src/data/products.js';

const automotive = products.filter(p => p.category === 'Automotive & Car Accessories');
const errors = [];
const seenAsins = new Set();
const seenSlugs = new Set();
const allOtherAsins = new Set(products.filter(p => p.category !== 'Automotive & Car Accessories').map(p => p.amazonAsin).filter(Boolean));
if (automotive.length !== 25) errors.push(`Expected 25 automotive products; found ${automotive.length}`);
for (const [index, p] of automotive.entries()) {
  const prefix = `Product ${index + 1} (${p.slug || 'missing slug'})`;
  for (const key of ['slug', 'name', 'image', 'imageAlt', 'bestFor', 'why', 'watch', 'amazonAsin', 'amazonUrl', 'url']) {
    if (typeof p[key] !== 'string' || !p[key].trim()) errors.push(`${prefix}: missing ${key}`);
  }
  if (!/^B[0-9A-Z]{9}$/.test(p.amazonAsin || '')) errors.push(`${prefix}: invalid ASIN`);
  const expected = `https://www.amazon.com/dp/${p.amazonAsin}?tag=buybetterfi06-20`;
  if (p.amazonUrl !== expected || p.url !== expected) errors.push(`${prefix}: non-direct or untagged Amazon URL`);
  if (!/^https:\/\//.test(p.image || '') || /placeholder|placehold|dummyimage|unsplash\.com\/photo/i.test(p.image || '')) errors.push(`${prefix}: missing or placeholder image`);
  if (seenAsins.has(p.amazonAsin) || allOtherAsins.has(p.amazonAsin)) errors.push(`${prefix}: duplicate ASIN`);
  if (seenSlugs.has(p.slug)) errors.push(`${prefix}: duplicate slug`);
  seenAsins.add(p.amazonAsin);
  seenSlugs.add(p.slug);
}
if (errors.length) {
  console.error('Automotive catalog FAILED static validation:\n' + errors.map(e => '- ' + e).join('\n'));
  process.exitCode = 1;
} else {
  console.log('25 automotive products passed static validation. Manually verify HTTP image response, exact model identity, rights and Amazon destination before publishing.');
}
