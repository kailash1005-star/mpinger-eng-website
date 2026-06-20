// Newsroom list for T7 overview. Original placeholder copy; public media URLs.
const ASSET = 'https://in.dmgmori.com';
const pic = (id, slot, v, name) => `${ASSET}/resource/image/${id}/stage_slider/${slot}/${v}/${name}.jpg`;

export const filters = ['All', 'News', 'Customer Story', 'Blog'];

export const items = [
  { tag: 'News', date: '12 Jun 2026', title: 'New turn-mill center extends the CTX TC series', excerpt: 'A more powerful spindle and larger work area for complete machining.', href: '/news-and-media/news/ctx-tc-series-extension', image: pic('884226', 'lg', '8', 'aerospace-stageteaser-picture') },
  { tag: 'Customer Story', date: '04 Jun 2026', title: 'Reliable complete machining in finished-part quality', excerpt: 'Five setups consolidated into one, with higher first-pass yield.', href: '/news-and-media/customer-stories/complete-machining', image: pic('661444', 'lg', '4', 'digital-twin-showroom-pfronten-stageteaser-picture') },
  { tag: 'Blog', date: '28 May 2026', title: 'Intelligent ways to bring AI onto the shop floor', excerpt: 'Incremental steps to apply machine data and AI on the line.', href: '/news-and-media/blog-and-stories/ai-on-the-shop-floor', image: pic('929758', 'lg', '7', 'energy-stageteaser-picture') },
  { tag: 'News', date: '20 May 2026', title: 'Expanded automation options for the CTX series', excerpt: 'New handling systems enable unattended overnight production.', href: '/news-and-media/news', image: pic('972784', 'lg', '7', 'event-plattform-stageteaser-picture') },
  { tag: 'Customer Story', date: '11 May 2026', title: 'Aerospace supplier scales five-axis capacity', excerpt: 'Meeting tight tolerances on complex structural components.', href: '/news-and-media/customer-stories', image: pic('884226', 'lg', '8', 'aerospace-stageteaser-picture') },
  { tag: 'Blog', date: '02 May 2026', title: 'Why connectivity is the foundation of digital manufacturing', excerpt: 'Turning controller data into actionable shop-floor insight.', href: '/news-and-media/blog-and-stories', image: pic('661444', 'lg', '4', 'digital-twin-showroom-pfronten-stageteaser-picture') },
  { tag: 'News', date: '24 Apr 2026', title: 'Open House showcases the latest machining technologies', excerpt: 'Live demonstrations across turning, milling and automation.', href: '/news-and-media/news', image: pic('929758', 'lg', '7', 'energy-stageteaser-picture') },
  { tag: 'Blog', date: '15 Apr 2026', title: 'Sustainable machining: doing more with less energy', excerpt: 'Energy-saving features that lower cost per part.', href: '/news-and-media/blog-and-stories', image: pic('972784', 'lg', '7', 'event-plattform-stageteaser-picture') },
  { tag: 'Customer Story', date: '03 Apr 2026', title: 'Medical manufacturer automates a high-mix line', excerpt: 'Flexible automation for small batch, high-variety production.', href: '/news-and-media/customer-stories', image: pic('884226', 'lg', '8', 'aerospace-stageteaser-picture') },
];
