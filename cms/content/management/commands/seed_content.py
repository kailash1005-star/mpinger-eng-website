"""Seed a starter page tree so the API has navigable data.

Idempotent: skips pages that already exist (matched by slug under parent).
All text is original placeholder copy.
"""
from django.core.management.base import BaseCommand
from wagtail.models import Page, Locale

from content.models import (
    ProductCategoryPage, ProductSeriesPage, ProductDetailPage,
    ArticlePage, SolutionPage, StandardPage,
)


def child(parent, klass, slug, title, **fields):
    existing = parent.get_children().filter(slug=slug).first()
    if existing:
        return existing.specific
    page = klass(slug=slug, title=title, **fields)
    parent.add_child(instance=page)
    page.save_revision().publish()
    return page


class Command(BaseCommand):
    help = "Seed starter content tree (German locale)."

    def handle(self, *args, **opts):
        de = Locale.objects.get(language_code="de")
        # Site root home page (created by Wagtail bootstrap)
        home = Page.objects.filter(depth=2, locale=de).first()
        if not home:
            home = Page.objects.filter(depth=2).first()
        self.stdout.write(f"Root home page: {home}")

        machines = child(home, ProductCategoryPage, "machines", "Machines",
                         eyebrow="Products",
                         intro="CNC machines for every application — turning, milling, ULTRASONIC, LASERTEC and additive.")
        turning = child(machines, ProductCategoryPage, "turning", "Turning",
                        eyebrow="Machines",
                        intro="CNC lathes for every application, from universal turning to fully automated turn-mill.")
        universal = child(turning, ProductCategoryPage, "universal-turning", "Universal Turning",
                          eyebrow="Turning",
                          intro="Flexible, high-precision universal turning centers grouped into series.")
        clx = child(universal, ProductSeriesPage, "clx", "CLX Series",
                    eyebrow="Universal Turning",
                    intro="Universal turning centers for a wide range of parts — an attractive entry into precise turning.")
        child(clx, ProductDetailPage, "clx-350", "CLX 350",
              series="CLX Series", tagline="An attractive entry into precise, productive universal turning.")
        child(clx, ProductDetailPage, "clx-450", "CLX 450",
              series="CLX Series", tagline="More work area and power for larger universal turning jobs.")

        # News / solutions / company
        news = child(home, StandardPage, "news-and-media", "News & Media",
                     eyebrow="Newsroom", intro="News, customer stories and blog articles.")
        child(news, ArticlePage, "ctx-tc-series-extension", "New turn-mill center extends the CTX TC series",
              tag="News", intro="A more powerful turn-mill spindle and a larger work area for complete machining.")
        child(home, SolutionPage, "medical", "Medical",
              eyebrow="Focus Industry",
              intro="High-precision machining for implants, instruments and medical components.")
        child(home, StandardPage, "about-us", "About DMG MORI",
              eyebrow="Company",
              intro="A global partner for advanced manufacturing — machines, automation and digitization.")

        # Translations: copy the German tree into EN + ES locales so all three
        # locales resolve. (Editors refine the actual translations in the admin.)
        for code in ("en", "es"):
            target = Locale.objects.get(language_code=code)
            pages = [home] + list(home.get_descendants().order_by("path").specific())
            made = 0
            for pg in pages:
                pg = pg.specific
                if pg.has_translation(target):
                    continue
                try:
                    tp = pg.copy_for_translation(target, copy_parents=True)
                    tp.save_revision().publish()
                    made += 1
                except Exception as exc:  # noqa: BLE001
                    self.stdout.write(f"  skip {pg} -> {code}: {exc}")
            self.stdout.write(f"  {code}: {made} pages translated")

        self.stdout.write(self.style.SUCCESS("Seed complete."))
