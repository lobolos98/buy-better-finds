# Buy Better Finds — Website Change Log

This log records significant website changes, improvements, fixes, and planned work for Buy Better Finds.

## Current Project

- **Website:** Buy Better Finds
- **Domain:** buybetterfinds.com
- **GitHub:** lobolos98/buy-better-finds
- **Deployment:** Cloudflare Pages
- **Production branch:** main
- **Tagline:** Better Products. Smarter Choices.

---

## Change History

### September 19, 2026

#### Homepage — Deal of the Day Mobile Styling
- Matched the Deal of the Day mobile card styling to the Editor's Choice section.
- Matched the mobile product image area to the Editor's Choice image proportions.
- Matched image padding, card radius, and badge sizing/position.
- Preserved the existing Deal of the Day content and actions.
- **Commit:** de48975ba6e7e77d803cc9a0a127830bd47518db
- **Status:** Implemented; Cloudflare auto-deploys from `main`.

#### Homepage — Deal of the Day Mobile Image Sizing
- Adjusted the mobile Deal of the Day image presentation to prevent the product from appearing oversized or cut off.
- **Commit:** 8072e9b23144efee95541499a1ac18cd83d285bb
- **Status:** Superseded by the Editor's Choice style alignment above.

### September 18, 2026

#### Product System — Amazon/SiteStripe Image Support
- Updated product-card logic to prioritize an authorized `amazonImage` field when available.
- Preserved existing product images as a fallback.
- Product-specific Amazon affiliate links continue to use the Buy Better Finds Associates tag.
- Actual SiteStripe/Amazon image assets still need to be supplied or populated; no unauthorized image URLs are being invented.
- **Status:** Implemented; image population remains future work.

#### Search
- Added the expanded Amazon product-search coming-soon experience.
- Search currently works against the Buy Better Finds catalog by product name, brand, category, and use case.
- Future live Amazon discovery is planned when the required Associates/Creators API access is available.
- **Status:** Live.

### September 17, 2026

#### Categories — Beauty & Personal Care
- Added Beauty & Personal Care as a top-level category.
- Added Cosmetics & Beauty Tools, Skincare, Hair Care, and Grooming subcategories.
- Added cosmetics-focused category content and products.
- **Status:** Live.

#### Categories — Toys & Games
- Added Toys & Games as a top-level category.
- Added building sets, STEM toys, puzzles, family games, and creative-play coverage.
- **Status:** Live.

#### Comparisons
- Expanded the comparison system with structured comparison articles.
- Added comparison data to `src/data/comparisons.js`.
- Added static comparison routes for the current comparison topics.
- Fixed comparison source/build issues affecting Cloudflare deployment.
- **Status:** Live.

### September 16, 2026

#### Homepage
- Added and refined the Deal of the Day section.
- Added Deals Worth Clicking.
- Added product-focused editorial guidance and price-change disclaimer.
- Added dynamic daily-deal queue for scheduled homepage products.
- **Status:** Live.

#### Product Pages
- Corrected product-page build syntax after product-card system changes.
- Product cards use Amazon affiliate search URLs and can prioritize authorized Amazon image assets.
- **Commit:** acfbfba643e058371eeca3d4563ace8f5e471134
- **Status:** Live.

### September 2026 — Earlier Work

#### Site Navigation
- Established the primary navigation for Home, Products, Search, Categories, Trending, Best Of, Buying Guides, Comparisons, Why We Recommend, About, and Shop Finds.
- Added mobile hamburger navigation.
- **Status:** Live.

#### URL Structure
- Site architecture uses clean `/path/` routes rather than hash-anchor navigation where applicable.
- **Status:** Ongoing standard.

#### Affiliate Readiness
- Added Amazon Associates affiliate-link handling.
- Added affiliate disclosure and supporting site information.
- Added editorial recommendation methodology and product tradeoff language.
- **Status:** Ongoing; continue final compliance/readiness checks before relying on full Amazon API functionality.

---

## Deployment Log

Buy Better Finds follows this deployment workflow:

**VS Code → GitHub → main → Cloudflare Pages → Production**

Significant deployment-related commits should be recorded here or in the Git history.

### Latest Known Production Change

- **Commit:** de48975ba6e7e77d803cc9a0a127830bd47518db
- **Change:** Match Deal of the Day to Editor's Choice on mobile
- **Branch:** main
- **Deployment:** Cloudflare Pages auto-deploy
- **Status:** Pending/automatic production deployment after GitHub push

---

## Future Work / Backlog

### High Priority
- [ ] Populate authorized Amazon/SiteStripe product images for products currently using placeholders.
- [ ] Verify all Amazon affiliate links and product destinations.
- [ ] Complete final Amazon Associates readiness review.
- [ ] Verify the latest Cloudflare production deployment after significant changes.

### Product & Content
- [ ] Expand the product catalog across all major categories.
- [ ] Add additional head-to-head comparison articles.
- [ ] Add problem-solver buying guides.
- [ ] Add more product-specific reviews based on documented product information.
- [ ] Continue expanding Beauty & Personal Care.
- [ ] Continue expanding Toys & Games.
- [ ] Expand Gifts & Collectibles, including Disney/Pixar/Marvel/Star Wars topics.

### Search
- [ ] Continue developing the Buy Better Finds product-search experience.
- [ ] Add live Amazon product discovery when the required authorized API access is available.
- [ ] Maintain the flow: **Search → Compare → Decide → Shop**.

### Mobile & UX
- [ ] Continue checking homepage sections for consistent mobile image sizing.
- [ ] Maintain consistent card styling between Deal of the Day, Editor's Choice, and other product sections.
- [ ] Check navigation and CTA behavior on small screens.

---

## Change Log Rules

For future significant website changes:

1. Record the date.
2. Record the affected page, component, or system.
3. Describe what changed.
4. Record the GitHub commit SHA.
5. Record whether the change is live, pending deployment, or superseded.
6. Add important follow-up work to the backlog.
7. Keep the log factual and concise.

---

_Last updated: September 19, 2026_
