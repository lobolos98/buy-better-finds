# Buy Better Finds

Astro website for Buy Better Finds.

## Run in Visual Studio Code

```bash
npm install
npm run dev
```

Open the local URL shown by Astro.

## Build

```bash
npm run build
```

## Deploy

Commit and push the project to GitHub. Cloudflare Pages can then deploy the `main` branch.

## SEO routes

- /
- /products/
- /products/example-product/
- /categories/
- /categories/home/
- /categories/kitchen/
- /categories/lifestyle/
- /categories/outdoor/
- /categories/tech/
- /why-we-recommend/
- /about/
- /contact/
- /disclosure/
- /privacy/
- /terms/

The site uses real page URLs rather than homepage hash anchors.

## Amazon product search

The site now includes a universal product search at `/search/` and a product-research page at `/amazon-product/?asin=...`.

The search layer is designed for Amazon's current **Creators API**, not scraping. Amazon's current API uses OAuth 2.0 credentials and the US catalog endpoint. Keep all credentials server-side.

Configure these **Cloudflare Pages/Workers environment variables** before enabling live API results:

- `AMAZON_CREDENTIAL_ID`
- `AMAZON_CREDENTIAL_SECRET`
- `AMAZON_PARTNER_TAG`
- `AMAZON_CREDENTIAL_VERSION` (reserved for the credential version assigned by Amazon)

The current Cloudflare Functions use the North America OAuth token endpoint and `https://creatorsapi.amazon/catalog/v1/` endpoints. Do not commit credential values to GitHub.

Amazon's current Associates policy also requires Amazon-supplied Product Advertising Content to remain within the permitted license, to link to the related Amazon page, and to use the required Amazon disclosure when displaying Amazon-supplied text. The implementation therefore separates Amazon product data from Buy Better Finds editorial content.

Before turning on live API content, confirm the site's Amazon Associates/Creators API access is active and review the current Amazon policies.

