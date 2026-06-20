from django.db import models

from wagtail.models import Page
from wagtail.fields import RichTextField, StreamField
from wagtail.admin.panels import FieldPanel
from wagtail import blocks
from wagtail.images.blocks import ImageChooserBlock
from wagtail.images.api.fields import ImageRenditionField
from wagtail.api import APIField


# ---------- Reusable StreamField blocks ----------

class LabelValueBlock(blocks.StructBlock):
    label = blocks.CharBlock()
    value = blocks.CharBlock()


class HighlightBlock(blocks.StructBlock):
    title = blocks.CharBlock()
    text = blocks.TextBlock()


class SpecGroupBlock(blocks.StructBlock):
    group = blocks.CharBlock()
    rows = blocks.ListBlock(LabelValueBlock())


class BodyStream(blocks.StreamBlock):
    heading = blocks.CharBlock()
    paragraph = blocks.RichTextBlock()
    image = blocks.StructBlock([
        ("image", ImageChooserBlock()),
        ("caption", blocks.CharBlock(required=False)),
    ])
    quote = blocks.StructBlock([
        ("text", blocks.TextBlock()),
        ("cite", blocks.CharBlock(required=False)),
    ])
    facts = blocks.ListBlock(LabelValueBlock())


# ---------- Pages ----------

class ProductCategoryPage(Page):
    """Overview node — renders a teaser grid of its child pages."""
    eyebrow = models.CharField(max_length=120, blank=True)
    intro = models.TextField(blank=True)
    info = StreamField(
        blocks.StreamBlock([
            ("section", blocks.StructBlock([
                ("heading", blocks.CharBlock()),
                ("text", blocks.RichTextBlock()),
            ])),
        ], required=False),
        blank=True, use_json_field=True,
    )

    content_panels = Page.content_panels + [
        FieldPanel("eyebrow"), FieldPanel("intro"), FieldPanel("info"),
    ]
    api_fields = [APIField("eyebrow"), APIField("intro"), APIField("info")]

    subpage_types = [
        "content.ProductCategoryPage", "content.ProductSeriesPage", "content.ProductDetailPage",
    ]


class ProductSeriesPage(Page):
    """Series node — hero + child ProductDetailPage models."""
    eyebrow = models.CharField(max_length=120, blank=True)
    intro = models.TextField(blank=True)
    hero_image = models.ForeignKey(
        "wagtailimages.Image", null=True, blank=True, on_delete=models.SET_NULL, related_name="+",
    )

    content_panels = Page.content_panels + [
        FieldPanel("eyebrow"), FieldPanel("intro"), FieldPanel("hero_image"),
    ]

    @property
    def hero_url(self):
        return self.hero_image.get_rendition("fill-1200x675").url if self.hero_image else None

    api_fields = [APIField("eyebrow"), APIField("intro"), APIField("hero_url")]
    subpage_types = ["content.ProductDetailPage"]


class ProductDetailPage(Page):
    """Single machine page."""
    series = models.CharField(max_length=120, blank=True)
    tagline = models.TextField(blank=True)
    main_image = models.ForeignKey(
        "wagtailimages.Image", null=True, blank=True, on_delete=models.SET_NULL, related_name="+",
    )
    external_image_url = models.URLField(blank=True, help_text="Optional image URL (used if no uploaded image).")
    badges = StreamField(blocks.StreamBlock([("badge", blocks.CharBlock())], required=False), blank=True, use_json_field=True)
    key_facts = StreamField(blocks.StreamBlock([("fact", LabelValueBlock())], required=False), blank=True, use_json_field=True)
    highlights = StreamField(blocks.StreamBlock([("highlight", HighlightBlock())], required=False), blank=True, use_json_field=True)
    specs = StreamField(blocks.StreamBlock([("group", SpecGroupBlock())], required=False), blank=True, use_json_field=True)

    content_panels = Page.content_panels + [
        FieldPanel("series"), FieldPanel("tagline"), FieldPanel("main_image"), FieldPanel("external_image_url"),
        FieldPanel("badges"), FieldPanel("key_facts"), FieldPanel("highlights"), FieldPanel("specs"),
    ]

    @property
    def image_url(self):
        if self.external_image_url:
            return self.external_image_url
        return self.main_image.get_rendition("fill-1000x750").url if self.main_image else None

    api_fields = [
        APIField("series"), APIField("tagline"), APIField("image_url"),
        APIField("badges"), APIField("key_facts"), APIField("highlights"), APIField("specs"),
    ]
    parent_page_types = ["content.ProductSeriesPage", "content.ProductCategoryPage"]
    subpage_types = []


class ArticlePage(Page):
    """News / customer story / blog detail (T4–T6)."""
    TAG_CHOICES = [("News", "News"), ("Customer Story", "Customer Story"), ("Blog", "Blog")]
    tag = models.CharField(max_length=40, choices=TAG_CHOICES, default="News")
    published_date = models.DateField(null=True, blank=True)
    intro = models.TextField(blank=True)
    hero_image = models.ForeignKey(
        "wagtailimages.Image", null=True, blank=True, on_delete=models.SET_NULL, related_name="+",
    )
    body = StreamField(BodyStream(), blank=True, use_json_field=True)

    content_panels = Page.content_panels + [
        FieldPanel("tag"), FieldPanel("published_date"), FieldPanel("intro"),
        FieldPanel("hero_image"), FieldPanel("body"),
    ]

    @property
    def hero_url(self):
        return self.hero_image.get_rendition("fill-1600x900").url if self.hero_image else None

    api_fields = [
        APIField("tag"), APIField("published_date"), APIField("intro"),
        APIField("hero_url"), APIField("body"),
    ]


class SolutionPage(Page):
    """Solutions / industry page (T8)."""
    eyebrow = models.CharField(max_length=120, blank=True)
    intro = models.TextField(blank=True)
    hero_image = models.ForeignKey(
        "wagtailimages.Image", null=True, blank=True, on_delete=models.SET_NULL, related_name="+",
    )
    stats = StreamField(blocks.StreamBlock([("stat", LabelValueBlock())], required=False), blank=True, use_json_field=True)
    features = StreamField(
        blocks.StreamBlock([("feature", blocks.StructBlock([
            ("eyebrow", blocks.CharBlock(required=False)),
            ("title", blocks.CharBlock()),
            ("text", blocks.TextBlock()),
            ("image", ImageChooserBlock(required=False)),
        ]))], required=False),
        blank=True, use_json_field=True,
    )

    content_panels = Page.content_panels + [
        FieldPanel("eyebrow"), FieldPanel("intro"), FieldPanel("hero_image"),
        FieldPanel("stats"), FieldPanel("features"),
    ]

    @property
    def hero_url(self):
        return self.hero_image.get_rendition("fill-1920x900").url if self.hero_image else None

    api_fields = [
        APIField("eyebrow"), APIField("intro"), APIField("hero_url"),
        APIField("stats"), APIField("features"),
    ]


class StandardPage(Page):
    """Generic content page (T9 company / T13 legal)."""
    eyebrow = models.CharField(max_length=120, blank=True)
    intro = models.TextField(blank=True)
    body = StreamField(BodyStream(), blank=True, use_json_field=True)

    content_panels = Page.content_panels + [
        FieldPanel("eyebrow"), FieldPanel("intro"), FieldPanel("body"),
    ]
    api_fields = [APIField("eyebrow"), APIField("intro"), APIField("body")]
