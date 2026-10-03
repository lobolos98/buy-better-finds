import { amazonImageOverrides } from './amazon-images.js';
import { manufacturerImageOverrides } from './manufacturer-images.js';
import { diyProducts } from './diy-products.js';
import { fitnessProducts } from './fitness-products.js';
import { lifestyleProducts } from './lifestyle-products.js';
// Halloween catalog uses a named ESM export.
import { halloweenProducts } from './halloween-products.js';

const productsCatalog = [
  ...diyProducts,
  ...fitnessProducts,
  ...lifestyleProducts,
  ...halloweenProducts,






  {
    slug: 'sony-wh-1000xm5-tech', amazonAsin: 'B09XS7JWHH', name: 'Sony WH-1000XM5 Noise-Canceling Headphones', category: 'Tech', price: '$299.99', icon: '◉',
    image: 'https://m.media-amazon.com/images/I/51aXvjzcukL._AC_SL1500_.jpg', imageAlt: 'Sony WH-1000XM5 Noise-Canceling Headphones',
    bestFor: 'Travel, commuting, focused listening', why: 'Premium wireless headphones with strong active noise cancellation, multipoint connectivity, and long battery life.', watch: 'Premium pricing; fit and sound preference are personal.', url: 'https://electronics.sony.com/audio/headphones/headband/p/wh1000xm5-b', dailyDealDate: '2026-09-22'
  },
  {
    slug: 'ninja-af101', amazonAsin: 'B07FDJMC9Q', name: 'Ninja 4-Qt Air Fryer AF101', category: 'Home & Kitchen', price: '$119.99', icon: '◇',
    image: 'https://target.scene7.com/is/image/Target/GUEST_127e9e1c-2cdc-4e69-9a35-de5998d4c037?fmt=pjpeg&hei=900&wid=900', imageAlt: 'Ninja 4-Qt Air Fryer AF101',
    bestFor: 'Weeknight meals and smaller households', why: 'Compact 4-quart air fryer with a ceramic-coated basket and straightforward countertop footprint.', watch: 'The 4-quart capacity is better for smaller batches than large family meals.', url: 'https://www.target.com/p/-/A-53649826', dailyDealDate: '2026-09-23'
  },
  {
    slug: 'amazon-basics-46000-btu-patio-heater', amazonAsin: 'B010VFKZEO', name: 'Amazon Basics 46,000 BTU Portable Outdoor Propane Patio Heater', category: 'Outdoor', price: 'Check price', icon: '☼',
    image: 'https://m.media-amazon.com/images/I/51k1BjYwSlL._AC_UY512_.jpg', imageAlt: 'Amazon Basics 46,000 BTU Portable Outdoor Propane Patio Heater in Slate Gray',
    bestFor: 'Patios, decks, outdoor dining, and entertaining', why: 'Portable propane patio heater with adjustable heat output and wheels for repositioning.', watch: 'Check current propane, clearance, and outdoor-use requirements before setup.', url: 'https://www.amazon.com/dp/B010VFKZEO?tag=buybetterfi06-20', dailyDealDate: '2026-09-30', score: 8.7
  },
  {
    slug: 'solo-stove-tower', name: 'Solo Stove Tower Patio Heater', category: 'Outdoor', price: '$799.99', icon: '☼',
    image: 'https://content.solostove.com/image/upload/ar_442%3A300%2Cc_auto%2Cg_auto%2Cw_305/q_auto/f_avif/dpr_auto/e_unsharp_mask%3A100/qpdqxp6zip3b7yzu9e9b', imageAlt: 'Solo Stove Tower Patio Heater',
    bestFor: 'Patios, decks, and outdoor entertaining', why: 'Tall outdoor patio heater designed to extend usable outdoor time.', watch: 'Large footprint and premium price make it a better fit for dedicated outdoor spaces.', url: 'https://www.solostove.com/us/en-us/p/SSTOWER1.5_PELLET', dailyDealDate: '2026-10-10'
  },
  {
    slug: 'apple-airpods-5', amazonAsin: 'B0HJB69GJL', name: 'Apple AirPods 5', category: 'Tech', price: 'Check price', icon: '◉',
    image: 'https://www.apple.com/v/airpods-5/b/images/overview/bento-gallery/bento_pair__c7i9mu5k2zee_xlarge.jpg', imageAlt: 'Apple AirPods 5 wireless earbuds',
    bestFor: 'Everyday wireless listening in the Apple ecosystem', why: 'Apple AirPods 5 with Active Noise Cancellation, Personalized Spatial Audio, Live Translation, USB-C charging, and the H2 chip.', watch: 'Check Amazon for the current configuration, price, and availability.', url: 'https://www.amazon.com/dp/B0HJB69GJL?tag=buybetterfi06-20', dailyDealDate: '2026-10-02'
  },
  {
    slug: 'apple-ipad-a16', amazonAsin: 'B0DZJ4N8Y5', name: 'Apple iPad 11-inch (A16)', category: 'Tech', price: 'Check price', icon: '▣',
    image: 'https://www.apple.com/v/ipad-11/d/images/overview/design/modular_startframe__ecmd9ce9dsom_large.jpg', imageAlt: 'Apple iPad 11-inch with A16 chip',
    bestFor: 'Streaming, browsing, school, and everyday productivity', why: '11-inch iPad with an A16 chip, 128GB starting storage, USB-C, and Apple Pencil support.', watch: 'Accessories such as keyboards and Pencil add to the total cost.', url: 'https://www.apple.com/ipad-11/', dailyDealDate: '2026-09-20'
  },
  {
    slug: 'weber-spirit-e210', name: 'Weber Spirit E-210 Gas Grill', category: 'Outdoor', price: '$399.00', icon: '☼',
    image: 'https://product-images.weber.com/Grill-Images/Gas/1501000_B-1800x1800-b72c58f.png?w=800&h=800&auto=compress%2cformat', imageAlt: 'Weber Spirit E-210 Gas Grill',
    bestFor: 'Everyday backyard grilling', why: 'Two-burner propane grill with precise heat control and a compact footprint.', watch: 'It uses a 20-lb propane tank sold separately.', url: 'https://www.weber.com/US/en/gas/spirit/spirit-e-210-lp-blk/1501000.html', dailyDealDate: '2026-10-04'
  },
  {
    slug: 'amazon-echo-dot', amazonAsin: 'B09B8V1LZ3', name: 'Amazon Echo Dot', category: 'Smart Home', price: 'Check price', icon: '◉',
    image: 'https://m.media-amazon.com/images/I/71xoR4A6q-L._AC_SL1000_.jpg', imageAlt: 'Amazon Echo Dot smart speaker',
    bestFor: 'Voice control, timers, music, and smart-home routines', why: 'Compact smart speaker that can serve as a convenient voice-control hub.', watch: 'Smart-speaker usefulness depends on how much of your home you want connected.', url: 'https://www.amazon.com/dp/B09B8V1LZ3?tag=buybetterfi06-20', dailyDealDate: '2026-09-29'
  },
  {
    slug: 'anker-nano-power-bank-tech', name: 'Anker Nano Power Bank', category: 'Tech', price: 'Check price', icon: '▣',
    image: 'https://cdn.shopify.com/s/files/1/0493/9834/9974/files/A1653011_ND01_V1.png?v=1728462233&width=3840', imageAlt: 'Anker Nano Power Bank',
    bestFor: 'Portable phone charging', why: 'Compact Anker charging option for backup power on the go.', watch: 'Check the exact connector, capacity, and charging wattage of the version you choose.', url: 'https://www.anker.com/products/a1653-usb-c-portable-charger-5000mah', dailyDealDate: '2026-10-05'
  },
  {
    slug: 'dyson-v8', amazonAsin: 'B0GT2DG9SK', name: 'Dyson V8 Cordless Vacuum', category: 'Home & Kitchen', price: 'Check price', icon: '◇',
    image: '/images/products/dyson-v8.svg', imageAlt: 'Dyson V8 Cordless Vacuum',
    bestFor: 'Quick everyday floor and spot cleaning', why: 'Cordless stick vacuum format for quick cleanups and hard-to-reach areas.', watch: 'Battery runtime and bin capacity are more limited than larger corded vacuums.', url: 'https://www.dyson.com/vacuum-cleaners/cordless/v8/shop-all', dailyDealDate: '2026-10-06'
  },
  {
    slug: 'instant-vortex-plus', name: 'Instant Vortex Plus Air Fryer', category: 'Home & Kitchen', price: 'Check price', icon: '◇',
    image: 'https://instantpot.com/cdn/shop/files/IB_140-3000-01_Vortex-Plus-AFO-10QT_ATF_Square_Tile1.png?v=1746220302&width=960', imageAlt: 'Instant Vortex Plus Air Fryer',
    bestFor: 'Fast countertop cooking', why: 'Popular air-fryer format with multiple cooking functions for quick everyday meals.', watch: 'Compare basket capacity and exact functions across Vortex Plus variants.', url: 'https://instantpot.com/collections/air-fryers', dailyDealDate: '2026-09-26'
  },
  {
    slug: 'yeti-rambler', name: 'YETI Rambler Drinkware', category: 'Lifestyle', price: 'Check price', icon: '◈',
    image: 'https://yeti-webmedia.imgix.net/m/3f71b90ff226c222/original/PDP_Asset_Banner_Square_PDP_Product_Navy_Coffee_Overview_Lifestyle.jpg?auto=format%2Ccompress&fit=crop&h=400&w=400', imageAlt: 'YETI Rambler insulated drinkware',
    bestFor: 'Daily drinks, commuting, and outdoor use', why: 'Durable insulated drinkware line with multiple sizes and lid configurations.', watch: 'Pick the size and lid style that matches how you actually carry and use it.', url: 'https://www.yeti.com/drinkware/tumblers/rambler.html', dailyDealDate: '2026-09-27'
  },
  {
    slug: 'logitech-mx-master-3s', name: 'Logitech MX Master 3S', category: 'Tech', price: 'Check price', icon: '◉',
    image: 'https://resource.logitech.com/w_1440%2Ch_660%2Car_24%3A11%2Cc_fill%2Cq_auto%2Cf_auto%2Cdpr_1.0/d_transparent.gif/content/dam/logitech/en/products/mice/mx-master-3s/mx-master-3s-graphite-ident.jpg', imageAlt: 'Logitech MX Master 3S wireless mouse',
    bestFor: 'Desktop productivity and multi-device work', why: 'Ergonomic wireless mouse with precise scrolling and customizable controls.', watch: 'Its larger ergonomic shape may not suit users who prefer small travel mice.', url: 'https://www.logitech.com/en-us/shop/p/mx-master-3s', dailyDealDate: '2026-09-21'
  },
  {
    slug: 'shark-navigator-lift-away', name: 'Shark Navigator Lift-Away', category: 'Home & Kitchen', price: 'Check price', icon: '◇',
    image: 'https://assets.sharkninja.com/image/upload/c_pad,w_800,h_800,f_auto,q_auto,b_rgb:FFFFFF/v1/SharkNinja-NA/NV360_01', imageAlt: 'Shark Navigator Lift-Away vacuum',
    bestFor: 'Whole-home floor cleaning', why: 'Upright vacuum design with a lift-away concept for stairs and above-floor areas.', watch: 'An upright vacuum takes more storage space than a compact cordless stick model.', url: 'https://www.sharkclean.com/products/navigator-lift-away-vacuum-zidNV360', dailyDealDate: '2026-10-07'
  },
  {
    slug: 'lego-city-lava-rollercoaster', name: 'LEGO City Lava Land Roller Coaster Park', category: 'Toys & Games', price: 'Check price', icon: '▰',
    image: 'https://www.lego.com/cdn/cs/set/assets/blt5ade0bb8e69bd6af/bltbb861aad3aa34ad7-60501_Prod_en-gb.png?dpr=1&fit=bounds&format=jpg&height=1500&quality=80&width=1500', imageAlt: 'LEGO City Lava Land Roller Coaster Park building set',
    bestFor: 'Creative builders and imaginative play', why: 'A large LEGO City build combining construction, play value, and an amusement-park theme.', watch: 'Larger LEGO sets need meaningful storage and build space.', url: 'https://www.lego.com/en-us/themes/city', dailyDealDate: '2026-10-08'
  },
  {
    slug: 'crunchlabs-crunchinator', name: 'CrunchLabs The Crunchinator', category: 'Toys & Games', price: '$34.99', icon: '⚙',
    image: '/images/products/crunchlabs-crunchinator.svg', imageAlt: 'CrunchLabs The Crunchinator STEM building toy',
    bestFor: 'STEM-minded kids and hands-on makers', why: 'A build-and-experiment toy designed around problem solving and mechanical curiosity.', watch: 'Best suited to kids who enjoy building and tinkering rather than passive play.', url: 'https://www.crunchlabs.com/', dailyDealDate: '2026-10-09'
  },

  {
    slug: 'tp-link-ep40m', amazonAsin: 'B0CVMXZMDM', name: 'TP-Link Kasa Smart Outdoor Plug EP40M', category: 'Smart Home', price: 'Check price', icon: '⚡',
    image: 'https://static.tp-link.com/upload/image-line/EP40M_US_1.0_1_normal_20240522012656v.jpg', imageAlt: 'TP-Link Kasa Smart Outdoor Plug EP40M',
    bestFor: 'Outdoor smart-home control', why: 'A Matter-certified dual-outlet smart plug for outdoor lights and other connected devices, with individually controlled outlets and IP64 weather resistance.', watch: 'Outdoor use requires appropriate weather protection and GFCI installation where applicable.', url: 'https://www.amazon.com/dp/B0CVMXZMDM?tag=buybetterfi06-20', dailyDealDate: '2026-10-03'
  },

  {
    slug: 'apple-airpods-4', name: 'Apple AirPods 4', category: 'Tech', price: 'Check price', icon: '◉',
    image: 'https://www.apple.com/newsroom/images/2024/09/apple-introduces-airpods-4/article/Apple-AirPods-4-with-case-240909_big.jpg.large.jpg', imageAlt: 'Apple AirPods 4',
    bestFor: 'Everyday wireless listening', why: 'Open-ear wireless earbuds with the H2 chip, USB-C charging case, and an available ANC model.', watch: 'AirPods 4 and AirPods 4 with ANC are separate models; confirm the exact version before buying.', url: 'https://www.apple.com/airpods-4/'
  },

  {
    slug: 'magna-tiles-clear-32', name: 'Magna-Tiles Clear Colors 32-Piece Set', category: 'Toys & Games', price: '$49.99', icon: '★',
    image: 'https://ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B000CBSNKQ&Format=_SL500_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1', imageAlt: 'MAGNA-TILES Clear Colors 32-Piece Set',
    bestFor: 'Toys, play, learning, and family fun', why: 'A real, recognizable toy or game selected for play value and gifting appeal.',
    watch: 'Check the current age guidance, edition, and availability before buying.', url: 'https://www.amazon.com/s?k=Magna-Tiles+Clear+Colors+32-Piece+Set&tag=buybetterfi06-20'
  },

  {
    slug: 'taco-cat-goat-cheese-pizza', name: 'Taco Cat Goat Cheese Pizza Card Game', category: 'Toys & Games', price: 'Check price', icon: '★',
    image: 'https://ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B077Z1R28P&Format=_SL500_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1', imageAlt: 'Taco Cat Goat Cheese Pizza Card Game',
    bestFor: 'Toys, play, learning, and family fun', why: 'A real, recognizable toy or game selected for play value and gifting appeal.',
    watch: 'Check the current age guidance, edition, and availability before buying.', url: 'https://www.amazon.com/s?k=Taco+Cat+Goat+Cheese+Pizza+Card+Game&tag=buybetterfi06-20'
  },

  {
    slug: 'bitzee-interactive-digital-pet', name: 'Bitzee Interactive Digital Pet', category: 'Toys & Games', price: 'Check price', icon: '★',
    image: 'https://ecsmedia.pl/c/bitzee-interaktywne-zwierzatko-cyfrowe-wirtualny-zwierzak-hologram-spin-master-b-iext191183535.jpg', imageAlt: 'Bitzee Interactive Digital Pet',
    bestFor: 'Toys, play, learning, and family fun', why: 'A real, recognizable toy or game selected for play value and gifting appeal.',
    watch: 'Check the current age guidance, edition, and availability before buying.', url: 'https://www.amazon.com/s?k=Bitzee+Interactive+Digital+Pet&tag=buybetterfi06-20'
  },

  {
    slug: 'tonies-toniebox-starter-set', name: 'Tonies Toniebox Starter Set', category: 'Toys & Games', price: '$69.99', icon: '★',
    image: 'https://ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B0BN5G4G31&Format=_SL500_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1', imageAlt: 'Tonies Toniebox Starter Set',
    bestFor: 'Toys, play, learning, and family fun', why: 'A real, recognizable toy or game selected for play value and gifting appeal.',
    watch: 'Check the current age guidance, edition, and availability before buying.', url: 'https://www.amazon.com/s?k=Tonies+Toniebox+Starter+Set&tag=buybetterfi06-20'
  },

  {
    slug: 'crayola-light-up-tracing-pad', name: 'Crayola Light Up Tracing Pad', category: 'Toys & Games', price: '$22.49', icon: '★',
    image: 'https://ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B00EC6NOFQ&Format=_SL500_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1', imageAlt: 'Crayola Light Up Tracing Pad',
    bestFor: 'Toys, play, learning, and family fun', why: 'A real, recognizable toy or game selected for play value and gifting appeal.',
    watch: 'Check the current age guidance, edition, and availability before buying.', url: 'https://www.amazon.com/s?k=Crayola+Light+Up+Tracing+Pad&tag=buybetterfi06-20'
  },

  {
    slug: 'lego-harry-potter-hogwarts-castle-71043', name: 'LEGO Harry Potter Hogwarts Castle (71043)', category: 'Toys & Games', price: '$469.99', icon: '★',
    image: 'https://ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B07GG3Y7N6&Format=_SL500_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1', imageAlt: 'LEGO Harry Potter Hogwarts Castle 71043',
    bestFor: 'Toys, play, learning, and family fun', why: 'A real, recognizable toy or game selected for play value and gifting appeal.',
    watch: 'Check the current age guidance, edition, and availability before buying.', url: 'https://www.amazon.com/s?k=LEGO+Harry+Potter+Hogwarts+Castle+(71043)&tag=buybetterfi06-20'
  },

  {
    slug: 'melissa-doug-top-bake-pizza-counter', name: 'Melissa & Doug Top & Bake Wooden Pizza Counter', category: 'Toys & Games', price: '$59.99', icon: '★',
    image: 'https://ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B075KX9NS7&Format=_SL500_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1', imageAlt: 'Melissa & Doug Top & Bake Wooden Pizza Counter',
    bestFor: 'Toys, play, learning, and family fun', why: 'A real, recognizable toy or game selected for play value and gifting appeal.',
    watch: 'Check the current age guidance, edition, and availability before buying.', url: 'https://www.amazon.com/s?k=Melissa+%26+Doug+Top+%26+Bake+Wooden+Pizza+Counter&tag=buybetterfi06-20'
  },

  {
    slug: 'snap-circuits-jr-sc100', name: 'Snap Circuits Jr. SC-100', category: 'Toys & Games', price: '$14.11', icon: '★',
    image: 'https://ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B00008BFZH&Format=_SL500_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1', imageAlt: 'Snap Circuits Jr. SC-100',
    bestFor: 'Toys, play, learning, and family fun', why: 'A real, recognizable toy or game selected for play value and gifting appeal.',
    watch: 'Check the current age guidance, edition, and availability before buying.', url: 'https://www.amazon.com/s?k=Snap+Circuits+Jr.+SC-100&tag=buybetterfi06-20'
  },

  {
    slug: 'stomp-rocket-dueling-rockets', name: 'Stomp Rocket Dueling Rockets', category: 'Toys & Games', price: '$34.99', icon: '★',
    image: 'https://i5.samsclubimages.com/asr/2171a5ad-c4c6-45aa-87b3-4f1a3e1e1620.2b4227fdfe8075866d0adb45d104bae7.jpeg', imageAlt: 'Stomp Rocket Dueling Rockets',
    bestFor: 'Toys, play, learning, and family fun', why: 'A real, recognizable toy or game selected for play value and gifting appeal.',
    watch: 'Check the current age guidance, edition, and availability before buying.', url: 'https://www.amazon.com/s?k=Stomp+Rocket+Dueling+Rockets&tag=buybetterfi06-20'
  },

  {
    slug: 'bravokids-lcd-writing-tablet', name: 'Bravokids LCD Writing Tablet', category: 'Toys & Games', price: '$35.99', icon: '★',
    image: 'https://ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B083BG4MXC&Format=_SL500_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1', imageAlt: 'Bravokids LCD Writing Tablet',
    bestFor: 'Toys, play, learning, and family fun', why: 'A real, recognizable toy or game selected for play value and gifting appeal.',
    watch: 'Check the current age guidance, edition, and availability before buying.', url: 'https://www.amazon.com/s?k=Bravokids+LCD+Writing+Tablet&tag=buybetterfi06-20'
  },

  {
    slug: 'fisher-price-rock-a-stack', name: 'Fisher-Price Rock-a-Stack', category: 'Toys & Games', price: '$8.63', icon: '★',
    image: 'https://cdn.shopify.com/s/files/1/1857/6931/products/UyJaJVohb6.jpg?v=1675763441', imageAlt: 'Fisher-Price Rock-a-Stack',
    bestFor: 'Toys, play, learning, and family fun', why: 'A real, recognizable toy or game selected for play value and gifting appeal.',
    watch: 'Check the current age guidance, edition, and availability before buying.', url: 'https://www.amazon.com/s?k=Fisher-Price+Rock-a-Stack&tag=buybetterfi06-20'
  },

  {
    slug: 'crayola-globbles-6-count', name: 'Crayola Globbles (6-Count)', category: 'Toys & Games', price: '$8.95', icon: '★',
    image: 'https://ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B07HDX46HS&Format=_SL500_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1', imageAlt: 'Crayola Globbles 6-Count',
    bestFor: 'Toys, play, learning, and family fun', why: 'A real, recognizable toy or game selected for play value and gifting appeal.',
    watch: 'Check the current age guidance, edition, and availability before buying.', url: 'https://www.amazon.com/s?k=Crayola+Globbles+(6-Count)&tag=buybetterfi06-20'
  },

  {
    slug: 'pokemon-day-2026-collection', name: 'Pokémon Day 2026 Collection', category: 'Toys & Games', price: 'Check price', icon: '★',
    image: 'https://m.media-amazon.com/images/I/91YHLxggDmL._AC_SL1500_.jpg', imageAlt: 'Pokémon Day 2026 Collection',
    bestFor: 'Toys, play, learning, and family fun', why: 'A real, recognizable toy or game selected for play value and gifting appeal.',
    watch: 'Check the current age guidance, edition, and availability before buying.', url: 'https://www.amazon.com/s?k=Pok%C3%A9mon+Day+2026+Collection&tag=buybetterfi06-20'
  },

  {
    slug: 'hot-wheels-colossal-crash-track', name: 'Hot Wheels Colossal Crash Track Set', category: 'Toys & Games', price: 'Check price', icon: '★',
    image: 'https://ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B07NQFW239&Format=_SL500_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1', imageAlt: 'Hot Wheels Colossal Crash Track Set',
    bestFor: 'Toys, play, learning, and family fun', why: 'A real, recognizable toy or game selected for play value and gifting appeal.',
    watch: 'Check the current age guidance, edition, and availability before buying.', url: 'https://www.amazon.com/s?k=Hot+Wheels+Colossal+Crash+Track+Set&tag=buybetterfi06-20'
  },

  {
    slug: 'buzz-lightyear-interactive-talking', name: 'Disney Store Buzz Lightyear Interactive Talking Action Figure', category: 'Toys & Games', price: '$39.99', icon: '★',
    image: 'https://ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B07PQFT83F&Format=_SL500_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1', imageAlt: 'Disney Store Buzz Lightyear Interactive Talking Action Figure',
    bestFor: 'Toys, play, learning, and family fun', why: 'A real, recognizable toy or game selected for play value and gifting appeal.',
    watch: 'Check the current age guidance, edition, and availability before buying.', url: 'https://www.amazon.com/s?k=Disney+Store+Buzz+Lightyear+Interactive+Talking+Action+Figure&tag=buybetterfi06-20'
  },

  {
    slug: 'exploding-kittens-card-game', name: 'Exploding Kittens Card Game', category: 'Toys & Games', price: 'Check price', icon: '★',
    image: 'https://ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B010TQY7A8&Format=_SL500_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1', imageAlt: 'Exploding Kittens Card Game',
    bestFor: 'Toys, play, learning, and family fun', why: 'A real, recognizable toy or game selected for play value and gifting appeal.',
    watch: 'Check the current age guidance, edition, and availability before buying.', url: 'https://www.amazon.com/s?k=Exploding+Kittens+Card+Game&tag=buybetterfi06-20'
  },

  {
    slug: 'vtech-pull-and-sing-puppy', name: 'VTech Pull and Sing Puppy', category: 'Toys & Games', price: '$11.95', icon: '★',
    image: 'https://ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B01MQ3YP7Y&Format=_SL500_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1', imageAlt: 'VTech Pull and Sing Puppy',
    bestFor: 'Toys, play, learning, and family fun', why: 'A real, recognizable toy or game selected for play value and gifting appeal.',
    watch: 'Check the current age guidance, edition, and availability before buying.', url: 'https://www.amazon.com/s?k=VTech+Pull+and+Sing+Puppy&tag=buybetterfi06-20'
  },

  {
    slug: 'original-slinky', name: 'The Original Slinky', category: 'Toys & Games', price: '$3.59', icon: '★',
    image: 'https://ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B00000IZKX&Format=_SL500_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1', imageAlt: 'The Original Slinky',
    bestFor: 'Toys, play, learning, and family fun', why: 'A real, recognizable toy or game selected for play value and gifting appeal.',
    watch: 'Check the current age guidance, edition, and availability before buying.', url: 'https://www.amazon.com/s?k=The+Original+Slinky&tag=buybetterfi06-20'
  },

  {
    slug: 'lego-bonsai-tree-10281', name: 'LEGO Bonsai Tree Building Kit', category: 'Toys & Games', price: '$17.04', icon: '★',
    image: 'https://ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B08HVXZW8X&Format=_SL500_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1', imageAlt: 'LEGO Bonsai Tree 10281',
    bestFor: 'Toys, play, learning, and family fun', why: 'A real, recognizable toy or game selected for play value and gifting appeal.',
    watch: 'Check the current age guidance, edition, and availability before buying.', url: 'https://www.amazon.com/s?k=LEGO+Bonsai+Tree+Building+Kit&tag=buybetterfi06-20'
  },

  {
    slug: 'leapfrog-learning-friends-100-words', name: 'LeapFrog Learning Friends 100 Words Book', category: 'Toys & Games', price: '$7.99', icon: '★',
    image: 'https://ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B07B6ZN7P8&Format=_SL500_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1', imageAlt: 'LeapFrog Learning Friends 100 Words Book',
    bestFor: 'Toys, play, learning, and family fun', why: 'A real, recognizable toy or game selected for play value and gifting appeal.',
    watch: 'Check the current age guidance, edition, and availability before buying.', url: 'https://www.amazon.com/s?k=LeapFrog+Learning+Friends+100+Words+Book&tag=buybetterfi06-20'
  },

  {
    slug: 'eltamd-uv-clear-spf-46', name: 'EltaMD UV Clear Broad-Spectrum SPF 46', category: 'Beauty & Personal Care', price: '$14.00', icon: '✦',
    amazonAsin: 'B002MSN3QQ', image: 'https://lirp.cdn-website.com/f2fb22d0/dms3rep/multi/opt/EltaMD%2BUV%2BClear%2BBroad-Spectrum%2BSPF%2B46%2B1.7%2Bfl.oz-1920w.png', imageAlt: 'EltaMD UV Clear Broad-Spectrum SPF 46',
    bestFor: 'Daily facial sun protection', why: 'Lightweight facial sunscreen featuring niacinamide and broad-spectrum SPF 46 protection.', watch: 'Check the exact untinted or tinted version and current price.', url: 'https://www.amazon.com/dp/B002MSN3QQ?tag=buybetterfi06-20'
  },
  {
    slug: 'hero-mighty-patch-original', name: 'Hero Cosmetics Mighty Patch Original', category: 'Beauty & Personal Care', price: '$8.97', icon: '✦',
    amazonAsin: 'B074PVTPBW', image: 'https://ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B074PVTPBW&Format=_SL500_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1', imageAlt: 'Hero Cosmetics Mighty Patch Original',
    bestFor: 'Blemish care and overnight routines', why: 'Hydrocolloid patches designed for overnight blemish coverage and absorption.', watch: 'Patch count and package size vary by listing.', url: 'https://www.amazon.com/s?k=Hero+Cosmetics+Mighty+Patch+Original&tag=buybetterfi06-20'
  },
  {
    slug: 'cerave-hydrating-facial-cleanser', name: 'CeraVe Hydrating Facial Cleanser', category: 'Beauty & Personal Care', price: '$5.90', icon: '✦',
    amazonAsin: 'B01N1LL62W', image: 'https://ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B01N1LL62W&Format=_SL500_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1', imageAlt: 'CeraVe Hydrating Facial Cleanser',
    bestFor: 'Gentle daily cleansing', why: 'Fragrance-free cleanser with ceramides and hyaluronic acid for normal-to-dry skin.', watch: 'Confirm the bottle size because listings vary.', url: 'https://www.amazon.com/dp/B01N1LL62W?tag=buybetterfi06-20'
  },
  {
    slug: 'paulas-choice-2-bha-liquid-exfoliant', name: "Paula's Choice Skin Perfecting 2% BHA Liquid Exfoliant", category: 'Beauty & Personal Care', price: 'Check price', icon: '✦',
    amazonAsin: 'B00949CTQQ', image: 'https://ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B00949CTQQ&Format=_SL500_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1', imageAlt: "Paula's Choice Skin Perfecting 2% BHA Liquid Exfoliant",
    bestFor: 'Pore and texture-focused routines', why: 'Leave-on salicylic-acid exfoliant designed to unclog pores and smooth the look of uneven texture.', watch: 'Exfoliating acids can be irritating; follow the product directions.', url: 'https://www.amazon.com/dp/B00949CTQQ?tag=buybetterfi06-20'
  },
  {
    slug: 'biodance-bio-collagen-real-deep-mask', name: 'Biodance Bio-Collagen Real Deep Mask', category: 'Beauty & Personal Care', price: '$19.00', icon: '✦',
    amazonAsin: 'B0B2RM68G2', image: 'https://www.pletovecentrum.sk/cdn/shop/files/Biodance_pink.jpg?v=1729804718', imageAlt: 'Biodance Bio-Collagen Real Deep Mask',
    bestFor: 'Hydration and overnight self-care', why: 'Hydrogel face mask designed for deep hydration and a plump, refreshed-looking complexion.', watch: 'Verify the number of masks in the selected package.', url: 'https://www.amazon.com/dp/B0B2RM68G2?tag=buybetterfi06-20'
  },
  {
    slug: 'the-ordinary-niacinamide-zinc', name: 'The Ordinary Niacinamide 10% + Zinc 1%', category: 'Beauty & Personal Care', price: '$17.54', icon: '✦',
    amazonAsin: 'B01MDTVZTZ', image: 'https://ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B01MDTVZTZ&Format=_SL500_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1', imageAlt: 'The Ordinary Niacinamide 10% + Zinc 1%',
    bestFor: 'Oil and blemish-prone skin routines', why: 'Niacinamide serum formulated with zinc to support a smoother, more balanced-looking complexion.', watch: 'Skin tolerance varies; introduce active products gradually.', url: 'https://www.amazon.com/dp/B01MDTVZTZ?tag=buybetterfi06-20'
  },
  {
    slug: 'the-ordinary-glycolic-acid-7-toner', name: 'The Ordinary Glycolic Acid 7% Exfoliating Toner', category: 'Beauty & Personal Care', price: 'Check price', icon: '✦',
    amazonAsin: 'B071914GGL', image: 'https://ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B071914GGL&Format=_SL500_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1', imageAlt: 'The Ordinary Glycolic Acid 7% Exfoliating Toner',
    bestFor: 'Exfoliation and brighter-looking skin', why: 'Glycolic-acid toner designed to exfoliate and improve the look of uneven texture and tone.', watch: 'Use as directed and consider sun protection when using exfoliating acids.', url: 'https://www.amazon.com/dp/B071914GGL?tag=buybetterfi06-20'
  },
  {
    slug: 'medicube-zero-pore-pad', name: 'Medicube Zero Pore Pad', category: 'Beauty & Personal Care', price: '$24.00', icon: '✦',
    amazonAsin: 'B09V7Z4TJG', image: 'https://ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B09V7Z4TJG&Format=_SL500_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1', imageAlt: 'Medicube Zero Pore Pad',
    bestFor: 'Pore-focused skincare routines', why: 'Dual-textured toner pads formulated to help refine the appearance of pores and remove surface buildup.', watch: 'Active exfoliating ingredients may not suit every skin type.', url: 'https://www.amazon.com/dp/B09V7Z4TJG?tag=buybetterfi06-20'
  },
  {
    slug: 'panoxyl-acne-foaming-wash-10', name: 'PanOxyl Acne Foaming Wash 10%', category: 'Beauty & Personal Care', price: '$1.75', icon: '✦',
    amazonAsin: 'B081KL2QYJ', image: 'https://ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B081KL2QYJ&Format=_SL500_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1', imageAlt: 'PanOxyl Acne Foaming Wash 10%',
    bestFor: 'Acne-prone skincare routines', why: 'Maximum-strength benzoyl peroxide foaming wash for face and body acne care.', watch: 'Benzoyl peroxide can be drying and may bleach fabrics; follow label directions.', url: 'https://www.amazon.com/dp/B081KL2QYJ?tag=buybetterfi06-20'
  },
  {
    slug: 'good-molecules-yerba-mate-eye-gel', name: 'Good Molecules Yerba Mate Wake Up Eye Gel', category: 'Beauty & Personal Care', price: 'Check price', icon: '✦',
    amazonAsin: 'B091NJQ29P', image: 'https://ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B091NJQ29P&Format=_SL500_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1', imageAlt: 'Good Molecules Yerba Mate Wake Up Eye Gel',
    bestFor: 'Tired-looking under-eyes', why: 'Lightweight eye gel with yerba mate, caffeine, peptides, and hyaluronic acid.', watch: 'Avoid direct eye contact and check the current ingredient list.', url: 'https://www.amazon.com/dp/B091NJQ29P?tag=buybetterfi06-20'
  },
  {
    slug: 'embryolisse-lait-creme-concentre', name: 'Embryolisse Lait-Crème Concentré', category: 'Beauty & Personal Care', price: '$84.00', icon: '✦',
    amazonAsin: 'B004KELK4C', image: 'https://ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B004KELK4C&Format=_SL500_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1', imageAlt: 'Embryolisse Lait-Crème Concentré',
    bestFor: 'Multi-use moisturizing and makeup prep', why: 'Multi-purpose moisturizer that can also be used as a makeup base, cleansing milk, and moisturizing mask.', watch: 'Formula and packaging can vary by market and size.', url: 'https://www.amazon.com/dp/B004KELK4C?tag=buybetterfi06-20'
  },
  {
    slug: 'mielle-rosemary-mint-oil', name: 'Mielle Organics Rosemary Mint Scalp & Hair Strengthening Oil', category: 'Beauty & Personal Care', price: 'Check price', icon: '✦',
    amazonAsin: 'B07N7PK9QK', image: 'https://http2.mlstatic.com/D_Q_NP_2X_671278-MLA99919731119_112025-P.webp', imageAlt: 'Mielle Organics Rosemary Mint Scalp and Hair Strengthening Oil',
    bestFor: 'Scalp and hair care', why: 'Rosemary and mint hair oil infused with biotin for scalp and hair-care routines.', watch: 'Check the current formula and use directions before applying.', url: 'https://www.amazon.com/dp/B07N7PK9QK?tag=buybetterfi06-20'
  },
  {
    slug: 'olaplex-no-3-hair-perfector', name: 'Olaplex No. 3 Hair Perfector', category: 'Beauty & Personal Care', price: 'Check price', icon: '✦',
    amazonAsin: 'B00SNM5US4', image: 'https://ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B00SNM5US4&Format=_SL500_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1', imageAlt: 'Olaplex No. 3 Hair Perfector',
    bestFor: 'Damaged or chemically treated hair', why: 'At-home pre-shampoo treatment designed to strengthen and improve the feel of damaged hair.', watch: 'Follow the current product directions for application and processing time.', url: 'https://www.amazon.com/dp/B00SNM5US4?tag=buybetterfi06-20'
  },
  {
    slug: 'color-wow-dream-coat', name: 'Color Wow Dream Coat Supernatural Spray', category: 'Beauty & Personal Care', price: 'Check price', icon: '✦',
    amazonAsin: 'B073CWSQ51', image: 'https://ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B073CWSQ51&Format=_SL500_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1', imageAlt: 'Color Wow Dream Coat Supernatural Spray',
    bestFor: 'Smooth, humidity-resistant styling', why: 'Heat-activated styling spray designed to create a smoother, glass-like finish and help control frizz.', watch: 'The effect depends on thorough heat activation during styling.', url: 'https://www.amazon.com/dp/B073CWSQ51?tag=buybetterfi06-20'
  },
  {
    slug: 'nizoral-anti-dandruff-shampoo', name: 'Nizoral Anti-Dandruff Shampoo', category: 'Beauty & Personal Care', price: 'Check price', icon: '✦',
    amazonAsin: 'B0000Y3CRW', image: 'https://m.media-amazon.com/images/I/719c1rP3V8L.jpg', imageAlt: 'Nizoral Anti-Dandruff Shampoo',
    bestFor: 'Dandruff and flaky-scalp care', why: 'Ketoconazole shampoo formulated to control flaking, scaling, and itching associated with dandruff.', watch: 'Follow the drug-facts label and directions for use.', url: 'https://www.amazon.com/dp/B0000Y3CRW?tag=buybetterfi06-20'
  },
  {
    slug: 'laneige-lip-sleeping-mask', name: 'Laneige Lip Sleeping Mask', category: 'Beauty & Personal Care', price: 'Check price', icon: '✦',
    amazonAsin: 'B07XXPHQZK', image: 'https://ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B07XXPHQZK&Format=_SL500_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1', imageAlt: 'Laneige Lip Sleeping Mask',
    bestFor: 'Overnight lip hydration', why: 'Rich leave-on lip mask designed to moisturize and soften dry lips overnight.', watch: 'Flavor and package size can vary by listing.', url: 'https://www.amazon.com/dp/B07XXPHQZK?tag=buybetterfi06-20'
  },
  {
    slug: 'maybelline-sky-high-mascara', name: 'Maybelline Lash Sensational Sky High Mascara', category: 'Beauty & Personal Care', price: 'Check price', icon: '✦',
    amazonAsin: 'B08H3JPH74', image: 'https://ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B08H3JPH74&Format=_SL500_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1', imageAlt: 'Maybelline Lash Sensational Sky High Mascara',
    bestFor: 'Lengthening and everyday eye makeup', why: 'Buildable mascara with a flexible brush designed to lengthen and volumize lashes.', watch: 'Shade and washable/waterproof versions vary.', url: 'https://www.amazon.com/dp/B08H3JPH74?tag=buybetterfi06-20'
  },
  {
    slug: 'eos-shea-better-vanilla-cashmere', name: 'eos Shea Better Body Lotion Vanilla Cashmere', category: 'Beauty & Personal Care', price: 'Check price', icon: '✦',
    amazonAsin: 'B08KT2Z93D', image: 'https://ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B08KT2Z93D&Format=_SL500_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1', imageAlt: 'eos Shea Better Body Lotion Vanilla Cashmere',
    bestFor: 'Daily body moisturizing', why: 'Rich body lotion with a warm vanilla-cashmere scent for everyday hydration.', watch: 'Fragrance preference is personal; check the current formula and scent notes.', url: 'https://www.amazon.com/dp/B08KT2Z93D?tag=buybetterfi06-20'
  },
  {
    slug: 'clean-skin-club-clean-towels-xl', name: 'Clean Skin Club Clean Towels XL', category: 'Beauty & Personal Care', price: 'Check price', icon: '✦',
    amazonAsin: 'B07PBXXNCY', image: 'https://ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B07PBXXNCY&Format=_SL500_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1', imageAlt: 'Clean Skin Club Clean Towels XL',
    bestFor: 'Clean, single-use face drying', why: 'Soft disposable face towels designed for single-use drying and makeup-removal routines.', watch: 'Pack counts vary by listing.', url: 'https://www.amazon.com/dp/B07PBXXNCY?tag=buybetterfi06-20'
  },
  {
    slug: 'sacheu-stay-n-peel-off-lip-liner', name: 'Sacheu Peel Off Lip Liner STAY-N', category: 'Beauty & Personal Care', price: 'Check price', icon: '✦',
    amazonAsin: 'B0BVPNQW1C', image: 'https://ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B0BVPNQW1C&Format=_SL500_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1', imageAlt: 'Sacheu STAY-N Peel Off Lip Liner',
    bestFor: 'Long-wear lip color', why: 'Peel-off lip liner format designed to leave a long-lasting tint after removal.', watch: 'Shade and wear time vary by person and application.', url: 'https://www.amazon.com/dp/B0BVPNQW1C?tag=buybetterfi06-20'
  },

];

