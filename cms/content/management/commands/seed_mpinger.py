"""Seed mpinger company pages (DE) + English translations.

Content summarized from mpinger's own site (mpinger.de). Long legal texts
(Datenschutz/AGB) are placeholders to be completed in the admin.
Idempotent: skips pages whose slug already exists under the home page.
"""
from django.core.management.base import BaseCommand
from wagtail.models import Page, Locale

from content.models import StandardPage


# ---- Content (DE primary, EN translation) ----
PAGES = [
    {
        "slug": "ueber-uns",
        "de": {
            "title": "Über uns", "eyebrow": "Unternehmen",
            "intro": "Ihr Partner für deutsch-indische Fertigungslösungen.",
            "body": [
                ("heading", "Über uns"),
                ("paragraph", "<p>Bei <strong>mpinger GmbH</strong> nutzen wir eine breite Palette fortschrittlicher CNC-Maschinen, um präzisionsgefertigte Teile, Baugruppen und Unterbaugruppen in gleichbleibend hoher Qualität herzustellen. Neben dem Fräsen bieten wir – dank eines starken Partner-Netzwerks – auch Guss- und Blechbearbeitung, Druckguss sowie Oberflächenbehandlung an. Unser Ziel ist höchste Qualität bei pünktlicher Lieferung.</p>"),
                ("heading", "Unsere Mission"),
                ("paragraph", "<p>Wir bieten hochwertige und kosteneffiziente Fertigungslösungen nach höchsten Qualitätsstandards. Modernste Technologie und ein junges, engagiertes Team realisieren Ihre Projekte mit Präzision und Sorgfalt.</p>"),
                ("heading", "Unsere Vision"),
                ("paragraph", "<p>Das Beste aus zwei Welten: Wir verbinden deutsche Zuverlässigkeit mit indischer Präzisionstechnologie. Mit modernen 5-Achsen-CNC-Maschinen optimieren wir Produktionsprozesse und schaffen Wettbewerbsvorteile für unsere Kunden.</p>"),
                ("heading", "Unsere Kompetenzen"),
                ("paragraph", "<p><strong>CNC-Fertigung</strong> – hochpräzise Fertigung mit modernen Maschinen.<br><strong>Auftragsabwicklung</strong> – deutscher Vertragspartner mit zentralem Ansprechpartner.<br><strong>Virtuelle Fabrik</strong> – großes weltweites Partner-Netzwerk zur Realisierung Ihrer Aufgaben.</p>"),
            ],
        },
        "en": {
            "title": "About us", "eyebrow": "Company",
            "intro": "Your partner for German-Indian manufacturing solutions.",
            "body": [
                ("heading", "About us"),
                ("paragraph", "<p>At <strong>mpinger GmbH</strong> we use a broad range of advanced CNC machines to produce precision-manufactured parts, assemblies and sub-assemblies at consistently high quality. Beyond milling, our strong partner network lets us also offer casting and sheet-metal work, die casting and surface treatment. Our goal is the highest quality with on-time delivery.</p>"),
                ("heading", "Our mission"),
                ("paragraph", "<p>We deliver high-quality, cost-efficient manufacturing solutions to the highest quality standards. State-of-the-art technology and a young, dedicated team realise your projects with precision and care.</p>"),
                ("heading", "Our vision"),
                ("paragraph", "<p>The best of both worlds: we combine German reliability with Indian precision technology. With modern 5-axis CNC machines we optimise production processes and create competitive advantages for our customers.</p>"),
                ("heading", "Our competencies"),
                ("paragraph", "<p><strong>CNC manufacturing</strong> – high-precision production with modern machines.<br><strong>Order processing</strong> – a German contracting partner with a single point of contact.<br><strong>Virtual factory</strong> – a large global partner network to realise your tasks.</p>"),
            ],
        },
    },
    {
        "slug": "kontakt",
        "de": {
            "title": "Kontakt", "eyebrow": "Kontakt",
            "intro": "Nehmen Sie jetzt Kontakt zu uns auf.",
            "body": [
                ("heading", "Adresse"),
                ("paragraph", "<p>Gustav-Schenk-Weg 53<br>30455 Hannover<br>Deutschland</p>"),
                ("heading", "Telefon"),
                ("paragraph", "<p>+49-511-79090096</p>"),
                ("heading", "E-Mail"),
                ("paragraph", '<p><a href="mailto:info@mpinger.de">info@mpinger.de</a></p>'),
                ("heading", "LinkedIn"),
                ("paragraph", '<p><a href="https://www.linkedin.com/company/mpinger/">linkedin.com/company/mpinger</a></p>'),
            ],
        },
        "en": {
            "title": "Contact", "eyebrow": "Contact",
            "intro": "Get in touch with us today.",
            "body": [
                ("heading", "Address"),
                ("paragraph", "<p>Gustav-Schenk-Weg 53<br>30455 Hannover<br>Germany</p>"),
                ("heading", "Phone"),
                ("paragraph", "<p>+49-511-79090096</p>"),
                ("heading", "E-mail"),
                ("paragraph", '<p><a href="mailto:info@mpinger.de">info@mpinger.de</a></p>'),
                ("heading", "LinkedIn"),
                ("paragraph", '<p><a href="https://www.linkedin.com/company/mpinger/">linkedin.com/company/mpinger</a></p>'),
            ],
        },
    },
    {
        "slug": "impressum",
        "de": {
            "title": "Impressum", "eyebrow": "Rechtliches",
            "intro": "Angaben gemäß § 5 TMG.",
            "body": [
                ("heading", "mpinger GmbH"),
                ("paragraph", "<p>Gustav-Schenk-Weg 53<br>30455 Hannover</p>"),
                ("heading", "Kontakt"),
                ("paragraph", "<p>Telefon: +49 (0) 511-10554580<br>E-Mail: info@mpinger.de</p>"),
                ("heading", "Vertreten durch den Geschäftsführer"),
                ("paragraph", "<p>Ramkumar Palanisamy</p>"),
                ("heading", "Umsatzsteuer-Identifikationsnummer"),
                ("paragraph", "<p>USt-IdNr. gemäß § 27a UStG: DE290407187</p>"),
                ("heading", "Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV"),
                ("paragraph", "<p>Ramkumar Palanisamy</p>"),
            ],
        },
        "en": {
            "title": "Legal Notice", "eyebrow": "Legal",
            "intro": "Information according to § 5 TMG.",
            "body": [
                ("heading", "mpinger GmbH"),
                ("paragraph", "<p>Gustav-Schenk-Weg 53<br>30455 Hannover, Germany</p>"),
                ("heading", "Contact"),
                ("paragraph", "<p>Phone: +49 (0) 511-10554580<br>E-mail: info@mpinger.de</p>"),
                ("heading", "Managing Director"),
                ("paragraph", "<p>Ramkumar Palanisamy</p>"),
                ("heading", "VAT identification number"),
                ("paragraph", "<p>VAT ID under § 27a German VAT Act: DE290407187</p>"),
                ("heading", "Responsible for content under § 55 (2) RStV"),
                ("paragraph", "<p>Ramkumar Palanisamy</p>"),
            ],
        },
    },
    {
        "slug": "datenschutzerklaerung",
        "de": {
            "title": "Datenschutzerklärung", "eyebrow": "Rechtliches",
            "intro": "Datenschutz auf einen Blick.",
            "body": [("paragraph", "<p>Platzhalter: Die vollständige Datenschutzerklärung wird im Admin gepflegt.</p>")],
        },
        "en": {
            "title": "Privacy Policy", "eyebrow": "Legal",
            "intro": "Privacy at a glance.",
            "body": [("paragraph", "<p>Placeholder: the full privacy policy will be maintained in the admin.</p>")],
        },
    },
    {
        "slug": "agb",
        "de": {
            "title": "AGB", "eyebrow": "Rechtliches",
            "intro": "Allgemeine Geschäftsbedingungen.",
            "body": [("paragraph", "<p>Platzhalter: Die vollständigen AGB werden im Admin gepflegt.</p>")],
        },
        "en": {
            "title": "Terms & Conditions", "eyebrow": "Legal",
            "intro": "General terms and conditions.",
            "body": [("paragraph", "<p>Placeholder: the full terms will be maintained in the admin.</p>")],
        },
    },
]


