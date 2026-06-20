// Homepage content. Media references point at the source site's public asset
// URLs (same images/videos, as requested for the reference build); the copy is
// original placeholder text describing each slide/teaser.

const ASSET = 'https://in.dmgmori.com';

export const stageSlides = [
  {
    type: 'image',
    eyebrow: 'Event Platform',
    title: 'Experience our technologies live',
    text: 'Join our exhibitions, open houses and digital events worldwide.',
    cta: { label: 'Discover events', href: '/news-and-media' },
    img: `${ASSET}/resource/image/681856/stage_slider/xxlg/7/event-plattform-stageteaser-picture.jpg`,
  },
  {
    type: 'image',
    eyebrow: 'Energy',
    title: 'Precision for the energy industry',
    text: 'Complete machining solutions for demanding energy components.',
    cta: { label: 'Energy solutions', href: '/solutions/focus-industries' },
    img: `${ASSET}/resource/image/929758/stage_slider/xxlg/7/energy-stageteaser-picture.jpg`,
  },
  {
    type: 'video',
    eyebrow: 'Automation',
    title: 'Robo2Go — flexible automation',
    text: 'End-to-end processing with mobile, easy-to-program robot handling.',
    cta: { label: 'Explore automation', href: '/products/automation' },
    video: `${ASSET}/resource/blob/972784/78c2bb8501fa6447dae3bb6ca1ed51ff/robo2go-flexible-automation-for-end-to-end-processing-data.mp4`,
  },
  {
    type: 'image',
    eyebrow: 'Aerospace',
    title: 'Machining the future of flight',
    text: 'Five-axis precision for complex aerospace structures and engines.',
    cta: { label: 'Aerospace excellence', href: '/solutions/technology-excellence-/aerospace-excellence' },
    img: `${ASSET}/resource/image/884226/stage_slider/xxlg/8/aerospace-stageteaser-picture.jpg`,
  },
  {
    type: 'image',
    eyebrow: 'Digital Twin',
    title: 'Step into the Digital Twin Showroom',
    text: 'Explore our machines in an interactive, fully digital environment.',
    cta: { label: 'Enter the showroom', href: '/products/digitization' },
    img: `${ASSET}/resource/image/661444/stage_slider/xxlg/4/digital-twin-showroom-pfronten-stageteaser-picture.jpg`,
  },
];

export const highlightTeasers = [
  {
    eyebrow: 'Machines',
    title: 'Turning & Turn-Mill Centers',
    text: 'High-precision turning machines for complete machining in a single setup.',
    href: '/products/machines/turning',
    img: `${ASSET}/resource/image/884226/stage_slider/lg/8/aerospace-stageteaser-picture.jpg`,
  },
  {
    eyebrow: 'Digitization',
    title: 'My DMG MORI',
    text: 'Manage your machines, service requests and documents in one portal.',
    href: '/products/digitization',
    img: `${ASSET}/resource/image/661444/stage_slider/lg/4/digital-twin-showroom-pfronten-stageteaser-picture.jpg`,
  },
  {
    eyebrow: 'Automation',
    title: 'Customised Automation',
    text: 'Scalable handling systems engineered around your production needs.',
    href: '/products/automation',
    img: `${ASSET}/resource/image/929758/stage_slider/lg/7/energy-stageteaser-picture.jpg`,
  },
];

export const newsTeasers = [
  { tag: 'News', date: '12 Jun 2026', title: 'New turn-mill center expands the CTX series', href: '/news-and-media/news' },
  { tag: 'Customer Story', date: '04 Jun 2026', title: 'Reliable complete machining in finished part quality', href: '/news-and-media/customer-stories' },
  { tag: 'Blog', date: '28 May 2026', title: 'Intelligent ways to bring AI onto the shop floor', href: '/news-and-media/blog-and-stories' },
];
