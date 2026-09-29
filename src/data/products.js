import { amazonImageOverrides } from './amazon-images.js';
import { manufacturerImageOverrides } from './manufacturer-images.js';

const productsCatalog = [
  {
    slug: 'sony-wh-1000xm5', amazonAsin: 'B09XS7JWHH', name: 'Sony WH-1000XM5 Noise-Canceling Headphones', category: 'Tech', price: '$299.99', icon: '◉', image: 'https://d1ncau8tqf99kp.cloudfront.net/converted/103364_original_local_1200x1050_v3_converted.webp', imageAlt: 'Sony WH-1000XM5 Noise-Canceling Headphones',
    bestFor: 'Travel, commuting, focused listening', why: 'Premium wireless headphones with strong active noise cancellation, multipoint connectivity, and up to 30 hours of battery life.', watch: 'Premium pricing; fit and sound preference are personal.', url: 'https://electronics.sony.com/audio/headphones/headband/p/wh1000xm5-b', dailyDealDate: '2026-09-22'
  },
  {
    slug: 'ninja-af101', amazonAsin: 'B07FDJMC9Q', name: 'Ninja 4-Qt Air Fryer AF101', category: 'Home & Kitchen', price: '$119.99', icon: '◇', image: 'https://target.scene7.com/is/image/Target/GUEST_127e9e1c-2cdc-4e69-9a35-de5998d4c037?fmt=pjpeg&hei=900&wid=900', imageAlt: 'Ninja 4-Qt Air Fryer AF101',
    bestFor: 'Weeknight meals and smaller households', why: 'Compact 4-quart air fryer with a ceramic-coated basket and a straightforward countertop footprint.', watch: 'The 4-quart capacity is better for smaller batches than large family meals.', url: 'https://www.target.com/p/-/A-53649826', dailyDealDate: '2026-09-23'
  },
  {
    bestFor: 'DIY projects, repairs, and general drilling/driving', why: 'A practical two-tool kit pairing a drill/driver and impact driver with two batteries, charger, and bag.', watch: 'Check the included battery size and kit contents before buying because bundles can vary.', url: 'https://www.dewalt.com/en-us/product/dck240c2/20v-max-13-ah-drill-driverimpact-driver-combo-kit', dailyDealDate: '2026-09-24'
  },
  {
    slug: 'solo-stove-tower', name: 'Solo Stove Tower Patio Heater', category: 'Outdoor', price: '$799.99', icon: '☼', image: 'https://content.solostove.com/image/upload/ar_442%3A300%2Cc_auto%2Cg_auto%2Cw_305/q_auto/f_avif/dpr_auto/e_unsharp_mask%3A100/qpdqxp6zip3b7yzu9e9b', imageAlt: 'Solo Stove Tower Patio Heater',
    bestFor: 'Patios, decks, and outdoor entertaining', why: 'Tall outdoor patio heater designed to extend usable outdoor time with a broad heat zone.', watch: 'Large footprint and premium price make it a better fit for dedicated outdoor spaces.', url: 'https://www.solostove.com/us/en-us/p/SSTOWER1.5_PELLET', dailyDealDate: '2026-09-30'
  },
  {
    slug: 'apple-airpods-4', name: 'Apple AirPods 4', category: 'Tech', price: 'Check price', icon: '◉', image: 'https://www.apple.com/v/airpods-5/b/images/overview/bento-gallery/bento_pair__c7i9mu5k2zee_xlarge.jpg', imageAlt: 'Apple AirPods 4 wireless earbuds', bestFor: 'Everyday wireless listening in the Apple ecosystem', why: 'Current-generation AirPods with a compact open-style design and seamless Apple-device integration.', watch: 'Choose the noise-cancelling version if active noise reduction is a priority.', url: 'https://www.apple.com/airpods-4/', dailyDealDate: '2026-10-01'
  },
  {
    slug: 'apple-ipad-a16', amazonAsin: 'B0DZJ4N8Y5', name: 'Apple iPad 11-inch (A16)', category: 'Tech', price: 'Check price', icon: '▣', image: 'https://www.apple.com/v/ipad-11/d/images/overview/design/modular_startframe__ecmd9ce9dsom_large.jpg', imageAlt: 'Apple iPad 11-inch with A16 chip', pressKitUrl: 'https://www.apple.com/newsroom/2025/03/apple-introduces-ipad-air-with-powerful-m3-chip-and-new-magic-keyboard/', bestFor: 'Streaming, browsing, school, and everyday productivity', why: '11-inch iPad with an A16 chip, 128GB starting storage, USB-C, and support for Apple Pencil.', watch: 'Accessories such as keyboards and Pencil add to the total cost.', url: 'https://www.apple.com/ipad-11/', dailyDealDate: '2026-09-20'
  },
  {
    slug: 'weber-spirit-e210', name: 'Weber Spirit E-210 Gas Grill', category: 'Outdoor', price: '$399.00', icon: '☼', image: 'https://product-images.weber.com/Grill-Images/Gas/1501000_B-1800x1800-b72c58f.png?w=800&h=800&auto=compress%2cformat', imageAlt: 'Weber Spirit E-210 Gas Grill', bestFor: 'Everyday backyard grilling', why: 'Two-burner propane grill with Snap-Jet ignition, precise heat control, and a compact footprint.', watch: 'It uses a 20-lb propane tank sold separately and has less cooking area than larger grills.', url: 'https://www.weber.com/US/en/gas/spirit/spirit-e-210-lp-blk/1501000.html', dailyDealDate: '2026-10-02'
  },
  {
    slug: 'tp-link-ep40m', name: 'TP-Link Kasa Smart Outdoor Plug EP40M', category: 'Smart Home', price: 'Check price', icon: '⚡', image: 'https://static.tp-link.com/upload/image-line/EP40M_US_1.0_1_normal_20240522012656v.jpg', imageAlt: 'TP-Link Kasa Smart Outdoor Plug EP40M', bestFor: 'Outdoor lights and scheduled devices', why: 'Matter-certified outdoor smart plug with two individually controlled outlets, scheduling, voice control, and IP64 weather resistance.', watch: 'Confirm your preferred smart-home ecosystem before purchase.', url: 'https://www.tp-link.com/us/home-networking/smart-plug/ep40m/v1/', dailyDealDate: '2026-10-03'
  },
  {
    slug: 'ring-battery-doorbell', amazonAsin: 'B09WZBPX7K', name: 'Ring Battery Doorbell', category: 'Smart Home', price: 'Check price', icon: '◉', image: 'https://images.ctfassets.net/a3peezndovsu/x7qceIoaiCJ3QArhqVeSp/ea33ebc6250b36d629f22971b3e76930/ring_battery_doorbell_2nd_gen_front_image_render_speckle_mocha_1500x1500_02.jpg', imageAlt: 'Ring Battery Doorbell', bestFor: 'Front-door monitoring and package awareness', why: 'Battery-powered video doorbell designed for flexible installation without running doorbell wiring.', watch: 'Cloud features and subscriptions can add ongoing cost depending on how you use it.', url: 'https://ring.com/products/battery-doorbell-2nd-gen'
  },
  {
    slug: 'amazon-echo-dot', amazonAsin: 'B09B8V1LZ3', name: 'Amazon Echo Dot', category: 'Smart Home', price: 'Check price', icon: '◉', image: '/images/products/amazon-echo-dot.svg', imageAlt: 'Amazon Echo Dot smart speaker', bestFor: 'Voice control, timers, music, and smart-home routines', why: 'Compact smart speaker that can serve as a convenient voice-control hub for compatible devices.', watch: 'Smart-speaker usefulness depends on how much of your home you want connected.', url: 'https://www.amazon.com/dp/B09B8V1LZ3?tag=buybetterfi06-20', dailyDealDate: '2026-09-29'
  },
  {
    slug: 'anker-nano-power-bank', name: 'Anker Nano Power Bank', category: 'Tech', price: 'Check price', icon: '▣', image: 'https://cdn.shopify.com/s/files/1/0493/9834/9974/files/A1653011_ND01_V1.png?v=1728462233&width=3840', imageAlt: 'Anker Nano Power Bank', bestFor: 'Portable phone charging', why: 'Compact Anker charging option aimed at people who want backup power without carrying a large battery pack.', watch: 'Check the exact connector, capacity, and charging wattage of the version you choose.', url: 'https://www.anker.com/products/a1653-usb-c-portable-charger-5000mah', dailyDealDate: '2026-10-05'
  },
  {
    slug: 'govee-smart-light-bulbs', name: 'Govee Smart LED Light Bulbs', category: 'Home & Kitchen', price: 'Check price', icon: '✦', image: '/images/products/govee-smart-light-bulbs.svg', imageAlt: 'Govee Smart LED Light Bulbs', bestFor: 'Color lighting and smart-home ambiance', why: 'Smart LED bulbs offer app-based lighting control and color options for rooms, desks, and entertainment spaces.', watch: 'Smart-home compatibility and exact bulb specifications vary by model.', url: 'https://us.govee.com/collections/smart-led-bulbs'
  },
  {
    slug: 'dyson-v8', amazonAsin: 'B0GT2DG9SK', name: 'Dyson V8 Cordless Vacuum', category: 'Home & Kitchen', price: 'Check price', icon: '◇', image: '/images/products/dyson-v8.svg', imageAlt: 'Dyson V8 Cordless Vacuum', bestFor: 'Quick everyday floor and spot cleaning', why: 'Cordless stick vacuum format makes it convenient for quick cleanups and hard-to-reach areas.', watch: 'Battery runtime and bin capacity are more limited than on larger corded vacuums.', url: 'https://www.dyson.com/vacuum-cleaners/cordless/v8/shop-all', dailyDealDate: '2026-10-06'
  },
  {
    slug: 'instant-vortex-plus', name: 'Instant Vortex Plus Air Fryer', category: 'Home & Kitchen', price: 'Check price', icon: '◇', image: 'https://instantpot.com/cdn/shop/files/IB_140-3000-01_Vortex-Plus-AFO-10QT_ATF_Square_Tile1.png?v=1746220302&width=960', imageAlt: 'Instant Vortex Plus Air Fryer', bestFor: 'Fast countertop cooking', why: 'Popular air-fryer format with multiple cooking functions aimed at quick everyday meals.', watch: 'Compare basket capacity and exact functions across Vortex Plus variants.', url: 'https://instantpot.com/collections/air-fryers', dailyDealDate: '2026-09-26'
  },
  {
    slug: 'yeti-rambler', name: 'YETI Rambler Drinkware', category: 'Lifestyle', price: 'Check price', icon: '◈', image: 'https://yeti-webmedia.imgix.net/m/3f71b90ff226c222/original/PDP_Asset_Banner_Square_PDP_Product_Navy_Coffee_Overview_Lifestyle.jpg?auto=format%2Ccompress&fit=crop&h=400&w=400', imageAlt: 'YETI Rambler insulated drinkware', bestFor: 'Daily drinks, commuting, and outdoor use', why: 'Durable insulated drinkware line with multiple sizes and lid configurations.', watch: 'Pick the size and lid style that matches how you actually carry and use it.', url: 'https://www.yeti.com/drinkware/tumblers/rambler.html', dailyDealDate: '2026-09-27'
  },
  {
    slug: 'stanley-quencher', name: 'Stanley Quencher H2.0 Tumbler', category: 'Lifestyle', price: 'Check price', icon: '◈', image: 'https://www.stanley1913.com/cdn/shop/files/B2B_Web_PNG-TheQuencherH2.OFlowStateTMTumbler20OZ-Black2.0-Front_20399a06-bbde-478f-a91e-c3b545d6457d.png?v=1716304216&width=990', imageAlt: 'Stanley Quencher H2.0 Tumbler', pressKitUrl: 'https://www.stanley1913.com/pages/newsroom', bestFor: 'Large-volume everyday hydration', why: 'Large insulated tumbler designed for carrying a substantial drink throughout the day.', watch: 'Its large size is convenient for hydration but less convenient for small cup holders and bags.', url: 'https://www.stanley1913.com/products/adventure-quencher-travel-tumbler-20-oz', dailyDealDate: '2026-09-18'
  },
  {
    slug: 'logitech-mx-master-3s', name: 'Logitech MX Master 3S', category: 'Tech', price: 'Check price', icon: '◉', image: 'https://resource.logitech.com/w_1440%2Ch_660%2Car_24%3A11%2Cc_fill%2Cq_auto%2Cf_auto%2Cdpr_1.0/d_transparent.gif/content/dam/logitech/en/products/mice/mx-master-3s/mx-master-3s-graphite-ident.jpg', imageAlt: 'Logitech MX Master 3S wireless mouse', bestFor: 'Desktop productivity and multi-device work', why: 'Ergonomic wireless mouse built around precise scrolling, customizable controls, and multi-device workflows.', watch: 'Its larger ergonomic shape may not suit users who prefer small travel mice.', url: 'https://www.logitech.com/en-us/shop/p/mx-master-3s', dailyDealDate: '2026-09-21'
  },
  {
    slug: 'shark-navigator-lift-away', name: 'Shark Navigator Lift-Away', category: 'Home & Kitchen', price: 'Check price', icon: '◇', image: 'https://assets.sharkninja.com/image/upload/c_pad,w_800,h_800,f_auto,q_auto,b_rgb:FFFFFF/v1/SharkNinja-NA/NV360_01', imageAlt: 'Shark Navigator Lift-Away vacuum', bestFor: 'Whole-home floor cleaning', why: 'Upright vacuum design with a lift-away concept for cleaning stairs and above-floor areas.', watch: 'An upright vacuum takes more storage space than a compact cordless stick model.', url: 'https://www.sharkclean.com/products/navigator-lift-away-vacuum-zidNV360', dailyDealDate: '2026-10-07'
  },
  {
    slug: 'lego-city-lava-rollercoaster', name: 'LEGO City Lava Land Roller Coaster Park', category: 'Toys & Games', price: 'Check price', icon: '▰', image: 'https://www.lego.com/cdn/cs/set/assets/blt5ade0bb8e69bd6af/bltbb861aad3aa34ad7-60501_Prod_en-gb.png?dpr=1&fit=bounds&format=jpg&height=1500&quality=80&width=1500', imageAlt: 'LEGO City Lava Land Roller Coaster Park building set', bestFor: 'Creative builders and imaginative play', why: 'A large LEGO City build that combines construction, play value, and an engaging amusement-park theme.', watch: 'Larger LEGO sets cost more and need meaningful storage and build space.', url: 'https://www.lego.com/en-us/themes/city', dailyDealDate: '2026-10-08'
  },
  {
    slug: 'magna-tiles-undersea', name: 'MAGNA-TILES Undersea Adventure 58-Piece Set', category: 'Toys & Games', price: 'Check price', icon: '◇', image: '/images/products/magna-tiles-undersea.svg', imageAlt: 'MAGNA-TILES Undersea Adventure magnetic construction set', bestFor: 'Open-ended building and creative play', why: 'Magnetic construction pieces encourage kids to build, rebuild, and invent their own structures and scenes.', watch: 'Magnetic-tile sets can become a larger investment as you add more pieces and expansions.', url: 'https://www.magnatiles.com/'
  },
  {
    slug: 'crunchlabs-crunchinator', name: 'CrunchLabs The Crunchinator', category: 'Toys & Games', price: '$34.99', icon: '⚙', image: '/images/products/crunchlabs-crunchinator.svg', imageAlt: 'CrunchLabs The Crunchinator STEM building toy', bestFor: 'STEM-minded kids and hands-on makers', why: 'A build-and-experiment toy designed around problem solving and mechanical curiosity.', watch: 'Best suited to kids who enjoy building and tinkering rather than passive play.', url: 'https://www.crunchlabs.com/', dailyDealDate: '2026-10-09'
  },
  {
    slug: 'elf-halo-glow-liquid-filter', name: 'e.l.f. Halo Glow Liquid Filter', category: 'Beauty & Personal Care', price: 'Check price', icon: '✦', image: 'https://cdn.shopify.com/s/files/1/0661/2251/4520/files/83565_OpenA_V2_R_d02ae91d-8a71-4bba-bfbb-ab663a9b18f0.png?crop=center&height=450&v=1780430096&width=450', imageAlt: 'e.l.f. Halo Glow Liquid Filter makeup product', bestFor: 'Glow-focused makeup routines', why: 'A versatile complexion product aimed at adding a luminous finish and fitting into multiple makeup routines.', watch: 'Shade and finish are highly personal, so check swatches and the current shade range.', url: 'https://www.elfcosmetics.com/halo-glow-liquid-filter/'
  },
  {
    slug: 'oxo-tub-tile-scrubber', amazonAsin: 'B00L9X4WCE', name: 'OXO Good Grips Extendable Tub & Tile Scrubber', category: 'Home & Kitchen', price: 'Check price', icon: '⌁', image: 'https://www.oxo.com/media/catalog/product/cache/b2f1ce2dfe10d3d31bf2056bf6e0d10f/g/g/gg_12126100_1_1__1.jpg', imageAlt: 'OXO Good Grips Extendable Tub and Tile Scrubber',
    bestFor: 'Bathroom cleaning without kneeling or crouching', why: 'An extendable cleaning tool designed to reach tubs, tile, glass, floors, and corners from a more comfortable standing position.', watch: 'The head is replaceable, and exact retailer pricing and availability can change.', url: 'https://www.amazon.com/dp/B00L9X4WCE?tag=buybetterfi06-20'
  },
  {
    bestFor: 'Everyday cooking and baking', why: 'A practical multi-piece silicone utensil set for stirring, folding, scraping, and general kitchen prep.', watch: 'Check the current set contents and dimensions because listings can vary.', url: 'https://www.amazon.com/dp/B0CHGFG64S?tag=buybetterfi06-20'
  },
  {
    bestFor: 'Travel organization and maximizing luggage space', why: 'Compression packing cubes help organize clothing and make it easier to separate items inside luggage.', watch: 'Set size, zipper configuration, and compression capacity vary by bundle.', url: 'https://www.amazon.com/dp/B08Z7SLGMF?tag=buybetterfi06-20'
  },
  {
    bestFor: 'Reducing hair buildup in shower and tub drains', why: 'A simple drain insert designed to catch hair before it travels deeper into the plumbing.', watch: 'Confirm the drain size and current version before ordering.', url: 'https://www.amazon.com/dp/B07MKPMBCJ?tag=buybetterfi06-20'
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
    bestFor: 'Hallways, stairs, closets, and nighttime navigation', why: 'Small motion-activated lights can add low-effort illumination to areas where a full light fixture is unnecessary.', watch: 'Check battery type, sensor range, and pack size for the current listing.', url: 'https://www.amazon.com/s?k=Jandcase+motion+sensor+night+lights&tag=buybetterfi06-20'
  },,

  {"slug":"lego-halloween-pumpkin-lantern","name":"LEGO Halloween Pumpkin Lantern","category":"Seasonal & Holidays","price":"$29.99","icon":"✦","image":"https://www.lego.com/cdn/cs/set/assets/blt8a5b33fbe2efbe39/blt11ecdc92ea69a278-40872_Prod_en-gb.png?dpr=1&fit=bounds&format=jpg&height=1500&quality=80&width=1500","imageAlt":"LEGO Halloween Pumpkin Lantern","bestFor":"Halloween decorating and seasonal family projects","why":"A light-up LEGO pumpkin designed specifically for Halloween display and repeat seasonal use.","watch":"The set is seasonal and currently ships on a limited fall schedule.","url":"https://www.lego.com/en-us/product/halloween-pumpkin-lantern-40872"},
  {"slug":"lego-halloween-skull-candle","name":"LEGO Halloween Skull Candle","category":"Seasonal & Holidays","price":"$19.99","icon":"✦","image":"https://www.lego.com/cdn/cs/set/assets/blt7770c776f7bec640/blt1970f5c3e7253491-40883_Prod_en-gb.png?dpr=1&fit=bounds&format=jpg&height=1500&quality=80&width=1500","imageAlt":"LEGO Halloween Skull Candle","bestFor":"Spooky-season décor and Halloween gifts","why":"A buildable skull decoration with glow-in-the-dark details that can be displayed year after year.","watch":"It is a niche seasonal décor piece rather than an everyday product.","url":"https://www.lego.com/en-us/product/halloween-skull-candle-40883"},
  {"slug":"lego-friends-advent-calendar-2026","name":"LEGO Friends Advent Calendar 2026","category":"Seasonal & Holidays","price":"$34.99","icon":"★","image":"https://www.lego.com/cdn/cs/set/assets/blt44cb6bddbf544676/bltecc1c309cb684314-42698_Box1_v39_en-gb.png?dpr=1&fit=bounds&format=jpg&height=1500&quality=80&width=1500","imageAlt":"LEGO Friends Advent Calendar 2026","bestFor":"Christmas countdowns and kids' holiday gifts","why":"A 24-day holiday countdown with daily mini builds, characters, animals, and winter-themed activities.","watch":"Advent calendars are time-sensitive purchases and are most useful before December begins.","url":"https://www.lego.com/en-us/product/advent-calendar-2026-42698"},
  {"slug":"lego-disney-princess-advent-calendar-2026","name":"LEGO Disney Princess Advent Calendar 2026","category":"Seasonal & Holidays","price":"$44.99","icon":"★","image":"https://www.lego.com/cdn/cs/set/assets/blt82f3c5cf5bc37ada/blt0fed8b3062f3baae-43298_Box1_v39_en-gb.png?dpr=1&fit=bounds&format=jpg&height=1500&quality=80&width=1500","imageAlt":"LEGO Disney Princess Advent Calendar 2026","bestFor":"Disney Princess holiday gifting","why":"A 24-day Disney Princess countdown with characters and mini builds plus a reusable game-board feature.","watch":"Best purchased ahead of the Advent season because demand can rise as December approaches.","url":"https://www.lego.com/en-us/product/advent-calendar-2026-43298"},
  {"slug":"lego-star-wars-advent-calendar-2026","name":"LEGO Star Wars Advent Calendar 2026","category":"Seasonal & Holidays","price":"$44.99","icon":"★","image":"https://www.lego.com/cdn/cs/set/assets/bltc5633fee6fa8abc1/blt691e598d84db744d-75456_Prod_en-gb.png?dpr=1&fit=bounds&format=jpg&height=1500&quality=80&width=1500","imageAlt":"LEGO Star Wars Advent Calendar 2026","bestFor":"Star Wars fans and holiday countdown gifts","why":"A 24-day Mandalorian-themed countdown with minifigures, vehicles, and festive mini builds.","watch":"Collector demand and seasonal availability can change as the holidays approach.","url":"https://www.lego.com/en-us/product/advent-calendar-2026-75456"},
  {"slug":"lego-marvel-advent-calendar-2026","name":"LEGO Marvel Advent Calendar 2026","category":"Seasonal & Holidays","price":"$44.99","icon":"★","image":"https://www.lego.com/cdn/cs/set/assets/blt2a7ca384045cfc3e/blt91ca18fede88b80f-76340_Box1_v39_en-gb.png?dpr=1&fit=bounds&format=jpg&height=1500&quality=80&width=1500","imageAlt":"LEGO Marvel Advent Calendar 2026","bestFor":"Marvel fans and Christmas countdowns","why":"A 24-day Marvel countdown featuring festive minifigures and small superhero-themed builds.","watch":"Seasonal collector products can become harder to find closer to the holidays.","url":"https://www.lego.com/en-us/product/advent-calendar-2026-76340"},
  {"slug":"lego-city-advent-calendar-2026","name":"LEGO City Advent Calendar 2026","category":"Seasonal & Holidays","price":"$34.99","icon":"★","image":"https://www.lego.com/cdn/cs/set/assets/blt89ecb458625a72f5/blte2a9ca4bf40536af-60510_Box1_v39_en-us.png?dpr=1&fit=bounds&format=jpg&height=1500&quality=80&width=1500","imageAlt":"LEGO City Advent Calendar 2026","bestFor":"Family Christmas countdowns and creative play","why":"Twenty-four festive surprises including Santa, elves, a snowman, a reindeer, and a fold-out Santa's workshop playmat.","watch":"It is designed for the holiday countdown rather than year-round play.","url":"https://www.lego.com/en-us/product/advent-calendar-2026-60510"},
  {"slug":"lego-santas-holiday-countdown","name":"LEGO Santa's Holiday Countdown","category":"Seasonal & Holidays","price":"$59.99","icon":"★","image":"https://www.lego.com/cdn/cs/set/assets/bltae642d0bcbe15f54/blt6caf97af32ad6473-40874_Prod_en-gb.png?dpr=1&fit=bounds&format=jpg&height=1500&quality=80&width=1500","imageAlt":"LEGO Santa's Holiday Countdown","bestFor":"Christmas décor and annual holiday traditions","why":"A buildable Santa display with a perpetual countdown designed to become a repeat holiday tradition.","watch":"The 2026 release is currently a pre-order with a stated October shipping date.","url":"https://www.lego.com/en-us/product/santas-holiday-countdown-40874"},
  {"slug":"lego-sallys-flowerpot","name":"LEGO Disney Sally's Flowerpot","category":"Seasonal & Holidays","price":"$49.99","icon":"★","image":"https://www.lego.com/cdn/cs/set/assets/blt06d58489163cda98/43288_Prod.png?dpr=1&fit=bounds&format=jpg&height=1500&quality=80&width=1500","imageAlt":"LEGO Disney Sally's Flowerpot","bestFor":"Halloween and Nightmare Before Christmas fans","why":"A seasonal display-friendly build inspired by The Nightmare Before Christmas with hidden play features.","watch":"Its strongest appeal is fandom and seasonal décor rather than everyday toy play.","url":"https://www.lego.com/en-us/product/sallys-flowerpot-43288"},
  {"slug":"lego-nightmare-before-christmas","name":"LEGO Disney Tim Burton's The Nightmare Before Christmas","category":"Seasonal & Holidays","price":"$199.99","icon":"★","image":"https://www.lego.com/cdn/cs/set/assets/blta1405340d716cd20/21351_Prod.png?dpr=1&fit=bounds&format=jpg&height=1500&quality=80&width=1500","imageAlt":"LEGO Disney Tim Burton's The Nightmare Before Christmas","bestFor":"Halloween-to-Christmas décor and adult collectors","why":"A large display model built around Halloween Town and Christmas Town, making it useful across both major fall holidays.","watch":"Its large size and premium price make it a dedicated collector/display purchase.","url":"https://www.lego.com/en-us/product/disney-tim-burtons-the-nightmare-before-christmas-21351"},


  {
    slug: 'apple-airtag-2', name: 'Apple AirTag (2nd generation)', category: 'Tech', price: 'Check price', icon: '◉',
    image: 'https://images-na.ssl-images-amazon.com/images/P/B0D3V4M9F1.01.LZZZZZZZ.jpg', imageAlt: 'Apple AirTag 2nd generation',
    bestFor: 'Finding keys, bags, and everyday items', why: 'A compact item tracker designed to help locate personal belongings through the Find My network.', watch: 'AirTag is intended for item finding, not continuous personal location tracking.', url: 'https://www.apple.com/airtag/'
  },
  {
    slug: 'anker-737-power-bank', amazonAsin: 'B09VPHVT2Z', name: 'Anker 737 Power Bank (PowerCore 24K)', category: 'Tech', price: 'Check price', icon: '▣',
    image: 'https://images-na.ssl-images-amazon.com/images/P/B09VPHVT2Z.01.LZZZZZZZ.jpg', imageAlt: 'Anker 737 Power Bank',
    bestFor: 'Laptop and phone charging while traveling', why: 'High-capacity portable power bank with high-output USB-C charging and an onboard display.', watch: 'Its large capacity also means a heavier battery pack.', url: 'https://www.anker.com/products/a1289'
  },
  {
    slug: 'logitech-mx-keys-s', amazonAsin: 'B0BKW3LB2B', name: 'Logitech MX Keys S Wireless Keyboard', category: 'Tech', price: 'Check price', icon: '▣',
    image: 'https://images-na.ssl-images-amazon.com/images/P/B0BKW3LB2B.01.LZZZZZZZ.jpg', imageAlt: 'Logitech MX Keys S Wireless Keyboard',
    bestFor: 'Desktop productivity and multi-device work', why: 'Low-profile wireless keyboard built for quiet typing, multi-device switching, and customizable shortcuts.', watch: 'Full-size layouts take more desk space than compact keyboards.', url: 'https://www.logitech.com/en-us/shop/p/mx-keys-s'
  },
  {
    slug: 'samsung-t7-shield', amazonAsin: 'B09VLHR4JC', name: 'Samsung T7 Shield Portable SSD 2TB', category: 'Tech', price: 'Check price', icon: '▣',
    image: 'https://images-na.ssl-images-amazon.com/images/P/B09VLHR4JC.01.LZZZZZZZ.jpg', imageAlt: 'Samsung T7 Shield Portable SSD',
    bestFor: 'Portable file storage and creative work', why: 'Rugged portable SSD designed for fast external storage and travel.', watch: 'Storage capacity and interface speeds should match the workflow you actually need.', url: 'https://www.samsung.com/us/memory-storage/portable-ssd/t7-shield/'
  },
  {
    slug: 'bose-qc-ultra-2', amazonAsin: 'B0FDKR293G', name: 'Bose QuietComfort Ultra Headphones (2nd Gen)', category: 'Tech', price: 'Check price', icon: '◉',
    image: 'https://images-na.ssl-images-amazon.com/images/P/B0FDKR293G.01.LZZZZZZZ.jpg', imageAlt: 'Bose QuietComfort Ultra Headphones 2nd Gen',
    bestFor: 'Travel and immersive listening', why: 'Premium wireless over-ear headphones with active noise cancellation and spatial-audio features.', watch: 'Premium headphones are a substantial purchase, so fit and sound preferences matter.', url: 'https://www.bose.com/p/headphones/bose-quietcomfort-ultra-headphones-2nd-gen/QCUH2-HEADPHONEARN.html'
  },
  {
    slug: 'jbl-charge-5', amazonAsin: 'B08VDNCZT9', name: 'JBL Charge 5 Portable Bluetooth Speaker', category: 'Tech', price: 'Check price', icon: '◉',
    image: 'https://images-na.ssl-images-amazon.com/images/P/B08VDNCZT9.01.LZZZZZZZ.jpg', imageAlt: 'JBL Charge 5 portable Bluetooth speaker',
    bestFor: 'Portable music at home and outdoors', why: 'Portable Bluetooth speaker designed around durable construction, wireless playback, and a built-in battery.', watch: 'Speaker size and bass response should match where you plan to use it.', url: 'https://www.jbl.com/bluetooth-speakers/JBLCHARGE5.html'
  },
  {
    slug: 'kindle-paperwhite', amazonAsin: 'B0CFPHV9ZN', name: 'Amazon Kindle Paperwhite', category: 'Tech', price: 'Check price', icon: '▣',
    image: 'https://images-na.ssl-images-amazon.com/images/P/B0CFPHV9ZN.01.LZZZZZZZ.jpg', imageAlt: 'Amazon Kindle Paperwhite',
    bestFor: 'Dedicated reading and travel', why: 'E-reader designed around a glare-free display and long reading sessions without the distractions of a general-purpose tablet.', watch: 'It is specialized for reading rather than general tablet apps.', url: 'https://www.amazon.com/dp/B0CFPHV9ZN?tag=buybetterfi06-20'
  },
  {
    slug: 'razer-blackwidow-v4', amazonAsin: 'B0CCG2KHCB', name: 'Razer BlackWidow V4 75% Mechanical Gaming Keyboard', category: 'Tech', price: 'Check price', icon: '▣',
    image: 'https://images-na.ssl-images-amazon.com/images/P/B0CCG2KHCB.01.LZZZZZZZ.jpg', imageAlt: 'Razer BlackWidow V4 75 percent mechanical gaming keyboard',
    bestFor: 'PC gaming and customizable mechanical keyboards', why: 'Compact mechanical gaming keyboard with hot-swappable design, RGB lighting, and dedicated controls.', watch: 'Mechanical switch feel and keyboard layout are highly personal.', url: 'https://www.razer.com/gaming-keyboards/razer-blackwidow-v4-75'
  },
  {
    slug: 'elgato-stream-deck-plus', amazonAsin: 'B0BJL8SJ59', name: 'Elgato Stream Deck +', category: 'Tech', price: 'Check price', icon: '▣',
    image: 'https://images-na.ssl-images-amazon.com/images/P/B0BJL8SJ59.01.LZZZZZZZ.jpg', imageAlt: 'Elgato Stream Deck Plus',
    bestFor: 'Streaming, content creation, and workflow shortcuts', why: 'Programmable control surface with customizable keys, dials, and touch controls for repeated software actions.', watch: 'It is most useful when you will actually build and maintain custom profiles.', url: 'https://www.elgato.com/us/en/p/10GBD9911'
  },
  {
    slug: 'elgato-stream-deck-mini', amazonAsin: 'B07DYRS1WH', name: 'Elgato Stream Deck Mini', category: 'Tech', price: 'Check price', icon: '▣',
    image: 'https://images-na.ssl-images-amazon.com/images/P/B07DYRS1WH.01.LZZZZZZZ.jpg', imageAlt: 'Elgato Stream Deck Mini',
    bestFor: 'Simple desktop shortcuts and streaming controls', why: 'Compact programmable controller for frequently repeated desktop and creative-app actions.', watch: 'Six keys provide less room for complex profiles than larger Stream Deck models.', url: 'https://www.elgato.com/us/en/p/10gaei9901'
  },
  {
    slug: 'anker-prime-power-bank-26250', amazonAsin: 'B0F66LNB8D', name: 'Anker Prime Power Bank 26,250mAh 300W', category: 'Tech', price: 'Check price', icon: '▣',
    image: 'https://images-na.ssl-images-amazon.com/images/P/B0F66LNB8D.01.LZZZZZZZ.jpg', imageAlt: 'Anker Prime Power Bank 26250mAh',
    bestFor: 'High-power travel charging for laptops and multiple devices', why: 'Large-capacity power bank designed for high-output charging across multiple connected devices.', watch: 'Large high-output power banks are heavier and may be overkill for phone-only charging.', url: 'https://www.anker.com/'
  },
  {
    slug: 'anker-power-bank-20000', amazonAsin: 'B0CXDXP8VR', name: 'Anker Power Bank 20,000mAh with Built-in USB-C Cable', category: 'Tech', price: 'Check price', icon: '▣',
    image: 'https://images-na.ssl-images-amazon.com/images/P/B0CXDXP8VR.01.LZZZZZZZ.jpg', imageAlt: 'Anker 20000mAh power bank with built-in USB-C cable',
    bestFor: 'Travel and everyday backup charging', why: 'Portable battery with built-in USB-C connectivity and multiple charging ports for phones and other devices.', watch: 'Confirm the exact output and cable configuration for your devices.', url: 'https://www.anker.com/'
  },
  {
    slug: 'amazon-echo-show-8', amazonAsin: 'B09B2SBHQK', name: 'Amazon Echo Show 8', category: 'Tech', price: 'Check price', icon: '◉',
    image: 'https://images-na.ssl-images-amazon.com/images/P/B09B2SBHQK.01.LZZZZZZZ.jpg', imageAlt: 'Amazon Echo Show 8 smart display',
    bestFor: 'Kitchen timers, video calls, and smart-home control', why: 'Smart display that combines Alexa voice control with a screen for compatible smart-home, media, and communication features.', watch: 'Smart-display usefulness depends on the services and devices you already use.', url: 'https://www.amazon.com/dp/B09B2SBHQK?tag=buybetterfi06-20'
  },
  {
    slug: 'amazon-fire-tv-stick-4k-select', amazonAsin: 'B0C6W3D4RM', name: 'Amazon Fire TV Stick 4K Select', category: 'Tech', price: 'Check price', icon: '▣',
    image: 'https://images-na.ssl-images-amazon.com/images/P/B0C6W3D4RM.01.LZZZZZZZ.jpg', imageAlt: 'Amazon Fire TV Stick 4K Select',
    bestFor: '4K streaming on compatible televisions', why: 'Compact streaming device built around 4K video playback and Amazon Fire TV features.', watch: 'Streaming quality also depends on your TV, network, and subscription services.', url: 'https://www.amazon.com/dp/B0C6W3D4RM?tag=buybetterfi06-20'
  },
  {
    slug: 'apple-magic-mouse-usbc', amazonAsin: 'B0DL72PK1P', name: 'Apple Magic Mouse (USB-C)', category: 'Tech', price: 'Check price', icon: '◉',
    image: 'https://images-na.ssl-images-amazon.com/images/P/B0DL72PK1P.01.LZZZZZZZ.jpg', imageAlt: 'Apple Magic Mouse USB-C',
    bestFor: 'Mac desktop setups and gesture-based navigation', why: 'Wireless mouse with a Multi-Touch surface and rechargeable USB-C connection for compatible Apple setups.', watch: 'The charging-port location and low-profile shape are worth considering before buying.', url: 'https://www.apple.com/shop/buy-mac/mouse/white-multi-touch-surface'
  },


  {
    slug: 'kitchenaid-artisan-stand-mixer', name: 'KitchenAid Artisan Series 5-Quart Stand Mixer', category: 'Home & Kitchen', price: 'Check price', icon: '◇',
    image: 'https://kitchenaidus.vtexassets.com/arquivos/ids/159154/hero-KSM150PSBK.jpg?v=639198847141800000', imageAlt: 'KitchenAid Artisan Series stand mixer',
    bestFor: 'Baking, mixing, and everyday kitchen prep', why: 'Classic 5-quart stand mixer format with a wide accessory ecosystem for mixing and baking tasks.', watch: 'Attachments and color choices can change the total price.', url: 'https://www.kitchenaid.com/countertop-appliances/stand-mixers/tilt-head-stand-mixers/p.artisan-series-5-quart-tilt-head-stand-mixer.ksm150ps.html'
  },
  {
    slug: 'oxo-9-tongs-silicone', name: 'OXO Good Grips 9-Inch Tongs with Silicone Heads', category: 'Home & Kitchen', price: '$17.99', icon: '⌁',
    image: 'https://www.oxo.com/media/catalog/product/cache/1/image/1200x/040ec09b1e35df139433887a97daa66f/1/1/1101880_1.jpg', imageAlt: 'OXO Good Grips 9-Inch Tongs with Silicone Heads',
    bestFor: 'Everyday cooking and non-stick cookware', why: 'Heat-resistant silicone heads provide a secure grip while helping protect non-stick surfaces.', watch: 'The 9-inch size is compact; compare with the 12-inch version for larger cookware.', url: 'https://www.oxo.com/9-tongs-with-silicone-heads-623.html'
  },
  {
    slug: 'oxo-salad-spinner', name: 'OXO Good Grips Salad Spinner', category: 'Home & Kitchen', price: '$32.99', icon: '◇',
    image: 'https://www.oxo.com/media/catalog/product/cache/1/image/1200x/040ec09b1e35df139433887a97daa66f/1/1/32480_1.jpg', imageAlt: 'OXO Good Grips Salad Spinner',
    bestFor: 'Washing and drying salad greens', why: 'Countertop salad spinner designed to rinse and quickly dry greens with a pump-style mechanism.', watch: 'It takes more cabinet space than a basic colander.', url: 'https://www.oxo.com/salad-spinner.html'
  },
  {
    slug: 'oxo-garlic-press', name: 'OXO Good Grips Garlic Press', category: 'Home & Kitchen', price: '$28.99', icon: '⌁',
    image: 'https://www.oxo.com/media/catalog/product/cache/1/image/1200x/040ec09b1e35df139433887a97daa66f/1/1/11122600_1.jpg', imageAlt: 'OXO Good Grips Garlic Press',
    bestFor: 'Fast garlic prep', why: 'Handheld garlic press designed for quick mincing without requiring a separate knife and board.', watch: 'A garlic press is specialized, so it adds value mainly if you cook with fresh garlic often.', url: 'https://www.oxo.com/garlic-press.html'
  },
  {
    slug: 'oxo-swivel-peeler', name: 'OXO Good Grips Swivel Peeler', category: 'Home & Kitchen', price: '$13.99', icon: '⌁',
    image: 'https://www.oxo.com/media/catalog/product/cache/1/image/1200x/040ec09b1e35df139433887a97daa66f/1/1/1057961_1.jpg', imageAlt: 'OXO Good Grips Swivel Peeler',
    bestFor: 'Vegetable and fruit prep', why: 'Swivel blade and soft grip make it a practical everyday peeling tool.', watch: 'Blade sharpness and handle feel are personal preferences.', url: 'https://www.oxo.com/swivel-peeler.html'
  },


  {
    slug: 'oxo-5qt-mixing-bowl', name: 'OXO Good Grips 5-Quart Mixing Bowl', category: 'Home & Kitchen', price: '$16.99', icon: '◇',
    image: 'https://www.oxo.com/media/catalog/product/cache/1/image/1200x/040ec09b1e35df139433887a97daa66f/1/0/1059701_1.jpg', imageAlt: 'OXO Good Grips 5-Quart Mixing Bowl',
    bestFor: 'Baking, mixing, and food prep', why: 'Large mixing bowl with a non-slip base, comfortable handle, wide lip, and pouring spout.', watch: 'The 5-quart size needs more cabinet space than smaller prep bowls.', url: 'https://www.oxo.com/5-quart-mixing-bowl-244-0.html'
  },
  {
    slug: 'kitchenaid-artisan-plus-5qt', name: 'KitchenAid Artisan Plus 5-Quart Stand Mixer', category: 'Home & Kitchen', price: '$499.99', icon: '◇',
    image: 'https://www.kitchenaid.com/dw/image/v2/BBQV_PRD/on/demandware.static/-/Sites-kitchenaid-master-catalog/default/dw6f3f7b3e/images/large/KSM50PKVXBK_1.jpg', imageAlt: 'KitchenAid Artisan Plus 5-Quart Stand Mixer',
    bestFor: 'Baking and frequent mixing', why: 'Five-quart tilt-head mixer with precision speed control, bowl light, and a broad attachment ecosystem.', watch: 'Optional attachments increase the total investment.', url: 'https://www.kitchenaid.com/countertop-appliances/stand-mixers/tilt-head-stand-mixers/p.kitchenaid-artisan-plus-5-quart-stand-mixer.KSM50PKVXBK.html'
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
    bestFor: 'Cutting thick-crust pizza', why: 'Large stainless-steel blade with a thumb guard and soft non-slip handle.', watch: 'Its larger wheel needs a little more drawer space.', url: 'https://www.oxo.com/oxo-gg-large-pizza-wheel.html'
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
];

export const products = productsCatalog.filter((product) => product?.slug && product?.name && product?.category && product?.image).map((product) => {
  const amazonOverride = amazonImageOverrides[product.slug];
  const manufacturerOverride = manufacturerImageOverrides[product.slug];

  if (!amazonOverride && !manufacturerOverride) return product;

  const override = amazonOverride || manufacturerOverride;
  return {
    ...product,
    amazonAsin: amazonOverride?.asin || product.amazonAsin,
    amazonImage: amazonOverride?.image || product.amazonImage,
    manufacturerImage: manufacturerOverride?.image || product.manufacturerImage,
    image: override.image
  };
});

