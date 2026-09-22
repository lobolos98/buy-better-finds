export const AMAZON_ASSOCIATE_TAG = 'buybetterfi06-20';

/**
 * Builds a direct Amazon Associates product link when a verified ASIN is
 * available. Otherwise falls back to an Amazon-hosted search link so we do
 * not invent or guess a product identifier.
 */
export function amazonProductUrl(asin) {
  return asin
    ? `https://www.amazon.com/dp/${encodeURIComponent(asin)}?tag=${AMAZON_ASSOCIATE_TAG}`
    : '';
}

export function amazonSearchUrl(productName) {
  const query = encodeURIComponent(productName);
  return `https://www.amazon.com/s?k=${query}&tag=${AMAZON_ASSOCIATE_TAG}`;
}
