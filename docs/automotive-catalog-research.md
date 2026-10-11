# Automotive catalog research — superseded

This initial research pipeline has been superseded by `src/data/automotive-products.js`, which now contains 25 unique automotive products with exact ASINs, direct Amazon affiliate links tagged `buybetterfi06-20`, product-specific descriptions, cautions, scores, and ASIN-bound Amazon Associates image-widget URLs.

Use `docs/automotive-final-25-shortlist.md` as the current audit checklist. The product-selection stage is complete. The remaining gate is visually checking all 25 image responses against their exact products, testing them in a browser, and rerunning production CI before merging.
