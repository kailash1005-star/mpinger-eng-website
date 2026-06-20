import { c as createComponent, m as maybeRenderHead, a as addAttribute, r as renderTemplate, b as createAstro, d as renderComponent } from '../chunks/astro/server_DZ0hs0Eg.mjs';
import 'kleur/colors';
import { l as localizePath, L as LOCALES, $ as $$BaseLayout, t } from '../chunks/BaseLayout_BENEPnCy.mjs';
import 'clsx';
/* empty css                                 */
export { renderers } from '../renderers.mjs';

// Homepage content. Media references point at the source site's public asset
// URLs (same images/videos, as requested for the reference build); the copy is
// original placeholder text describing each slide/teaser.

const ASSET = 'https://in.dmgmori.com';

const stageSlides = [
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

const highlightTeasers = [
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

const newsTeasers = [
  { tag: 'News', date: '12 Jun 2026', title: 'New turn-mill center expands the CTX series', href: '/news-and-media/news' },
  { tag: 'Customer Story', date: '04 Jun 2026', title: 'Reliable complete machining in finished part quality', href: '/news-and-media/customer-stories' },
  { tag: 'Blog', date: '28 May 2026', title: 'Intelligent ways to bring AI onto the shop floor', href: '/news-and-media/blog-and-stories' },
];

const $$Astro$1 = createAstro();
const $$StageSlider = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$StageSlider;
  const { locale = "de" } = Astro2.props;
  const ctaHref = localizePath(locale, "/kontakt");
  return renderTemplate`${maybeRenderHead()}<section class="ci-stage" aria-label="Highlights" data-astro-cid-7icg2qqh> <div class="ci-stage-track" id="stage-track" data-astro-cid-7icg2qqh> ${stageSlides.map((s, i) => renderTemplate`<div${addAttribute(`ci-stage-slide ${i === 0 ? "is-active" : ""}`, "class")}${addAttribute(i, "data-index")} data-astro-cid-7icg2qqh> ${s.type === "video" ? renderTemplate`<video class="ci-stage-media"${addAttribute(s.video, "src")} autoplay loop muted playsinline data-astro-cid-7icg2qqh></video>` : renderTemplate`<img class="ci-stage-media"${addAttribute(s.img, "src")}${addAttribute(s.title, "alt")}${addAttribute(i === 0 ? "eager" : "lazy", "loading")} data-astro-cid-7icg2qqh>`} <div class="ci-stage-overlay" data-astro-cid-7icg2qqh></div> <div class="container ci-stage-content" data-astro-cid-7icg2qqh> <p class="ci-stage-eyebrow" data-astro-cid-7icg2qqh>${s.eyebrow}</p> <h1 class="ci-stage-title" data-astro-cid-7icg2qqh>${s.title}</h1> <p class="ci-stage-text" data-astro-cid-7icg2qqh>${s.text}</p> <a class="btn"${addAttribute(ctaHref, "href")} data-astro-cid-7icg2qqh>${s.cta.label}</a> </div> </div>`)} </div> <button class="ci-stage-nav ci-stage-prev" id="stage-prev" aria-label="Previous" data-astro-cid-7icg2qqh>&#8249;</button> <button class="ci-stage-nav ci-stage-next" id="stage-next" aria-label="Next" data-astro-cid-7icg2qqh>&#8250;</button> <div class="ci-stage-dots" id="stage-dots" data-astro-cid-7icg2qqh> ${stageSlides.map((_, i) => renderTemplate`<button${addAttribute(`ci-stage-dot ${i === 0 ? "is-active" : ""}`, "class")}${addAttribute(i, "data-go")}${addAttribute(`Slide ${i + 1}`, "aria-label")} data-astro-cid-7icg2qqh></button>`)} </div> </section>  `;
}, "C:/Users/WELCOME/Desktop/FL/mpinger/src/components/StageSlider.astro", void 0);

const $$Astro = createAstro();
const $$Index = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const { lang } = Astro2.params;
  if (!LOCALES.includes(lang)) return new Response(null, { status: 404 });
  const L = (p) => localizePath(lang, p);
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "mpinger GmbH \u2014 Ihr starker Partner", "locale": lang, "data-astro-cid-ct3bgug4": true }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "StageSlider", $$StageSlider, { "locale": lang, "data-astro-cid-ct3bgug4": true })} ${maybeRenderHead()}<section class="section" data-astro-cid-ct3bgug4> <div class="container" data-astro-cid-ct3bgug4> <p class="eyebrow" data-astro-cid-ct3bgug4>${t(lang, "discover")}</p> <h2 data-astro-cid-ct3bgug4>Discover our latest technologies</h2> <div class="teaser-grid" data-astro-cid-ct3bgug4> ${highlightTeasers.map((tz) => renderTemplate`<a class="teaser-card"${addAttribute(L("/ueber-uns"), "href")} data-astro-cid-ct3bgug4> <div class="teaser-card__media" data-astro-cid-ct3bgug4><img${addAttribute(tz.img, "src")}${addAttribute(tz.title, "alt")} loading="lazy" data-astro-cid-ct3bgug4></div> <div class="teaser-card__body" data-astro-cid-ct3bgug4> <p class="eyebrow" data-astro-cid-ct3bgug4>${tz.eyebrow}</p> <h3 data-astro-cid-ct3bgug4>${tz.title}</h3> <p class="teaser-card__text" data-astro-cid-ct3bgug4>${tz.text}</p> <span class="teaser-card__link arrow" data-astro-cid-ct3bgug4>${t(lang, "readMore")} </span> </div> </a>`)} </div> </div> </section> <section class="section section--alt" data-astro-cid-ct3bgug4> <div class="container" data-astro-cid-ct3bgug4> <div class="news-head" data-astro-cid-ct3bgug4> <div data-astro-cid-ct3bgug4> <p class="eyebrow" data-astro-cid-ct3bgug4>${t(lang, "news")}</p> <h2 data-astro-cid-ct3bgug4>News &amp; stories</h2> </div> <a class="btn btn--ghost"${addAttribute(L("/kontakt"), "href")} data-astro-cid-ct3bgug4>${t(lang, "allOf")}</a> </div> <div class="news-grid" data-astro-cid-ct3bgug4> ${newsTeasers.map((n) => renderTemplate`<a class="news-card"${addAttribute(L("/kontakt"), "href")} data-astro-cid-ct3bgug4> <span class="news-card__tag" data-astro-cid-ct3bgug4>${n.tag}</span> <time class="news-card__date" data-astro-cid-ct3bgug4>${n.date}</time> <h3 class="news-card__title" data-astro-cid-ct3bgug4>${n.title}</h3> <span class="arrow" data-astro-cid-ct3bgug4>${t(lang, "readMore")} </span> </a>`)} </div> </div> </section> ` })} `;
}, "C:/Users/WELCOME/Desktop/FL/mpinger/src/pages/[lang]/index.astro", void 0);

const $$file = "C:/Users/WELCOME/Desktop/FL/mpinger/src/pages/[lang]/index.astro";
const $$url = "/[lang]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
