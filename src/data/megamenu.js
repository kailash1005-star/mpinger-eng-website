// Curated navigation: 3 sections (Products, Solutions, Company), each with a
// couple of complete drill-down chains. Every path here exists in the CMS.
// News & Media and Customer Care intentionally omitted.
export const megaNav = [
  {
    label: 'Products', href: '/products',
    children: [
      {
        label: 'Machines', href: '/products/machines',
        children: [
          {
            label: 'Turning', href: '/products/machines/turning',
            children: [
              {
                label: 'Universal Turning', href: '/products/machines/turning/universal-turning',
                children: [
                  { label: 'CLX Series', href: '/products/machines/turning/universal-turning/clx' },
                  { label: 'NLX Series', href: '/products/machines/turning/universal-turning/nlx' },
                ],
              },
            ],
          },
        ],
      },
      {
        label: 'Automation', href: '/products/automation',
        children: [
          {
            label: 'Workpiece Handling', href: '/products/automation/workpiece-handling',
            children: [
              { label: 'Gantry Loader', href: '/products/automation/workpiece-handling/gantry-loader' },
              { label: 'Robot', href: '/products/automation/workpiece-handling/robot' },
            ],
          },
        ],
      },
    ],
  },
  {
    label: 'Solutions', href: '/solutions',
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
    label: 'Company', href: '/company',
    children: [
      { key: 'about', label: 'About Us', href: '/ueber-uns' },
      { label: 'Locations', href: '/company/locations' },
      { key: 'contact', label: 'Contact', href: '/kontakt' },
    ],
  },
];
