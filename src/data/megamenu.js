// Navigation: real machine classification under Products, plus Solutions and
// Company. Every node carries a German `label` (primary) and an English `en`
// label; the Header picks the right one per locale. Every path exists in the CMS.
export const megaNav = [
  {
    key: 'products', label: 'Produkte', en: 'Products', href: '/products',
    children: [
      {
        label: 'Maschinen', en: 'Machines', href: '/products/machines',
        children: [
          {
            label: 'Fräsen', en: 'Milling', href: '/products/machines/fraesen',
            children: [
              { label: '5-Achs-Universalbearbeitung', en: '5-Axis Universal Machining', href: '/products/machines/fraesen/5-achs-universal' },
              { label: 'Horizontalbearbeitung', en: 'Horizontal Machining', href: '/products/machines/fraesen/horizontalbearbeitung' },
              { label: 'Vertikalfräsen', en: 'Vertical Milling', href: '/products/machines/fraesen/vertikalfraesen' },
            ],
          },
          {
            label: 'Drehen', en: 'Turning', href: '/products/machines/drehen',
            children: [
              { label: 'Universaldrehmaschinen', en: 'Universal Lathes', href: '/products/machines/drehen/universaldrehmaschinen' },
              { label: 'Großdrehmaschinen', en: 'Large Turning Machines', href: '/products/machines/drehen/grossdrehmaschinen' },
            ],
          },
        ],
      },
      {
        label: 'Automation', en: 'Automation', href: '/products/automation',
        children: [
          { label: 'PH Cell 2000', en: 'PH Cell 2000', href: '/products/automation/ph-cell-2000' },
          { label: 'PH Cell 300', en: 'PH Cell 300', href: '/products/automation/ph-cell-300' },
          { label: 'Robo2Go', en: 'Robo2Go', href: '/products/automation/robo2go' },
        ],
      },
      {
        label: 'Messtechnik', en: 'Metrology', href: '/products/messtechnik',
        children: [
          { label: 'Keyence XM-5000', en: 'Keyence XM-5000', href: '/products/messtechnik/keyence-xm-5000' },
        ],
      },
    ],
  },
  {
    key: 'solutions', label: 'Lösungen', en: 'Solutions', href: '/solutions',
    children: [
      {
        label: 'Fokusbranchen', en: 'Focus Industries', href: '/solutions/focus-industries',
        children: [
          { label: 'Luft- & Raumfahrt', en: 'Aerospace', href: '/solutions/focus-industries/aerospace' },
          { label: 'Medizintechnik', en: 'Medical', href: '/solutions/focus-industries/medical' },
        ],
      },
      {
        label: 'Technologie-Exzellenz', en: 'Technology Excellence', href: '/solutions/technology-excellence',
        children: [
          { label: 'Aerospace Excellence', en: 'Aerospace Excellence', href: '/solutions/technology-excellence/aerospace-excellence' },
        ],
      },
    ],
  },
  {
    key: 'company', label: 'Unternehmen', en: 'Company', href: '/company',
    children: [
      { key: 'about', label: 'Über uns', en: 'About Us', href: '/ueber-uns' },
      { label: 'Standorte', en: 'Locations', href: '/company/locations' },
      { key: 'contact', label: 'Kontakt', en: 'Contact', href: '/kontakt' },
    ],
  },
];
