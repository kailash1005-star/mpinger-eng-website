import { c as createComponent, m as maybeRenderHead, d as renderComponent, F as Fragment, r as renderTemplate, b as createAstro, a as addAttribute, u as unescapeHTML } from '../../chunks/astro/server_DZ0hs0Eg.mjs';
import 'kleur/colors';
import { $ as $$BaseLayout, L as LOCALES, l as localizePath } from '../../chunks/BaseLayout_wb6ohdy_.mjs';
/* empty css                                     */
import 'clsx';
export { renderers } from '../../renderers.mjs';

const $$Astro$8 = createAstro();
const $$Breadcrumb = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$8, $$props, $$slots);
  Astro2.self = $$Breadcrumb;
  const { items = [] } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<nav class="breadcrumb" aria-label="Breadcrumb" data-astro-cid-qaanghzh> <div class="container" data-astro-cid-qaanghzh> <a href="/" data-astro-cid-qaanghzh>Home</a> ${items.map((b) => renderTemplate`${renderComponent($$result, "Fragment", Fragment, { "data-astro-cid-qaanghzh": true }, { "default": ($$result2) => renderTemplate` <span class="breadcrumb__sep" data-astro-cid-qaanghzh>/</span> ${b.href ? renderTemplate`<a${addAttribute(b.href, "href")} data-astro-cid-qaanghzh>${b.label}</a>` : renderTemplate`<span class="breadcrumb__current" data-astro-cid-qaanghzh>${b.label}</span>`}` })}`)} </div> </nav> `;
}, "C:/Users/WELCOME/Desktop/FL/mpinger/src/components/Breadcrumb.astro", void 0);

const $$Astro$7 = createAstro();
const $$ProductCard = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$7, $$props, $$slots);
  Astro2.self = $$ProductCard;
  const { product } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<a class="ci-product"${addAttribute(`/${product.slug}`, "href")}${addAttribute(product.series, "data-series")} data-astro-cid-tjdfhdqb> <div class="ci-product-img" data-astro-cid-tjdfhdqb><img${addAttribute(product.image, "src")}${addAttribute(product.name, "alt")} loading="lazy" data-astro-cid-tjdfhdqb></div> <div class="ci-product-body" data-astro-cid-tjdfhdqb> <p class="ci-product-series" data-astro-cid-tjdfhdqb>${product.series}</p> <h3 class="ci-product-title" data-astro-cid-tjdfhdqb>${product.name}</h3> <table class="ci-product-data-table" data-astro-cid-tjdfhdqb> <tbody data-astro-cid-tjdfhdqb> ${product.quickSpecs.map(([k, v]) => renderTemplate`<tr data-astro-cid-tjdfhdqb><th data-astro-cid-tjdfhdqb>${k}</th><td data-astro-cid-tjdfhdqb>${v}</td></tr>`)} </tbody> </table> <span class="ci-product-link arrow" data-astro-cid-tjdfhdqb>View machine </span> </div> </a> `;
}, "C:/Users/WELCOME/Desktop/FL/mpinger/src/components/ProductCard.astro", void 0);

