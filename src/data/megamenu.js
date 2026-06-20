// Navigation: real machine classification (from the machine park) under
// Products, plus Solutions and Company. Every path exists in the CMS.
export const megaNav = [
  {
    key: 'products', label: 'Produkte', href: '/products',
    children: [
      {
        label: 'Maschinen', href: '/products/machines',
        children: [
          {
            label: 'Fräsen', href: '/products/machines/fraesen',
            children: [
              { label: '5-Achs-Universalbearbeitung', href: '/products/machines/fraesen/5-achs-universal' },
              { label: 'Horizontalbearbeitung', href: '/products/machines/fraesen/horizontalbearbeitung' },
              { label: 'Vertikalfräsen', href: '/products/machines/fraesen/vertikalfraesen' },
            ],
          },
          {
            label: 'Drehen', href: '/products/machines/drehen',
            children: [
              { label: 'Universaldrehmaschinen', href: '/products/machines/drehen/universaldrehmaschinen' },
              { label: 'Großdrehmaschinen', href: '/products/machines/drehen/grossdrehmaschinen' },
            ],
          },
        ],
      },
      {
        label: 'Automation', href: '/products/automation',
        children: [
          { label: 'PH Cell 2000', href: '/products/automation/ph-cell-2000' },
          { label: 'PH Cell 300', href: '/products/automation/ph-cell-300' },
          { label: 'Robo2Go', href: '/products/automation/robo2go' },
        ],
      },
      {
        label: 'Messtechnik', href: '/products/messtechnik',
        children: [
          { label: 'Keyence XM-5000', href: '/products/messtechnik/keyence-xm-5000' },
        ],
      },
    ],
  },
  {
    key: 'solutions', label: 'Solutions', href: '/solutions',
    children: [
      {
        label: 'Focus Industries', href: '/solutions/focus-industries',
        children: [
          { label: 'Aerospace', href: '/solutions/focus-industries/aerospace' },
          { label: 'Medical', href: '/solutions/focus-industries/medical' },
        ],
      },
      {
        label: 'Technology Excellence', href: '/solutions/technology-excellence',
        children: [
          { label: 'Aerospace Excellence', href: '/solutions/technology-excellence/aerospace-excellence' },
        ],
      },
    ],
  },
  {
    key: 'company', label: 'Company', href: '/company',
    children: [
      { key: 'about', label: 'About Us', href: '/ueber-uns' },
      { label: 'Locations', href: '/company/locations' },
      { key: 'contact', label: 'Contact', href: '/kontakt' },
    ],
  },
];
