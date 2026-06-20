import { c as createComponent, r as renderTemplate, e as defineScriptVars, a as addAttribute, m as maybeRenderHead, b as createAstro, f as renderHead, d as renderComponent, g as renderSlot } from './astro/server_DZ0hs0Eg.mjs';
import 'kleur/colors';
/* empty css                          */
import 'clsx';

// Navigation model for the mega-menu, derived from the source site's
// information architecture (5 top-level sections). Labels are short functional
// nav strings; structure mirrors the real URL taxonomy mapped during recon.

const metaNav = {
  customerService: { href: '/customer-care' },
  login: { href: '/dmg-mori-account' },
};

const footerNav = [
  { key: 'contact', href: '/kontakt' },
  { key: 'imprint', href: '/impressum' },
  { key: 'privacy', href: '/datenschutzerklaerung' },
  { key: 'terms', href: '/agb' },
];

const footerColumns = [
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

const social = [
  { label: 'LinkedIn', href: 'https://www.linkedin.com/company/mpinger/', icon: 'linkedin' },
];

// Navigation: real machine classification (from the machine park) under
// Products, plus Solutions and Company. Every path exists in the CMS.
const megaNav = [
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

// i18n config + UI string dictionary. German is primary.
const LOCALES = ['de', 'en'];
const DEFAULT_LOCALE = 'de';
const LOCALE_LABELS = { de: 'Deutsch', en: 'English', es: 'Español' };
const LOCALE_SHORT = { de: 'DE', en: 'EN', es: 'ES' };

// UI labels used by the chrome (nav, footer, buttons). CMS supplies page content.
const DICT = {
  de: {
    products: 'Produkte', solutions: 'Lösungen', customerCare: 'Kundenservice',
    news: 'News & Media', company: 'Unternehmen',
    customerService: 'Kundenservice', login: 'Anmelden', search: 'Suche',
    requestQuote: 'Angebot anfragen', technicalData: 'Technische Daten',
    readMore: 'Mehr erfahren', discover: 'Entdecken', allOf: 'Alle',
    productWebsite: 'Produkt-Website', contact: 'Kontakt',
    about: 'Über uns', legal: 'Rechtliches', imprint: 'Impressum',
    privacy: 'Datenschutz', terms: 'AGB',
  },
  en: {
    products: 'Products', solutions: 'Solutions', customerCare: 'Customer Care',
    news: 'News & Media', company: 'Company',
    customerService: 'Customer Service', login: 'Login', search: 'Search',
    requestQuote: 'Request a quote', technicalData: 'Technical data',
    readMore: 'Read more', discover: 'Discover', allOf: 'All',
    productWebsite: 'Product Website', contact: 'Contact',
    about: 'About us', legal: 'Legal', imprint: 'Legal Notice',
    privacy: 'Privacy', terms: 'Terms',
  },
  es: {
    products: 'Productos', solutions: 'Soluciones', customerCare: 'Atención al Cliente',
    news: 'Noticias y Medios', company: 'Empresa',
    customerService: 'Atención al Cliente', login: 'Iniciar sesión', search: 'Buscar',
    requestQuote: 'Solicitar presupuesto', technicalData: 'Datos técnicos',
    readMore: 'Leer más', discover: 'Descubrir', allOf: 'Todos',
    productWebsite: 'Sitio de Producto', contact: 'Contacto',
    about: 'Sobre nosotros', legal: 'Legal', imprint: 'Aviso legal',
    privacy: 'Privacidad', terms: 'Términos',
  },
};

function t(locale, key) {
  return (DICT[locale] || DICT[DEFAULT_LOCALE])[key] || (DICT[DEFAULT_LOCALE][key] || key);
}

// Prefix a CMS/site path with the active locale, e.g. ('de','/machines') -> '/de/machines'
function localizePath(locale, path = '/') {
  const clean = '/' + String(path).replace(/^\/+/, '').replace(/\/+$/, '');
  return clean === '/' ? `/${locale}` : `/${locale}${clean}`;
}

// Swap the locale segment of the current pathname (for the language dropdown).
function switchLocalePath(pathname, targetLocale) {
  const rest = pathname.replace(/^\/(de|en)(?=\/|$)/, '') || '/';
  return localizePath(targetLocale, rest);
}

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a;
const $$Astro$2 = createAstro();
const $$Header = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Header;
  const { locale = "de", pathname = "/" } = Astro2.props;
  const L = (p) => localizePath(locale, p);
  return renderTemplate(_a || (_a = __template(["", '<header class="ci-header" id="site-header"> <!-- Meta navigation (top utility bar) --> <div class="ci-meta-navigation"> <div class="ci-meta-left"> <button class="ci-site-selector" aria-haspopup="true"> <span>', '</span> <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2"><polyline points="6 9 12 15 18 9"></polyline></svg> </button> </div> <div class="ci-meta-right"> <a class="ci-meta-item"', ">", '</a> <!-- Language dropdown --> <div class="ci-lang-switch" id="lang-switch"> <button class="ci-meta-item ci-lang" aria-haspopup="true" aria-expanded="false" id="lang-toggle"> <span class="ci-lang-code">', '</span> <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2"><polyline points="6 9 12 15 18 9"></polyline></svg> </button> <div class="ci-lang-menu" id="lang-menu" hidden> ', ' </div> </div> <a class="ci-meta-item ci-login"', '> <span class="ci-login-avatar" aria-hidden="true"> <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="8" r="3.5"></circle><path d="M5 20c0-3.6 3.1-6 7-6s7 2.4 7 6"></path></svg> </span> ', ' </a> </div> </div> <!-- Main navigation --> <div class="ci-main-nav"> <div class="container ci-main-nav-inner"> <a class="ci-logo"', ' aria-label="mpinger home"> <img src="/brand/mpinger-logo-1.png" alt="mpinger Engineering" width="164" height="59"> </a> <nav class="ci-main-nav-entries" aria-label="Main"> ', ' </nav> <div class="ci-main-nav-actions"> <button class="ci-search-toggle" aria-label="Search" id="search-toggle"> <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="7"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg> </button> <button class="ci-burger" aria-label="Menu" id="burger"><span></span><span></span><span></span></button> </div> </div> </div> <!-- Cascading mega flyout (columns injected by JS) --> <div class="ci-nav-flyout" id="nav-flyout" hidden> <div class="ci-flyout-cols" id="flyout-cols"></div> </div> <!-- Search flyout --> <div class="ci-search-flyout" id="search-flyout" hidden> <div class="container ci-search-flyout-wrapper"> <div class="ci-search-input-wrapper"> <input type="search" class="ci-search-input" placeholder="What are you looking for?" aria-label="Search"> <button class="ci-search-flyout-close" id="search-close" aria-label="Close">&times;</button> </div> </div> </div> </header> <script>(function(){', `
  (function () {
    const header = document.getElementById('site-header');
    const flyout = document.getElementById('nav-flyout');
    const colsWrap = document.getElementById('flyout-cols');
    const entries = [...document.querySelectorAll('.ci-main-nav-entry')];
    const lp = (h) => (h && h.startsWith('/')) ? \`/\${LANG}\${h === '/' ? '' : h}\` : h;
    const finderIcon = '<svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2"><line x1="4" y1="7" x2="20" y2="7"/><circle cx="9" cy="7" r="2.2" fill="#fff"/><line x1="4" y1="17" x2="20" y2="17"/><circle cx="15" cy="17" r="2.2" fill="#fff"/></svg>';
    const chevron = '<svg class="ci-row-chev" viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2"><polyline points="9 6 15 12 9 18"/></svg>';
    let closeTimer;

    function makeColumn(title, items, level) {
      const col = document.createElement('div');
      col.className = 'ci-flyout-col';
      col.dataset.level = level;
      let html = \`<p class="ci-flyout-col-title">\${title}</p><div class="ci-flyout-list">\`;
      items.forEach((it, idx) => {
        const hasKids = it.children && it.children.length;
        if (it.finder) {
          html += \`<a class="ci-flyout-finder" href="\${lp(it.href)}" data-idx="\${idx}">\${finderIcon}<span>\${it.label}</span>\${hasKids ? chevron : ''}</a>\`;
        } else {
          html += \`<a class="ci-flyout-row\${hasKids ? ' has-kids' : ''}" href="\${lp(it.href)}" data-idx="\${idx}"><span>\${it.label}</span>\${hasKids ? chevron : ''}</a>\`;
        }
      });
      html += '</div>';
      col.innerHTML = html;

      col.querySelectorAll('[data-idx]').forEach((row) => {
        row.addEventListener('mouseenter', () => {
          // remove deeper columns
          [...colsWrap.children].forEach((c) => { if (+c.dataset.level > level) c.remove(); });
          col.querySelectorAll('[data-idx]').forEach((r) => r.classList.remove('is-active'));
          const item = items[+row.dataset.idx];
          if (item.children && item.children.length) {
            row.classList.add('is-active');
            colsWrap.appendChild(makeColumn(item.label.toUpperCase(), item.children, level + 1));
          }
        });
      });
      return col;
    }

    function openSection(i) {
      clearTimeout(closeTimer);
      const section = NAV[i];
      if (!section.children || !section.children.length) return;
      colsWrap.innerHTML = '';
      colsWrap.appendChild(makeColumn(section.label.toUpperCase(), section.children, 0));
      flyout.hidden = false;
      header.classList.add('flyout-open');
    }
    function closeFlyout() { flyout.hidden = true; header.classList.remove('flyout-open'); }

    entries.forEach((e) => {
      const i = +e.dataset.section;
      const isDesktop = () => window.matchMedia('(min-width: 1024px)').matches;
      e.addEventListener('mouseenter', () => { if (isDesktop()) openSection(i); });
      e.querySelector('.ci-main-nav-link').addEventListener('click', (ev) => {
        if (!isDesktop()) { ev.preventDefault(); openSection(i); header.classList.add('is-mobile-open'); }
      });
    });
    header.addEventListener('mouseleave', () => { closeTimer = setTimeout(closeFlyout, 180); });
    flyout.addEventListener('mouseenter', () => clearTimeout(closeTimer));

    // Search
    const sToggle = document.getElementById('search-toggle');
    const sFlyout = document.getElementById('search-flyout');
    document.getElementById('search-close')?.addEventListener('click', () => sFlyout.hidden = true);
    sToggle?.addEventListener('click', () => { sFlyout.hidden = !sFlyout.hidden; if (!sFlyout.hidden) sFlyout.querySelector('input')?.focus(); });

    // Language dropdown
    const langSwitch = document.getElementById('lang-switch');
    const langToggle = document.getElementById('lang-toggle');
    const langMenu = document.getElementById('lang-menu');
    langToggle?.addEventListener('click', (e) => {
      e.stopPropagation();
      const open = langMenu.hidden;
      langMenu.hidden = !open;
      langToggle.setAttribute('aria-expanded', String(open));
    });
    document.addEventListener('click', (e) => {
      if (langMenu && !langSwitch.contains(e.target)) { langMenu.hidden = true; langToggle?.setAttribute('aria-expanded', 'false'); }
    });

    // Mobile burger
    document.getElementById('burger')?.addEventListener('click', () => {
      header.classList.toggle('is-mobile-open');
      if (!header.classList.contains('is-mobile-open')) closeFlyout();
    });

    // Scroll shrink
    window.addEventListener('scroll', () => header.classList.toggle('is-scrolled', window.scrollY > 40));
  })();
})();<\/script>`], ["", '<header class="ci-header" id="site-header"> <!-- Meta navigation (top utility bar) --> <div class="ci-meta-navigation"> <div class="ci-meta-left"> <button class="ci-site-selector" aria-haspopup="true"> <span>', '</span> <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2"><polyline points="6 9 12 15 18 9"></polyline></svg> </button> </div> <div class="ci-meta-right"> <a class="ci-meta-item"', ">", '</a> <!-- Language dropdown --> <div class="ci-lang-switch" id="lang-switch"> <button class="ci-meta-item ci-lang" aria-haspopup="true" aria-expanded="false" id="lang-toggle"> <span class="ci-lang-code">', '</span> <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2"><polyline points="6 9 12 15 18 9"></polyline></svg> </button> <div class="ci-lang-menu" id="lang-menu" hidden> ', ' </div> </div> <a class="ci-meta-item ci-login"', '> <span class="ci-login-avatar" aria-hidden="true"> <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="8" r="3.5"></circle><path d="M5 20c0-3.6 3.1-6 7-6s7 2.4 7 6"></path></svg> </span> ', ' </a> </div> </div> <!-- Main navigation --> <div class="ci-main-nav"> <div class="container ci-main-nav-inner"> <a class="ci-logo"', ' aria-label="mpinger home"> <img src="/brand/mpinger-logo-1.png" alt="mpinger Engineering" width="164" height="59"> </a> <nav class="ci-main-nav-entries" aria-label="Main"> ', ' </nav> <div class="ci-main-nav-actions"> <button class="ci-search-toggle" aria-label="Search" id="search-toggle"> <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="7"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg> </button> <button class="ci-burger" aria-label="Menu" id="burger"><span></span><span></span><span></span></button> </div> </div> </div> <!-- Cascading mega flyout (columns injected by JS) --> <div class="ci-nav-flyout" id="nav-flyout" hidden> <div class="ci-flyout-cols" id="flyout-cols"></div> </div> <!-- Search flyout --> <div class="ci-search-flyout" id="search-flyout" hidden> <div class="container ci-search-flyout-wrapper"> <div class="ci-search-input-wrapper"> <input type="search" class="ci-search-input" placeholder="What are you looking for?" aria-label="Search"> <button class="ci-search-flyout-close" id="search-close" aria-label="Close">&times;</button> </div> </div> </div> </header> <script>(function(){', `
  (function () {
    const header = document.getElementById('site-header');
    const flyout = document.getElementById('nav-flyout');
    const colsWrap = document.getElementById('flyout-cols');
    const entries = [...document.querySelectorAll('.ci-main-nav-entry')];
    const lp = (h) => (h && h.startsWith('/')) ? \\\`/\\\${LANG}\\\${h === '/' ? '' : h}\\\` : h;
    const finderIcon = '<svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2"><line x1="4" y1="7" x2="20" y2="7"/><circle cx="9" cy="7" r="2.2" fill="#fff"/><line x1="4" y1="17" x2="20" y2="17"/><circle cx="15" cy="17" r="2.2" fill="#fff"/></svg>';
    const chevron = '<svg class="ci-row-chev" viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2"><polyline points="9 6 15 12 9 18"/></svg>';
    let closeTimer;

    function makeColumn(title, items, level) {
      const col = document.createElement('div');
      col.className = 'ci-flyout-col';
      col.dataset.level = level;
      let html = \\\`<p class="ci-flyout-col-title">\\\${title}</p><div class="ci-flyout-list">\\\`;
      items.forEach((it, idx) => {
        const hasKids = it.children && it.children.length;
        if (it.finder) {
          html += \\\`<a class="ci-flyout-finder" href="\\\${lp(it.href)}" data-idx="\\\${idx}">\\\${finderIcon}<span>\\\${it.label}</span>\\\${hasKids ? chevron : ''}</a>\\\`;
        } else {
          html += \\\`<a class="ci-flyout-row\\\${hasKids ? ' has-kids' : ''}" href="\\\${lp(it.href)}" data-idx="\\\${idx}"><span>\\\${it.label}</span>\\\${hasKids ? chevron : ''}</a>\\\`;
        }
      });
      html += '</div>';
      col.innerHTML = html;

      col.querySelectorAll('[data-idx]').forEach((row) => {
        row.addEventListener('mouseenter', () => {
          // remove deeper columns
          [...colsWrap.children].forEach((c) => { if (+c.dataset.level > level) c.remove(); });
          col.querySelectorAll('[data-idx]').forEach((r) => r.classList.remove('is-active'));
          const item = items[+row.dataset.idx];
          if (item.children && item.children.length) {
            row.classList.add('is-active');
            colsWrap.appendChild(makeColumn(item.label.toUpperCase(), item.children, level + 1));
          }
        });
      });
      return col;
    }

    function openSection(i) {
      clearTimeout(closeTimer);
      const section = NAV[i];
      if (!section.children || !section.children.length) return;
      colsWrap.innerHTML = '';
      colsWrap.appendChild(makeColumn(section.label.toUpperCase(), section.children, 0));
      flyout.hidden = false;
      header.classList.add('flyout-open');
    }
    function closeFlyout() { flyout.hidden = true; header.classList.remove('flyout-open'); }

    entries.forEach((e) => {
      const i = +e.dataset.section;
      const isDesktop = () => window.matchMedia('(min-width: 1024px)').matches;
      e.addEventListener('mouseenter', () => { if (isDesktop()) openSection(i); });
      e.querySelector('.ci-main-nav-link').addEventListener('click', (ev) => {
        if (!isDesktop()) { ev.preventDefault(); openSection(i); header.classList.add('is-mobile-open'); }
      });
    });
    header.addEventListener('mouseleave', () => { closeTimer = setTimeout(closeFlyout, 180); });
    flyout.addEventListener('mouseenter', () => clearTimeout(closeTimer));

    // Search
    const sToggle = document.getElementById('search-toggle');
    const sFlyout = document.getElementById('search-flyout');
    document.getElementById('search-close')?.addEventListener('click', () => sFlyout.hidden = true);
    sToggle?.addEventListener('click', () => { sFlyout.hidden = !sFlyout.hidden; if (!sFlyout.hidden) sFlyout.querySelector('input')?.focus(); });

    // Language dropdown
    const langSwitch = document.getElementById('lang-switch');
    const langToggle = document.getElementById('lang-toggle');
    const langMenu = document.getElementById('lang-menu');
    langToggle?.addEventListener('click', (e) => {
      e.stopPropagation();
      const open = langMenu.hidden;
      langMenu.hidden = !open;
      langToggle.setAttribute('aria-expanded', String(open));
    });
    document.addEventListener('click', (e) => {
      if (langMenu && !langSwitch.contains(e.target)) { langMenu.hidden = true; langToggle?.setAttribute('aria-expanded', 'false'); }
    });

    // Mobile burger
    document.getElementById('burger')?.addEventListener('click', () => {
      header.classList.toggle('is-mobile-open');
      if (!header.classList.contains('is-mobile-open')) closeFlyout();
    });

    // Scroll shrink
    window.addEventListener('scroll', () => header.classList.toggle('is-scrolled', window.scrollY > 40));
  })();
})();<\/script>`])), maybeRenderHead(), t(locale, "productWebsite"), addAttribute(L(metaNav.customerService.href), "href"), t(locale, "customerService"), LOCALE_SHORT[locale], LOCALES.map((lc) => renderTemplate`<a${addAttribute(`ci-lang-option ${lc === locale ? "is-active" : ""}`, "class")}${addAttribute(switchLocalePath(pathname, lc), "href")}${addAttribute(lc, "hreflang")}${addAttribute(lc, "lang")}> <span class="ci-lang-option-code">${LOCALE_SHORT[lc]}</span> <span>${LOCALE_LABELS[lc]}</span> </a>`), addAttribute(L(metaNav.login.href), "href"), t(locale, "login"), addAttribute(L("/"), "href"), megaNav.map((item, i) => renderTemplate`<div class="ci-main-nav-entry"${addAttribute(i, "data-section")}> <a class="ci-main-nav-link"${addAttribute(L(item.href), "href")}>${item.key ? t(locale, item.key) : item.label}</a> </div>`), defineScriptVars({ NAV: megaNav, LANG: locale }));
}, "C:/Users/WELCOME/Desktop/FL/mpinger/src/components/Header.astro", void 0);