const $$Astro$6 = createAstro();
const $$CategoryOverview = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$CategoryOverview;
  const { node } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "Breadcrumb", $$Breadcrumb, { "items": node.breadcrumb, "data-astro-cid-2uc7f6bx": true })} ${maybeRenderHead()}<section class="cat-intro" data-astro-cid-2uc7f6bx> <div class="container" data-astro-cid-2uc7f6bx> <p class="eyebrow" data-astro-cid-2uc7f6bx>${node.eyebrow}</p> <h1 data-astro-cid-2uc7f6bx>${node.title}</h1> <p class="cat-intro__text" data-astro-cid-2uc7f6bx>${node.intro}</p> </div> </section> <!-- Sub-category teaser grid (technology teasers) --> <section class="section" data-astro-cid-2uc7f6bx> <div class="container" data-astro-cid-2uc7f6bx> <div class="cat-teasers" data-astro-cid-2uc7f6bx> ${node.teasers.map((t) => renderTemplate`<a class="cat-teaser"${addAttribute(t.href, "href")} data-astro-cid-2uc7f6bx> <div class="cat-teaser__media" data-astro-cid-2uc7f6bx><img${addAttribute(t.img, "src")}${addAttribute(t.title, "alt")} loading="lazy" data-astro-cid-2uc7f6bx></div> <div class="cat-teaser__body" data-astro-cid-2uc7f6bx> <h3 data-astro-cid-2uc7f6bx>${t.title}</h3> ${t.text && renderTemplate`<p data-astro-cid-2uc7f6bx>${t.text}</p>`} <span class="cat-teaser__link arrow" data-astro-cid-2uc7f6bx>Discover </span> </div> </a>`)} </div> </div> </section> <!-- Top-seller products (optional) --> ${node.topSellers && renderTemplate`<section class="section section--alt" data-astro-cid-2uc7f6bx> <div class="container" data-astro-cid-2uc7f6bx> <p class="eyebrow" data-astro-cid-2uc7f6bx>Top sellers</p> <h2 data-astro-cid-2uc7f6bx>Popular machines in this category</h2> <div class="cat-products" data-astro-cid-2uc7f6bx> ${node.topSellers.map((p) => renderTemplate`${renderComponent($$result, "ProductCard", $$ProductCard, { "product": p, "data-astro-cid-2uc7f6bx": true })}`)} </div> </div> </section>`} <!-- Info / FAQ sections (optional) --> ${node.info && renderTemplate`<section class="section" data-astro-cid-2uc7f6bx> <div class="container cat-info" data-astro-cid-2uc7f6bx> ${node.info.map((s) => renderTemplate`<div class="cat-info__block" data-astro-cid-2uc7f6bx><h2 data-astro-cid-2uc7f6bx>${s.h}</h2><p data-astro-cid-2uc7f6bx>${s.p}</p></div>`)} </div> </section>`} `;
}, "C:/Users/WELCOME/Desktop/FL/mpinger/src/components/CategoryOverview.astro", void 0);

const $$Astro$5 = createAstro();
const $$SeriesListing = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$SeriesListing;
  const { node } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "Breadcrumb", $$Breadcrumb, { "items": node.breadcrumb, "data-astro-cid-7i5vjjsb": true })} <!-- Series hero / campaign intro --> ${maybeRenderHead()}<section class="series-hero" data-astro-cid-7i5vjjsb> <div class="container series-hero__grid" data-astro-cid-7i5vjjsb> <div class="series-hero__text" data-astro-cid-7i5vjjsb> <p class="eyebrow" data-astro-cid-7i5vjjsb>${node.eyebrow}</p> <h1 data-astro-cid-7i5vjjsb>${node.title}</h1> <p class="series-hero__intro" data-astro-cid-7i5vjjsb>${node.intro}</p> <a class="btn" href="/company/contact" data-astro-cid-7i5vjjsb>Request a quote</a> </div> ${node.hero && renderTemplate`<div class="series-hero__media" data-astro-cid-7i5vjjsb><img${addAttribute(node.hero, "src")}${addAttribute(node.title, "alt")} data-astro-cid-7i5vjjsb></div>`} </div> </section> <!-- Models in the series --> <section class="section" data-astro-cid-7i5vjjsb> <div class="container" data-astro-cid-7i5vjjsb> <p class="eyebrow" data-astro-cid-7i5vjjsb>Models</p> <h2 data-astro-cid-7i5vjjsb>${node.products.length} machines in the ${node.title}</h2> <div class="series-products" data-astro-cid-7i5vjjsb> ${node.products.map((p) => renderTemplate`${renderComponent($$result, "ProductCard", $$ProductCard, { "product": p, "data-astro-cid-7i5vjjsb": true })}`)} </div> </div> </section> `;
}, "C:/Users/WELCOME/Desktop/FL/mpinger/src/components/SeriesListing.astro", void 0);

