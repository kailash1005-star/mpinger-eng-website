// i18n config + UI string dictionary. German is primary.
export const LOCALES = ['de', 'en'];
export const DEFAULT_LOCALE = 'de';
export const LOCALE_LABELS = { de: 'Deutsch', en: 'English', es: 'Español' };
export const LOCALE_SHORT = { de: 'DE', en: 'EN', es: 'ES' };

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

export function t(locale, key) {
  return (DICT[locale] || DICT[DEFAULT_LOCALE])[key] || (DICT[DEFAULT_LOCALE][key] || key);
}

// Prefix a CMS/site path with the active locale, e.g. ('de','/machines') -> '/de/machines'
export function localizePath(locale, path = '/') {
  const clean = '/' + String(path).replace(/^\/+/, '').replace(/\/+$/, '');
  return clean === '/' ? `/${locale}` : `/${locale}${clean}`;
}

// Swap the locale segment of the current pathname (for the language dropdown).
export function switchLocalePath(pathname, targetLocale) {
  const rest = pathname.replace(/^\/(de|en)(?=\/|$)/, '') || '/';
  return localizePath(targetLocale, rest);
}