const $$Astro$1 = createAstro();
const $$Footer = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Footer;
  const { locale = "de" } = Astro2.props;
  const L = (p) => localizePath(locale, p);
  const year = (/* @__PURE__ */ new Date()).getFullYear();
  const icons = {
    youtube: "M23 12s0-3.5-.4-5.1a2.6 2.6 0 0 0-1.8-1.8C19.2 4.7 12 4.7 12 4.7s-7.2 0-8.8.4A2.6 2.6 0 0 0 1.4 6.9C1 8.5 1 12 1 12s0 3.5.4 5.1a2.6 2.6 0 0 0 1.8 1.8c1.6.4 8.8.4 8.8.4s7.2 0 8.8-.4a2.6 2.6 0 0 0 1.8-1.8C23 15.5 23 12 23 12ZM9.7 15.3V8.7l5.7 3.3-5.7 3.3Z",
    linkedin: "M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3 9h4v12H3V9Zm6 0h3.8v1.7h.05c.53-1 1.83-2.05 3.77-2.05C20.5 8.65 21 11 21 14v7h-4v-6.2c0-1.48-.03-3.38-2.06-3.38-2.06 0-2.38 1.6-2.38 3.27V21H9V9Z",
    instagram: "M12 2.2c3.2 0 3.58.01 4.85.07 1.17.05 1.8.25 2.23.41.56.22.96.48 1.38.9.42.42.68.82.9 1.38.16.42.36 1.06.41 2.23.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.05 1.17-.25 1.8-.41 2.23a3.7 3.7 0 0 1-.9 1.38c-.42.42-.82.68-1.38.9-.42.16-1.06.36-2.23.41-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-1.17-.05-1.8-.25-2.23-.41a3.7 3.7 0 0 1-1.38-.9 3.7 3.7 0 0 1-.9-1.38c-.16-.42-.36-1.06-.41-2.23C2.21 15.58 2.2 15.2 2.2 12s.01-3.58.07-4.85c.05-1.17.25-1.8.41-2.23.22-.56.48-.96.9-1.38.42-.42.82-.68 1.38-.9.42-.16 1.06-.36 2.23-.41C8.42 2.21 8.8 2.2 12 2.2Zm0 3.05a6.75 6.75 0 1 0 0 13.5 6.75 6.75 0 0 0 0-13.5Zm0 11.14a4.39 4.39 0 1 1 0-8.78 4.39 4.39 0 0 1 0 8.78Zm6.99-11.43a1.58 1.58 0 1 1-3.15 0 1.58 1.58 0 0 1 3.15 0Z",
    facebook: "M22 12a10 10 0 1 0-11.56 9.88v-6.99H7.9V12h2.54V9.8c0-2.5 1.49-3.89 3.78-3.89 1.09 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56V12h2.78l-.44 2.89h-2.34v6.99A10 10 0 0 0 22 12Z"
  };
  return renderTemplate`${maybeRenderHead()}<footer class="ci-footer"> <!-- Animated line motif --> <div class="ci-footer-line-container"> <div class="ci-footer-line container"> <svg viewBox="0 0 1366 14" preserveAspectRatio="none" aria-hidden="true"> <line class="ci-footer-line-2" x1="0" y1="6" x2="1366" y2="6"></line> <line class="ci-footer-line-moving" x1="0" y1="6" x2="120" y2="6"> <animate attributeName="x1" from="-120" to="1366" dur="3.5s" repeatCount="indefinite"></animate> <animate attributeName="x2" from="0" to="1486" dur="3.5s" repeatCount="indefinite"></animate> </line> </svg> </div> </div> <div class="ci-footer-main"> <div class="container ci-footer-grid"> <div class="ci-footer-brand"> <img src="/brand/mpinger-logo-1.png" alt="mpinger Engineering"> <p>Ihr Partner für deutsch-indische Fertigungslösungen — Präzisionsteile in gleichbleibend hoher Qualität.</p> <div class="ci-footer-social"> ${social.map((s) => renderTemplate`<a${addAttribute(s.href, "href")}${addAttribute(s.label, "aria-label")} target="_blank" rel="noopener"> <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path${addAttribute(icons[s.icon], "d")}></path></svg> </a>`)} </div> </div> ${footerColumns.map((col) => renderTemplate`<div class="ci-footer-col"> <p class="ci-footer-col-title">${col.titleKey ? t(locale, col.titleKey) : col.title}</p> <ul> ${col.links.map((l) => renderTemplate`<li><a${addAttribute(L(l.href), "href")}>${l.key ? t(locale, l.key) : l.label}</a></li>`)} </ul> </div>`)} </div> </div> <div class="ci-footer-bottom"> <div class="container ci-footer-bottom-inner"> <nav class="ci-footer-bottom-navi" aria-label="Legal"> ${footerNav.map((l) => renderTemplate`<a${addAttribute(L(l.href), "href")}>${t(locale, l.key)}</a>`)} </nav> <span class="ci-footer-copyright">Copyright &copy; ${year} mpinger GmbH. Alle Rechte vorbehalten.</span> </div> </div> </footer>`;
}, "C:/Users/WELCOME/Desktop/FL/mpinger/src/components/Footer.astro", void 0);

const $$Astro = createAstro();
const $$BaseLayout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$BaseLayout;
  const {
    title = "mpinger GmbH",
    description = "Ihr Partner f\xFCr deutsch-indische Fertigungsl\xF6sungen.",
    locale = Astro2.currentLocale || "de"
  } = Astro2.props;
  const pathname = Astro2.url.pathname;
  return renderTemplate`<html${addAttribute(locale, "lang")}> <head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"><title>${title}</title><meta name="description"${addAttribute(description, "content")}><link rel="icon" href="/brand/mpinger-logo-2.png">${renderHead()}</head> <body> ${renderComponent($$result, "Header", $$Header, { "locale": locale, "pathname": pathname })} <main> ${renderSlot($$result, $$slots["default"])} </main> ${renderComponent($$result, "Footer", $$Footer, { "locale": locale })} </body></html>`;
}, "C:/Users/WELCOME/Desktop/FL/mpinger/src/layouts/BaseLayout.astro", void 0);

export { $$BaseLayout as $, LOCALES as L, localizePath as l, t };
