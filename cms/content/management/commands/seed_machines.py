# -*- coding: utf-8 -*-
"""Seed the real machine park (classified) into the CMS, DE primary + EN.

Machine model names and specifications are factual data taken from the public
machine-park listing; descriptions are written fresh. No spec placeholders.
Re-runnable: clears the existing /products/machines, /products/automation and
/products/messtechnik subtrees first, then rebuilds them.
"""
from django.core.management.base import BaseCommand
from wagtail.models import Page, Locale
from content.models import ProductCategoryPage, ProductSeriesPage, ProductDetailPage

IMG_MILL = "https://in.dmgmori.com/resource/image/884226/stage_slider/xlg/8/aerospace-stageteaser-picture.jpg"
IMG_TURN = "https://in.dmgmori.com/resource/image/929758/stage_slider/xlg/7/energy-stageteaser-picture.jpg"
IMG_AUTO = "https://in.dmgmori.com/resource/image/681856/stage_slider/xlg/7/event-plattform-stageteaser-picture.jpg"
IMG_MEAS = "https://in.dmgmori.com/resource/image/661444/stage_slider/xlg/4/digital-twin-showroom-pfronten-stageteaser-picture.jpg"


def facts(rows):
    return [("fact", {"label": l, "value": v}) for l, v in rows]


def specs(groups):
    return [("group", {"group": g, "rows": [{"label": l, "value": v} for l, v in rows]}) for g, rows in groups]


def highs(items):
    return [("highlight", {"title": t, "text": x}) for t, x in items]


def badges(items):
    return [("badge", b) for b in items]


# ---- Category / series scaffolding (slug, kind, de_title, en_title, de_intro, en_intro) ----
CATEGORIES = [
    ("machines", "category", "Maschinen", "Machines",
     "Unser Maschinenpark: leistungsstarke Fräs-, Dreh-, Automations- und Messtechnik für anspruchsvolle Zerspanung.",
     "Our machine park: powerful milling, turning, automation and metrology for demanding machining."),
    ("machines/fraesen", "category", "Fräsen", "Milling",
     "Hochpräzises CNC-Fräsen auf modernen 5-Achs- und Horizontalbearbeitungszentren – vom Prototyp bis zur Serie.",
     "High-precision CNC milling on modern 5-axis and horizontal machining centres – from prototype to series."),
    ("machines/fraesen/5-achs-universal", "series", "5-Achs-Universalbearbeitung", "5-Axis Universal Machining",
     "5-Achs-Universalbearbeitungszentren für die Komplettbearbeitung komplexer Werkstücke in einer Aufspannung.",
     "5-axis universal machining centres for complete machining of complex parts in a single setup."),
    ("machines/fraesen/horizontalbearbeitung", "series", "Horizontalbearbeitung", "Horizontal Machining",
     "Horizontalbearbeitungszentren für produktive Serienfertigung mit Palettenwechsler.",
     "Horizontal machining centres for productive series production with pallet changer."),
    ("machines/fraesen/vertikalfraesen", "series", "Vertikalfräsen", "Vertical Milling",
     "Vertikale Fräsmaschinen für kompakte, präzise Bearbeitung.",
     "Vertical milling machines for compact, precise machining."),
    ("machines/drehen", "category", "Drehen", "Turning",
     "CNC-Drehen für komplexe Präzisionsteile – von der Universaldrehmaschine bis zur Großdrehmaschine.",
     "CNC turning for complex precision parts – from universal lathes to large turning machines."),
    ("machines/drehen/universaldrehmaschinen", "series", "Universaldrehmaschinen", "Universal Lathes",
     "Universaldrehmaschinen für flexible Dreh- und Fräsbearbeitung mit Komplettbearbeitung.",
     "Universal lathes for flexible turning and milling with complete machining."),
    ("machines/drehen/grossdrehmaschinen", "series", "Großdrehmaschinen", "Large Turning Machines",
     "Großdrehmaschinen für schwere und lange Werkstücke.",
     "Large turning machines for heavy and long workpieces."),
    ("automation", "category", "Automation", "Automation",
     "Roboter- und palettenbasierte Automationslösungen für die mannarme 24/7-Produktion.",
     "Robot- and pallet-based automation solutions for low-manning 24/7 production."),
    ("messtechnik", "category", "Messtechnik", "Metrology",
     "Fortschrittliche Messtechnik für höchste Präzision und lückenlose Qualitätssicherung.",
     "Advanced metrology for highest precision and complete quality assurance."),
]

