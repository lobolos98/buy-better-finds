const buildDate = new Intl.DateTimeFormat('en-CA', {
  year: 'numeric',
  month: '2-digit',
  day: '2-digit',
  timeZone: 'America/New_York'
}).format(new Date());

export const EDITORIAL_TODAY = import.meta.env.PUBLIC_EDITORIAL_TODAY || buildDate;

export function getPriceWatchStatus(dailyDealDate) {
  if (!dailyDealDate) return null;
  if (dailyDealDate === EDITORIAL_TODAY) {
    return { key: 'today', label: 'DEAL OF THE DAY · TODAY' };
  }
  if (dailyDealDate > EDITORIAL_TODAY) {
    return { key: 'upcoming', label: `DEAL SCHEDULED · ${dailyDealDate}` };
  }
  return { key: 'past', label: `FEATURED · ${dailyDealDate}` };
}

export function getDealOfTheDay(products) {
  const dated = products.filter((product) => product?.dailyDealDate);
  return dated.find((product) => product.dailyDealDate === EDITORIAL_TODAY)
    || dated.find((product) => product.dailyDealDate > EDITORIAL_TODAY)
    || dated.slice().sort((a, b) => b.dailyDealDate.localeCompare(a.dailyDealDate))[0]
    || null;
}

export function formatPriceWatchDate(date) {
  if (!date) return '';
  const [year, month, day] = date.split('-').map(Number);
  return new Intl.DateTimeFormat('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
    timeZone: 'UTC'
  }).format(new Date(Date.UTC(year, month - 1, day)));
}
