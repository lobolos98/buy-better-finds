// Editorial price observations for Buy Better Finds.
// Only add an entry when the price was actually observed or verified.
// Do not backfill historical prices from memory or inference.
//
// Entry types:
// - reference: editorial reference price; never treated as a live offer.
// - current: explicitly verified current retailer price; eligible for Offer markup when fresh.
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

export function getFreshCurrentPriceObservation(history, maxAgeDays = 2) {
  const current = getCurrentPriceObservation(history);
  if (!current) return null;

  const [year, month, day] = current.date.split('-').map(Number);
  const observed = new Date(Date.UTC(year, month - 1, day));
  const nowParts = new Intl.DateTimeFormat('en-CA', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    timeZone: 'America/New_York'
  }).format(new Date()).split('-').map(Number);
  const today = new Date(Date.UTC(nowParts[0], nowParts[1] - 1, nowParts[2]));
  const ageDays = Math.floor((today - observed) / 86400000);

  return ageDays >= 0 && ageDays <= maxAgeDays ? current : null;
}

export function getLowestObservedPrice(history) {
  const priced = history.filter((entry) => typeof entry.price === 'number');
  if (!priced.length) return null;
  return priced.reduce((lowest, entry) => entry.price < lowest.price ? entry : lowest, priced[0]);
}
