export const AMAZON_ASSOCIATE_TAG = 'buybetterfi06-20';

// The current Deal of the Day uses the exact affiliate URL supplied by the site owner.
export const EXACT_DEAL_AMAZON_URL = 'https://www.amazon.com/dp/B0C6XJNKP8/ref=cm_sw_r_as_gl_apa_gl_i_TT11G26RB9T7ADWVK57N?linkCode=ml1&tag=buybetterfi06-20&linkId=e9bec15ede862289c17773f1aff94a3f&gaOptInStatus=true';

/**
 * Builds a direct Amazon Associates product link when a verified ASIN is
 * available. Otherwise falls back to an Amazon-hosted search link so we do
 * not invent or guess a product identifier.
 */
export function amazonProductUrl(asin) {
  if (asin === 'B0C6XJNKP8') return EXACT_DEAL_AMAZON_URL;
  return asin
    ? `https://www.amazon.com/dp/${encodeURIComponent(asin)}?tag=${AMAZON_ASSOCIATE_TAG}`
    : '';
}

export function amazonSearchUrl(productName) {
  const query = encodeURIComponent(productName);
  return `https://www.amazon.com/s?k=${query}&tag=${AMAZON_ASSOCIATE_TAG}`;
}
