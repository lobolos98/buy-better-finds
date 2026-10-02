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
    amazonAsin: 'B002MSN3QQ', image: 'https://ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B002MSN3QQ&Format=_SL500_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1', imageAlt: 'EltaMD UV Clear Broad-Spectrum SPF 46',
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

export const products = productsCatalog.filter((product) => product?.slug && product?.name && product?.category && product?.image).map((product) => {
  const amazonOverride = amazonImageOverrides[product.slug];
  const manufacturerOverride = manufacturerImageOverrides[product.slug];

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

