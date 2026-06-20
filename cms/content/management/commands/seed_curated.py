"""Seed the curated nav tree (Products, Solutions, Company) with placeholder
content so every mega-menu link resolves. DE primary + EN copies.
Idempotent. All text is generic placeholder, edited later in the admin."""
from django.core.management.base import BaseCommand
from wagtail.models import Page, Locale

from content.models import (
    ProductCategoryPage, ProductSeriesPage, ProductDetailPage, SolutionPage, StandardPage,
)

# (slug, type, title, [children])
TREE = [
    ("products", "category", "Products", [
        ("machines", "category", "Machines", [
            ("turning", "category", "Turning", [
                ("universal-turning", "category", "Universal Turning", [
                    ("clx", "series", "CLX Series", [
                        ("clx-350", "detail", "CLX 350", []),
                    ]),
                    ("nlx", "series", "NLX Series", [
                        ("nlx-2500", "detail", "NLX 2500", []),
                    ]),
                ]),
            ]),
        ]),
        ("automation", "category", "Automation", [
            ("workpiece-handling", "category", "Workpiece Handling", [
                ("gantry-loader", "detail", "Gantry Loader", []),
                ("robot", "detail", "Robot", []),
            ]),
        ]),
    ]),
    ("solutions", "category", "Solutions", [
        ("focus-industries", "category", "Focus Industries", [
            ("aerospace", "solution", "Aerospace", []),
            ("medical", "solution", "Medical", []),
        ]),
        ("technology-excellence", "category", "Technology Excellence", [
            ("aerospace-excellence", "solution", "Aerospace Excellence", []),
        ]),
    ]),
    ("company", "category", "Company", [
        ("locations", "standard", "Locations", []),
    ]),
]


def build(kind, title, lang):
    de = lang == "de"
    ph = ("Platzhalterinhalt. Bitte im Admin bearbeiten." if de
          else "Placeholder content. Please edit in the admin.")
    if kind == "category":
        return ProductCategoryPage, dict(eyebrow=title, intro=ph)
    if kind == "series":
        return ProductSeriesPage, dict(eyebrow=title, intro=ph)
    if kind == "detail":
        return ProductDetailPage, dict(
            series=title, tagline=ph,
            badges=[("badge", "Platzhalter" if de else "Placeholder")],
            key_facts=[("fact", {"label": "Merkmal" if de else "Spec", "value": "–"}),
                       ("fact", {"label": "Merkmal" if de else "Spec", "value": "–"})],
            highlights=[("highlight", {"title": "Highlight", "text": ph})],
            specs=[("group", {"group": "Technische Daten" if de else "Technical data",
                              "rows": [{"label": "Merkmal" if de else "Spec", "value": "–"}]})],
        )
    if kind == "solution":
        return SolutionPage, dict(
            eyebrow=title, intro=ph,
            stats=[("stat", {"label": "Kennzahl" if de else "Metric", "value": "00"}),
                   ("stat", {"label": "Kennzahl" if de else "Metric", "value": "00"})],
            features=[("feature", {"eyebrow": "", "title": "Merkmal" if de else "Feature", "text": ph})],
        )
    return StandardPage, dict(eyebrow=title, intro=ph, body=[("paragraph", f"<p>{ph}</p>")])


class Command(BaseCommand):
    help = "Seed curated nav tree (DE + EN)."

    def handle(self, *args, **opts):
        self.de = Locale.objects.get(language_code="de")
        self.en = Locale.objects.get(language_code="en")
        home = Page.objects.filter(depth=2, locale=self.de).first() or Page.objects.filter(depth=2).first()
        self.stdout.write(f"Home: {home}")
        for node in TREE:
            self.create(home, node)
        self.stdout.write(self.style.SUCCESS("Curated seed complete."))

    def create(self, parent, node):
        slug, kind, title, children = node
        existing = parent.get_children().filter(slug=slug).first()
        if existing:
            page = existing.specific
        else:
            klass, fields = build(kind, title, "de")
            page = klass(slug=slug, title=title, **fields)
            parent.add_child(instance=page)
            page.save_revision().publish()
            # EN translation
            _, en_fields = build(kind, title, "en")
            tp = page.copy_for_translation(self.en, copy_parents=True)
            for k, v in en_fields.items():
                setattr(tp, k, v)
            tp.slug = slug
            tp.save_revision().publish()
            self.stdout.write(f"  + {kind}: {slug}")
        for child in children:
            self.create(page, child)
