export const EDITORIAL_TODAY = '2026-09-24';

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
