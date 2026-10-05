export const AMAZON_ASSOCIATE_TAG = 'buybetterfi06-20';

// Exact owner-supplied affiliate URL for the Deal of the Day and the current SEESII featured pick.
export const EXACT_DEAL_AMAZON_URL = 'https://www.amazon.com/dp/B0C6XJNKP8/ref=cm_sw_r_as_gl_apa_gl_i_TT11G26RB9T7ADWVK57N?linkCode=ml1&tag=buybetterfi06-20&linkId=e9bec15ede862289c17773f1aff94a3f&gaOptInStatus=true';
export const EXACT_SEESII_AMAZON_URL = 'https://www.amazon.com/dp/B0CS3FF4RF?tag=buybetterfi06-20';

export function amazonProductUrl(asin) {
  if (asin === 'B0C6XJNKP8') return EXACT_DEAL_AMAZON_URL;
  if (asin === 'B0F2J118F4' || asin === 'B0CS3FF4RF') return EXACT_SEESII_AMAZON_URL;
  return asin
    ? `https://www.amazon.com/dp/${encodeURIComponent(asin)}?tag=${AMAZON_ASSOCIATE_TAG}`
    : '';
}

export function amazonSearchUrl(productName) {
  const query = encodeURIComponent(productName);
  return `https://www.amazon.com/s?k=${query}&tag=${AMAZON_ASSOCIATE_TAG}`;
}