const supplementalProducts = [
  {
    slug: 'ring-battery-doorbell', amazonAsin: 'B09WZBPX7K', name: 'Ring Battery Doorbell', category: 'Smart Home', price: 'Check price', icon: '◉', image: 'https://images.ctfassets.net/a3peezndovsu/x7qceIoaiCJ3QArhqVeSp/ea33ebc6250b36d629f22971b3e76930/ring_battery_doorbell_2nd_gen_front_image_render_speckle_mocha_1500x1500_02.jpg', imageAlt: 'Ring Battery Doorbell', bestFor: 'Front-door monitoring and package awareness', why: 'Battery-powered video doorbell designed for flexible installation without running doorbell wiring.', watch: 'Cloud features and subscriptions can add ongoing cost depending on how you use it.', url: 'https://ring.com/products/battery-doorbell-2nd-gen'
  },
  {
    slug: 'anker-nano-power-bank', name: 'Anker Nano Power Bank', category: 'Tech', price: 'Check price', icon: '▣', image: 'https://cdn.shopify.com/s/files/1/0493/9834/9974/files/A1653011_ND01_V1.png?v=1728462233&width=3840', imageAlt: 'Anker Nano Power Bank', bestFor: 'Portable phone charging', why: 'Compact Anker charging option aimed at people who want backup power without carrying a large battery pack.', watch: 'Check the exact connector, capacity, and charging wattage of the version you choose.', url: 'https://www.anker.com/products/a1653-usb-c-portable-charger-5000mah', dailyDealDate: '2026-10-05'
  },
  {
    slug: 'govee-smart-light-bulbs', name: 'Govee Smart LED Light Bulbs', category: 'Home & Kitchen', price: 'Check price', icon: '✦', image: 'https://cdn.shopify.com/s/files/1/0512/3489/8105/files/H6008_cde715ce-4395-4eec-8c65-329d794af8cf.png?v=1758526174', imageAlt: 'Govee Smart LED Light Bulbs', bestFor: 'Color lighting and smart-home ambiance', why: 'Smart LED bulbs offer app-based lighting control and color options for rooms, desks, and entertainment spaces.', watch: 'Smart-home compatibility and exact bulb specifications vary by model.', url: 'https://us.govee.com/collections/smart-led-bulbs'
  },
  {
    slug: 'stanley-quencher', name: 'Stanley Quencher H2.0 Tumbler', category: 'Lifestyle', price: 'Check price', icon: '◈', image: 'https://www.stanley1913.com/cdn/shop/files/B2B_Web_PNG-TheQuencherH2.OFlowStateTMTumbler20OZ-Black2.0-Front_20399a06-bbde-478f-a91e-c3b545d6457d.png?v=1716304216&width=990', imageAlt: 'Stanley Quencher H2.0 Tumbler', pressKitUrl: 'https://www.stanley1913.com/pages/newsroom', bestFor: 'Large-volume everyday hydration', why: 'Large insulated tumbler designed for carrying a substantial drink throughout the day.', watch: 'Its large size is convenient for hydration but less convenient for small cup holders and bags.', url: 'https://www.stanley1913.com/products/adventure-quencher-travel-tumbler-20-oz', dailyDealDate: '2026-09-18'
  },
  {
    slug: 'magna-tiles-undersea', name: 'MAGNA-TILES Undersea Adventure 58-Piece Set', category: 'Toys & Games', price: 'Check price', icon: '◇', image: 'https://magnatiles.com/cdn/shop/files/26Undersea_Adventure_FR1_RGB_1.jpg?v=1777929366', imageAlt: 'MAGNA-TILES Undersea Adventure magnetic construction set', bestFor: 'Open-ended building and creative play', why: 'Magnetic construction pieces encourage kids to build, rebuild, and invent their own structures and scenes.', watch: 'Magnetic-tile sets can become a larger investment as you add more pieces and expansions.', url: 'https://www.magnatiles.com/'
  },
  {
    slug: 'elf-halo-glow-liquid-filter', name: 'e.l.f. Halo Glow Liquid Filter', category: 'Beauty & Personal Care', price: 'Check price', icon: '✦', image: 'https://cdn.shopify.com/s/files/1/0661/2251/4520/files/83565_OpenA_V2_R_d02ae91d-8a71-4bba-bfbb-ab663a9b18f0.png?crop=center&height=450&v=1780430096&width=450', imageAlt: 'e.l.f. Halo Glow Liquid Filter makeup product', bestFor: 'Glow-focused makeup routines', why: 'A versatile complexion product aimed at adding a luminous finish and fitting into multiple makeup routines.', watch: 'Shade and finish are highly personal, so check swatches and the current shade range.', url: 'https://www.elfcosmetics.com/halo-glow-liquid-filter/'
  },
  {
    slug: 'tweezerman-tweezers', name: 'Tweezerman Slant Tweezer', category: 'Beauty & Personal Care', price: 'Check price', icon: '✦', image: 'https://tweezerman.com/cdn/shop/files/wobnswxyuhspivnfjukp_1_2.jpg?v=1762528093&width=2000', imageAlt: 'Tweezerman slant tweezers',
    bestFor: 'Precision grooming and eyebrow shaping', why: 'A precision tweezer format built for controlled grooming and detail work.', watch: 'Tip alignment and grip preference are personal, so verify the exact model.', url: 'https://www.amazon.com/s?k=Tweezerman+Slant+Tweezer&tag=buybetterfi06-20'
  },
  {
    slug: 'stitch-sticker-stamper', name: 'Melissa & Doug Sticker WOW! Disney Stitch Stamper & Activity Pad', category: 'Toys & Games', price: 'Check price', icon: '★', image: 'https://www.melissaanddoug.com/cdn/shop/files/13393_166870794_750x.progressive.jpg?v=1785436175', imageAlt: 'Melissa and Doug Sticker WOW Disney Stitch sticker stamper and activity pad',
    bestFor: 'Screen-free creative play and Disney-themed gifts', why: 'A reusable sticker-stamping activity built around Disney Stitch for creative, portable play.', watch: 'Check the current activity-pad and sticker-roll contents before buying.', url: 'https://www.amazon.com/s?k=Melissa+Doug+Sticker+WOW+Disney+Stitch+Stamper&tag=buybetterfi06-20'
  },
  {
    slug: 'apple-airtag-2', name: 'Apple AirTag (2nd generation)', category: 'Tech', price: 'Check price', icon: '◉',
    image: 'https://ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B0D3V4M9F1&Format=_SL500_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1', imageAlt: 'Apple AirTag 2nd generation',
    bestFor: 'Finding keys, bags, and everyday items', why: 'A compact item tracker designed to help locate personal belongings through the Find My network.', watch: 'AirTag is intended for item finding, not continuous personal location tracking.', url: 'https://www.apple.com/airtag/'
  },
  {
    slug: 'anker-737-power-bank', amazonAsin: 'B09VPHVT2Z', name: 'Anker 737 Power Bank (PowerCore 24K)', category: 'Tech', price: 'Check price', icon: '▣',
    image: 'https://ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B09VPHVT2Z&Format=_SL500_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1', imageAlt: 'Anker 737 Power Bank',
    bestFor: 'Laptop and phone charging while traveling', why: 'High-capacity portable power bank with high-output USB-C charging and an onboard display.', watch: 'Its large capacity also means a heavier battery pack.', url: 'https://www.anker.com/products/a1289'
  },
  {
    slug: 'logitech-mx-keys-s', amazonAsin: 'B0BKW3LB2B', name: 'Logitech MX Keys S Wireless Keyboard', category: 'Tech', price: 'Check price', icon: '▣',
    image: 'https://ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B0BKW3LB2B&Format=_SL500_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1', imageAlt: 'Logitech MX Keys S Wireless Keyboard',
    bestFor: 'Desktop productivity and multi-device work', why: 'Low-profile wireless keyboard built for quiet typing, multi-device switching, and customizable shortcuts.', watch: 'Full-size layouts take more desk space than compact keyboards.', url: 'https://www.logitech.com/en-us/shop/p/mx-keys-s'
  },
  {
    slug: 'samsung-t7-shield', amazonAsin: 'B09VLHR4JC', name: 'Samsung T7 Shield Portable SSD 2TB', category: 'Tech', price: 'Check price', icon: '▣',
    image: 'https://ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B09VLHR4JC&Format=_SL500_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1', imageAlt: 'Samsung T7 Shield Portable SSD',
    bestFor: 'Portable file storage and creative work', why: 'Rugged portable SSD designed for fast external storage and travel.', watch: 'Storage capacity and interface speeds should match the workflow you actually need.', url: 'https://www.samsung.com/us/memory-storage/portable-ssd/t7-shield/'
  },
  {
    slug: 'bose-qc-ultra-2', amazonAsin: 'B0FDKR293G', name: 'Bose QuietComfort Ultra Headphones (2nd Gen)', category: 'Tech', price: 'Check price', icon: '◉',
    image: 'https://ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B0FDKR293G&Format=_SL500_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1', imageAlt: 'Bose QuietComfort Ultra Headphones 2nd Gen',
    bestFor: 'Travel and immersive listening', why: 'Premium wireless over-ear headphones with active noise cancellation and spatial-audio features.', watch: 'Premium headphones are a substantial purchase, so fit and sound preferences matter.', url: 'https://www.bose.com/p/headphones/bose-quietcomfort-ultra-headphones-2nd-gen/QCUH2-HEADPHONEARN.html'
  },
  {
    slug: 'jbl-charge-5', amazonAsin: 'B08VDNCZT9', name: 'JBL Charge 5 Portable Bluetooth Speaker', category: 'Tech', price: 'Check price', icon: '◉',
    image: 'https://ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B08VDNCZT9&Format=_SL500_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1', imageAlt: 'JBL Charge 5 portable Bluetooth speaker',
    bestFor: 'Portable music at home and outdoors', why: 'Portable Bluetooth speaker designed around durable construction, wireless playback, and a built-in battery.', watch: 'Speaker size and bass response should match where you plan to use it.', url: 'https://www.jbl.com/bluetooth-speakers/JBLCHARGE5.html'
  },
  {
    slug: 'kindle-paperwhite', amazonAsin: 'B0CFPHV9ZN', name: 'Amazon Kindle Paperwhite', category: 'Tech', price: 'Check price', icon: '▣',
    image: 'https://ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B0CFPHV9ZN&Format=_SL500_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1', imageAlt: 'Amazon Kindle Paperwhite',
    bestFor: 'Dedicated reading and travel', why: 'E-reader designed around a glare-free display and long reading sessions without the distractions of a general-purpose tablet.', watch: 'It is specialized for reading rather than general tablet apps.', url: 'https://www.amazon.com/dp/B0CFPHV9ZN?tag=buybetterfi06-20'
  },
  {
    slug: 'razer-blackwidow-v4', amazonAsin: 'B0CCG2KHCB', name: 'Razer BlackWidow V4 75% Mechanical Gaming Keyboard', category: 'Tech', price: 'Check price', icon: '▣',
    image: 'https://ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B0CCG2KHCB&Format=_SL500_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1', imageAlt: 'Razer BlackWidow V4 75 percent mechanical gaming keyboard',
    bestFor: 'PC gaming and customizable mechanical keyboards', why: 'Compact mechanical gaming keyboard with hot-swappable design, RGB lighting, and dedicated controls.', watch: 'Mechanical switch feel and keyboard layout are highly personal.', url: 'https://www.razer.com/gaming-keyboards/razer-blackwidow-v4-75'
  },
  {
    slug: 'elgato-stream-deck-plus', amazonAsin: 'B0BJL8SJ59', name: 'Elgato Stream Deck +', category: 'Tech', price: 'Check price', icon: '▣',
    image: 'https://ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B0BJL8SJ59&Format=_SL500_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1', imageAlt: 'Elgato Stream Deck Plus',
    bestFor: 'Streaming, content creation, and workflow shortcuts', why: 'Programmable control surface with customizable keys, dials, and touch controls for repeated software actions.', watch: 'It is most useful when you will actually build and maintain custom profiles.', url: 'https://www.elgato.com/us/en/p/10GBD9911'
  },
  {
    slug: 'elgato-stream-deck-mini', amazonAsin: 'B07DYRS1WH', name: 'Elgato Stream Deck Mini', category: 'Tech', price: 'Check price', icon: '▣',
    image: 'https://ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B07DYRS1WH&Format=_SL500_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1', imageAlt: 'Elgato Stream Deck Mini',
    bestFor: 'Simple desktop shortcuts and streaming controls', why: 'Compact programmable controller for frequently repeated desktop and creative-app actions.', watch: 'Six keys provide less room for complex profiles than larger Stream Deck models.', url: 'https://www.elgato.com/us/en/p/10gaei9901'
  },
  {
    slug: 'anker-prime-power-bank-26250', amazonAsin: 'B0F66LNB8D', name: 'Anker Prime Power Bank 26,250mAh 300W', category: 'Tech', price: 'Check price', icon: '▣',
    image: 'https://ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B0F66LNB8D&Format=_SL500_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1', imageAlt: 'Anker Prime Power Bank 26250mAh',
    bestFor: 'High-power travel charging for laptops and multiple devices', why: 'Large-capacity power bank designed for high-output charging across multiple connected devices.', watch: 'Large high-output power banks are heavier and may be overkill for phone-only charging.', url: 'https://www.anker.com/'
  },
  {
    slug: 'anker-power-bank-20000', amazonAsin: 'B0CXDXP8VR', name: 'Anker Power Bank 20,000mAh with Built-in USB-C Cable', category: 'Tech', price: 'Check price', icon: '▣',
    image: 'https://ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B0CXDXP8VR&Format=_SL500_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1', imageAlt: 'Anker 20000mAh power bank with built-in USB-C cable',
    bestFor: 'Travel and everyday backup charging', why: 'Portable battery with built-in USB-C connectivity and multiple charging ports for phones and other devices.', watch: 'Confirm the exact output and cable configuration for your devices.', url: 'https://www.anker.com/'
  },
  {
    slug: 'amazon-echo-show-8', amazonAsin: 'B09B2SBHQK', name: 'Amazon Echo Show 8', category: 'Tech', price: 'Check price', icon: '◉',
    image: 'https://ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B09B2SBHQK&Format=_SL500_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1', imageAlt: 'Amazon Echo Show 8 smart display',
    bestFor: 'Kitchen timers, video calls, and smart-home control', why: 'Smart display that combines Alexa voice control with a screen for compatible smart-home, media, and communication features.', watch: 'Smart-display usefulness depends on the services and devices you already use.', url: 'https://www.amazon.com/dp/B09B2SBHQK?tag=buybetterfi06-20'
  },
  {
    slug: 'amazon-fire-tv-stick-4k-select', amazonAsin: 'B0C6W3D4RM', name: 'Amazon Fire TV Stick 4K Select', category: 'Tech', price: 'Check price', icon: '▣',
    image: 'https://ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B0C6W3D4RM&Format=_SL500_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1', imageAlt: 'Amazon Fire TV Stick 4K Select',
    bestFor: '4K streaming on compatible televisions', why: 'Compact streaming device built around 4K video playback and Amazon Fire TV features.', watch: 'Streaming quality also depends on your TV, network, and subscription services.', url: 'https://www.amazon.com/dp/B0C6W3D4RM?tag=buybetterfi06-20'
  },
  {
    slug: 'apple-magic-mouse-usbc', amazonAsin: 'B0DL72PK1P', name: 'Apple Magic Mouse (USB-C)', category: 'Tech', price: 'Check price', icon: '◉',
    image: 'https://ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B0DL72PK1P&Format=_SL500_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1', imageAlt: 'Apple Magic Mouse USB-C',
    bestFor: 'Mac desktop setups and gesture-based navigation', why: 'Wireless mouse with a Multi-Touch surface and rechargeable USB-C connection for compatible Apple setups.', watch: 'The charging-port location and low-profile shape are worth considering before buying.', url: 'https://www.apple.com/shop/buy-mac/mouse/white-multi-touch-surface'
  },
  {
    slug: 'kitchenaid-artisan-stand-mixer', name: 'KitchenAid Artisan Series 5-Quart Stand Mixer', category: 'Home & Kitchen', price: 'Check price', icon: '◇',
    image: 'https://kitchenaidus.vtexassets.com/arquivos/ids/159154/hero-KSM150PSBK.jpg?v=639198847141800000', imageAlt: 'KitchenAid Artisan Series stand mixer',
    bestFor: 'Baking, mixing, and everyday kitchen prep', why: 'Classic 5-quart stand mixer format with a wide accessory ecosystem for mixing and baking tasks.', watch: 'Attachments and color choices can change the total price.', url: 'https://www.kitchenaid.com/countertop-appliances/stand-mixers/tilt-head-stand-mixers/p.artisan-series-5-quart-tilt-head-stand-mixer.ksm150ps.html'
  },
  {
    slug: 'oxo-9-tongs-silicone', name: 'OXO Good Grips 9-Inch Tongs with Silicone Heads', category: 'Home & Kitchen', price: '$17.99', icon: '⌁',
    image: 'https://www.oxo.com/media/catalog/product/cache/b2f1ce2dfe10d3d31bf2056bf6e0d10f/1/1/1101880.jpg', imageAlt: 'OXO Good Grips 9-Inch Tongs with Silicone Heads',
    bestFor: 'Everyday cooking and non-stick cookware', why: 'Heat-resistant silicone heads provide a secure grip while helping protect non-stick surfaces.', watch: 'The 9-inch size is compact; compare with the 12-inch version for larger cookware.', amazonAsin: 'B003L0OYJ4', url: 'https://www.amazon.com/dp/B003L0OYJ4?tag=buybetterfi06-20'
  },
  {
    slug: 'oxo-salad-spinner', name: 'OXO Good Grips Salad Spinner', category: 'Home & Kitchen', price: '$32.99', icon: '◇',
    image: 'https://www.oxo.com/media/catalog/product/cache/b2f1ce2dfe10d3d31bf2056bf6e0d10f/g/g/gg_32480_3_1.jpg', imageAlt: 'OXO Good Grips Salad Spinner',
    bestFor: 'Washing and drying salad greens', why: 'Countertop salad spinner designed to rinse and quickly dry greens with a pump-style mechanism.', watch: 'It takes more cabinet space than a basic colander.', url: 'https://www.oxo.com/salad-spinner.html'
  },
  {
    slug: 'oxo-garlic-press', name: 'OXO Good Grips Garlic Press', category: 'Home & Kitchen', price: '$28.99', icon: '⌁',
    image: 'https://www.oxo.com/media/catalog/product/cache/1/image/1200x/040ec09b1e35df139433887a97daa66f/1/1/11122600_1.jpg', imageAlt: 'OXO Good Grips Garlic Press',
    bestFor: 'Fast garlic prep', why: 'Handheld garlic press designed for quick mincing without requiring a separate knife and board.', watch: 'A garlic press is specialized, so it adds value mainly if you cook with fresh garlic often.', url: 'https://www.oxo.com/garlic-press.html'
  },
  {
    slug: 'oxo-swivel-peeler', name: 'OXO Good Grips Swivel Peeler', category: 'Home & Kitchen', price: '$13.99', icon: '⌁',
    image: 'https://www.oxo.com/media/catalog/product/cache/b2f1ce2dfe10d3d31bf2056bf6e0d10f/g/g/gg_20081v5_solo.jpg', imageAlt: 'OXO Good Grips Swivel Peeler',
    bestFor: 'Vegetable and fruit prep', why: 'Swivel blade and soft grip make it a practical everyday peeling tool.', watch: 'Blade sharpness and handle feel are personal preferences.', url: 'https://www.amazon.com/dp/B00004OCIP/ref=cm_sw_r_as_gl_apa_gl_i_7VNKS3KMMVNMJX7YRYJT?linkCode=ml1&tag=buybetterfi06-20&linkId=03472b454e239b2035cfb1b6d41b9a40&gaOptInStatus=true'
  },
  {
    slug: 'oxo-5qt-mixing-bowl', name: 'OXO Good Grips 5-Quart Mixing Bowl', category: 'Home & Kitchen', price: '$16.99', icon: '◇',
    image: 'https://www.oxo.com/media/catalog/product/cache/1/image/1200x/040ec09b1e35df139433887a97daa66f/1/0/1059701_1.jpg', imageAlt: 'OXO Good Grips 5-Quart Mixing Bowl',
    bestFor: 'Baking, mixing, and food prep', why: 'Large mixing bowl with a non-slip base, comfortable handle, wide lip, and pouring spout.', watch: 'The 5-quart size needs more cabinet space than smaller prep bowls.', url: 'https://www.oxo.com/5-quart-mixing-bowl-244-0.html'
  },
  {
    slug: 'kitchenaid-artisan-plus-5qt', amazonAsin: 'B0769ZQWH7', name: 'KitchenAid Artisan Series 5-Quart Tilt-Head Stand Mixer - Milkshake', category: 'Home & Kitchen', price: '$499.99', icon: '◇',
    image: 'https://m.media-amazon.com/images/I/41JBw54siWL._SL500_.jpg', imageAlt: 'KitchenAid Artisan Series 5-Quart Tilt-Head Stand Mixer in Milkshake',
    bestFor: 'Baking and frequent mixing', why: 'Five-quart tilt-head mixer with 10 speeds, a stainless steel bowl, and included mixing attachments.', watch: 'Optional attachments increase the total investment.', url: 'https://www.amazon.com/dp/B0769ZQWH7?tag=buybetterfi06-20'
  },
  {
    slug: 'solo-stove-summit-27', name: 'Solo Stove Summit 27 Smokeless Fire Pit', category: 'Outdoor', price: '$599.99', icon: '☼',
    image: 'https://content.solostove.com/image/upload/ar_1%3A1%2Cc_auto%2Cg_auto%2Cw_800/q_auto/f_avif/dpr_auto/e_unsharp_mask%3A100/f2nzr1001imdiltvo3cy', imageAlt: 'Solo Stove Summit 27 Smokeless Fire Pit',
    bestFor: 'Large backyard gatherings', why: 'Large-format stainless-steel smokeless fire pit with a built-in stand and removable ash pan.', watch: 'Its 27-inch size and 42.4-pound weight require a dedicated outdoor space.', url: 'https://www.solostove.com/us/en-us/p/solo-stove-summit-27'
  },
  {
    slug: 'solo-stove-steelfire-22', name: 'Solo Stove Steelfire 22 Stainless Griddle', category: 'Outdoor', price: '$399.99', icon: '☼',
    image: 'https://content.solostove.com/image/upload/ar_1%3A1%2Cc_auto%2Cg_auto%2Cw_800/q_auto/f_avif/dpr_auto/e_unsharp_mask%3A100/tctgukyqqxxzeighjz8f', imageAlt: 'Solo Stove Steelfire 22 Stainless Griddle',
    bestFor: 'Backyard cooking and tailgating', why: 'Tabletop outdoor griddle with a clad stainless-steel cooking surface and compact footprint.', watch: 'It uses propane and is intended for outdoor use only.', url: 'https://www.solostove.com/us/en-us/p/steelfire-22-stainless-griddle?sku=SS22-G-UNIT-WLID'
  },
  {
    slug: 'solo-stove-infinity-flame', name: 'Solo Stove Infinity Flame Propane Fire Pit', category: 'Outdoor', price: '$599.99', icon: '☼',
    image: 'https://content.solostove.com/image/upload/ar_1%3A1%2Cc_auto%2Cg_auto%2Cw_800/q_auto/f_avif/dpr_auto/e_unsharp_mask%3A100/aemdwwt79qizvty5h9pf', imageAlt: 'Solo Stove Infinity Flame Propane Fire Pit',
    bestFor: 'Low-maintenance patio entertaining', why: 'Propane fire pit with integrated tabletop, adjustable flame control, and a large outdoor gathering footprint.', watch: 'Propane fire features require proper outdoor placement, ventilation, and local-rule checks.', url: 'https://www.solostove.com/us/en-us/p/infinity-flame-fire-pit?sku=FPSURROUND-GAS'
  },
  {
    slug: 'oxo-nylon-slotted-spoon', name: 'OXO Good Grips Nylon Slotted Spoon', category: 'Home & Kitchen', price: '$9.99', icon: '⌁',
    image: 'https://www.oxo.com/media/catalog/product/cache/b2f1ce2dfe10d3d31bf2056bf6e0d10f/u/n/unnamed_337.jpeg', imageAlt: 'OXO Good Grips Nylon Slotted Spoon',
    bestFor: 'Straining vegetables and serving pasta', why: 'High-heat-resistant nylon utensil with a soft non-slip grip for everyday cooking.', watch: 'A slotted spoon is a specialized utensil rather than an all-purpose turner.', url: 'https://www.oxo.com/nylon-slotted-spoon.html'
  },
  {
    slug: 'oxo-4-inch-pizza-wheel', name: 'OXO Good Grips 4-Inch Pizza Wheel', category: 'Home & Kitchen', price: '$17.99', icon: '⌁',
    image: 'https://www.oxo.com/media/catalog/product/cache/b2f1ce2dfe10d3d31bf2056bf6e0d10f/g/g/gg_11301000_2.jpg', imageAlt: 'OXO Good Grips 4-Inch Pizza Wheel',
    bestFor: 'Cutting thick-crust pizza', why: 'Large stainless-steel blade with a thumb guard and soft non-slip handle.', watch: 'Its larger wheel needs a little more drawer space.', amazonAsin: 'B08K3STKK1', url: 'https://www.amazon.com/dp/B08K3STKK1?tag=buybetterfi06-20'
  },
  {
    slug: 'oxo-avocado-slicer', name: 'OXO 3-in-1 Avocado Slicer', category: 'Home & Kitchen', price: '$11.99', icon: '⌁',
    image: 'https://www.oxo.com/media/catalog/product/cache/b2f1ce2dfe10d3d31bf2056bf6e0d10f/p/a/papnztclj3ntvkhwbem5.jpg', imageAlt: 'OXO 3-in-1 Avocado Slicer',
    bestFor: 'Quick avocado preparation', why: 'Three-in-one tool for halving, pitting, slicing, and serving ripe avocados.', watch: 'Its value depends on how often you prepare avocados.', url: 'https://www.oxo.com/3-in-1-avocado-slicer-901.html'
  },
  {
    slug: 'oxo-simple-mandoline-slicer', name: 'OXO Good Grips Simple Mandoline Slicer', category: 'Home & Kitchen', price: '$59.99', icon: '◇',
    image: 'https://www.oxo.com/media/catalog/product/cache/b2f1ce2dfe10d3d31bf2056bf6e0d10f/1/2/1273180.jpg', imageAlt: 'OXO Good Grips Simple Mandoline Slicer',
    bestFor: 'Consistent vegetable slicing', why: 'Adjustable slicing and julienne settings with an integrated finger guard.', watch: 'Mandolines require careful handling and dedicated storage.', url: 'https://www.oxo.com/simple-mandoline-slicer-377.html'
  },
  {
    slug: 'oxo-one-stop-chop', name: 'OXO One Stop Chop Manual Food Processor', category: 'Home & Kitchen', price: '$49.99', icon: '◇',
    image: 'https://www.oxo.com/media/catalog/product/cache/b2f1ce2dfe10d3d31bf2056bf6e0d10f/g/g/gg_11238000_1.jpg', imageAlt: 'OXO One Stop Chop Manual Food Processor',
    bestFor: 'Manual chopping, mincing, and pureeing', why: 'Hand-operated food processor for chopping fruits, vegetables, nuts, pesto, salsa, and more.', watch: 'Manual processing is slower than an electric processor for large batches.', url: 'https://www.oxo.com/one-stop-chop-manual-food-processor.html'
  },
  {
    slug: 'oxo-etched-medium-grater', name: 'OXO Good Grips Etched Medium Grater', category: 'Home & Kitchen', price: '$14.99', icon: '⌁',
    image: 'https://www.oxo.com/media/catalog/product/cache/b2f1ce2dfe10d3d31bf2056bf6e0d10f/g/g/gg_11215900_2.jpg', imageAlt: 'OXO Good Grips Etched Medium Grater',
    bestFor: 'Cheese, vegetables, and fresh ingredient prep', why: 'Extra-sharp etched stainless-steel grating surface with a soft handle and stabilizing foot.', watch: 'A box grater offers more grating surfaces if you need broader functionality.', url: 'https://www.oxo.com/etched-medium-grater.html'
  },
  {
    slug: 'oxo-everyday-cutting-board', name: 'OXO Good Grips Everyday Cutting Board', category: 'Home & Kitchen', price: '$17.99', icon: '◇',
    image: 'https://www.oxo.com/media/catalog/product/cache/b2f1ce2dfe10d3d31bf2056bf6e0d10f/g/g/gg_20081-11272700_9c_1__1.jpg', imageAlt: 'OXO Good Grips Everyday Cutting Board',
    bestFor: 'Everyday chopping and food prep', why: 'Double-sided non-porous cutting board with non-slip feet and a drip catcher.', watch: 'Choose a larger board if you regularly prep large meals.', url: 'https://www.oxo.com/everyday-cutting-board.html'
  },
  {
    slug: 'ooni-koda-2-pro', name: 'Ooni Koda 2 Pro 18" Gas-Powered Pizza Oven', category: 'Outdoor', price: '$799.00', icon: '☼',
    image: 'https://ooni.com/cdn/shop/files/Koda_2_Pro_Carousel_4.png?crop=center&format=webp&height=640&v=1749094124&width=640', imageAlt: 'Ooni Koda 2 Pro outdoor pizza oven',
    bestFor: 'Large backyard pizza nights', why: '18-inch gas-powered outdoor pizza oven with a large cooking area and high-temperature cooking.', watch: 'Its larger footprint is best suited to a dedicated outdoor cooking area.', url: 'https://ooni.com/products/ooni-koda-2-pro'
  },
  {
    slug: 'ooni-karu-2-pro', name: 'Ooni Karu 2 Pro 16" Multi-Fuel Pizza Oven', category: 'Outdoor', price: '$849.00', icon: '☼',
    image: 'https://ooni.com/cdn/shop/files/1000x1000-Ovens-ToScale-Karu2Pro-F_fb2a4824-8fc4-43d2-b031-6f158f77b22c.webp?crop=center&height=640&v=1749094517&width=640', imageAlt: 'Ooni Karu 2 Pro multi-fuel pizza oven',
    bestFor: 'Multi-fuel outdoor cooking', why: '16-inch multi-fuel oven supporting wood and charcoal, with optional gas capability and smart temperature monitoring.', watch: 'Fuel versatility adds setup choices compared with a simple gas-only oven.', url: 'https://ooni.com/products/ooni-karu-2-pro'
  },
  {
    slug: 'ooni-karu-2', name: 'Ooni Karu 2 12" Multi-Fuel Pizza Oven', category: 'Outdoor', price: '$449.00', icon: '☼',
    image: 'https://ooni.com/cdn/shop/files/1000x1000-Ovens-ToScale-Karu2_98e75b3e-ab5e-4709-9a6d-3b80d32ce40e.webp?crop=center&height=640&v=1749094631&width=640', imageAlt: 'Ooni Karu 2 multi-fuel pizza oven',
    bestFor: 'Portable backyard and camping pizza', why: 'Compact multi-fuel oven designed for wood or charcoal cooking with optional gas capability.', watch: 'Solid-fuel cooking takes more hands-on preparation than gas.', url: 'https://ooni.com/products/ooni-karu-2'
  },
  {
    slug: 'ooni-koda-2-max', name: 'Ooni Koda 2 Max 24" Gas-Powered Pizza Oven', category: 'Outdoor', price: '$1,299.00', icon: '☼',
    image: 'https://ooni.com/cdn/shop/files/2048x2048-PDP-Koda2Max-Front-2Pizzas-F.webp?crop=center&height=640&v=1749094223&width=640', imageAlt: 'Ooni Koda 2 Max gas-powered pizza oven',
    bestFor: 'Large-format backyard pizza cooking', why: '24-inch gas-powered oven designed for large pizzas and multi-zone cooking.', watch: 'Its size and price make it a substantial outdoor-kitchen purchase.', url: 'https://ooni.com/products/ooni-koda-2-max'
  },
  {
    slug: 'ooni-koda-2', name: 'Ooni Koda 2 14" Gas-Powered Pizza Oven', category: 'Outdoor', price: '$499.00', icon: '☼',
    image: 'https://ooni.com/cdn/shop/files/2048x2048-PDP-Koda2-Side-Black.webp?crop=center&height=640&v=1749094390&width=640', imageAlt: 'Ooni Koda 2 gas-powered pizza oven',
    bestFor: 'Portable gas pizza cooking', why: '14-inch gas-powered oven designed to balance portability with a larger cooking surface.', watch: 'Gas-only cooking offers less fuel flexibility than Ooni multi-fuel models.', url: 'https://ooni.com/products/ooni-koda-2'
  },
  {
    slug: 'brightech-ambience-pro-solar', name: 'Brightech Ambience Pro Solar String Lights', category: 'Outdoor', price: '$49.00', icon: '☼',
    image: 'https://brightech.com/cdn/shop/files/Copy_of_Copy_of_20221121_DBaum_Brightech_15205_onestick.jpg?v=1737075514&width=1445', imageAlt: 'Brightech Ambience Pro Solar outdoor string lights',
    bestFor: 'Solar-powered patio and pergola ambiance', why: 'Weather-resistant Edison-style solar string lights with automatic dusk activation and a warm 2700K glow.', watch: 'Solar performance depends on placing the panel where it receives adequate direct sunlight.', url: 'https://brightech.com/products/ambience-solar-1w'
  },
  {
    slug: 'keter-cortina-30-gallon', name: 'Keter Cortina 30-Gallon Deck Box', category: 'Outdoor', price: '$59.49', icon: '◇',
    image: 'https://assets.keter.com/transform/49e78023-b692-4d97-8837-d0da532ba335/DENALI-30_300x300-px_72-dpi_20?io=transform%3Ascale%2Cwidth%3A528&quality=80', imageAlt: 'Keter Cortina 30-Gallon Deck Box in graphite',
    bestFor: 'Storing cushions, gardening tools, and outdoor accessories', why: 'Weather-resistant resin deck box with 30-gallon capacity, ventilation, carrying handles, and a lockable design.', watch: 'The 30-gallon capacity is intended for smaller outdoor storage needs.', url: 'https://www.keter.com/en-us/outdoor-storage/small-deck-boxes/cortina-30-gallon-deck-box-graphite-255844.html'
  },
  {
    slug: 'brightech-ambience-pro-solar-hanging', name: 'Brightech Ambience Pro Solar Hanging String Lights', category: 'Outdoor', price: '$59.00', icon: '☼',
    image: 'https://brightech.com/cdn/shop/files/Copy_of_Copy_of_20221121_DBaum_Brightech_15205_onestick.jpg?v=1737075514&width=1445', imageAlt: 'Brightech Ambience Pro Solar Hanging String Lights',
    bestFor: 'Pergolas, patios, and backyard entertaining', why: 'Solar Edison-style S14 LED string lights with automatic dusk activation and warm 2700K light.', watch: 'Solar output depends on direct sunlight reaching the panel.', url: 'https://brightech.com/products/ambience-pro-solar-1w-corn-hanging'
  },
  {
    slug: 'brightech-ambience-pro-solar-remote', name: 'Brightech Ambience Pro Solar Hanging Remote String Lights', category: 'Outdoor', price: '$64.00', icon: '☼',
    image: 'https://brightech.com/cdn/shop/files/20241107_Brightech_15428.jpg?v=1737075497&width=1445', imageAlt: 'Brightech Ambience Pro Solar Hanging Remote String Lights',
    bestFor: 'Convenient patio lighting control', why: 'Solar outdoor string lights with remote control, automatic dusk activation, and warm 3000K LED bulbs.', watch: 'The remote adds convenience but solar placement still determines charging performance.', url: 'https://brightech.com/products/ambience-pro-solar-hanging-remote-control'
  },
  {
    slug: 'keter-signature-50-gallon-walnut', name: 'Keter Signature 50-Gallon Deck Box — Walnut Brown', category: 'Outdoor', price: '$129.99', icon: '◇',
    image: 'https://assets.keter.com/transform/49e78023-b692-4d97-8837-d0da532ba335/DENALI-30_300x300-px_72-dpi_20?io=transform%3Ascale%2Cwidth%3A800&quality=80', imageAlt: 'Keter Signature 50-Gallon Deck Box Walnut Brown',
    bestFor: 'Cushions, pool gear, and gardening tools', why: 'Weather-resistant resin storage box with 50-gallon capacity, ventilation, carrying handles, and lockable lid.', watch: 'The 50-gallon size is best for medium-volume patio storage.', url: 'https://www.keter.com/en-us/outdoor-storage/small-deck-boxes/signature-50-gallon-deck-box-walnut-brown-263745.html'
  },
  {
    slug: 'keter-circa-37-gallon', name: 'Keter Circa 37-Gallon Deck Box', category: 'Outdoor', price: '$99.99', icon: '◇',
    image: 'https://assets.keter.com/transform/9e3e4f1e-b4f0-4f1e-89bb-cd4f7ed8e8f1/CIRCA_37_Gal_Deck_Box_Graphite_300x300_72dpi?io=transform%3Ascale%2Cwidth%3A800&quality=80', imageAlt: 'Keter Circa 37-Gallon Deck Box Graphite',
    bestFor: 'Smaller patios and balcony storage', why: 'Compact weather-resistant outdoor storage box for cushions, toys, and garden accessories.', watch: 'The 37-gallon capacity is smaller than Keter medium and large deck boxes.', url: 'https://www.keter.com/en-us/outdoor-storage/small-deck-boxes/circa-37-gallon-deck-box-graphite-258711.html'
  },
  {
    slug: 'keter-signature-92-gallon', name: 'Keter Signature 92-Gallon Deck Box — Oak Brown', category: 'Outdoor', price: '$159.99', icon: '◇',
    image: 'https://assets.keter.com/transform/3c1e3e3d-3b7a-4f9d-8f7d-7c9a9d3e6e9f/SIGNATURE_92_Gal_Deck_Box_Oak_Brown_300x300_72dpi?io=transform%3Ascale%2Cwidth%3A800&quality=80', imageAlt: 'Keter Signature 92-Gallon Deck Box Oak Brown',
    bestFor: 'Larger cushion and patio-accessory storage', why: 'Large weather-resistant resin deck box with a wood-look finish for substantial outdoor storage.', watch: 'The larger footprint needs adequate clearance on your patio or deck.', url: 'https://www.keter.com/en-us/outdoor-storage/small-deck-boxes/signature-92-gallon-deck-box-oak-brown-263819.html'
  },
  {
    slug: 'sunco-square-solar-path-lights', name: 'Sunco Square Solar Pathway Lights 4-Pack', category: 'Outdoor', price: '$29.99', icon: '☼',
    image: 'https://sunco.com/cdn/shop/files/GD_MD_SR-BK-2740K-4PK_1.jpg', imageAlt: 'Sunco Square Solar Pathway Lights 4-Pack',
    bestFor: 'Pathways, gardens, and patio borders', why: 'Solar-powered square path lights with dusk-to-dawn operation and selectable 2700K–4000K color temperature.', watch: 'Solar charging performance depends on direct sunlight reaching each light.', url: 'https://sunco.com/products/square-solar-pathway-lights-outdoor-super-bright'
  },
  {
    slug: 'alpine-solar-pathway-stakes-4', name: 'Alpine Corporation Solar Pathway LED Light Stakes 4-Pack', category: 'Outdoor', price: '$69.84', icon: '☼',
    image: 'https://images.thdstatic.com/productImages/5d6e2c42-5baf-4a1f-93f2-4f4eec9e3a38/svn/alpine-corporation-landscape-lighting-sla342slr-4-64_1000.jpg', imageAlt: 'Alpine Corporation Solar Pathway LED Light Stakes 4-Pack',
    bestFor: 'Walkways, driveways, and garden borders', why: 'Solar-powered LED pathway stakes with warm white light and tool-free installation.', watch: 'Their 15-inch height is best for accent and pathway lighting rather than broad-area illumination.', url: 'https://www.homedepot.com/p/315866417'
  },
  {
    slug: 'dazuma-solar-path-lighting', name: 'Dazuma Outdoor Solar Path Lighting', category: 'Outdoor', price: '$104.99', icon: '☼',
    image: 'https://dazuma.us/cdn/shop/files/HA142410-01B_1.jpg', imageAlt: 'Dazuma Outdoor Solar Path Lighting',
    bestFor: 'Upscale pathway and garden lighting', why: 'Decorative solar path fixture with textured glass, warm 3000K light, and a metal stake for landscape placement.', watch: 'The larger decorative design is better suited to permanent landscape installations.', url: 'https://dazuma.us/products/outdoor-solar-path-lighting-waterproof-ground-light'
  },
  {
    slug: 'amazon-echo-show-5', name: 'Amazon Echo Show 5 (3rd Gen)', category: 'Smart Home', price: 'Check price', icon: '◉', image: 'https://beautychest.lt/cdn/shop/files/e1fkf1k4_full.jpg?v=1769431765', imageAlt: 'Amazon Echo Show 5 smart display', bestFor: 'Nightstands, desks, and compact smart-home control', why: 'A compact 5.5-inch smart display with Alexa, camera features, and improved audio.', watch: 'Verify generation before buying.', url: 'https://www.amazon.com/s?k=Echo+Show+5+3rd+Gen'
  },
  {
    slug: 'ring-pan-tilt-indoor-cam', name: 'Ring Pan-Tilt Indoor Cam', category: 'Smart Home', price: 'Check price', icon: '◉', image: 'https://en-uk.ring.com/cdn/shop/files/ring_pantilt-indoor-camera_wht_01A_product_ground_1500x1500_abc7aa64-5c5e-4d02-8f01-f42b3cc60784.png?v=1756448928', imageAlt: 'Ring Pan-Tilt Indoor Cam', bestFor: 'Room monitoring, pets, and indoor security', why: 'A pan-and-tilt indoor camera with broad room coverage and two-way communication.', watch: 'Subscription features can add recurring cost.', url: 'https://ring.com/products/pan-tilt-indoor-cam'
  },
  {
    slug: 'blink-outdoor-4', name: 'Blink Outdoor 4', category: 'Smart Home', price: 'Check price', icon: '◉', image: 'https://beautychest.lt/cdn/shop/files/ej5ww6ae_full.jpg?v=1759146146', imageAlt: 'Blink Outdoor 4 security camera', bestFor: 'Wire-free outdoor home monitoring', why: 'A battery-powered outdoor camera with 1080p video, night vision, motion detection, and long battery life.', watch: 'Battery life varies with settings and conditions.', url: 'https://blinkforhome.com/products/blink-outdoor-4'
  },
  {
    slug: 'amazon-smart-plug', name: 'Amazon Smart Plug', category: 'Smart Home', price: 'Check price', icon: '⚡', image: 'https://auspowers.com/cdn/shop/files/B089DR29T6.jpg?v=1775763168', imageAlt: 'Amazon Smart Plug', bestFor: 'Lamps, fans, appliances, and Alexa routines', why: 'A compact Wi-Fi smart plug designed for simple Alexa control and scheduling.', watch: 'Designed primarily for devices with a physical on/off switch.', url: 'https://www.amazon.com/dp/B089DR29T6'
  },
  {
    slug: 'amazon-smart-thermostat', amazonAsin: 'B08J4C8871', name: 'Amazon Smart Thermostat', category: 'Smart Home', price: 'Check price', icon: '⌂', image: 'https://m.media-amazon.com/images/I/41lvboI%2Br2L._SL500_.jpg', imageAlt: 'Amazon Smart Thermostat', bestFor: 'Alexa-connected heating and cooling control', why: 'An ENERGY STAR certified smart thermostat designed for Alexa control and programmable temperature schedules.', watch: 'Check HVAC compatibility and C-wire requirements before purchase.', url: 'https://www.amazon.com/dp/B08J4C8871'
  },
  {
    slug: 'amazon-smart-air-quality-monitor', amazonAsin: 'B08W8KS8D3', name: 'Amazon Smart Air Quality Monitor', category: 'Smart Home', price: 'Check price', icon: '◌', image: 'https://auspowers.com/cdn/shop/files/71uRLSiQBaL.jpg?v=1776729519', imageAlt: 'Amazon Smart Air Quality Monitor', bestFor: 'Tracking indoor air quality', why: 'Monitors particulate matter, VOCs, carbon monoxide, humidity, and temperature and works with Alexa.', watch: 'It is a monitor rather than an air purifier.', url: 'https://www.amazon.com/dp/B08W8KS8D3'
  },
  {
    slug: 'meater-plus', name: 'MEATER Plus', category: 'Smart Home', price: 'Check price', icon: '◇', image: 'https://www.sunsetandco.com/cdn/shop/files/8108733.jpg?v=1731624866', imageAlt: 'MEATER Plus wireless smart thermometer', bestFor: 'Wireless cooking temperature monitoring', why: 'A wire-free smart meat thermometer with dual temperature sensors and guided cooking features.', watch: 'Best suited to users who want app-guided cooking.', url: 'https://meater.com/products/meater-plus'
  },
  {
    slug: 'switchbot-blind-tilt', name: 'SwitchBot Blind Tilt', category: 'Smart Home', price: 'Check price', icon: '▥', image: 'https://us.switch-bot.com/cdn/shop/products/switchbotblindtilt0103.jpg?v=1674980976', imageAlt: 'SwitchBot Blind Tilt smart blinds controller', bestFor: 'Automating existing horizontal blinds', why: 'A retrofit blind controller with scheduling, light sensing, solar-assisted charging, and smart-home integrations.', watch: 'Compatibility depends on your existing blind mechanism and hub setup.', url: 'https://us.switch-bot.com/products/switchbot-blind-tilt'
  },
  {
    slug: 'amazon-echo-spot', amazonAsin: 'B0D92GBTFS', name: 'Amazon Echo Spot (2024 Release)', category: 'Smart Home', price: 'Check price', icon: '◉', image: 'https://m.media-amazon.com/images/I/51w6wQ5Z8ML._AC_SL1001_.jpg', imageAlt: 'Amazon Echo Spot smart alarm clock', bestFor: 'Nightstands, alarms, and compact Alexa control', why: 'A compact Alexa smart alarm clock with a touch display, customizable clock faces, and directional audio.', watch: 'Display and feature availability can vary by software updates.', url: 'https://www.amazon.com/dp/B0D92GBTFS'
  },
  {
    slug: 'amazon-fire-tv-stick-4k-max', amazonAsin: 'B0BP9SNVH9', name: 'Amazon Fire TV Stick 4K Max', category: 'Smart Home', price: 'Check price', icon: '▶', image: 'https://m.media-amazon.com/images/I/51KJtMftGPL._AC_SL1000_.jpg', imageAlt: 'Amazon Fire TV Stick 4K Max', bestFor: '4K streaming and smart-TV entertainment', why: 'A 4K streaming device with Alexa voice control and support for Dolby Vision, HDR10+, and Dolby Atmos.', watch: 'Streaming service availability varies by region and subscription.', url: 'https://www.amazon.com/dp/B0BP9SNVH9'
  },
  {
    slug: 'kasa-hs220', name: 'Kasa Smart Wi-Fi Dimmer Switch HS220', category: 'Smart Home', price: 'Check price', icon: '☼', image: 'https://m.media-amazon.com/images/I/41kpIBtMf3L._SX522_.jpg', imageAlt: 'Kasa Smart Wi-Fi Dimmer Switch HS220', bestFor: 'Smart lighting and scheduled dimming', why: 'A Wi-Fi smart dimmer switch with app control, scheduling, scenes, and voice control through compatible assistants.', watch: 'Check wiring requirements and electrical-box compatibility before installation.', url: 'https://www.tp-link.com/us/home-networking/smart-switch/hs220/v1/'
  },
  {
    slug: 'govee-rgbic-65ft', name: 'Govee RGBIC LED Strip Lights 65.6ft', category: 'Smart Home', price: 'Check price', icon: '▰', image: 'https://m.media-amazon.com/images/I/51CIdh0bxHL._AC_CX679_.jpg', imageAlt: 'Govee RGBIC LED Strip Lights', bestFor: 'Accent lighting, bedrooms, and home entertainment', why: 'Long RGBIC smart light strips with app control, music synchronization, and customizable multicolor effects.', watch: 'Designed primarily for indoor decorative lighting.', url: 'https://www.amazon.com/s?k=Govee+RGBIC+65.6ft+LED+Strip+Lights'
  },
  {
    slug: 'philips-hue-a19-color', name: 'Philips Hue White and Color Ambiance A19 Smart Bulb', category: 'Smart Home', price: 'Check price', icon: '●', image: 'https://www.philips-hue.com/content/dam/b2c/en-us/collections/smart-lighting/smart-bulbs/white-and-color-ambiance/a19/hero.png', imageAlt: 'Philips Hue White and Color Ambiance A19 smart bulb', bestFor: 'Whole-home smart lighting and color scenes', why: 'A color-changing A19 smart bulb with warm-to-cool white light, dimming, app control, and voice compatibility.', watch: 'A Hue Bridge unlocks additional features beyond Bluetooth control.', url: 'https://www.philips-hue.com/en-us/p/hue-white-and-color-ambiance-a60-e26-smart-bulb-810/046677590826'
  },
  {
    slug: 'meross-msg100', name: 'Meross Smart Garage Door Opener MSG100', category: 'Smart Home', price: 'Check price', icon: '⌂', image: 'https://shop.meross.com/cdn/shop/files/MSG100_1.jpg?v=1690964491', imageAlt: 'Meross Smart Garage Door Opener MSG100', bestFor: 'Remote garage access and smart-home routines', why: 'A smart garage controller that lets compatible garage doors be monitored and controlled from a phone or smart assistant.', watch: 'Compatibility depends on the garage-door opener model.', url: 'https://shop.meross.com/products/smart-wifi-garage-door-opener'
  },
  {
    slug: 'tapo-c210', name: 'TP-Link Tapo C210 Pan/Tilt Home Security Wi-Fi Camera', category: 'Smart Home', price: 'Check price', icon: '◉', image: 'https://static.tp-link.com/upload/image-line/01_normal_20230524004739b.jpg', imageAlt: 'TP-Link Tapo C210 pan and tilt security camera', bestFor: 'Indoor room, pet, and home monitoring', why: 'A 2K 3MP pan-and-tilt indoor camera with 360-degree horizontal coverage, night vision, motion alerts, and two-way audio.', watch: 'Cloud storage features may require a subscription; local microSD storage is supported.', url: 'https://www.tp-link.com/us/home-networking/cloud-camera/tapo-c210/'
  },
  {
    slug: 'ring-spotlight-cam-pro', amazonAsin: 'B0B83HZVCF', name: 'Ring Spotlight Cam Pro', category: 'Smart Home', price: 'Check price', icon: '◉', image: 'https://m.media-amazon.com/images/I/6117ytsLByL._SL1500_.jpg', imageAlt: 'Ring Spotlight Cam Pro', bestFor: 'Outdoor security and motion monitoring', why: 'A weather-resistant Ring security camera with 2K video, HDR, 3D Motion Detection, and a built-in spotlight and siren.', watch: 'Some features and video storage require a Ring subscription.', url: 'https://ring.com/products/spotlight-cam-pro'
  },
  {
    slug: 'funko-harry-potter-bitty-bundle-gift',
    name: 'Funko Bitty Pop! Harry Potter 6-Pack',
    category: 'Gifts & Collectibles', price: 'Check price', icon: '★',
    image: 'https://funko.com/on/demandware.static/-/Sites-funko-master-catalog/default/dwd907dbdf/images/funko/upload/1/91760_BittyPop_Set_TNBC_Glam-1-WEB.png', imageAlt: 'Funko Bitty Pop Harry Potter collectible bundle',
    bestFor: 'Harry Potter fans and small-space collectors', why: 'Tiny collectible figures with a compact display footprint and strong fandom appeal.',
    watch: 'Mystery and bundle contents can vary by release.', url: 'https://funko.com/bitty-pop-harry-potter-6-pack/91760.html'
  },
  {
    slug: 'disney-stitch-plush-gift',
    name: 'Disney Stitch Plush',
    category: 'Gifts & Collectibles', price: 'Check price', icon: '★',
    image: 'https://target.scene7.com/is/image/Target/GUEST_91d64fca-7b86-4f5f-9f2b-fb4cec45cbae?fmt=pjpeg&hei=800&wid=800', imageAlt: 'Disney Stitch plush gift',
    bestFor: 'Disney fans and character gifts', why: 'A recognizable character gift for birthdays, holidays, and casual fandom gifting.',
    watch: 'Size and edition vary by listing.', url: 'https://www.amazon.com/s?k=Disney+Stitch+plush&tag=buybetterfi06-20'
  },
  {
    slug: 'disney-lorcana-hunny-rescue-gift',
    name: 'Disney Lorcana Hunny Rescue',
    category: 'Gifts & Collectibles', price: 'Check price', icon: '★',
    image: '/images/products/disney-lorcana-hunny-rescue.svg', imageAlt: 'Disney Lorcana Hunny Rescue collectible',
    bestFor: 'Disney collectors and Lorcana players', why: 'Combines Disney fandom with collectible card-game appeal.',
    watch: 'Availability and pricing can change quickly for collectible products.', url: 'https://www.amazon.com/s?k=Disney+Lorcana+Hunny+Rescue&tag=buybetterfi06-20'
  },
  {
    slug: 'pokemon-30th-elite-trainer-box-gift',
    name: 'Pokémon 30th Anniversary Elite Trainer Box',
    category: 'Gifts & Collectibles', price: 'Check price', icon: '★',
    image: 'https://bills-archive.nyc3.cdn.digitaloceanspaces.com/30th/Pokemon_TCG_30th_Celebration_Elite_Trainer_Box_EN.webp', imageAlt: 'Pokémon 30th Anniversary Elite Trainer Box',
    bestFor: 'Pokémon fans and trading-card collectors', why: 'Collector-focused presentation with strong anniversary and fandom appeal.',
    watch: 'Collector products can fluctuate in price and availability.', url: 'https://www.amazon.com/s?k=Pokemon+30th+Anniversary+Elite+Trainer+Box&tag=buybetterfi06-20'
  },
  {
    slug: 'lego-botanicals-mushrooms-gift',
    name: 'LEGO Botanicals Mushrooms',
    category: 'Gifts & Collectibles', price: 'Check price', icon: '✦',
    image: 'https://www.lego.com/cdn/cs/set/assets/blt6eea34c98ee76abb/bltaa6c5faaf18aa138-11505_Prod_en-gb.png?dpr=1&fit=bounds&format=jpg&height=1500&quality=80&width=1500', imageAlt: 'LEGO Botanicals Mushrooms display set',
    bestFor: 'Adult LEGO fans and creative décor gifts', why: 'A build-and-display gift that bridges collecting, creativity, and home décor.',
    watch: 'Display appeal matters more than traditional play.', url: 'https://www.lego.com/en-us/themes/botanicals'
  },
  {
    slug: 'lego-city-lava-rollercoaster-gift',
    name: 'LEGO City Lava Land Roller Coaster Park',
    category: 'Gifts & Collectibles', price: 'Check price', icon: '✦',
    image: 'https://www.lego.com/cdn/cs/set/assets/blt5ade0bb8e69bd6af/bltbb861aad3aa34ad7-60501_Prod_en-gb.png?dpr=1&fit=bounds&format=jpg&height=1500&quality=80&width=1500', imageAlt: 'LEGO City Lava Land Roller Coaster Park',
    bestFor: 'LEGO fans and build-focused gifts', why: 'A larger creative set that works as both a building experience and display piece.',
    watch: 'Requires more build and storage space than small sets.', url: 'https://www.lego.com/'
  },
  {
    slug: 'jbl-charge-5-gift',
    name: 'JBL Charge 5 Portable Bluetooth Speaker',
    category: 'Gifts & Collectibles', price: 'Check price', icon: '◉',
    image: 'https://m.media-amazon.com/images/I/61qMO3TS2RL._AC_UF1000%2C1000_QL80_.jpg', imageAlt: 'JBL Charge 5 portable Bluetooth speaker',
    bestFor: 'Music lovers and practical tech gifts', why: 'A portable speaker is an easy gift for travel, rooms, gatherings, and everyday listening.',
    watch: 'Sound preferences and speaker size are personal.', url: 'https://www.amazon.com/s?k=JBL+Charge+5&tag=buybetterfi06-20'
  },
  {
    slug: 'anker-nano-power-bank-gift',
    name: 'Anker Nano Power Bank',
    category: 'Gifts & Collectibles', price: 'Check price', icon: '▣',
    image: 'https://m.media-amazon.com/images/I/614OfiBkyZL.jpg', imageAlt: 'Anker Nano Power Bank',
    bestFor: 'Travelers and practical tech gifts', why: 'Compact backup charging makes a useful gift for commuters and travelers.',
    watch: 'Check connector, capacity, and output for the recipient’s devices.', url: 'https://www.anker.com/products/a1653-usb-c-portable-charger-5000mah'
  },
  {
    slug: 'apple-airpods-4-gift',
    name: 'Apple AirPods 4',
    category: 'Gifts & Collectibles', price: 'Check price', icon: '◉',
    image: 'https://m.media-amazon.com/images/I/61iBtxCUabL._AC_SL1500_.jpg', imageAlt: 'Apple AirPods 4',
    bestFor: 'Apple users and everyday tech gifts', why: 'A compact, recognizable tech gift for compatible Apple-device users.',
    watch: 'Confirm device compatibility and the exact AirPods version.', url: 'https://www.apple.com/airpods-4/'
  },
  {
    slug: 'apple-airtag-2-gift',
    name: 'Apple AirTag (2nd generation)',
    category: 'Gifts & Collectibles', price: 'Check price', icon: '◉',
    image: 'https://www.apple.com/v/airtag/g/images/overview/hero_airtag__7jmq2is50n6y_large.jpg', imageAlt: 'Apple AirTag 2nd generation',
    bestFor: 'Travelers and organization-minded gift recipients', why: 'A small practical gift for keeping track of everyday belongings.',
    watch: 'Best suited to people already using compatible Apple devices.', url: 'https://www.apple.com/airtag/'
  },
  {
    slug: 'crunchlabs-crunchinator-gift',
    name: 'CrunchLabs The Crunchinator',
    category: 'Gifts & Collectibles', price: 'Check price', icon: '⚙',
    image: 'https://www.crunchlabs.com/cdn/shop/files/11601_CRUNCHLABS_CRUNCHNATOR_SINGLE_PK_F.png?v=1781203491&width=800', imageAlt: 'CrunchLabs The Crunchinator STEM building toy',
    bestFor: 'Makers, STEM fans, and hands-on gift recipients', why: 'A build-and-experiment gift designed around mechanical curiosity and problem solving.',
    watch: 'Best for recipients who enjoy building and tinkering.', url: 'https://www.crunchlabs.com/'
  },
  {
    slug: 'magna-tiles-undersea-gift',
    name: 'MAGNA-TILES Undersea Adventure 58-Piece Set',
    category: 'Gifts & Collectibles', price: 'Check price', icon: '◇',
    image: 'https://magnatiles.com/cdn/shop/files/26Undersea_Adventure_FR1_RGB_1.jpg?v=1777929366', imageAlt: 'MAGNA-TILES Undersea Adventure set',
    bestFor: 'Creative kids and open-ended play gifts', why: 'Magnetic construction pieces provide a reusable building experience.',
    watch: 'Expansion sets can increase the overall collection cost.', url: 'https://www.magnatiles.com/'
  },
  {
    slug: 'educational-kanoodle-gift',
    name: 'Educational Kanoodle Puzzle',
    category: 'Gifts & Collectibles', price: 'Check price', icon: '◇',
    image: '/images/products/educational-kanoodle.svg', imageAlt: 'Educational Kanoodle logic puzzle',
    bestFor: 'Puzzle lovers and screen-free gifts', why: 'Compact logic play that is easy to wrap and convenient for travel.',
    watch: 'Challenge level varies by puzzle set.', url: 'https://www.amazon.com/s?k=Educational+Insights+Kanoodle&tag=buybetterfi06-20'
  },
  {
    slug: 'uno-championship-series-gift',
    name: 'UNO Championship Series',
    category: 'Gifts & Collectibles', price: 'Check price', icon: '★',
    image: '/images/products/uno-championship-series.svg', imageAlt: 'UNO Championship Series card game',
    bestFor: 'Family game nights and casual gifts', why: 'A familiar card-game format that is easy to gift and share with groups.',
    watch: 'Best suited to recipients who enjoy casual competitive games.', url: 'https://www.amazon.com/s?k=UNO+Championship+Series&tag=buybetterfi06-20'
  },
  {
    slug: 'kindle-paperwhite-gift',
    name: 'Amazon Kindle Paperwhite',
    category: 'Gifts & Collectibles', price: 'Check price', icon: '▣',
    image: 'https://m.media-amazon.com/images/I/81swm2WdawL._AC_SY450_.jpg', imageAlt: 'Amazon Kindle Paperwhite',
    bestFor: 'Readers and travel-friendly tech gifts', why: 'A compact reading device that makes a practical gift for frequent readers.',
    watch: 'Storage and connectivity versions vary.', url: 'https://www.amazon.com/s?k=Kindle+Paperwhite&tag=buybetterfi06-20'
  },
  {
    slug: 'yeti-rambler-gift',
    name: 'YETI Rambler Drinkware',
    category: 'Gifts & Collectibles', price: 'Check price', icon: '◈',
    image: 'https://yeti-webmedia.imgix.net/asset/24ca058e-8167-416b-8879-074be44fd4be/W/YETI_Rambler_Tumbler_20oz_Riverhead_Red_Front_302_B.png?auto=format%2Ccompress&bg=0fff&h=846&w=846', imageAlt: 'YETI Rambler drinkware',
    bestFor: 'Everyday-use and practical lifestyle gifts', why: 'Durable drinkware is a useful gift for commuters, travelers, and outdoor enthusiasts.',
    watch: 'Size and lid configuration vary by model.', url: 'https://www.yeti.com/drinkware'
  },
  {
    slug: 'stanley-quencher-gift',
    name: 'Stanley Quencher H2.0 Tumbler',
    category: 'Gifts & Collectibles', price: 'Check price', icon: '◒',
    image: 'https://m.media-amazon.com/images/I/51p5WJ6x-3L._AC_SL1500_.jpg', imageAlt: 'Stanley Quencher H2.0 tumbler',
    bestFor: 'Hydration and lifestyle gifts', why: 'A recognizable everyday tumbler with broad gifting appeal.',
    watch: 'Large sizes may not fit every cup holder or bag.', url: 'https://www.stanley1913.com/products/adventure-quencher-travel-tumbler'
  },
  {
    slug: 'disney-stitch-sticker-stamper-gift',
    name: 'Disney Stitch Sticker WOW! Stamper & Activity Pad',
    category: 'Gifts & Collectibles', price: 'Check price', icon: '★',
    image: '/images/products/stitch-sticker-stamper.svg', imageAlt: 'Disney Stitch Sticker WOW stamper and activity pad',
    bestFor: 'Disney fans and screen-free creative gifts', why: 'A portable creative activity combining a recognizable character with sticker play.',
    watch: 'Check the included sticker-roll contents for the current edition.', url: 'https://www.amazon.com/s?k=Melissa+Doug+Sticker+WOW+Disney+Stitch&tag=buybetterfi06-20'
  },


  {"slug":"owala-freesip","name":"Owala FreeSip Insulated Water Bottle","category":"Home & Kitchen","price":"Check price","icon":"◈","image":"https://cdn.shopify.com/s/files/1/0439/2537/3087/files/OW_Nailed_It_24oz_Freesip_SC_ff189ca1-fb0a-4adb-81ea-f88b3fff7e77.png?crop=center&height=500&v=1772222740&width=500","imageAlt":"Owala FreeSip Insulated Water Bottle","bestFor":"Everyday hydration","why":"Insulated bottle with the FreeSip lid for sipping through the built-in straw or drinking from the wide opening.","watch":"Choose the size and lid configuration that fit your routine.","url":"https://owalalife.com/products/freesip"},
  {"slug":"ecobee-smart-thermostat-premium","name":"ecobee Smart Thermostat Premium","category":"Smart Home","price":"Check price","icon":"⌂","image":"https://images.ctfassets.net/a3qyhfznts9y/3Pk9XugWXYQXdiPmssg4r4/e6ddc84bb15c2c2611037d8e5ca5e994/Ares_-_Slot_2_-_Mobile.png?fm=png&h=1366&q=80&w=1366","imageAlt":"ecobee Smart Thermostat Premium","bestFor":"Connected climate control","why":"Smart thermostat designed for scheduling, remote control, and connected-home routines.","watch":"Check HVAC compatibility before installation.","url":"https://www.ecobee.com/en-us/smart-thermostats/smart-thermostat-premium/"},
  {"slug":"lego-mini-orchid","name":"LEGO Botanicals Mini Orchid","category":"Gifts & Collectibles","price":"Check price","icon":"✦","image":"https://www.lego.com/cdn/cs/set/assets/bltade30768c791af76/10343_Prod.png?dpr=1&fit=bounds&format=jpg&height=1500&quality=80&width=1500","imageAlt":"LEGO Botanicals Mini Orchid","bestFor":"Desk and décor gifts","why":"A compact LEGO Botanicals build that combines a relaxing building experience with display-friendly décor.","watch":"Its appeal is strongest for people who enjoy both building and decorative displays.","url":"https://www.lego.com/en-us/product/mini-orchid-10343"},
  {"slug":"dremel-4300-rotary-tool","name":"Dremel 4300 Rotary Tool","category":"Tools & DIY","price":"Check price","icon":"⚙","image":"https://shop.dremel.com/cdn/shop/files/dremel_4300-5-40_update_3000x3000_rendition_PNG.png?v=1746473729&width=416","imageAlt":"Dremel 4300 Rotary Tool","bestFor":"DIY cutting, sanding, grinding, and detail work","why":"Versatile rotary-tool platform for detailed cutting, shaping, sanding, and grinding tasks.","watch":"Choose the accessory set that matches the materials and jobs you expect to tackle.","url":"https://www.dremel.com/us/en/p/4300-5-40-f0134300pb"},
  {
    slug: 'funko-pop-marvel',
    name: 'Funko Pop! Marvel Collectible Figure',
    category: 'Gifts & Collectibles',
    price: 'Check price',
    icon: '★',
    image: 'https://funko.com/on/demandware.static/-/Sites-funko-master-catalog/default/dw5cd6b83e/images/funko/upload/82500_Marvel_NC_SpiderMan_POP_GLAM-WEB.png',
    imageAlt: 'Funko Pop! Marvel Collectible Figure',
    bestFor: 'Marvel fandom gifts and displays',
    why: 'Compact character collectible designed for display, gifting, and fandom collecting.',
    watch: 'Specific characters and editions vary in availability and price.',
    url: 'https://funko.com/'
  },
];

export const products = [...productsCatalog, ...supplementalProducts]
  .filter((product) => product?.slug && product?.name && product?.category && product?.image)
  .map((product) => {
  const amazonOverride = amazonImageOverrides[product.slug];
  const manufacturerOverride = manufacturerImageOverrides[product.slug] || null;

  if (!amazonOverride && !manufacturerOverride) return {
    ...product,
    score: Number.isFinite(Number(product.score)) ? Number(product.score) : 8.5
  };

  const override = amazonOverride || manufacturerOverride;
  return {
    ...product,
    score: Number.isFinite(Number(product.score)) ? Number(product.score) : 8.5,
    amazonAsin: amazonOverride?.asin || product.amazonAsin,
    amazonImage: amazonOverride?.image || product.amazonImage,
    manufacturerImage: manufacturerOverride?.image || product.manufacturerImage,
    image: override.image
  };
});

