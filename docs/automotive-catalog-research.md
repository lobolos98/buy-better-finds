# Automotive research pipeline — NOT approved catalog entries

The following 25 distinct **candidate models/product families** are research leads, not verified Buy Better Finds listings. Some names need variant-level clarification. No ASIN, photo, rating, or score is implied. A candidate is not publishable until its exact Amazon product detail page, tagged link, genuine working image, compatibility and review text are checked.

| # | Candidate | Use case | Amazon ASIN | Image verified | Approved |
|---|---|---|---|---|---|
| 1 | NOCO Boost GB40 | Jump starter | Pending | No | No |
| 2 | NOCO Boost GB20 | Jump starter | Pending | No | No |
| 3 | VIAIR 88P | Tire inflator | Pending | No | No |
| 4 | AstroAI L7 cordless | Tire inflator | Pending | No | No |
| 5 | AstroAI dual-power AC/DC | Tire inflator | Pending | No | No |
| 6 | Garmin Dash Cam Mini 3 | Dash cam | Pending | No | No |
| 7 | Garmin Dash Cam X110 | Dash cam | Pending | No | No |
| 8 | VIOFO A229 Pro | Dash cam | Pending | No | No |
| 9 | BLACK+DECKER dustbuster CHV1410L | Car vacuum | Pending | No | No |
| 10 | ThisWorx portable car vacuum | Car vacuum | Pending | No | No |
| 11 | Chemical Guys 7-piece Wash & Shine | Exterior cleaning | Pending | No | No |
| 12 | Chemical Guys 16-piece ceramic wash kit | Exterior cleaning | Pending | No | No |
| 13 | Meguiar's Gold Class Car Wash | Exterior cleaning | Pending | No | No |
| 14 | Rain-X Latitude wiper blades | Wiper blades | Pending | No | No |
| 15 | Bosch ICON wiper blades | Wiper blades | Pending | No | No |
| 16 | EcoNour windshield sun shade | Sun shade | Pending | No | No |
| 17 | WeatherTech CupFone | Phone mount | Pending | No | No |
| 18 | iOttie Easy One Touch 6 | Phone mount | Pending | No | No |
| 19 | Anker USB-C car charger | Charging | Pending | No | No |
| 20 | Scosche MagicMount | Phone mount | Pending | No | No |
| 21 | Motorola MA1 wireless Android Auto adapter | Connectivity | Pending | No | No |
| 22 | Carlinkit 5.0 wireless adapter | Connectivity | Pending | No | No |
| 23 | EPAuto digital tire pressure gauge | Tire care | Pending | No | No |
| 24 | AstroAI digital tire pressure gauge | Tire care | Pending | No | No |
| 25 | Lifeline AAA roadside emergency kit | Emergency kit | Pending | No | No |

## Required per-product fields
`slug`, `name`, `category`, `price` (`Check price` until independently confirmed), `image`, `imageAlt`, `bestFor`, `why`, `watch`, `amazonAsin`, `amazonUrl`, `url`, and a carefully evaluated `score`. Require direct `https://www.amazon.com/dp/<ASIN>?tag=buybetterfi06-20` URLs. No Amazon search fallbacks, placeholder photos, copied descriptions, invented prices, or invented ratings.

## Publishing gate
- Confirm actual product detail listing matches name and variant.
- Confirm image responds and depicts the exact item; check usage rights.
- Check against existing catalog for ASIN and model duplicates.
- Write specific pros, limitations, compatibility cautions, and independently justified Buy Better Score.
- Test routes, links, imagery, and production build.
- Keep pull request in draft until all checks pass.
