export const AMAZON_ASSOCIATE_TAG = 'buybetterfi06-20';

/**
 * Builds an Amazon Associates search link using the site's assigned tag.
 * We use Amazon-hosted search results rather than inventing ASINs; the shopper
 * can confirm the exact model, current price, and availability on Amazon.
 */
export function amazonSearchUrl(productName) {
  const query = encodeURIComponent(productName);
  return `https://www.amazon.com/s?k=${query}&tag=${AMAZON_ASSOCIATE_TAG}`;
}
