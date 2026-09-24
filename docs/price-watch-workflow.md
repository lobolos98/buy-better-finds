# Buy Better Finds Price Watch Workflow

## Purpose

Price Watch separates editorial price context from a verified retailer offer.

Google defines an active price as the price at which a product is currently offered. Only a fresh, explicitly verified retailer observation should be used as the site's current-price Offer markup.

## Price entry types

### reference

Use for a published editorial price point used for context.

- Never treat it as a live retailer price.
- Do not use it for Google Offer markup.
- Existing reference entries should not be rewritten as current prices.

Example:

```js
{
  date: '2026-09-24',
  price: 119.99,
  currency: 'USD',
  source: 'Editorial reference price',
  type: 'reference'
}
```

### current

Use only after the retailer price has actually been checked.

Record:

- date of the verification
- price
- currency
- source
- type: 'current'
- retailer when available
- verifiedAt when available

Example:

```js
{
  date: '2026-09-24',
  price: 119.99,
  currency: 'USD',
  source: 'Amazon',
  retailer: 'Amazon',
  type: 'current',
  verifiedAt: '2026-09-24T14:30:00-04:00'
}
```

Do not create a current entry from an old article, a remembered price, a search-result snippet, or the site's existing reference price.

### historical

Use for a dated retailer observation that is no longer being presented as the current offer.

## Freshness rule

The site currently treats a verified current observation as eligible for Google Offer markup only when it is no more than **2 calendar days old**.

This protects the structured data from continuing to advertise an old retailer price as the current active offer. The visible product page may still show the dated verified observation for context, but stale observations are not used for Offer markup.

## Verification workflow

1. Open the retailer/product listing for the exact product or ASIN.
2. Confirm the displayed price and currency.
3. Confirm that the listing corresponds to the product being reviewed.
4. Record the observation in `src/data/priceHistory.js`.
5. Use `type: 'current'` only for the newly verified retailer price.
6. Include the verification date and retailer/source.
7. Commit the change.
8. Let the normal GitHub → Cloudflare deployment publish the update.
9. Recheck the retailer later and add a new observation when the price changes.

## What the site does automatically

- Product pages display a verified current price when one exists.
- Price Watch surfaces verified-current status.
- Product structured data uses a verified current price only while it is fresh.
- Reference prices remain clearly labeled as reference prices.
- Price history preserves dated observations instead of overwriting the record.
- Deal of the Day remains an editorial feature and is not presented as proof that a price is the retailer's lowest price.

## Important

Do not populate current-price entries in bulk unless each price has actually been verified. The system is intentionally designed so that an empty current-price set is safer than inaccurate live-price claims.
