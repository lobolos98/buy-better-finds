# Buy Better Finds — Deal of the Day Rotation
**Planning window:** October 13–November 11, 2026  
**Source:** Existing catalog entries only. No new products were added.

The permanent Deal of the Day page now has a 30-date slug schedule in `src/pages/deal-of-the-day/index.astro`. The page chooses the scheduled product for the editorial date at build time.

## 30-day schedule

| Date | Existing catalog product |
|---|---|
| Tue, Oct 13 | NOCO Boost Plus GB40 1000A Jump Starter |
| Wed, Oct 14 | Ring Battery Doorbell 2K Plus |
| Thu, Oct 15 | Logitech MX Master 3S |
| Fri, Oct 16 | Ninja 4-Qt Air Fryer AF101 |
| Sat, Oct 17 | Hydro Flask 32 oz Wide Mouth with Flex Straw Cap |
| Sun, Oct 18 | DEWALT 20V MAX Compact Drill/Driver Kit DCD771C2 |
| Mon, Oct 19 | BowFlex SelectTech 552 Adjustable Dumbbells |
| Tue, Oct 20 | LEGO Botanicals Tiny Plants |
| Wed, Oct 21 | PETLIBRO Wi-Fi Automatic Pet Feeder |
| Thu, Oct 22 | AstroAI L7 Cordless Tire Inflator |
| Fri, Oct 23 | Instant Vortex Plus Air Fryer |
| Sat, Oct 24 | Fresh Step Clumping Cat Litter |
| Sun, Oct 25 | LEGO Botanicals Lucky Bamboo |
| Mon, Oct 26 | TP-Link Kasa Smart Outdoor Plug EP40M |
| Tue, Oct 27 | Klein Tools 32500 11-in-1 Screwdriver/Nut Driver |
| Wed, Oct 28 | Amazon Basics Neoprene Dumbbells |
| Thu, Oct 29 | Veken Cat Water Fountain (95 oz) |
| Fri, Oct 30 | Etekcity EL11 Digital Luggage Scale |
| Sat, Oct 31 | Yes4All Cast Iron Kettlebell |
| Sun, Nov 1 | Solo Stove Bonfire 2.0 Smokeless Fire Pit |
| Mon, Nov 2 | Bitzee Interactive Digital Pet |
| Tue, Nov 3 | Fit Simplify Resistance Loop Exercise Bands |
| Wed, Nov 4 | ROVE R2-4K DUAL Dash Cam |
| Thu, Nov 5 | Crayola Light Up Tracing Pad |
| Fri, Nov 6 | MQRW Push Up Board |
| Sat, Nov 7 | MAGNA-TILES Clear Colors 32-Piece Set |
| Sun, Nov 8 | Earth Rated Unscented Dog Waste Bags |
| Mon, Nov 9 | Klein Tools NCVT1P Non-Contact Voltage Tester |
| Tue, Nov 10 | LEGO Botanicals Plum Blossom |
| Wed, Nov 11 | NOCO Boost HD GB70 2000A Jump Starter |

## Required deal checks
This schedule is a candidate rotation from existing listings; it does **not** prove that each product has a live discount. Before promoting any item as a deal, check:
- The Amazon product page matches the product name, ASIN, selected variant, and image.
- Current price, reference price/discount, rating, review count, seller, and stock.
- The direct Amazon product-detail link includes `tag=buybetterfi06-20`; never use search-result links.
- The image loads and matches the exact product; do not publish a broken image or placeholder.
- Skip a candidate if the listing is mismatched or the discount is not compelling. Choose another already-listed product instead.

## Deployment note
The current page's editorial date is determined at build time. **The page must be rebuilt/deployed for the next date's scheduled product to appear** unless a daily scheduled build is configured separately. The code change alone does not guarantee the page changes at midnight. Verify the Cloudflare deployment and live page after publishing.

## Publishing checklist
- [ ] Current Amazon price and discount verified
- [ ] Exact ASIN, variant, seller, rating and review count checked
- [ ] Direct affiliate product link checked
- [ ] Product image loads and matches
- [ ] Buy Better Score is not presented as an Amazon star rating
- [ ] Affiliate disclosure remains visible
- [ ] Social caption links directly to the product
