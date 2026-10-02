const halloweenProducts = [
  {
    slug: 'halloween-20-inch-plush-spider',
    name: '20-inch Plush Spider Halloween Decorative Prop',
    category: 'Seasonal & Holidays', price: '$5.00', icon: '🕷️',
    image: 'https://target.scene7.com/is/image/Target/GUEST_aef56166-4d67-47bf-b6ab-a9d72fedd860?fmt=pjpeg&hei=900&wid=900',
    imageAlt: '20-inch plush spider Halloween decorative prop',
    bestFor: 'Indoor Halloween displays and smaller spooky scenes',
    why: 'An inexpensive, bendable spider prop that adds visual impact without taking up much space.',
    watch: 'Target lists it for indoor use; protect fabric props from weather.',
    url: 'https://www.target.com/p/-/A-81063458'
  },
  {
    slug: 'halloween-50-inch-plush-spider',
    name: '50-inch Plush Spider Halloween Decorative Prop',
    category: 'Seasonal & Holidays', price: '$10.00', icon: '🕷️',
    image: 'https://target.scene7.com/is/image/Target/GUEST_af498e7c-5052-4936-b9f5-1277c23777fe?fmt=pjpeg&hei=900&wid=900',
    imageAlt: '50-inch plush spider Halloween decorative prop',
    bestFor: 'Larger indoor or sheltered Halloween displays',
    why: 'A larger fabric spider with poseable legs that can anchor a themed display.',
    watch: 'The fabric construction is better protected from direct outdoor weather.',
    url: 'https://www.target.com/p/50-34-plush-spider-black-halloween-decorative-prop-hyde-38-eek-boutique-8482/-/A-81063462'
  },
  {
    slug: 'halloween-80-inch-plush-spider',
    name: '80-inch Plush Spider XXL Halloween Decorative Prop',
    category: 'Seasonal & Holidays', price: '$20.00', icon: '🕷️',
    image: 'https://target.scene7.com/is/image/Target/GUEST_c02f6777-c9b4-4b74-a286-b23a1d72dfd2?fmt=pjpeg&hei=900&wid=900',
    imageAlt: '80-inch plush spider XXL Halloween decorative prop',
    bestFor: 'Large indoor Halloween scenes and statement displays',
    why: 'An oversized spider designed to become a focal point when paired with webbing and smaller props.',
    watch: 'Target lists this version for indoor use.',
    url: 'https://www.target.com/p/80-34-plush-spider-halloween-decorative-prop-hyde-38-eek-boutique-8482/-/A-81063472'
  },
  {
    slug: 'halloween-4pc-13-inch-skeletons',
    name: '4-Piece 13-inch Poseable Skeletons',
    category: 'Seasonal & Holidays', price: '$10.00', icon: '💀',
    image: 'https://target.scene7.com/is/image/Target/GUEST_1272c748-bb35-4a53-beb1-44b851d6a9ec?fmt=pjpeg&hei=900&wid=900',
    imageAlt: 'Four 13-inch poseable Halloween skeleton decorations',
    bestFor: 'Indoor and outdoor graveyard scenes',
    why: 'Four small poseable skeletons make it easy to build a fuller display instead of relying on one prop.',
    watch: 'Small props work best when grouped with larger focal pieces.',
    url: 'https://www.target.com/p/4pc-10-34-skeletons-halloween-decorative-props-hyde-38-eek-boutique-8482/-/A-89600195'
  },
  {
    slug: 'halloween-ceramic-ghost-set',
    name: '3-Piece Shiny Ceramic Ghosts Decorative Set',
    category: 'Seasonal & Holidays', price: '$5.00', icon: '👻',
    image: 'https://target.scene7.com/is/image/Target/GUEST_3a73e611-a6f1-4132-8731-49cbd7a41612?fmt=pjpeg&hei=900&wid=900',
    imageAlt: 'Three-piece shiny ceramic ghost Halloween decorative set',
    bestFor: 'Tabletops, mantels, shelves, and subtle Halloween decor',
    why: 'A small reusable ceramic set that brings Halloween into everyday home decor without taking over a room.',
    watch: 'These are tabletop accents rather than outdoor statement pieces.',
    url: 'https://www.target.com/p/3pc-shiny-ceramic-ghosts-decorative-accent-set-hyde-and-eek-boutique-8482/-/A-94895169'
  },
  {
    slug: 'halloween-lit-pumpkin-timer',
    name: '10.75-inch Lit Pumpkin Jack-O-Lantern with Timer',
    category: 'Seasonal & Holidays', price: '$10.00', icon: '🎃',
    image: 'https://target.scene7.com/is/image/Target/GUEST_6ed9e5a8-01c9-45f6-8495-52b57917a38d?fmt=pjpeg&hei=900&wid=900',
    imageAlt: 'Lit black Halloween jack-o-lantern with timer',
    bestFor: 'Mantels, entryways, tables, and sheltered porches',
    why: 'A compact lit pumpkin with a timer provides an easy evening glow without plugging in a cord.',
    watch: 'Requires batteries and is intended for indoor or sheltered outdoor use.',
    url: 'https://www.target.com/p/8-75-34-classic-terra-cotta-like-lit-pumpkin-jack-o-39-lantern-halloween-decorative-prop-black-160-hyde-and-eek-boutique-8482/-/A-94981855'
  },
  {
    slug: 'halloween-haunted-projector',
    name: '12-inch Haunted Halloween Projector',
    category: 'Seasonal & Holidays', price: '$25.00', icon: '👻',
    image: 'https://target.scene7.com/is/image/Target/GUEST_278803a4-9c19-43ec-a312-20e90bd0b6a4?fmt=pjpeg&hei=900&wid=900',
    imageAlt: 'Haunted Halloween projector decorative prop',
    bestFor: 'Indoor Halloween atmosphere and animated effects',
    why: 'A compact projector adds motion and imagery to a Halloween setup without requiring a large prop.',
    watch: 'Target lists it for indoor use only and it runs on batteries.',
    url: 'https://www.target.com/p/haunted-projector-halloween-decorative-prop-black-hyde-and-eek-boutique-8482/-/A-93350775'
  },
  {
    slug: 'halloween-60-inch-poseable-skeleton',
    name: '60-inch Multi Pose-N-Stay Poseable Skeleton',
    category: 'Seasonal & Holidays', price: '$25.00', icon: '💀',
    image: 'https://target.scene7.com/is/image/Target/GUEST_9aeb2c03-885e-4206-b1d7-1f9664ee278f?fmt=pjpeg&hei=900&wid=900',
    imageAlt: '60-inch poseable life-size Halloween skeleton',
    bestFor: 'Porches, entryways, chairs, and graveyard displays',
    why: 'A life-size poseable skeleton gives you a reusable centerpiece that can be posed differently each Halloween.',
    watch: 'It is unlit, so add your own lighting if you want a nighttime focal point.',
    url: 'https://www.target.com/p/60-34-multi-pose-n-stay-poseable-lifesize-skeleton-halloween-decorative-prop-off-white-160-hyde-and-eek-boutique-8482/-/A-94895288'
  },
  {
    slug: 'halloween-animated-doorbell-eye',
    name: '8-inch Animated Doorbell with Eye',
    category: 'Seasonal & Holidays', price: '$15.00', icon: '👁️',
    image: 'https://target.scene7.com/is/image/Target/GUEST_3dc3719e-6e93-4d12-a355-d65ca4ccfc54?fmt=pjpeg&hei=900&wid=900',
    imageAlt: 'Animated Halloween doorbell with moving eye',
    bestFor: 'Front-door Halloween displays and trick-or-treaters',
    why: 'A small sound-activated prop adds movement, light, and spooky sound without needing a large display.',
    watch: 'It is intended for sheltered use and is not a replacement for a real doorbell.',
    url: 'https://www.target.com/p/animated-doorbell-with-eye-halloween-decorative-prop-hyde-38-eek-boutique-8482/-/A-83940532'
  },
  {
    slug: 'halloween-9ft-eerie-fabric',
    name: '9-foot Eerie Fabric Halloween Prop',
    category: 'Seasonal & Holidays', price: '$5.00', icon: '🕸️',
    image: 'https://target.scene7.com/is/image/Target/GUEST_1f81351e-0846-4f72-94c5-5b648a9c22b0?fmt=pjpeg&hei=900&wid=900',
    imageAlt: 'Nine-foot eerie fabric Halloween decoration',
    bestFor: 'Fast, inexpensive spooky backdrop decorating',
    why: 'A simple fabric prop can transform a doorway, mantel, wall, or sheltered porch with minimal setup.',
    watch: 'Fabric decor is best protected from prolonged weather exposure.',
    url: 'https://www.target.com/p/9-39-eerie-fabric-black-halloween-decorative-prop-hyde-38-eek-boutique-8482/-/A-81063747'
  },
  {
    slug: 'halloween-36ft-eerie-fabric',
    name: '36-foot Jumbo Eerie Fabric Halloween Prop',
    category: 'Seasonal & Holidays', price: '$10.00', icon: '🕸️',
    image: 'https://target.scene7.com/is/image/Target/GUEST_a45b1c08-067f-46d9-81a2-4c74887f95cc?fmt=pjpeg&hei=900&wid=900',
    imageAlt: '36-foot jumbo eerie fabric Halloween decoration',
    bestFor: 'Large walls, porches, windows, and themed scenes',
    why: 'A long stretch of eerie fabric lets you cover more space and create a fuller haunted-house backdrop.',
    watch: 'Plan how you will hang and secure the fabric before decorating.',
    url: 'https://www.target.com/p/36-39-jumbo-eerie-fabric-black-halloween-decorative-prop-hyde-38-eek-boutique-8482/-/A-81063468'
  },
  {
    slug: 'halloween-peeking-cauldron',
    name: '7.3-inch Peeking Cauldron with Animated Skeleton Hands',
    category: 'Seasonal & Holidays', price: '$15.00', icon: '🧙',
    image: 'https://target.scene7.com/is/image/Target/GUEST_64a4bb40-b4b5-431b-9da4-41a4d5dc8e7b?fmt=pjpeg&hei=900&wid=900',
    imageAlt: 'Animated Halloween cauldron with skeleton hands and eyeballs',
    bestFor: 'Indoor tabletops, mantels, and entryways',
    why: 'A compact animated prop combines movement, light, sound, and a Halloween centerpiece in a small footprint.',
    watch: 'Target lists it for indoor use and there is no volume-control option listed.',
    url: 'https://www.target.com/p/7-3-34-peeking-cauldron-with-animated-skeleton-hands-holding-eye-balls-halloween-decorative-prop-black-hyde-and-eek-boutique-8482/-/A-94895359'
  },
  {
    slug: 'halloween-raven-bones-blow-mold',
    name: '10.6-inch Lit Raven and Bones Blow Mold',
    category: 'Seasonal & Holidays', price: '$10.00', icon: '🐦‍⬛',
    image: 'https://target.scene7.com/is/image/Target/GUEST_0055dde7-8477-445e-9ea9-04b0c969ffbf?fmt=pjpeg&hei=900&wid=900',
    imageAlt: 'Lit raven and bones Halloween blow mold',
    bestFor: 'Gothic tabletop and sheltered outdoor decor',
    why: 'A small lit blow-mold raven adds a classic gothic accent without requiring a large display.',
    watch: 'Designed for indoor or sheltered outdoor use and battery power.',
    url: 'https://www.target.com/p/10-6-34-lit-raven-and-bones-blow-mold-halloween-decorative-prop-black-hyde-and-eek-boutique-8482/-/A-94895146'
  },
  {
    slug: 'halloween-raven-ribcage-blow-mold',
    name: '17.9-inch Raven on Ribcage Bones Blow Mold',
    category: 'Seasonal & Holidays', price: '$20.00', icon: '🐦‍⬛',
    image: 'https://target.scene7.com/is/image/Target/GUEST_10c27feb-ea11-434b-89ee-c7fadb795f96?fmt=pjpeg&hei=900&wid=900',
    imageAlt: 'Raven on ribcage bones Halloween blow mold',
    bestFor: 'Mantels, entry tables, and sheltered porch displays',
    why: 'A larger lit raven-and-bones silhouette provides a stronger gothic accent than a small tabletop prop.',
    watch: 'Requires batteries and is intended for indoor or sheltered outdoor use.',
    url: 'https://www.target.com/p/17-9-34-raven-on-ribcage-bones-sophisticated-blow-mold-halloween-decorative-prop-black-hyde-and-eek-boutique-8482/-/A-94895116'
  },
  {
    slug: 'halloween-monster-house',
    name: '11-inch Monster House Halloween Decorative Prop',
    category: 'Seasonal & Holidays', price: '$25.00', icon: '🏚️',
    image: 'https://target.scene7.com/is/image/Target/GUEST_9d185563-b6e6-43d5-aa91-609be092b8b7?fmt=pjpeg&hei=900&wid=900',
    imageAlt: 'Monster House Halloween decorative prop',
    bestFor: 'Tabletop Halloween scenes and haunted-house displays',
    why: 'A compact haunted-house accent can become the center of a smaller tabletop Halloween scene.',
    watch: 'Check the current battery and placement details before ordering.',
    url: 'https://www.target.com/p/11-34-monster-house-halloween-decorative-prop-black-hyde-and-eek-boutique-8482/-/A-94895087'
  },
  {
    slug: 'halloween-jack-skeleton-blow-mold',
    name: '17.7-inch Jack with Skeleton Body Blow Mold',
    category: 'Seasonal & Holidays', price: '$20.00', icon: '🎃',
    image: 'https://target.scene7.com/is/image/Target/GUEST_8e7c8050-8c12-4002-aa27-7f7378483781?fmt=pjpeg&hei=900&wid=900',
    imageAlt: 'Jack-o-lantern with skeleton body Halloween blow mold',
    bestFor: 'Indoor and sheltered outdoor Halloween displays',
    why: 'A light-up jack-o-lantern and skeleton combination gives you a recognizable Halloween focal point with a built-in timer.',
    watch: 'Requires three AA batteries and is intended for indoor or sheltered outdoor use.',
    url: 'https://www.target.com/p/17-7-34-jack-with-skele-body-blow-mold-halloween-decorative-prop-black-hyde-and-eek-boutique-8482/-/A-94895067'
  },
  {
    slug: 'halloween-ultra-skelly-65',
    name: '6.5 FT Grave & Bones Animated LED App-Controlled Ultra Skelly',
    category: 'Seasonal & Holidays', price: '$279.00', icon: '💀',
    image: 'https://images.thdstatic.com/productImages/86e7919d-5a68-4ba5-addd-38964b225b3f/svn/home-accents-holiday-halloween-animatronics-and-giants-25sv24690-64_600.jpg',
    imageAlt: '6.5-foot animated app-controlled Ultra Skelly Halloween decoration',
    bestFor: 'High-impact outdoor Halloween displays',
    why: 'App-controlled movement, customizable sounds, voice-changing effects, and LCD eyes make this a more interactive centerpiece.',
    watch: 'At $279, this is a major seasonal purchase; storage and assembly also matter.',
    url: 'https://www.homedepot.com/p/333508046'
  },
  {
    slug: 'lego-halloween-pumpkin-lantern-40872',
    name: 'LEGO Halloween Pumpkin Lantern',
    category: 'Seasonal & Holidays', price: '$29.99', icon: '🎃',
    image: 'https://www.lego.com/cdn/cs/set/assets/blt8a5b33fbe2efbe39/blt11ecdc92ea69a278-40872_Prod_en-gb.png?dpr=1&fit=bounds&format=jpg&height=900&quality=80&width=900',
    imageAlt: 'LEGO Halloween Pumpkin Lantern',
    bestFor: 'Family building projects and reusable Halloween decor',
    why: 'A 323-piece seasonal build with a light brick, spider, and glow-in-the-dark ghost that can become a reusable Halloween decoration.',
    watch: 'LEGO lists the 2026 set as shipping by October 17, so delivery timing matters for Halloween.',
    url: 'https://www.lego.com/en-us/product/halloween-pumpkin-lantern-40872'
  },
  {
    slug: 'lego-halloween-skull-candle-40883',
    name: 'LEGO Halloween Skull Candle',
    category: 'Seasonal & Holidays', price: '$19.99', icon: '💀',
    image: 'https://www.lego.com/cdn/cs/set/assets/blt7770c776f7bec640/blt1970f5c3e7253491-40883_Prod_en-gb.png?dpr=1&fit=bounds&format=jpg&height=900&quality=80&width=900',
    imageAlt: 'LEGO Halloween Skull Candle',
    bestFor: 'Halloween gifts, family builds, and seasonal decor',
    why: 'A 204-piece 2026 LEGO Halloween set with glow-in-the-dark eyes, a gold tooth, spiders, and a candle-topped skull.',
    watch: 'This is a build-and-display product, so its value depends on enjoying the construction as well as the decor.',
    url: 'https://www.lego.com/en-us/product/halloween-skull-candle-40883'
  },
  {
    slug: 'lego-nightmare-before-christmas-21351',
    name: 'LEGO Disney Tim Burton’s The Nightmare Before Christmas',
    category: 'Seasonal & Holidays', price: '$199.99', icon: '🎃',
    image: 'https://www.lego.com/cdn/cs/set/assets/blta1405340d716cd20/21351_Prod.png?dpr=1&fit=bounds&format=jpg&height=900&quality=80&width=900',
    imageAlt: 'LEGO Disney Tim Burton’s The Nightmare Before Christmas set',
    bestFor: 'Adult builders, collectors, and Halloween-to-Christmas display',
    why: 'A 2,193-piece display set spanning Halloween Town and Christmas Town with six minifigures plus Zero and The Mayor.',
    watch: 'At $199.99, this is a collector-level purchase rather than a casual Halloween decoration.',
    url: 'https://www.lego.com/en-us/product/disney-tim-burtons-the-nightmare-before-christmas-21351'
  }
];

export { halloweenProducts };
