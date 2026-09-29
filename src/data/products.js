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
    slug: 'apple-airpods-4', name: 'Apple AirPods 5', category: 'Tech', price: 'Check price', icon: '◉', image: 'https://www.apple.com/v/airpods-5/b/images/overview/bento-gallery/bento_pair__c7i9mu5k2zee_xlarge.jpg', imageAlt: 'Apple AirPods 5 wireless earbuds', bestFor: 'Everyday wireless listening in the Apple ecosystem', why: 'Current-generation AirPods with a compact open-style design and seamless Apple-device integration.', watch: 'Choose the noise-cancelling version if active noise reduction is a priority.', url: 'https://www.apple.com/airpods-5/', dailyDealDate: '2026-10-01'
  },
  {
    slug: 'apple-ipad-a16', amazonAsin: 'B0DZJ4N8Y5', name: 'Apple iPad 11-inch (A16)', category: 'Tech', price: 'Check price', icon: '▣', image: 'https://www.apple.com/v/ipad-11/d/images/overview/design/modular_startframe__ecmd9ce9dsom_large.jpg', imageAlt: 'Apple iPad 11-inch with A16 chip', pressKitUrl: 'https://www.apple.com/newsroom/2025/03/apple-introduces-ipad-air-with-powerful-m3-chip-and-new-magic-keyboard/', bestFor: 'Streaming, browsing, school, and everyday productivity', why: '11-inch iPad with an A16 chip, 128GB starting storage, USB-C, and support for Apple Pencil.', watch: 'Accessories such as keyboards and Pencil add to the total cost.', url: 'https://www.apple.com/ipad-11/', dailyDealDate: '2026-09-20'
  },
  {
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
  },
  {
  },
  {
  },
  {
  },
  {
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
  },
  {
  },
  {
  },
  {
  },
  {
    slug: 'elf-halo-glow-liquid-filter', name: 'e.l.f. Halo Glow Liquid Filter', category: 'Beauty & Personal Care', price: 'Check price', icon: '✦', image: 'https://cdn.shopify.com/s/files/1/0661/2251/4520/files/83565_OpenA_V2_R_d02ae91d-8a71-4bba-bfbb-ab663a9b18f0.png?crop=center&height=450&v=1780430096&width=450', imageAlt: 'e.l.f. Halo Glow Liquid Filter makeup product', bestFor: 'Glow-focused makeup routines', why: 'A versatile complexion product aimed at adding a luminous finish and fitting into multiple makeup routines.', watch: 'Shade and finish are highly personal, so check swatches and the current shade range.', url: 'https://www.elfcosmetics.com/halo-glow-liquid-filter/'
  },
  {
  },
  {
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

];

export const products = productsCatalog.map((product) => {
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

