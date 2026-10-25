// Piscifun products added to existing shopping categories.
// Links use Piscifun's Awin advertiser ID and Buy Better Finds publisher ID.
// Verify live price, stock, and image availability before promoting a specific option.
const tracked = (url) => `https://www.awin1.com/cread.php?awinmid=89509&awinaffid=3119041&ued=${encodeURIComponent(url)}`;

export const piscifunProducts = [
  {
    slug: 'piscifun-torrent-lite-spinning-combo',
    name: 'Piscifun Torrent Lite Twin-Tip Spinning Combo',
    category: 'Outdoor',
    price: 'Check price',
    icon: '🎣',
    image: 'https://www.piscifun.com/cdn/shop/files/Frame6.jpg?v=1790064177&width=900',
    imageAlt: 'Piscifun Torrent Lite twin-tip spinning rod and reel combo in teal and black',
    bestFor: 'Freshwater anglers who want a matched spinning setup with a spare rod tip',
    why: 'Two-piece IM6 graphite rod paired with a spinning reel, with a backup tip included. Compare the exact rod length, power, action, reel size, line rating and lure rating before choosing.',
    watch: 'Manufacturer-published specifications only; not hands-on tested. Confirm the current price and configuration on Piscifun’s listing.',
    url: 'https://www.piscifun.com/products/torrent-lite-twin-tip-spinning-rod-and-reel-combo',
    affiliateUrl: tracked('https://www.piscifun.com/products/torrent-lite-twin-tip-spinning-rod-and-reel-combo'),
    affiliateLabel: 'Shop Piscifun'
  },
  {
    slug: 'piscifun-torrent-lite-baitcasting-combo',
    name: 'Piscifun Torrent Lite Twin-Tip Baitcasting Combo',
    category: 'Outdoor',
    price: 'Check price',
    icon: '🎣',
    image: 'https://www.piscifun.com/cdn/shop/files/Frame27.jpg?v=1790065218&width=900',
    imageAlt: 'Piscifun Torrent Lite baitcasting rod and reel combo close-up',
    bestFor: 'Anglers who prefer baitcasting and want a matched rod and reel',
    why: 'A two-piece combo option with a low-profile baitcasting reel and backup rod tip. Compare retrieve-hand orientation, rod power/action, and the learning curve before buying.',
    watch: 'Baitcasting takes practice to manage spool control. Confirm current options and published specifications on Piscifun’s listing.',
    url: 'https://www.piscifun.com/products/torrent-lite-twin-tip-baitcasting-rod-and-reel-combo',
    affiliateUrl: tracked('https://www.piscifun.com/products/torrent-lite-twin-tip-baitcasting-rod-and-reel-combo'),
    affiliateLabel: 'Shop Piscifun'
  },
  {
    slug: 'piscifun-carbon-prism-spinning-reel',
    name: 'Piscifun Carbon Prism Spinning Reel',
    category: 'Outdoor',
    price: 'Check price',
    icon: '🎣',
    image: 'https://www.piscifun.com/cdn/shop/files/carbonprismViolet.jpg?v=1684151584&width=700',
    imageAlt: 'Piscifun Carbon Prism purple spinning fishing reel',
    bestFor: 'Anglers choosing a standalone spinning reel for a compatible rod',
    why: 'A separate spinning-reel option for anglers who want to choose the rod and reel independently. Match reel size, line capacity, gear ratio and drag needs to your fishing style.',
    watch: 'Specifications vary by size and configuration. Confirm the exact model and current price on Piscifun’s listing.',
    url: 'https://www.piscifun.com/products/carbon-prism-spinning-reels-ultralight-seafoam-violet',
    affiliateUrl: tracked('https://www.piscifun.com/products/carbon-prism-spinning-reels-ultralight-seafoam-violet'),
    affiliateLabel: 'Shop Piscifun'
  },
  {
    slug: 'piscifun-carbon-r1-fishing-rod',
    name: 'Piscifun Carbon R1 Fishing Rod',
    category: 'Outdoor',
    price: 'Check price',
    icon: '🎣',
    image: 'https://www.piscifun.com/cdn/shop/files/RD012-_02.png?v=1775010066&width=800',
    imageAlt: 'Piscifun Carbon R1 graphite fishing rod',
    bestFor: 'Anglers building a setup by selecting a rod and reel separately',
    why: 'A standalone rod line to compare if you prefer to choose your reel separately. Select the spinning or casting version to match the reel, then check rod length, power, action, line rating and lure rating.',
    watch: 'Not a like-for-like budget alternative to the Torrent Lite combo. Verify the selected rod type and current configuration before purchase.',
    url: 'https://www.piscifun.com/products/carbon-r1-spinning-rod',
    affiliateUrl: tracked('https://www.piscifun.com/products/carbon-r1-spinning-rod'),
    affiliateLabel: 'Shop Piscifun'
  },
  {
    slug: 'piscifun-fishing-line-spooler-kit',
    name: 'Piscifun Fishing Line Spooler Kit',
    category: 'Tools & DIY',
    price: 'Check price',
    icon: '⚙',
    image: 'https://www.piscifun.com/cdn/shop/files/1-_B_8139eb7f-33f3-4326-8cd7-6469a639403d.jpg?v=1750987744&width=700',
    imageAlt: 'Piscifun fishing line spooler kit for winding line onto reels',
    bestFor: 'Anglers who regularly spool or replace fishing line',
    why: 'A dedicated tool intended to help manage line while spooling. Consider it if you frequently change line; occasional anglers may be fine with a simpler approach.',
    watch: 'Check compatibility with your line spool and reel, and confirm the current kit contents and price.',
    url: 'https://www.piscifun.com/products/fishing-line-spooler-kit',
    affiliateUrl: tracked('https://www.piscifun.com/products/fishing-line-spooler-kit'),
    affiliateLabel: 'Shop Piscifun'
  },
  {
    slug: 'piscifun-six-piece-fishing-tool-kit',
    name: 'Piscifun 6-Piece Fishing Tool Kit',
    category: 'Tools & DIY',
    price: 'Check price',
    icon: '⚙',
    image: 'https://www.piscifun.com/cdn/shop/files/1TL031.jpg?v=1755855652&width=700',
    imageAlt: 'Piscifun six-piece fishing tool kit with pliers and fishing accessories',
    bestFor: 'Anglers looking to assemble several basic fishing tools in one purchase',
    why: 'A multi-tool bundle that Piscifun lists with items such as pliers, braid scissors, a line spooler, fish gripper, fillet knife and lanyard. Compare the included pieces with the tools you already own.',
    watch: 'A bundle is not automatically better value if you only need one or two tools. Verify current contents and safety guidance on the product page.',
    url: 'https://www.piscifun.com/products/piscifun-6pcs-fishing-tool-kit',
    affiliateUrl: tracked('https://www.piscifun.com/products/piscifun-6pcs-fishing-tool-kit'),
    affiliateLabel: 'Shop Piscifun'
  }
];