// Product catalog. One entry per machine; the [...slug] route renders them all
// through a single template (T2). Spec values are representative placeholders.


const tabs = ['Highlights', 'Accuracy', 'Automation', 'Control & Software', 'Service & Training'];

const relatedNews = [
  { tag: 'Customer Story', date: 'Jun 2026', title: 'Complete machining in finished-part quality', href: '/news-and-media/customer-stories' },
  { tag: 'News', date: 'May 2026', title: 'Expanded automation options for the CTX series', href: '/news-and-media/news' },
];

const $$Astro$4 = createAstro();
const $$ProductDetail = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$ProductDetail;
  const { p } = Astro2.props;
  const crumb = (p.breadcrumb || []).map((b) => typeof b === "string" ? { label: b } : b);
  return renderTemplate`${renderComponent($$result, "Breadcrumb", $$Breadcrumb, { "items": crumb, "data-astro-cid-7xojfyaf": true })} <!-- Product hero --> ${maybeRenderHead()}<section class="product-hero" data-astro-cid-7xojfyaf> <div class="container product-hero__grid" data-astro-cid-7xojfyaf> <div class="product-hero__media" data-astro-cid-7xojfyaf><img${addAttribute(p.image, "src")}${addAttribute(p.name, "alt")} data-astro-cid-7xojfyaf></div> <div class="product-hero__info" data-astro-cid-7xojfyaf> <p class="eyebrow" data-astro-cid-7xojfyaf>${p.series}</p> <h1 data-astro-cid-7xojfyaf>${p.name}</h1> <p class="product-hero__tagline" data-astro-cid-7xojfyaf>${p.tagline}</p> ${p.badges && renderTemplate`<ul class="product-badges" data-astro-cid-7xojfyaf>${p.badges.map((b) => renderTemplate`<li data-astro-cid-7xojfyaf>${b}</li>`)}</ul>`} <div class="product-hero__actions" data-astro-cid-7xojfyaf> <a class="btn" href="/company/contact" data-astro-cid-7xojfyaf>Request a quote</a> <a class="btn btn--ghost" href="#specs" data-astro-cid-7xojfyaf>Technical data</a> </div> </div> </div> </section> <!-- Sticky tab nav --> <nav class="product-tabs" aria-label="Sections" data-astro-cid-7xojfyaf> <div class="container product-tabs__inner" data-astro-cid-7xojfyaf> ${tabs.map((t, i) => renderTemplate`<a${addAttribute(`product-tab ${i === 0 ? "is-active" : ""}`, "class")}${addAttribute(`#${t.toLowerCase().replace(/[^a-z]+/g, "-")}`, "href")} data-astro-cid-7xojfyaf>${t}</a>`)} </div> </nav> <!-- Key facts strip --> ${p.keyFacts && renderTemplate`<section class="facts" data-astro-cid-7xojfyaf> <div class="container facts__grid" data-astro-cid-7xojfyaf> ${p.keyFacts.map((f) => renderTemplate`<div class="fact" data-astro-cid-7xojfyaf><span class="fact__value" data-astro-cid-7xojfyaf>${f.value}</span><span class="fact__label" data-astro-cid-7xojfyaf>${f.label}</span></div>`)} </div> </section>`} <!-- Highlights --> ${p.highlights && renderTemplate`<section class="section" id="highlights" data-astro-cid-7xojfyaf> <div class="container" data-astro-cid-7xojfyaf> <p class="eyebrow" data-astro-cid-7xojfyaf>Highlights</p> <h2 data-astro-cid-7xojfyaf>Why ${p.name}</h2> <div class="highlight-grid" data-astro-cid-7xojfyaf> ${p.highlights.map((h) => renderTemplate`<div class="highlight" data-astro-cid-7xojfyaf><div class="highlight__bar" data-astro-cid-7xojfyaf></div><h3 data-astro-cid-7xojfyaf>${h.title}</h3><p data-astro-cid-7xojfyaf>${h.text}</p></div>`)} </div> </div> </section>`} <!-- Technical data --> ${p.specs && renderTemplate`<section class="section section--alt" id="specs" data-astro-cid-7xojfyaf> <div class="container" data-astro-cid-7xojfyaf> <p class="eyebrow" data-astro-cid-7xojfyaf>Technical data</p> <h2 data-astro-cid-7xojfyaf>Specifications</h2> <div class="spec-tables" data-astro-cid-7xojfyaf> ${p.specs.map((s) => renderTemplate`<table class="spec-table" data-astro-cid-7xojfyaf> <caption data-astro-cid-7xojfyaf>${s.group}</caption> <tbody data-astro-cid-7xojfyaf>${s.rows.map(([k, v]) => renderTemplate`<tr data-astro-cid-7xojfyaf><th scope="row" data-astro-cid-7xojfyaf>${k}</th><td data-astro-cid-7xojfyaf>${v}</td></tr>`)}</tbody> </table>`)} </div> </div> </section>`} <!-- Related news --> <section class="section" id="service-training" data-astro-cid-7xojfyaf> <div class="container" data-astro-cid-7xojfyaf> <p class="eyebrow" data-astro-cid-7xojfyaf>Related</p> <h2 data-astro-cid-7xojfyaf>News &amp; stories</h2> <div class="related-grid" data-astro-cid-7xojfyaf> ${relatedNews.map((n) => renderTemplate`<a class="news-card"${addAttribute(n.href, "href")} data-astro-cid-7xojfyaf> <span class="news-card__tag" data-astro-cid-7xojfyaf>${n.tag}</span> <time class="news-card__date" data-astro-cid-7xojfyaf>${n.date}</time> <h3 class="news-card__title" data-astro-cid-7xojfyaf>${n.title}</h3> <span class="arrow" data-astro-cid-7xojfyaf>Read more </span> </a>`)} </div> </div> </section> `;
}, "C:/Users/WELCOME/Desktop/FL/mpinger/src/components/ProductDetail.astro", void 0);

