// Listing data for the Turning category (T3). One data file → grid of cards via
// the shared ProductCard. Specs are representative placeholders.

const ASSET = 'https://in.dmgmori.com';
const img = (id, slot, v, name) => `${ASSET}/resource/image/${id}/stage_slider/${slot}/${v}/${name}.jpg`;

export const category = {
  title: 'Turning Machines',
  series: 'Machines',
  breadcrumb: [
    { label: 'Products', href: '/products' },
    { label: 'Machines', href: '/products/machines' },
    { label: 'Turning' },
  ],
  intro:
    'Universal turning, turn & mill and production turning centers for high-precision complete machining — from compact single-spindle lathes to fully automated turn-mill solutions.',
};

export const series = ['All', 'Universal Turning', 'Turn & Mill', 'Production Turning'];

export const machines = [
  {
    slug: 'products/machines/turning/turn-mill/ctx-tc/ctx-gamma-1250-tc',
    name: 'CTX gamma 1250 TC',
    series: 'Turn & Mill',
    image: img('884226', 'lg', '8', 'aerospace-stageteaser-picture'),
    quickSpecs: [['Turning Ø', '700 mm'], ['Turning length', '1,255 mm'], ['Bar capacity', '102 mm']],
  },
  {
    slug: 'products/machines/turning/universal-turning/clx-450',
    name: 'CLX 450',
    series: 'Universal Turning',
    image: img('929758', 'lg', '7', 'energy-stageteaser-picture'),
    quickSpecs: [['Turning Ø', '320 mm'], ['Turning length', '800 mm'], ['Bar capacity', '65 mm']],
  },
  {
    slug: 'products/machines/turning/universal-turning/nlx-2500',
    name: 'NLX 2500',
    series: 'Universal Turning',
    image: img('661444', 'lg', '4', 'digital-twin-showroom-pfronten-stageteaser-picture'),
    quickSpecs: [['Turning Ø', '366 mm'], ['Turning length', '705 mm'], ['Bar capacity', '80 mm']],
  },
  {
    slug: 'products/machines/turning/turn-mill/ctx-beta-1250-tc',
    name: 'CTX beta 1250 TC',
    series: 'Turn & Mill',
    image: img('681856', 'lg', '7', 'event-plattform-stageteaser-picture'),
    quickSpecs: [['Turning Ø', '500 mm'], ['Turning length', '1,235 mm'], ['Bar capacity', '76 mm']],
  },
  {
    slug: 'products/machines/turning/production-turning/sprint-50',
    name: 'SPRINT 50',
    series: 'Production Turning',
    image: img('884226', 'lg', '8', 'aerospace-stageteaser-picture'),
    quickSpecs: [['Bar capacity', '51 mm'], ['Linear axes', '3'], ['Tool stations', '60']],
  },
  {
    slug: 'products/machines/turning/universal-turning/ctx-2500',
    name: 'CTX 2500',
    series: 'Universal Turning',
    image: img('929758', 'lg', '7', 'energy-stageteaser-picture'),
    quickSpecs: [['Turning Ø', '400 mm'], ['Turning length', '1,250 mm'], ['Bar capacity', '90 mm']],
  },
];
