# DMG MORI clone — Astro frontend + Wagtail CMS

Two parts run together:

| Part | Tech | Port | Path |
|---|---|---|---|
| **Frontend** | Astro (SSR, Node adapter) | 4321 (dev) / 4330 (built) | repo root |
| **CMS / API** | Wagtail (Django) | 8000 | `cms/` |

The frontend fetches content from the CMS REST API at request time and renders
the German-primary, multilingual site (`/de` `/en` `/es`).

## Run the CMS (Wagtail)
```bash
# from repo root
./cms-venv/Scripts/python.exe cms/manage.py runserver 127.0.0.1:8000
```
- Admin: http://127.0.0.1:8000/admin/  (user `admin`, pass `DmgAdmin#2026` — change it)
- API:   http://127.0.0.1:8000/api/v2/pages/
- Re-seed sample content: `./cms-venv/Scripts/python.exe cms/manage.py seed_content`

## Run the frontend (Astro)
```bash
npm install
npm run dev          # dev server (SSR) at http://localhost:4321  → redirects to /de

## Structure
- `src/components`, `src/layouts` — design system + templates (Header mega-menu, Footer, etc.)
- `src/pages/[lang]/[...path].astro` — CMS-driven catch-all (renders every page type)
- `src/lib/cms.js` — Wagtail API client · `src/lib/i18n.js` — locales + helpers
- `cms/content/models.py` — CMS content schema · `cms/dmgcms/api.py` — API router