# ---- Machines (detail) grouped by parent path ----
MACHINES = {
    "machines/fraesen/5-achs-universal": [
        ("dmc-160-u", "DMC 160 U duoBLOCK", IMG_MILL,
         {"series": "5-Achs-Universalbearbeitung", "tagline": "5-Achsen-Universalbearbeitungszentrum von DMG MORI für große Werkstücke.",
          "badges": ["5 Achsen", "duoBLOCK", "DMG MORI"],
          "key_facts": [("Verfahrweg X", "1.600 mm"), ("Verfahrweg Y", "1.600 mm"), ("Verfahrweg Z", "1.100 mm")],
          "highlights": [("Komplettbearbeitung", "Drehen und Schleifen in einer Aufspannung."), ("Höchste Präzision", "Genauigkeitspaket und Spindelkühlung.")],
          "specs": [("Ausstattung", [("Werkzeugwechsler", "120-fach"), ("Werkzeugaufnahme", "SK50 / HSK-63"), ("Kühlung", "Innenhochdruck- und Spindelkühlung"), ("Steuerung", "Siemens 840D"), ("Besonderheiten", "Palettenwechsler, Drehen–Schleifen, Genauigkeitspaket")])]},
         {"series": "5-Axis Universal Machining", "tagline": "5-axis universal machining centre by DMG MORI for large workpieces.",
          "badges": ["5 axes", "duoBLOCK", "DMG MORI"],
          "key_facts": [("Travel X", "1,600 mm"), ("Travel Y", "1,600 mm"), ("Travel Z", "1,100 mm")],
          "highlights": [("Complete machining", "Turning and grinding in one setup."), ("Highest precision", "Accuracy package and spindle cooling.")],
          "specs": [("Equipment", [("Tool changer", "120 tools"), ("Tool holder", "SK50 / HSK-63"), ("Cooling", "Internal high-pressure & spindle cooling"), ("Control", "Siemens 840D"), ("Highlights", "Pallet changer, turning–grinding, accuracy package")])]}),
        ("dmc-125fd", "DMC 125 FD duoBLOCK", IMG_MILL,
         {"series": "5-Achs-Universalbearbeitung", "tagline": "5-Achsen-Universalbearbeitungszentrum mit Dreh-, Fräs- und Schleiffunktion.",
          "badges": ["5 Achsen", "Drehen-Fräsen-Schleifen", "DMG MORI"],
          "key_facts": [("Verfahrweg X", "1.000 mm"), ("Verfahrweg Y", "1.000 mm"), ("Verfahrweg Z", "1.000 mm")],
          "highlights": [("Vielseitig", "Drehen, Fräsen und Schleifen kombiniert."), ("Produktiv", "Palettenwechsler für mannarme Fertigung.")],
          "specs": [("Ausstattung", [("Werkzeugwechsler", "120-fach"), ("Werkzeugaufnahme", "HSK100"), ("Spindeldrehzahl", "10.000 U/min"), ("Kühlung", "Innenhochdruck- und Spindelkühlung"), ("Steuerung", "Siemens 840D"), ("Besonderheiten", "Palettenwechsler, Genauigkeitspaket")])]},
         {"series": "5-Axis Universal Machining", "tagline": "5-axis universal machining centre with turning, milling and grinding.",
          "badges": ["5 axes", "Turn-Mill-Grind", "DMG MORI"],
          "key_facts": [("Travel X", "1,000 mm"), ("Travel Y", "1,000 mm"), ("Travel Z", "1,000 mm")],
          "highlights": [("Versatile", "Turning, milling and grinding combined."), ("Productive", "Pallet changer for low-manning production.")],
          "specs": [("Equipment", [("Tool changer", "120 tools"), ("Tool holder", "HSK100"), ("Spindle speed", "10,000 rpm"), ("Cooling", "Internal high-pressure & spindle cooling"), ("Control", "Siemens 840D"), ("Highlights", "Pallet changer, accuracy package")])]}),
        ("dmu-125p", "DMU 125 P duoBLOCK", IMG_MILL,
         {"series": "5-Achs-Universalbearbeitung", "tagline": "5-Achsen-Universalbearbeitungszentrum mit kraftvoller Spindel und CELOS.",
          "badges": ["5 Achsen", "CELOS", "DMG MORI"],
          "key_facts": [("Verfahrweg X", "1.250 mm"), ("Verfahrweg Y", "1.000 mm"), ("Verfahrweg Z", "1.000 mm")],
          "highlights": [("Kraftvolle Spindel", "15.000 U/min bei 410 Nm."), ("Fräsen & Schleifen", "5-Achs-Komplettbearbeitung.")],
          "specs": [("Ausstattung", [("Werkzeugwechsler", "120-fach"), ("Werkzeugaufnahme", "HSK100"), ("Spindel", "15.000 U/min, 410 Nm"), ("Kühlung", "Innenhochdruck- und Spindelkühlung"), ("Steuerung", "Siemens 840D CELOS"), ("Besonderheiten", "Genauigkeitspaket")])]},
         {"series": "5-Axis Universal Machining", "tagline": "5-axis universal machining centre with a powerful spindle and CELOS.",
          "badges": ["5 axes", "CELOS", "DMG MORI"],
          "key_facts": [("Travel X", "1,250 mm"), ("Travel Y", "1,000 mm"), ("Travel Z", "1,000 mm")],
          "highlights": [("Powerful spindle", "15,000 rpm at 410 Nm."), ("Milling & grinding", "5-axis complete machining.")],
          "specs": [("Equipment", [("Tool changer", "120 tools"), ("Tool holder", "HSK100"), ("Spindle", "15,000 rpm, 410 Nm"), ("Cooling", "Internal high-pressure & spindle cooling"), ("Control", "Siemens 840D CELOS"), ("Highlights", "Accuracy package")])]}),
        ("dmc-90p", "DMC 90 P duoBLOCK", IMG_MILL,
         {"series": "5-Achs-Universalbearbeitung", "tagline": "5-Achs-Fräsmaschine für Schwerzerspanung mit Siemens ONE.",
          "badges": ["5 Achsen", "Schwerzerspanung", "DMG MORI"],
          "key_facts": [("Verfahrweg X", "900 mm"), ("Verfahrweg Y", "1.050 mm"), ("Verfahrweg Z", "850 mm")],
          "highlights": [("Schwerzerspanung", "Schwerzerspanungspaket und FEM-optimierte Komponenten."), ("Thermostabil", "Optimierter Temperaturgang, Spindle Growth Sensor.")],
          "specs": [("Ausstattung", [("Werkzeugwechsler", "60-fach"), ("Werkzeugaufnahme", "SK50"), ("Vorschübe", "wassergekühlt"), ("Steuerung", "Siemens ONE"), ("Besonderheiten", "Palettenwechsler, Spindle Growth Sensor")])]},
         {"series": "5-Axis Universal Machining", "tagline": "5-axis milling machine for heavy-duty cutting with Siemens ONE.",
          "badges": ["5 axes", "Heavy cutting", "DMG MORI"],
          "key_facts": [("Travel X", "900 mm"), ("Travel Y", "1,050 mm"), ("Travel Z", "850 mm")],
          "highlights": [("Heavy-duty cutting", "Heavy-cutting package and FEM-optimised components."), ("Thermally stable", "Optimised thermal behaviour, spindle growth sensor.")],
          "specs": [("Equipment", [("Tool changer", "60 tools"), ("Tool holder", "SK50"), ("Feeds", "water-cooled"), ("Control", "Siemens ONE"), ("Highlights", "Pallet changer, spindle growth sensor")])]}),
        ("dmu-75-monoblock", "DMU 75 monoBLOCK", IMG_MILL,
         {"series": "5-Achs-Universalbearbeitung", "tagline": "Kompaktes 5-Achsen-Universalbearbeitungszentrum mit Hochdrehzahlspindel.",
          "badges": ["5 Achsen", "monoBLOCK", "DMG MORI"],
          "key_facts": [("Verfahrweg X", "750 mm"), ("Verfahrweg Y", "800 mm"), ("Verfahrweg Z", "800 mm")],
          "highlights": [("Hohe Drehzahl", "Spindel bis 20.000 U/min."), ("Automatisiert", "Palettenwechselautomation.")],
          "specs": [("Ausstattung", [("Werkzeugwechsler", "60-fach"), ("Werkzeugaufnahme", "SK40"), ("Spindeldrehzahl", "20.000 U/min"), ("Kühlung", "Innenhochdruck- und Spindelkühlung"), ("Steuerung", "Heidenhain iTNC 640 CELOS"), ("Besonderheiten", "Palettenwechselautomation, Genauigkeitspaket")])]},
         {"series": "5-Axis Universal Machining", "tagline": "Compact 5-axis universal machining centre with high-speed spindle.",
          "badges": ["5 axes", "monoBLOCK", "DMG MORI"],
          "key_facts": [("Travel X", "750 mm"), ("Travel Y", "800 mm"), ("Travel Z", "800 mm")],
          "highlights": [("High speed", "Spindle up to 20,000 rpm."), ("Automated", "Pallet-changing automation.")],
          "specs": [("Equipment", [("Tool changer", "60 tools"), ("Tool holder", "SK40"), ("Spindle speed", "20,000 rpm"), ("Cooling", "Internal high-pressure & spindle cooling"), ("Control", "Heidenhain iTNC 640 CELOS"), ("Highlights", "Pallet-changing automation, accuracy package")])]}),
    ],
    "machines/fraesen/horizontalbearbeitung": [
        ("dmc-100h", "DMC 100 H duoBLOCK", IMG_MILL,
         {"series": "Horizontalbearbeitung", "tagline": "4-Achsen-Horizontalbearbeitungszentrum mit kraftvoller Spindel.",
          "badges": ["4 Achsen", "Horizontal", "DMG MORI"],
          "key_facts": [("Verfahrweg X", "1.250 mm"), ("Verfahrweg Y", "1.000 mm"), ("Verfahrweg Z", "1.000 mm")],
          "highlights": [("Kraftvoll", "52 kW Spindel, 12.000 U/min."), ("Produktiv", "Palettenwechsler für Serienfertigung.")],
          "specs": [("Ausstattung", [("Werkzeugwechsler", "120-fach"), ("Werkzeugaufnahme", "SK50"), ("Spindel", "52 kW, 12.000 U/min"), ("Kühlung", "Innenhochdruck- und Spindelkühlung"), ("Steuerung", "Heidenhain iTNC 530"), ("Besonderheiten", "Palettenwechsler, Genauigkeitspaket")])]},
         {"series": "Horizontal Machining", "tagline": "4-axis horizontal machining centre with a powerful spindle.",
          "badges": ["4 axes", "Horizontal", "DMG MORI"],
          "key_facts": [("Travel X", "1,250 mm"), ("Travel Y", "1,000 mm"), ("Travel Z", "1,000 mm")],
          "highlights": [("Powerful", "52 kW spindle, 12,000 rpm."), ("Productive", "Pallet changer for series production.")],
          "specs": [("Equipment", [("Tool changer", "120 tools"), ("Tool holder", "SK50"), ("Spindle", "52 kW, 12,000 rpm"), ("Cooling", "Internal high-pressure & spindle cooling"), ("Control", "Heidenhain iTNC 530"), ("Highlights", "Pallet changer, accuracy package")])]}),
    ],
    "machines/fraesen/vertikalfraesen": [
        ("dmc-m1", "DMC M1", IMG_MILL,
         {"series": "Vertikalfräsen", "tagline": "Kompakte vertikale Fräsmaschine von DMG MORI.",
          "badges": ["Vertikal", "DMG MORI"],
          "key_facts": [("Verfahrweg X", "550 mm"), ("Verfahrweg Y", "550 mm"), ("Verfahrweg Z", "510 mm")],
          "highlights": [("Kompakt", "Platzsparendes Vertikalbearbeitungszentrum."), ("Präzise", "Zuverlässige Bearbeitung kleiner und mittlerer Teile.")],
          "specs": [("Ausstattung", [("Bauart", "Vertikales Bearbeitungszentrum"), ("Hersteller", "DMG MORI")])]},
         {"series": "Vertical Milling", "tagline": "Compact vertical milling machine by DMG MORI.",
          "badges": ["Vertical", "DMG MORI"],
          "key_facts": [("Travel X", "550 mm"), ("Travel Y", "550 mm"), ("Travel Z", "510 mm")],
          "highlights": [("Compact", "Space-saving vertical machining centre."), ("Precise", "Reliable machining of small and medium parts.")],
          "specs": [("Equipment", [("Type", "Vertical machining centre"), ("Manufacturer", "DMG MORI")])]}),
    ],
    "machines/drehen/universaldrehmaschinen": [
        ("ctx-beta-1250-tc", "CTX beta 1250 TC", IMG_TURN,
         {"series": "Universaldrehmaschinen", "tagline": "CNC-Universaldrehmaschine mit Dreh-Frässpindel für die 6-Seiten-Komplettbearbeitung.",
          "badges": ["Turn & Mill", "6-Seiten-Bearbeitung", "DMG MORI"],
          "key_facts": [("Drehdurchmesser", "500 mm"), ("Drehlänge", "1.200 mm")],
          "highlights": [("Komplettbearbeitung", "6-Seiten-Bearbeitung über Haupt- und Gegenspindel."), ("compactMASTER", "Dreh-Frässpindel mit 12.000 U/min.")],
          "specs": [("Ausstattung", [("Dreh-Frässpindel", "compactMASTER, 12.000 U/min"), ("Drehmoment", "Hauptspindel bis 700 Nm"), ("Gegenspindel", "ja"), ("Steuerung", "Siemens 840D CELOS")])]},
         {"series": "Universal Lathes", "tagline": "CNC universal lathe with turn-mill spindle for 6-sided complete machining.",
          "badges": ["Turn & Mill", "6-sided machining", "DMG MORI"],
          "key_facts": [("Turning diameter", "500 mm"), ("Turning length", "1,200 mm")],
          "highlights": [("Complete machining", "6-sided machining via main and counter spindle."), ("compactMASTER", "Turn-mill spindle at 12,000 rpm.")],
          "specs": [("Equipment", [("Turn-mill spindle", "compactMASTER, 12,000 rpm"), ("Torque", "main spindle up to 700 Nm"), ("Counter spindle", "yes"), ("Control", "Siemens 840D CELOS")])]}),
        ("ctx-beta-2000", "CTX beta 2000", IMG_TURN,
         {"series": "Universaldrehmaschinen", "tagline": "Universaldrehmaschine mit angetriebenen Werkzeugen für lange Werkstücke.",
          "badges": ["Universaldrehen", "DMG MORI"],
          "key_facts": [("Drehdurchmesser", "600 mm"), ("Drehlänge", "2.000 mm")],
          "highlights": [("Angetriebene Werkzeuge", "12 angetriebene Werkzeuge für Fräsbearbeitung."), ("Lange Werkstücke", "Drehlänge bis 2.000 mm.")],
          "specs": [("Ausstattung", [("Werkzeugaufnahme", "VDI 50"), ("Drehzahl", "4.000 U/min"), ("Angetriebene Werkzeuge", "12"), ("Steuerung", "Siemens 840D CELOS")])]},
         {"series": "Universal Lathes", "tagline": "Universal lathe with driven tools for long workpieces.",
          "badges": ["Universal turning", "DMG MORI"],
          "key_facts": [("Turning diameter", "600 mm"), ("Turning length", "2,000 mm")],
          "highlights": [("Driven tools", "12 driven tools for milling operations."), ("Long workpieces", "Turning length up to 2,000 mm.")],
          "specs": [("Equipment", [("Tool holder", "VDI 50"), ("Speed", "4,000 rpm"), ("Driven tools", "12"), ("Control", "Siemens 840D CELOS")])]}),
        ("ctx-beta-800", "CTX beta 800", IMG_TURN,
         {"series": "Universaldrehmaschinen", "tagline": "Kompaktes Hochleistungs-Drehzentrum mit TWIN-Konzept für die 4-Achsen-Komplettbearbeitung.",
          "badges": ["TWIN", "4-Achsen", "DMG MORI"],
          "key_facts": [("Max. Werkstückdurchmesser", "340 mm"), ("Max. Werkstücklänge", "735 mm")],
          "highlights": [("TWIN-Konzept", "Zwei Werkzeugträger für hohe Produktivität."), ("Komplettbearbeitung", "Anspruchsvolle 4-Achsen-Bearbeitung.")],
          "specs": [("Ausstattung", [("Konzept", "TWIN, 2 Werkzeugträger"), ("Achsen", "4-Achsen-Komplettbearbeitung"), ("Hersteller", "DMG MORI")])]},
         {"series": "Universal Lathes", "tagline": "Compact high-performance turning centre with TWIN concept for 4-axis complete machining.",
          "badges": ["TWIN", "4-axis", "DMG MORI"],
          "key_facts": [("Max. workpiece diameter", "340 mm"), ("Max. workpiece length", "735 mm")],
          "highlights": [("TWIN concept", "Two tool carriers for high productivity."), ("Complete machining", "Demanding 4-axis machining.")],
          "specs": [("Equipment", [("Concept", "TWIN, 2 tool carriers"), ("Axes", "4-axis complete machining"), ("Manufacturer", "DMG MORI")])]}),
        ("ctx-750", "CTX 750", IMG_TURN,
         {"series": "Universaldrehmaschinen", "tagline": "Hochsteife Universaldrehmaschine mit bis zu 2.040 mm Drehlänge.",
          "badges": ["Hochsteif", "DMG MORI"],
          "key_facts": [("Max. Werkstückdurchmesser", "700 mm"), ("Max. Werkstücklänge", "2.040 mm")],
          "highlights": [("Hochsteif", "Stabile Bearbeitung großer Werkstücke."), ("Direkte Messsysteme", "Magnescale in X, Y und Z.")],
          "specs": [("Ausstattung", [("Messsysteme", "Magnescale in X/Y/Z"), ("Kühlung", "ganzheitliches Kühlkonzept"), ("Hersteller", "DMG MORI")])]},
         {"series": "Universal Lathes", "tagline": "High-rigidity universal lathe with up to 2,040 mm turning length.",
          "badges": ["High rigidity", "DMG MORI"],
          "key_facts": [("Max. workpiece diameter", "700 mm"), ("Max. workpiece length", "2,040 mm")],
          "highlights": [("High rigidity", "Stable machining of large workpieces."), ("Direct measuring", "Magnescale scales in X, Y and Z.")],
          "specs": [("Equipment", [("Measuring systems", "Magnescale in X/Y/Z"), ("Cooling", "holistic cooling concept"), ("Manufacturer", "DMG MORI")])]}),
    ],
    "machines/drehen/grossdrehmaschinen": [
        ("geminis-gt5-g4", "Geminis GT5 – G4", IMG_TURN,
         {"series": "Großdrehmaschinen", "tagline": "CNC-Hochleistungsdrehmaschine von Geminis für schwere, lange Werkstücke.",
          "badges": ["Großdrehen", "Geminis"],
          "key_facts": [("Drehdurchmesser", "1.200 mm"), ("Über Querschlitten", "900 mm"), ("Drehlänge", "5.000 mm"), ("Werkstückgewicht", "6.000 kg")],
          "highlights": [("Schwere Werkstücke", "Bis 6.000 kg Werkstückgewicht."), ("Große Drehlänge", "Bis 5.000 mm Drehlänge.")],
          "specs": [("Ausstattung", [("Hersteller", "Geminis"), ("Steuerung", "Fanuc 31i"), ("Werkstückgewicht", "6.000 kg")])]},
         {"series": "Large Turning Machines", "tagline": "Geminis high-performance CNC lathe for heavy, long workpieces.",
          "badges": ["Large turning", "Geminis"],
          "key_facts": [("Turning diameter", "1,200 mm"), ("Over cross slide", "900 mm"), ("Turning length", "5,000 mm"), ("Workpiece weight", "6,000 kg")],
          "highlights": [("Heavy workpieces", "Up to 6,000 kg workpiece weight."), ("Long turning length", "Up to 5,000 mm turning length.")],
          "specs": [("Equipment", [("Manufacturer", "Geminis"), ("Control", "Fanuc 31i"), ("Workpiece weight", "6,000 kg")])]}),
    ],
    "automation": [
        ("ph-cell-2000", "PH Cell 2000", IMG_AUTO,
         {"series": "Automation", "tagline": "Modularer Palettenrundspeicher für die mannarme Produktion.",
          "badges": ["Palettenautomation", "modular"],
          "key_facts": [("Palettenwechselzeit", "< 45 Sekunden"), ("Bauweise", "Baukastenprinzip")],
          "highlights": [("Schnell", "Palettenwechselzeit unter 45 Sekunden."), ("Integriert", "Steuerung direkt über die Maschinensteuerung.")],
          "specs": [("Ausstattung", [("Typ", "Modularer Palettenrundspeicher"), ("Steuerung", "über Maschinensteuerung")])]},
         {"series": "Automation", "tagline": "Modular pallet rotary storage for low-manning production.",
          "badges": ["Pallet automation", "modular"],
          "key_facts": [("Pallet change time", "< 45 seconds"), ("Design", "modular kit")],
          "highlights": [("Fast", "Pallet change in under 45 seconds."), ("Integrated", "Controlled directly from the machine control.")],
          "specs": [("Equipment", [("Type", "Modular pallet rotary storage"), ("Control", "via machine control")])]}),
        ("ph-cell-300", "PH Cell 300", IMG_AUTO,
         {"series": "Automation", "tagline": "Modulares Automationskonzept für unterschiedliche Palettengrößen.",
          "badges": ["Palettenautomation", "flexibel"],
          "key_facts": [("Palettengrößen", "verschiedene in einem System"), ("Rüstplatz", "separat")],
          "highlights": [("Flexibel", "Handling unterschiedlicher Palettengrößen."), ("Einfach", "Steuerung über das Maschinenbedienpult.")],
          "specs": [("Ausstattung", [("Typ", "Modulares Automationskonzept"), ("Rüsten", "separater Rüstplatz")])]},
         {"series": "Automation", "tagline": "Modular automation concept for different pallet sizes.",
          "badges": ["Pallet automation", "flexible"],
          "key_facts": [("Pallet sizes", "various in one system"), ("Set-up", "separate station")],
          "highlights": [("Flexible", "Handles different pallet sizes."), ("Simple", "Controlled from the machine operating panel.")],
          "specs": [("Equipment", [("Type", "Modular automation concept"), ("Set-up", "separate set-up station")])]}),
        ("robo2go", "Robo2Go", IMG_AUTO,
         {"series": "Automation", "tagline": "Mobiles Robotersystem für Drehmaschinen mit CELOS-Programmierung.",
          "badges": ["Robotik", "mobil", "DMG MORI"],
          "key_facts": [("Einsatz", "Drehmaschinen"), ("Sicherheit", "zaunlos")],
          "highlights": [("Mobil & flexibel", "Schnell und flexibel umsetzbar."), ("Einfache Bedienung", "Programmierung über CELOS.")],
          "specs": [("Ausstattung", [("Typ", "Mobiles Robotersystem"), ("Programmierung", "CELOS"), ("Sicherheit", "barrierefrei, ohne Zäune")])]},
         {"series": "Automation", "tagline": "Mobile robot system for lathes with CELOS programming.",
          "badges": ["Robotics", "mobile", "DMG MORI"],
          "key_facts": [("Application", "lathes"), ("Safety", "fenceless")],
          "highlights": [("Mobile & flexible", "Quick and flexible to deploy."), ("Easy operation", "Programming via CELOS.")],
          "specs": [("Equipment", [("Type", "Mobile robot system"), ("Programming", "CELOS"), ("Safety", "barrier-free, no fences")])]}),
    ],
    "messtechnik": [
        ("keyence-xm-5000", "Keyence XM-5000", IMG_MEAS,
         {"series": "Messtechnik", "tagline": "Mobiles Koordinatenmessgerät für höchste Präzision.",
          "badges": ["Messtechnik", "Keyence"],
          "key_facts": [("Messbereich X", "2.000 mm"), ("Messbereich Y", "1.200 mm"), ("Messbereich Z", "1.000 mm")],
          "highlights": [("Hohe Genauigkeit", "Messgenauigkeit ±(7 + 9L/1000) µm."), ("Feine Auflösung", "Auflösung 0,0001 mm / 0,0001°.")],
          "specs": [("Genauigkeit", [("Messgenauigkeit", "±(7 + 9L/1000) µm"), ("Wiederholgenauigkeit", "±3 µm"), ("Auflösung Abstand", "0,0001 mm"), ("Auflösung Winkel", "0,0001°")])]},
         {"series": "Metrology", "tagline": "Mobile coordinate measuring machine for highest precision.",
          "badges": ["Metrology", "Keyence"],
          "key_facts": [("Range X", "2,000 mm"), ("Range Y", "1,200 mm"), ("Range Z", "1,000 mm")],
          "highlights": [("High accuracy", "Measuring accuracy ±(7 + 9L/1000) µm."), ("Fine resolution", "Resolution 0.0001 mm / 0.0001°.")],
          "specs": [("Accuracy", [("Measuring accuracy", "±(7 + 9L/1000) µm"), ("Repeatability", "±3 µm"), ("Resolution distance", "0.0001 mm"), ("Resolution angle", "0.0001°")])]}),
    ],
}


