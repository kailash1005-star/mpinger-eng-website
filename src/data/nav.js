// Navigation model for the mega-menu, derived from the source site's
// information architecture (5 top-level sections). Labels are short functional
// nav strings; structure mirrors the real URL taxonomy mapped during recon.

export const metaNav = {
  customerService: { label: 'Customer Service', href: '/customer-care' },
  language: 'en',
  region: 'India',
  login: { label: 'Login', href: '/dmg-mori-account' },
};

export const mainNav = [
  {
    label: 'Products',
    href: '/products',
    columns: [
      {
        title: 'Machines',
        links: [
          { label: 'Turning', href: '/products/machines/turning' },
          { label: 'Milling', href: '/products/machines/milling' },
          { label: 'Turn & Mill', href: '/products/machines/turning/turn-mill' },
          { label: 'Advanced Technologies', href: '/products/machines/advanced-technologies' },
          { label: 'Ultrasonic / Lasertec', href: '/products/machines/lasertec' },
        ],
      },
      {
        title: 'Automation',
        links: [
          { label: 'Workpiece Handling', href: '/products/automation/workpiece-handling' },
          { label: 'Pallet Handling', href: '/products/automation/pallet-handling' },
          { label: 'Robo2Go', href: '/products/automation/robo2go' },
          { label: 'Customised Solutions', href: '/products/automation/customised-automation-solutions' },
        ],
      },
      {
        title: 'Digitization',
        links: [
          { label: 'CELOS', href: '/products/digitization/celos' },
          { label: 'TULIP', href: '/products/digitization/tulip' },
          { label: 'My DMG MORI', href: '/products/digitization/my-dmg-mori' },
          { label: 'AI in Production', href: '/products/digitization/tulip/ai-in-production' },
        ],
      },
      {
        title: 'More',
        links: [
          { label: 'Controls', href: '/products/controls' },
          { label: 'Stock & Used Machines', href: '/products/stock-and-used' },
          { label: 'Qualified Products', href: '/products/dmg-mori-qualified-products' },
        ],
      },
    ],
  },
  {
    label: 'Solutions',
    href: '/solutions',
    columns: [
      {
        title: 'Focus Industries',
        links: [
          { label: 'Aerospace', href: '/solutions/focus-industries/aerospace' },
          { label: 'Medical', href: '/solutions/focus-industries/medical' },
          { label: 'Die & Mould', href: '/solutions/focus-industries/die-mould' },
          { label: 'Semiconductor', href: '/solutions/focus-industries/semiconductor' },
        ],
      },
      {
        title: 'Technology Excellence',
        links: [
          { label: 'Aerospace Excellence', href: '/solutions/technology-excellence-/aerospace-excellence' },
          { label: 'Gear Cutting', href: '/solutions/gear-cutting' },
          { label: 'Machining Transformation', href: '/solutions/machining-transformation' },
        ],
      },
      {
        title: 'Technology Partner',
        links: [
          { label: 'Schaeffler', href: '/solutions/technology-partner/schaeffler' },
          { label: 'Overview', href: '/solutions/technology-partner' },
        ],
      },
    ],
  },
  {
    label: 'Customer Care',
    href: '/customer-care',
    columns: [
      {
        title: 'Service',
        links: [
          { label: 'Maintenance & Repair', href: '/customer-care/maintenance-repair-overhaul' },
          { label: 'Retrofit', href: '/customer-care/maintenance-repair-overhaul/retrofit' },
          { label: 'Spare Parts', href: '/customer-care/spare-parts' },
        ],
      },
      {
        title: 'Training',
        links: [
          { label: 'Academy', href: '/customer-care/academy-' },
          { label: 'CNC Training', href: '/customer-care/training/cnc-training' },
        ],
      },
      {
        title: 'Finance',
        links: [{ label: 'DMG MORI Finance', href: '/customer-care/finance' }],
      },
    ],
  },
  {
    label: 'News & Media',
    href: '/news-and-media',
    columns: [
      {
        title: 'Newsroom',
        links: [
          { label: 'News', href: '/news-and-media/news' },
          { label: 'Customer Stories', href: '/news-and-media/customer-stories' },
          { label: 'Blog & Stories', href: '/news-and-media/blog-and-stories' },
          { label: 'Download Center', href: '/news-and-media/download-center' },
        ],
      },
    ],
  },
  {
    label: 'Company',
    href: '/company',
    columns: [
      {
        title: 'About',
        links: [
          { label: 'About Us', href: '/company/about-us' },
          { label: 'Locations', href: '/company/locations' },
          { label: 'Sustainability', href: '/company/sustainability' },
          { label: 'Sailing Team', href: '/company/dmg-mori-sailing-team' },
        ],
      },
      {
        title: 'Connect',
        links: [
          { label: 'Contact', href: '/company/contact' },
          { label: 'Newsletter', href: '/company/newsletter-subscription' },
          { label: 'Purchasing', href: '/company/purchasing' },
          { label: 'FAQ', href: '/company/faq' },
        ],
      },
    ],
  },
];

export const footerNav = [
  { key: 'contact', href: '/kontakt' },
  { key: 'imprint', href: '/impressum' },
  { key: 'privacy', href: '/datenschutzerklaerung' },
  { key: 'terms', href: '/agb' },
];

export const footerColumns = [
  {
    title: 'Produkte',
    links: [
      { label: 'Fräsen', href: '/products/machines/fraesen' },
      { label: 'Drehen', href: '/products/machines/drehen' },
      { label: 'Automation', href: '/products/automation' },
      { label: 'Messtechnik', href: '/products/messtechnik' },
    ],
  },
  {
    title: 'Solutions',
    links: [
      { label: 'Focus Industries', href: '/solutions/focus-industries' },
      { label: 'Technology Excellence', href: '/solutions/technology-excellence' },
    ],
  },
  {
    titleKey: 'company',
    links: [
      { key: 'about', href: '/ueber-uns' },
      { label: 'Locations', href: '/company/locations' },
      { key: 'contact', href: '/kontakt' },
    ],
  },
  {
    titleKey: 'legal',
    links: [
      { key: 'imprint', href: '/impressum' },
      { key: 'privacy', href: '/datenschutzerklaerung' },
      { key: 'terms', href: '/agb' },
    ],
  },
];

export const social = [
  { label: 'LinkedIn', href: 'https://www.linkedin.com/company/mpinger/', icon: 'linkedin' },
];
