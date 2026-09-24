// Editorial price observations for Buy Better Finds.
// Only add an entry when the price was actually observed or verified.
// Do not backfill historical prices from memory or inference.
//
// Entry types:
// - reference: editorial reference price; never treated as a live offer.
// - current: explicitly verified current retailer price; eligible for Offer markup.
// - historical: dated retailer observation kept for comparison only.
//
// For current entries, record verifiedAt and retailer when available.
export const priceHistory = {
  'sony-wh-1000xm5': [
    { date: '2026-09-22', price: 299.99, currency: 'USD', source: 'Editorial reference price', type: 'reference' }
  ],
  'ninja-af101': [
    { date: '2026-09-23', price: 119.99, currency: 'USD', source: 'Editorial reference price', type: 'reference' }
  ],
  'solo-stove-tower': [
    { date: '2026-09-24', price: 799.99, currency: 'USD', source: 'Editorial reference price', type: 'reference' }
  ],
  'weber-spirit-e210': [
    { date: '2026-09-24', price: 399.00, currency: 'USD', source: 'Editorial reference price', type: 'reference' }
  ],
  'crunchlabs-crunchinator': [
    { date: '2026-09-24', price: 34.99, currency: 'USD', source: 'Editorial reference price', type: 'reference' }
  ],
  'educational-kanoodle': [
    { date: '2026-09-24', price: 16.99, currency: 'USD', source: 'Editorial reference price', type: 'reference' }
  ]
};

export function getPriceHistory(slug) {
  return priceHistory[slug] ?? [];
}

export function getCurrentPriceObservation(history) {
  return history
    .filter((entry) => typeof entry.price === 'number' && entry.type === 'current')
    .sort((a, b) => b.date.localeCompare(a.date))[0] ?? null;
}

export function getLowestObservedPrice(history) {
  const priced = history.filter((entry) => typeof entry.price === 'number');
  if (!priced.length) return null;
  return priced.reduce((lowest, entry) => entry.price < lowest.price ? entry : lowest, priced[0]);
}