class Command(BaseCommand):
    help = "Seed real machine park (DE + EN)."

    def handle(self, *args, **opts):
        self.de = Locale.objects.get(language_code="de")
        self.en = Locale.objects.get(language_code="en")
        products = Page.objects.filter(slug="products", locale=self.de).first()
        if not products:
            self.stdout.write(self.style.ERROR("No /products page found. Run seed_curated first."))
            return
        products = products.specific

        # Clear ALL children of /products in every locale for a clean rebuild
        # (avoids orphaned/unlinked translations colliding on slug).
        for loc in (self.de, self.en):
            prod = Page.objects.filter(slug="products", locale=loc).first()
            if not prod:
                continue
            for child in list(prod.get_children()):
                child.delete()
            self.stdout.write(f"  cleared /products children ({loc.language_code})")

        # Build category/series scaffold (store IDs; re-fetch parents fresh)
        self.nodes = {"": products.id}
        for slug_path, kind, de_t, en_t, de_i, en_i in CATEGORIES:
            parent_path = "/".join(slug_path.split("/")[:-1])
            slug = slug_path.split("/")[-1]
            parent = Page.objects.get(id=self.nodes[parent_path]).specific
            klass = ProductSeriesPage if kind == "series" else ProductCategoryPage
            page = klass(slug=slug, title=de_t, eyebrow=de_t, intro=de_i)
            parent.add_child(instance=page)
            page.save_revision().publish()
            tp = page.copy_for_translation(self.en, copy_parents=True)
            tp.title = en_t; tp.eyebrow = en_t; tp.intro = en_i; tp.slug = slug
            tp.save_revision().publish()
            self.nodes[slug_path] = page.id
            self.stdout.write(f"  + {kind}: {slug_path}")

        # Build machine detail pages
        for parent_path, machines in MACHINES.items():
            for slug, title, img, de, en in machines:
                parent = Page.objects.get(id=self.nodes[parent_path]).specific
                page = ProductDetailPage(
                    slug=slug, title=title, series=de["series"], tagline=de["tagline"],
                    external_image_url=img, badges=badges(de["badges"]),
                    key_facts=facts(de["key_facts"]), highlights=highs(de["highlights"]), specs=specs(de["specs"]),
                )
                parent.add_child(instance=page)
                page.save_revision().publish()
                tp = page.copy_for_translation(self.en, copy_parents=True)
                tp.title = title; tp.series = en["series"]; tp.tagline = en["tagline"]
                tp.external_image_url = img
                tp.badges = badges(en["badges"]); tp.key_facts = facts(en["key_facts"])
                tp.highlights = highs(en["highlights"]); tp.specs = specs(en["specs"])
                tp.slug = slug
                tp.save_revision().publish()
                self.stdout.write(f"    - machine: {parent_path}/{slug}")

        self.stdout.write(self.style.SUCCESS("Machine seed complete."))
