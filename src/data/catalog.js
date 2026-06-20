// Product catalog tree (CMS-ready). Each node is keyed by its path under
// /products. `kind: 'overview'` renders a sub-category teaser grid; `kind:
// 'series'` renders a model listing. The single [...path] route reads this.
// Structure follows the live nav tree; copy is original placeholder text.

const ASSET = 'https://in.dmgmori.com';
const pic = (id, slot, v, name) => `${ASSET}/resource/image/${id}/stage_slider/${slot}/${v}/${name}.jpg`;

const IMG = {
  turning: pic('929758', 'lg', '7', 'energy-stageteaser-picture'),
  milling: pic('884226', 'lg', '8', 'aerospace-stageteaser-picture'),
  ultrasonic: pic('661444', 'lg', '4', 'digital-twin-showroom-pfronten-stageteaser-picture'),
  lasertec: pic('972784', 'lg', '7', 'event-plattform-stageteaser-picture'),
  additive: pic('884226', 'lg', '8', 'aerospace-stageteaser-picture'),
  grinding: pic('929758', 'lg', '7', 'energy-stageteaser-picture'),
  clx: pic('929758', 'xlg', '7', 'energy-stageteaser-picture'),
};

export const catalog = {
  'machines': {
    kind: 'overview',
    eyebrow: 'Products',
    title: 'CNC machines for every application',
    intro:
      'From universal turning and milling to ULTRASONIC, LASERTEC and additive manufacturing — explore the full machine-tool portfolio for every technology and industry.',
    breadcrumb: [{ label: 'Products', href: '/products' }, { label: 'Machines' }],
    teasers: [
      { title: 'Turning', href: '/products/machines/turning', img: IMG.turning, text: 'Universal lathes, turn-mill and production turning centers.' },
      { title: 'Milling', href: '/products/machines/milling', img: IMG.milling, text: 'Vertical, horizontal and 5-axis milling machines.' },
      { title: 'ULTRASONIC', href: '/products/machines/ultrasonic', img: IMG.ultrasonic, text: 'Machining of advanced materials with ultrasonic technology.' },
      { title: 'LASERTEC', href: '/products/machines/lasertec', img: IMG.lasertec, text: 'Laser texturing, marking and additive technologies.' },
      { title: 'Additive Manufacturing', href: '/products/machines/additive-manufacturing', img: IMG.additive, text: 'Powder-bed and powder-nozzle metal additive systems.' },
      { title: 'Grinding', href: '/products/machines/grinding', img: IMG.grinding, text: 'Precision grinding solutions for demanding parts.' },
    ],
    info: [
      { h: 'Choosing the right machine', p: 'Match the machine to your parts, materials and batch sizes. Our specialists help you weigh work area, spindle power, automation and digital options.' },
      { h: 'GREENMODE — energy efficient machining', p: 'Energy- and emission-saving features reduce power consumption and cost per part across the portfolio.' },
    ],
  },

  'machines/turning': {
    kind: 'overview',
    eyebrow: 'Machines',
    title: 'CNC lathes for every application',
    intro:
      'From compact universal lathes to fully automated turn-mill centers — find the right turning solution for performance, precision and complete machining.',
    breadcrumb: [{ label: 'Products', href: '/products' }, { label: 'Machines', href: '/products/machines' }, { label: 'Turning' }],
    teasers: [
      { title: 'Universal Turning', href: '/products/machines/turning/universal-turning', img: IMG.turning, text: 'Versatile turning centers for a broad range of parts.' },
      { title: 'Turn & Mill', href: '/products/machines/turning/turn-mill', img: IMG.milling, text: '6-sided complete machining in a single setup.' },
      { title: 'Horizontal Production Turning', href: '/products/machines/turning/horizontal-production-turning', img: IMG.ultrasonic, text: 'High-volume productivity for series production.' },
    ],
    topSellers: [
      { slug: 'products/machines/turning/universal-turning/clx/clx-350', name: 'CLX 350', series: 'Universal Turning', image: IMG.turning, quickSpecs: [['Turning Ø', '320 mm'], ['Bar capacity', '51 mm']] },
      { slug: 'products/machines/turning/turn-mill/ctx-tc/ctx-gamma-1250-tc', name: 'CTX gamma 1250 TC', series: 'Turn & Mill', image: IMG.milling, quickSpecs: [['Turning Ø', '700 mm'], ['Bar capacity', '102 mm']] },
      { slug: 'products/machines/turning/universal-turning/nlx-2500', name: 'NLX 2500', series: 'Universal Turning', image: IMG.ultrasonic, quickSpecs: [['Turning Ø', '366 mm'], ['Bar capacity', '80 mm']] },
    ],
    info: [
      { h: 'Universal vs. production turning', p: 'Universal turning offers flexibility for varied parts; production turning maximizes output for high-volume series. Turn-mill adds milling for complete machining.' },
    ],
  },

  'machines/turning/universal-turning': {
    kind: 'overview',
    eyebrow: 'Turning',
    title: 'Universal Turning',
    intro: 'Flexible, high-precision turning centers grouped into series to match your size class and complexity.',
    breadcrumb: [
      { label: 'Products', href: '/products' }, { label: 'Machines', href: '/products/machines' },
      { label: 'Turning', href: '/products/machines/turning' }, { label: 'Universal Turning' },
    ],
    teasers: [
      { title: 'CLX Series', href: '/products/machines/turning/universal-turning/clx', img: IMG.clx, text: 'Compact universal turning centers with great value.' },
      { title: 'CTX Series', href: '/products/machines/turning/universal-turning/ctx', img: IMG.milling, text: 'Versatile universal turning with optional milling.' },
      { title: 'NLX Series', href: '/products/machines/turning/universal-turning/nlx', img: IMG.ultrasonic, text: 'Robust, high-precision turning for demanding work.' },
      { title: 'SL Series', href: '/products/machines/turning/universal-turning/sl', img: IMG.turning, text: 'Reliable horizontal turning workhorses.' },
    ],
  },

  'machines/turning/universal-turning/clx': {
    kind: 'series',
    eyebrow: 'Universal Turning',
    title: 'CLX Series',
    intro: 'Universal turning centers for a wide range of parts — an attractive entry into precise, productive turning with generous work areas and a powerful spindle.',
    hero: IMG.clx,
    breadcrumb: [
      { label: 'Products', href: '/products' }, { label: 'Machines', href: '/products/machines' },
      { label: 'Turning', href: '/products/machines/turning' }, { label: 'Universal Turning', href: '/products/machines/turning/universal-turning' },
      { label: 'CLX Series' },
    ],
    products: [
      { slug: 'products/machines/turning/universal-turning/clx/clx-350', name: 'CLX 350', series: 'CLX Series', image: IMG.turning, quickSpecs: [['Turning Ø', '320 mm'], ['Turning length', '530 mm'], ['Bar capacity', '51 mm']] },
      { slug: 'products/machines/turning/universal-turning/clx/clx-450', name: 'CLX 450', series: 'CLX Series', image: IMG.milling, quickSpecs: [['Turning Ø', '400 mm'], ['Turning length', '800 mm'], ['Bar capacity', '80 mm']] },
    ],
  },
};
