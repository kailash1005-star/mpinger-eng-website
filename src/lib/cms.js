// Client for the Wagtail REST API (consumed by SSR routes at request time).
const CMS_URL = import.meta.env.CMS_URL || 'http://127.0.0.1:8000';
const API = `${CMS_URL}/api/v2`;

async function getJSON(url) {
  const res = await fetch(url);
  if (!res.ok) throw new Error(`CMS ${res.status} ${url}`);
  return res.json();
}

// Path of a CMS page (no host, no trailing slash), e.g. "/machines/turning".
function urlPath(htmlUrl) {
  try { return new URL(htmlUrl).pathname.replace(/\/+$/, '') || '/'; }
  catch { return String(htmlUrl).replace(/\/+$/, '') || '/'; }
}

// List all pages for a locale (small site → one call, default fields).
export async function listPages(locale = 'de') {
  const data = await getJSON(`${API}/pages/?locale=${locale}&limit=500`);
  return data.items.map((i) => ({
    id: i.id,
    type: i.meta.type,
    title: i.title,
    path: urlPath(i.meta.html_url),
    slug: i.meta.slug,
  }));
}

// Full detail for one page id (includes the type's api_fields).
export async function getPage(id) {
  return getJSON(`${API}/pages/${id}/`);
}

// Resolve a site path + locale to a fully-hydrated page, or null.
export async function getPageByPath(path, locale = 'de') {
  const target = '/' + String(path).replace(/^\/+/, '').replace(/\/+$/, '');
  const norm = target === '/' ? '/' : target;
  const pages = await listPages(locale);
  const hit = pages.find((p) => p.path === norm);
  if (!hit) return null;
  const detail = await getPage(hit.id);
  return { type: hit.type, page: detail };
}

// Children of a page (used by category overview teaser grids).
export async function getChildren(parentId, locale = 'de') {
  const data = await getJSON(`${API}/pages/?child_of=${parentId}&locale=${locale}&fields=title,slug&limit=100`);
  return data.items.map((i) => ({ id: i.id, title: i.title, path: urlPath(i.meta.html_url), slug: i.meta.slug }));
}

// Image URL helper. Accepts a string URL (from *_url api fields), a rendition
// object {url}, or null; returns an absolute URL or the fallback.
export function imgUrl(val, fallback = '') {
  let u = null;
  if (typeof val === 'string') u = val;
  else if (val && val.url) u = val.url;
  if (!u) return fallback;
  return u.startsWith('http') ? u : `${CMS_URL}${u}`;
}