class Command(BaseCommand):
    help = "Seed mpinger company pages (DE + EN)."

    def handle(self, *args, **opts):
        de = Locale.objects.get(language_code="de")
        en = Locale.objects.get(language_code="en")
        home = Page.objects.filter(depth=2, locale=de).first() or Page.objects.filter(depth=2).first()
        self.stdout.write(f"Home: {home}")

        for spec in PAGES:
            slug = spec["slug"]
            existing = home.get_children().filter(slug=slug).first()
            if existing:
                self.stdout.write(f"  exists: {slug}")
                de_page = existing.specific
            else:
                d = spec["de"]
                de_page = StandardPage(slug=slug, title=d["title"], eyebrow=d["eyebrow"], intro=d["intro"], body=d["body"])
                home.add_child(instance=de_page)
                de_page.save_revision().publish()
                self.stdout.write(f"  created DE: {slug}")

            # English translation
            e = spec["en"]
            if not de_page.has_translation(en):
                tp = de_page.copy_for_translation(en, copy_parents=True)
                tp.title = e["title"]; tp.eyebrow = e["eyebrow"]; tp.intro = e["intro"]; tp.body = e["body"]
                tp.slug = slug
                tp.save_revision().publish()
                self.stdout.write(f"  created EN: {slug}")
            else:
                self.stdout.write(f"  EN exists: {slug}")

        self.stdout.write(self.style.SUCCESS("mpinger seed complete."))
