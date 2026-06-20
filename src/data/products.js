// Product catalog. One entry per machine; the [...slug] route renders them all
// through a single template (T2). Spec values are representative placeholders.

const ASSET = 'https://in.dmgmori.com';

export const products = [
  {
    slug: 'products/machines/turning/turn-mill/ctx-tc/ctx-gamma-1250-tc',
    name: 'CTX gamma 1250 TC',
    series: 'Turn & Mill',
    breadcrumb: ['Products', 'Machines', 'Turning', 'Turn & Mill', 'CTX TC'],
    tagline: 'Complete machining of complex workpieces in a single setup.',
    image: `${ASSET}/resource/image/884226/stage_slider/xlg/8/aerospace-stageteaser-picture.jpg`,
    badges: ['6-sided complete machining', 'compactMASTER turn-mill spindle', 'Up to 4,000 Nm'],
    keyFacts: [
      { label: 'Max. turning diameter', value: '700 mm' },
      { label: 'Max. workpiece length', value: '1,255 mm' },
      { label: 'Bar capacity', value: '102 mm' },
      { label: 'Swing diameter', value: '820 mm' },
    ],
    highlights: [
      { title: 'Powerful turn-mill spindle', text: 'Integrated spindle drives with up to 4,000 Nm for maximum cutting performance.' },
      { title: 'Ultra-compact machining', text: 'Complex turning and milling operations in an ultra-compact working area.' },
      { title: 'Flexible second tool carrier', text: 'Optional lower tool carrier for highly productive simultaneous machining.' },
    ],
    specs: [
      { group: 'Work area', rows: [
        ['Max. turning diameter', '700 mm'],
        ['Max. turning length', '1,255 mm'],
        ['Swing over bed', '820 mm'],
      ]},
      { group: 'Main spindle', rows: [
        ['Speed', '3,300 rpm'],
        ['Power (40% DC)', '34 kW'],
        ['Torque (40% DC)', '1,800 Nm'],
      ]},
      { group: 'Turn-mill spindle', rows: [
        ['Speed', '12,000 rpm'],
        ['Power (40% DC)', '22 kW'],
        ['Torque (40% DC)', '120 Nm'],
      ]},
    ],
  },

  {
    slug: 'products/machines/turning/universal-turning/clx/clx-350',
    name: 'CLX 350',
    series: 'CLX Series',
    breadcrumb: ['Products', 'Machines', 'Turning', 'Universal Turning', 'CLX Series', 'CLX 350'],
    tagline: 'An attractive entry into precise, productive universal turning.',
    image: `${ASSET}/resource/image/929758/stage_slider/xlg/7/energy-stageteaser-picture.jpg`,
    badges: ['Compact footprint', 'Powerful main spindle', 'Optional driven tools'],
    keyFacts: [
      { label: 'Max. turning Ø', value: '320 mm' },
      { label: 'Turning length', value: '530 mm' },
      { label: 'Bar capacity', value: '51 mm' },
      { label: 'Chuck size', value: '210 mm' },
    ],
    highlights: [
      { title: 'Great value', text: 'A strong standard specification at an attractive entry price.' },
      { title: 'Productive spindle', text: 'A powerful main spindle for efficient turning across materials.' },
      { title: 'Flexible tooling', text: 'Optional driven tools enable simple milling and drilling.' },
    ],
    specs: [
      { group: 'Work area', rows: [['Max. turning Ø', '320 mm'], ['Turning length', '530 mm'], ['Chuck size', '210 mm']] },
      { group: 'Main spindle', rows: [['Speed', '5,000 rpm'], ['Power (40% DC)', '13 kW'], ['Torque (40% DC)', '142 Nm']] },
    ],
  },

  {
    slug: 'products/machines/turning/universal-turning/clx/clx-450',
    name: 'CLX 450',
    series: 'CLX Series',
    breadcrumb: ['Products', 'Machines', 'Turning', 'Universal Turning', 'CLX Series', 'CLX 450'],
    tagline: 'More work area and power for larger universal turning jobs.',
    image: `${ASSET}/resource/image/884226/stage_slider/xlg/8/aerospace-stageteaser-picture.jpg`,
    badges: ['Larger work area', 'High torque', 'Driven tools'],
    keyFacts: [
      { label: 'Max. turning Ø', value: '400 mm' },
      { label: 'Turning length', value: '800 mm' },
      { label: 'Bar capacity', value: '80 mm' },
      { label: 'Chuck size', value: '315 mm' },
    ],
    highlights: [
      { title: 'Bigger parts', text: 'A larger work area handles longer, heavier components.' },
      { title: 'More torque', text: 'Higher torque for confident roughing in tough materials.' },
      { title: 'Complete machining', text: 'Driven tools and optional counter-spindle reduce setups.' },
    ],
    specs: [
      { group: 'Work area', rows: [['Max. turning Ø', '400 mm'], ['Turning length', '800 mm'], ['Chuck size', '315 mm']] },
      { group: 'Main spindle', rows: [['Speed', '4,000 rpm'], ['Power (40% DC)', '22 kW'], ['Torque (40% DC)', '300 Nm']] },
    ],
  },

  {
    slug: 'products/machines/turning/universal-turning/nlx-2500',
    name: 'NLX 2500',
    series: 'Universal Turning',
    breadcrumb: ['Products', 'Machines', 'Turning', 'Universal Turning', 'NLX 2500'],
    tagline: 'Robust, high-precision turning for demanding production.',
    image: `${ASSET}/resource/image/661444/stage_slider/xlg/4/digital-twin-showroom-pfronten-stageteaser-picture.jpg`,
    badges: ['Rigid construction', 'High precision', 'Large work area'],
    keyFacts: [
      { label: 'Max. turning Ø', value: '366 mm' },
      { label: 'Turning length', value: '705 mm' },
      { label: 'Bar capacity', value: '80 mm' },
      { label: 'Chuck size', value: '254 mm' },
    ],
    highlights: [
      { title: 'Rigidity', text: 'A heavy-duty bed and box guideways deliver stable cutting.' },
      { title: 'Precision', text: 'Thermal management supports accuracy over long runs.' },
      { title: 'Capacity', text: 'A generous work area covers a wide part spectrum.' },
    ],
    specs: [
      { group: 'Work area', rows: [['Max. turning Ø', '366 mm'], ['Turning length', '705 mm'], ['Chuck size', '254 mm']] },
      { group: 'Main spindle', rows: [['Speed', '4,000 rpm'], ['Power (40% DC)', '22 kW'], ['Torque (40% DC)', '527 Nm']] },
    ],
  },
];

export const tabs = ['Highlights', 'Accuracy', 'Automation', 'Control & Software', 'Service & Training'];

export const relatedNews = [
  { tag: 'Customer Story', date: 'Jun 2026', title: 'Complete machining in finished-part quality', href: '/news-and-media/customer-stories' },
  { tag: 'News', date: 'May 2026', title: 'Expanded automation options for the CTX series', href: '/news-and-media/news' },
];