const $$Astro$3 = createAstro();
const $$NewsCard = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$NewsCard;
  const { item } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<a class="news-card"${addAttribute(item.href, "href")} data-astro-cid-ibl2wg7k> ${item.image && renderTemplate`<div class="news-card__media" data-astro-cid-ibl2wg7k><img${addAttribute(item.image, "src")}${addAttribute(item.title, "alt")} loading="lazy" data-astro-cid-ibl2wg7k></div>`} <div class="news-card__body" data-astro-cid-ibl2wg7k> <div class="news-card__meta" data-astro-cid-ibl2wg7k> <span class="news-card__tag" data-astro-cid-ibl2wg7k>${item.tag}</span> <time class="news-card__date" data-astro-cid-ibl2wg7k>${item.date}</time> </div> <h3 class="news-card__title" data-astro-cid-ibl2wg7k>${item.title}</h3> ${item.excerpt && renderTemplate`<p class="news-card__excerpt" data-astro-cid-ibl2wg7k>${item.excerpt}</p>`} <span class="arrow news-card__more" data-astro-cid-ibl2wg7k>Read more </span> </div> </a> `;
}, "C:/Users/WELCOME/Desktop/FL/mpinger/src/components/NewsCard.astro", void 0);

const $$Astro$2 = createAstro();
const $$ArticleLayout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$ArticleLayout;
  const { article, related = [] } = Astro2.props;
  const shareIcons = ["LinkedIn", "X", "Facebook", "E-mail"];
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": `${article.title} \u2014 DMG MORI`, "description": article.intro, "data-astro-cid-zm77yjld": true }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Breadcrumb", $$Breadcrumb, { "items": article.breadcrumb, "data-astro-cid-zm77yjld": true })} ${maybeRenderHead()}<article class="article" data-astro-cid-zm77yjld> <header class="article-hero" data-astro-cid-zm77yjld> <div class="container article-hero__inner" data-astro-cid-zm77yjld> <div class="article-meta" data-astro-cid-zm77yjld> <span class="article-tag" data-astro-cid-zm77yjld>${article.tag}</span> <time class="article-date" data-astro-cid-zm77yjld>${article.date}</time> ${article.readingTime && renderTemplate`<span class="article-reading" data-astro-cid-zm77yjld>${article.readingTime}</span>`} </div> <h1 class="article-title" data-astro-cid-zm77yjld>${article.title}</h1> <p class="article-intro" data-astro-cid-zm77yjld>${article.intro}</p> </div> </header> ${article.hero && renderTemplate`<figure class="article-hero-media container" data-astro-cid-zm77yjld> <img${addAttribute(article.hero, "src")}${addAttribute(article.title, "alt")} data-astro-cid-zm77yjld> ${article.heroCaption && renderTemplate`<figcaption data-astro-cid-zm77yjld>${article.heroCaption}</figcaption>`} </figure>`} <div class="container article-body" data-astro-cid-zm77yjld> <div class="article-content" data-astro-cid-zm77yjld> ${article.body.map((block) => {
    if (block.type === "heading") return renderTemplate`<h2 data-astro-cid-zm77yjld>${block.text}</h2>`;
    if (block.type === "text") return renderTemplate`<p data-astro-cid-zm77yjld>${block.text}</p>`;
    if (block.type === "quote") return renderTemplate`<blockquote class="article-quote" data-astro-cid-zm77yjld> <p data-astro-cid-zm77yjld>${block.text}</p> ${block.cite && renderTemplate`<cite data-astro-cid-zm77yjld>${block.cite}</cite>`} </blockquote>`;
    if (block.type === "image") return renderTemplate`<figure class="article-figure ci-text-media" data-astro-cid-zm77yjld> <img${addAttribute(block.src, "src")}${addAttribute(block.caption || "", "alt")} loading="lazy" data-astro-cid-zm77yjld> ${block.caption && renderTemplate`<figcaption class="ci-text-media-caption" data-astro-cid-zm77yjld>${block.caption}</figcaption>`} </figure>`;
    if (block.type === "facts") return renderTemplate`<ul class="article-facts" data-astro-cid-zm77yjld> ${block.items.map((f) => renderTemplate`<li data-astro-cid-zm77yjld><strong data-astro-cid-zm77yjld>${f.value}</strong><span data-astro-cid-zm77yjld>${f.label}</span></li>`)} </ul>`;
    return null;
  })} <!-- Social share --> <div class="ci-share-social-media" data-astro-cid-zm77yjld> <span class="ci-share-social-media-title" data-astro-cid-zm77yjld>Share</span> ${shareIcons.map((s) => renderTemplate`<button class="ci-share-social-media-button" data-astro-cid-zm77yjld>${s}</button>`)} </div> </div> </div> </article> ${related.length > 0 && renderTemplate`<section class="section section--alt" data-astro-cid-zm77yjld> <div class="container" data-astro-cid-zm77yjld> <p class="eyebrow" data-astro-cid-zm77yjld>More from the newsroom</p> <h2 data-astro-cid-zm77yjld>Related stories</h2> <div class="related-grid" data-astro-cid-zm77yjld> ${related.map((r) => renderTemplate`${renderComponent($$result2, "NewsCard", $$NewsCard, { "item": r, "data-astro-cid-zm77yjld": true })}`)} </div> </div> </section>`}` })} `;
}, "C:/Users/WELCOME/Desktop/FL/mpinger/src/layouts/ArticleLayout.astro", void 0);

const $$Astro$1 = createAstro();
const $$SolutionLayout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$SolutionLayout;
  const { solution } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": `${solution.title} \u2014 DMG MORI`, "description": solution.intro, "data-astro-cid-irpsiv2p": true }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Breadcrumb", $$Breadcrumb, { "items": solution.breadcrumb, "data-astro-cid-irpsiv2p": true })}  ${maybeRenderHead()}<section class="solution-hero"${addAttribute(`background-image:url('${solution.hero}')`, "style")} data-astro-cid-irpsiv2p> <div class="solution-hero__overlay" data-astro-cid-irpsiv2p></div> <div class="container solution-hero__content" data-astro-cid-irpsiv2p> <p class="eyebrow eyebrow--light" data-astro-cid-irpsiv2p>${solution.eyebrow}</p> <h1 data-astro-cid-irpsiv2p>${solution.title}</h1> <p class="solution-hero__intro" data-astro-cid-irpsiv2p>${solution.intro}</p> <a class="btn"${addAttribute(solution.cta?.href || "/company/contact", "href")} data-astro-cid-irpsiv2p>${solution.cta?.label || "Talk to an expert"}</a> </div> </section>  ${solution.stats && renderTemplate`<section class="solution-stats" data-astro-cid-irpsiv2p> <div class="container solution-stats__grid" data-astro-cid-irpsiv2p> ${solution.stats.map((s) => renderTemplate`<div class="solution-stat" data-astro-cid-irpsiv2p><span class="solution-stat__value" data-astro-cid-irpsiv2p>${s.value}</span><span class="solution-stat__label" data-astro-cid-irpsiv2p>${s.label}</span></div>`)} </div> </section>`} <section class="section" data-astro-cid-irpsiv2p> <div class="container solution-rows" data-astro-cid-irpsiv2p> ${solution.features.map((f, i) => renderTemplate`<div${addAttribute(`solution-row ${i % 2 ? "is-reverse" : ""}`, "class")} data-astro-cid-irpsiv2p> <div class="solution-row__media" data-astro-cid-irpsiv2p><img${addAttribute(f.image, "src")}${addAttribute(f.title, "alt")} loading="lazy" data-astro-cid-irpsiv2p></div> <div class="solution-row__text" data-astro-cid-irpsiv2p> <p class="eyebrow" data-astro-cid-irpsiv2p>${f.eyebrow}</p> <h2 data-astro-cid-irpsiv2p>${f.title}</h2> <p data-astro-cid-irpsiv2p>${f.text}</p> ${f.link && renderTemplate`<a class="arrow solution-row__link"${addAttribute(f.link.href, "href")} data-astro-cid-irpsiv2p>${f.link.label} </a>`} </div> </div>`)} </div> </section>  <section class="solution-cta" data-astro-cid-irpsiv2p> <div class="container solution-cta__inner" data-astro-cid-irpsiv2p> <div data-astro-cid-irpsiv2p> <h2 data-astro-cid-irpsiv2p>${solution.ctaBand?.title || "Ready to discuss your application?"}</h2> <p data-astro-cid-irpsiv2p>${solution.ctaBand?.text || "Our industry specialists help you find the right process and machine."}</p> </div> <a class="btn btn--accent" href="/company/contact" data-astro-cid-irpsiv2p>Contact us</a> </div> </section> ` })} `;
}, "C:/Users/WELCOME/Desktop/FL/mpinger/src/layouts/SolutionLayout.astro", void 0);

const CMS_URL = "http://127.0.0.1:8000";
const API = `${CMS_URL}/api/v2`;
async function getJSON(url) {
  const res = await fetch(url);
  if (!res.ok) throw new Error(`CMS ${res.status} ${url}`);
  return res.json();
}
function urlPath(htmlUrl) {
  try {
    return new URL(htmlUrl).pathname.replace(/\/+$/, "") || "/";
  } catch {
    return String(htmlUrl).replace(/\/+$/, "") || "/";
  }
}
async function listPages(locale = "de") {
  const data = await getJSON(`${API}/pages/?locale=${locale}&limit=500`);
  return data.items.map((i) => ({
    id: i.id,
    type: i.meta.type,
    title: i.title,
    path: urlPath(i.meta.html_url),
    slug: i.meta.slug
  }));
}
async function getPage(id) {
  return getJSON(`${API}/pages/${id}/`);
}
async function getPageByPath(path, locale = "de") {
  const target = "/" + String(path).replace(/^\/+/, "").replace(/\/+$/, "");
  const norm = target === "/" ? "/" : target;
  const pages = await listPages(locale);
  const hit = pages.find((p) => p.path === norm);
  if (!hit) return null;
  const detail = await getPage(hit.id);
  return { type: hit.type, page: detail };
}
async function getChildren(parentId, locale = "de") {
  const data = await getJSON(`${API}/pages/?child_of=${parentId}&locale=${locale}&fields=title,slug&limit=100`);
  return data.items.map((i) => ({ id: i.id, title: i.title, path: urlPath(i.meta.html_url), slug: i.meta.slug }));
}
function imgUrl(val, fallback = "") {
  let u = null;
  if (typeof val === "string") u = val;
  else if (val && val.url) u = val.url;
  if (!u) return fallback;
  return u.startsWith("http") ? u : `${CMS_URL}${u}`;
}

const $$Astro = createAstro();
const $$ = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$;
  const FALLBACK = "https://in.dmgmori.com/resource/image/884226/stage_slider/lg/8/aerospace-stageteaser-picture.jpg";
  const { lang } = Astro2.params;
  const path = Astro2.params.path || "";
  if (!LOCALES.includes(lang)) return new Response(null, { status: 404 });
  const L = (p2) => localizePath(lang, p2);
  const sv = (sf) => (sf || []).map((b) => b.value);
  function crumbsFromPath(p2) {
    const segs = String(p2).split("/").filter(Boolean);
    let acc = "";
    return segs.map((s, i) => {
      acc += "/" + s;
      const label = s.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());
      return i === segs.length - 1 ? { label } : { label, href: L(acc) };
    });
  }
  const result = await getPageByPath(path, lang);
  if (!result) return new Response(null, { status: 404 });
  const { type, page } = result;
  const breadcrumb = crumbsFromPath(path);
  let node = null, p = null, article = null, solution = null;
  if (type === "content.ProductCategoryPage") {
    const children = await getChildren(page.id, lang);
    node = {
      eyebrow: page.eyebrow,
      title: page.title,
      intro: page.intro,
      breadcrumb,
      teasers: children.map((c) => ({ title: c.title, href: L(c.path), img: FALLBACK, text: "" })),
      info: sv(page.info).map((b) => ({ h: b.heading, p: b.text }))
    };
  } else if (type === "content.ProductSeriesPage") {
    const children = await getChildren(page.id, lang);
    const details = await Promise.all(children.map((c) => getPage(c.id)));
    node = {
      eyebrow: page.eyebrow,
      title: page.title,
      intro: page.intro,
      breadcrumb,
      hero: imgUrl(page.hero_url, FALLBACK),
      products: details.map((d, i) => ({
        slug: `${lang}${children[i].path}`,
        name: d.title,
        series: d.series || page.title,
        image: imgUrl(d.image_url, FALLBACK),
        quickSpecs: sv(d.key_facts).slice(0, 3).map((f) => [f.label, f.value])
      }))
    };
  } else if (type === "content.ProductDetailPage") {
    p = {
      name: page.title,
      series: page.series,
      tagline: page.tagline,
      image: imgUrl(page.image_url, FALLBACK),
      breadcrumb,
      badges: sv(page.badges),
      keyFacts: sv(page.key_facts).map((f) => ({ label: f.label, value: f.value })),
      highlights: sv(page.highlights).map((h) => ({ title: h.title, text: h.text })),
      specs: sv(page.specs).map((g) => ({ group: g.group, rows: (g.rows || []).map((r) => [r.label, r.value]) }))
    };
  } else if (type === "content.ArticlePage") {
    article = {
      tag: page.tag,
      date: page.published_date,
      title: page.title,
      intro: page.intro,
      hero: imgUrl(page.hero_url, ""),
      breadcrumb,
      body: sv2(page.body)
    };
  } else if (type === "content.SolutionPage") {
    solution = {
      eyebrow: page.eyebrow,
      title: page.title,
      intro: page.intro,
      breadcrumb,
      hero: imgUrl(page.hero_url, FALLBACK),
      stats: sv(page.stats).map((s) => ({ value: s.value, label: s.label })),
      features: sv(page.features).map((f) => ({ eyebrow: f.eyebrow, title: f.title, text: f.text, image: imgUrl(f.image, FALLBACK) }))
    };
  }
  function sv2(body) {
    return (body || []).map((b) => {
      if (b.type === "heading") return { type: "heading", text: b.value };
      if (b.type === "paragraph") return { type: "text", text: String(b.value).replace(/<[^>]+>/g, " ").replace(/\s+/g, " ").trim() };
      if (b.type === "quote") return { type: "quote", text: b.value.text, cite: b.value.cite };
      if (b.type === "facts") return { type: "facts", items: (b.value || []).map((f) => ({ value: f.value, label: f.label })) };
      if (b.type === "image") return { type: "image", src: imgUrl(b.value.image, FALLBACK), caption: b.value.caption };
      return { type: "text", text: "" };
    });
  }
  const title = `${page.title} \u2014 mpinger`;
  const wrap = ["content.ProductCategoryPage", "content.ProductSeriesPage", "content.ProductDetailPage", "content.StandardPage"].includes(type);
  return renderTemplate`${wrap ? renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": title, "description": page.intro || "", "locale": lang }, { "default": async ($$result2) => renderTemplate`${type === "content.ProductCategoryPage" && renderTemplate`${renderComponent($$result2, "CategoryOverview", $$CategoryOverview, { "node": node })}`}${type === "content.ProductSeriesPage" && renderTemplate`${renderComponent($$result2, "SeriesListing", $$SeriesListing, { "node": node })}`}${type === "content.ProductDetailPage" && renderTemplate`${renderComponent($$result2, "ProductDetail", $$ProductDetail, { "p": p })}`}${type === "content.StandardPage" && renderTemplate`${renderComponent($$result2, "Fragment", Fragment, {}, { "default": async ($$result3) => renderTemplate`${maybeRenderHead()}<section class="page-hero"${addAttribute(`background-image:url('${FALLBACK}')`, "style")}><div class="page-hero__overlay"></div><div class="container page-hero__inner"><p class="eyebrow eyebrow--light">${page.eyebrow}</p><h1>${page.title}</h1>${page.intro && renderTemplate`<p class="page-hero__intro">${page.intro}</p>`}</div></section><section class="section"><div class="container content-page">${(page.body || []).map((b) => b.type === "heading" ? renderTemplate`<h2>${b.value}</h2>` : b.type === "paragraph" ? renderTemplate`<div class="content-page__rt">${unescapeHTML(b.value)}</div>` : b.type === "quote" ? renderTemplate`<blockquote>${b.value.text}${b.value.cite && renderTemplate`<cite>${b.value.cite}</cite>`}</blockquote>` : null)}</div></section>` })}`}` })}` : type === "content.ArticlePage" ? renderTemplate`${renderComponent($$result, "ArticleLayout", $$ArticleLayout, { "article": article, "related": [] })}` : type === "content.SolutionPage" ? renderTemplate`${renderComponent($$result, "SolutionLayout", $$SolutionLayout, { "solution": solution })}` : renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": title, "locale": lang }, { "default": async ($$result2) => renderTemplate`<section class="section"><div class="container"><h1>${page.title}</h1></div></section>` })}`}`;
}, "C:/Users/WELCOME/Desktop/FL/mpinger/src/pages/[lang]/[...path].astro", void 0);

const $$file = "C:/Users/WELCOME/Desktop/FL/mpinger/src/pages/[lang]/[...path].astro";
const $$url = "/[lang]/[...path]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
