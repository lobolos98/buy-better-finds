# Price Watch Verification Queue

## Purpose

This queue identifies the first products to verify once Buy Better Finds has access to a trustworthy retailer-price source.

Do not add a `current` price observation until the price is explicitly observed on the retailer listing or returned by an approved Amazon data source.

## First verification batch

1. Sony WH-1000XM5
2. Ninja AF101
3. Solo Stove Tower
4. Weber Spirit E-210
5. CrunchLabs Crunchinator
6. Educational Insights Kanoodle

## Verification record

A verified observation should be added to `src/data/priceHistory.js` using this shape:

```js
{
  date: 'YYYY-MM-DD',
  price: 0.00,
  currency: 'USD',
  source: 'Amazon',
  retailer: 'Amazon',
  type: 'current',
  verifiedAt: 'YYYY-MM-DDTHH:mm:ss-04:00'
}
```

## Rules

- Never convert an editorial/reference price into a `current` entry.
- Never infer a price from a search snippet, article, cached page, or remembered price.
- Record the date the price was actually observed.
- Keep the retailer and verification timestamp with the observation.
- Current observations older than two calendar days are excluded from active Google Offer markup by the shared freshness check.
- A stale observation can remain in the history as evidence, but it must not be presented as the current price.

## Amazon automation path

Amazon's Creators API is the intended automation path for Buy Better Finds. Amazon has deprecated PA-API 5 and directs new and existing integrations to Creators API. Creators API can return product images, item information, and OffersV2 price data, including offer price and savings.

When access is approved, the integration should request the minimum resources needed for the site, including:

- `images.primary.medium`
- `itemInfo.title`
- `offersV2.listings.price`
- `offersV2.listings.isBuyBoxWinner`
- `offersV2.listings.merchantInfo`

The API credentials must remain server-side and must never be committed to GitHub.

## Current status

The Price Watch architecture is ready. The remaining dependency for automated current-price collection is approved Amazon Creators API access or another explicitly verified retailer data source.
