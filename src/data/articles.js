// Article content for T4 (news), T5 (customer story), T6 (blog). All copy is
// original placeholder text; media references the source's public asset URLs.

const ASSET = 'https://in.dmgmori.com';
const pic = (id, slot, v, name) => `${ASSET}/resource/image/${id}/stage_slider/${slot}/${v}/${name}.jpg`;

export const newsArticle = {
  tag: 'News',
  date: '12 June 2026',
  readingTime: '4 min read',
  title: 'New turn-mill center extends the CTX TC series',
  intro:
    'The latest addition to the CTX TC family brings a more powerful turn-mill spindle and a larger work area for complete machining of demanding components in a single setup.',
  hero: pic('884226', 'xlg', '8', 'aerospace-stageteaser-picture'),
  heroCaption: 'Complete six-sided machining on a single platform.',
  breadcrumb: [
    { label: 'News & Media', href: '/news-and-media' },
    { label: 'News', href: '/news-and-media/news' },
    { label: 'CTX TC series extension' },
  ],
  body: [
    { type: 'text', text: 'Manufacturers of complex rotationally symmetric parts increasingly need to combine turning and milling in one clamping to cut throughput times and improve accuracy. The new model answers that need with a redesigned turn-mill spindle and a generously dimensioned work area.' },
    { type: 'heading', text: 'More power where it matters' },
    { type: 'text', text: 'A high-torque integrated spindle delivers strong cutting performance across roughing and finishing, while linear scales on the principal axes support repeatable precision over long production runs.' },
    { type: 'image', src: pic('929758', 'lg', '7', 'energy-stageteaser-picture'), caption: 'The enlarged work area accommodates longer and heavier workpieces.' },
    { type: 'facts', items: [
      { value: '4,000 Nm', label: 'Max. spindle torque' },
      { value: '1,255 mm', label: 'Turning length' },
      { value: '6-sided', label: 'Complete machining' },
    ]},
    { type: 'text', text: 'Combined with flexible automation and digital setup tools, the platform helps shops move toward unattended production without sacrificing flexibility.' },
  ],
};

export const customerStory = {
  tag: 'Customer Story',
  date: '04 June 2026',
  readingTime: '6 min read',
  title: 'Reliable complete machining in finished-part quality',
  intro:
    'A precision contract manufacturer consolidated multiple operations onto a single turn-mill platform — and cut setup time dramatically while raising first-pass yield.',
  hero: pic('661444', 'xlg', '4', 'digital-twin-showroom-pfronten-stageteaser-picture'),
  heroCaption: 'From raw bar to finished part in one clamping.',
  breadcrumb: [
    { label: 'News & Media', href: '/news-and-media' },
    { label: 'Customer Stories', href: '/news-and-media/customer-stories' },
    { label: 'Complete machining in finished-part quality' },
  ],
  body: [
    { type: 'text', text: 'Facing rising demand for tighter tolerances and shorter lead times, the team needed to remove handling steps between machines. Consolidating turning and milling onto one platform eliminated re-clamping errors and freed up floor space.' },
    { type: 'quote', text: 'We went from five setups to one. Quality is more consistent and our operators can run several machines at once.', cite: 'Head of Production' },
    { type: 'heading', text: 'Results that compound' },
    { type: 'facts', items: [
      { value: '-60%', label: 'Setup time' },
      { value: '+18%', label: 'First-pass yield' },
      { value: '5 → 1', label: 'Setups per part' },
    ]},
    { type: 'text', text: 'With automation handling part loading overnight, the shop now runs lights-out shifts and reinvests the saved capacity into new programs.' },
  ],
};

export const blogPost = {
  tag: 'Blog',
  date: '28 May 2026',
  readingTime: '5 min read',
  title: 'Intelligent ways to bring AI onto the shop floor',
  intro:
    'Practical, incremental steps to apply machine data and AI on the production line — without a multi-year platform project.',
  hero: pic('884226', 'xlg', '8', 'aerospace-stageteaser-picture'),
  breadcrumb: [
    { label: 'News & Media', href: '/news-and-media' },
    { label: 'Blog & Stories', href: '/news-and-media/blog-and-stories' },
    { label: 'AI on the shop floor' },
  ],
  body: [
    { type: 'text', text: 'AI on the shop floor does not have to start with a moonshot. The fastest wins come from connecting the machines you already own and acting on the signals they emit every second.' },
    { type: 'heading', text: 'Start with connectivity' },
    { type: 'text', text: 'Secure machine connectivity turns raw controller data into a clean stream you can analyze. From there, simple models flag anomalies, predict tool wear, and surface bottlenecks operators can act on immediately.' },
    { type: 'image', src: pic('972784', 'lg', '7', 'event-plattform-stageteaser-picture'), caption: 'Connected machines feed a continuous data loop.' },
    { type: 'text', text: 'Treat each use case as an experiment: measure, learn, and expand only what pays off. That keeps risk low and adoption high.' },
  ],
};

export const relatedNews = [
  { tag: 'Customer Story', date: 'Jun 2026', title: 'Complete machining in finished-part quality', excerpt: 'How one shop consolidated five setups into one.', href: '/news-and-media/customer-stories/complete-machining', image: pic('661444', 'lg', '4', 'digital-twin-showroom-pfronten-stageteaser-picture') },
  { tag: 'Blog', date: 'May 2026', title: 'Intelligent ways to bring AI onto the shop floor', excerpt: 'Incremental steps to apply machine data and AI.', href: '/news-and-media/blog-and-stories/ai-on-the-shop-floor', image: pic('884226', 'lg', '8', 'aerospace-stageteaser-picture') },
  { tag: 'News', date: 'May 2026', title: 'Expanded automation options for the CTX series', excerpt: 'New handling systems for unattended production.', href: '/news-and-media/news', image: pic('929758', 'lg', '7', 'energy-stageteaser-picture') },
];
