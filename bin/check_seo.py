"""Check the generated site's search metadata before deployment.

Run after `bundle exec jekyll build`: python bin/check_seo.py
Uses only the Python standard library.
"""

import json
from html.parser import HTMLParser
from pathlib import Path
from urllib.parse import urlsplit
from xml.etree import ElementTree


class HeadMetadata(HTMLParser):
    def __init__(self, html):
        super().__init__()
        self.in_head = False
        self.capture = None
        self.buffer = []
        self.titles = []
        self.canonicals = []
        self.meta = {}
        self.schemas = []
        self.feed(html)

    def handle_starttag(self, tag, attrs):
        attrs = dict(attrs)
        if tag == "head":
            self.in_head = True
        if not self.in_head:
            return
        if tag == "meta":
            key = attrs.get("name", attrs.get("property"))
            if key:
                self.meta.setdefault(key, []).append(attrs.get("content", ""))
        elif tag == "link" and attrs.get("rel") == "canonical":
            self.canonicals.append(attrs.get("href", ""))
        elif tag == "title" or (
            tag == "script" and attrs.get("type") == "application/ld+json"
        ):
            self.capture = tag
            self.buffer = []

    def handle_data(self, data):
        if self.capture:
            self.buffer.append(data)

    def handle_endtag(self, tag):
        if tag == self.capture:
            value = "".join(self.buffer).strip()
            if tag == "title":
                self.titles.append(value)
            else:
                self.schemas.append(json.loads(value))
            self.capture = None
        if tag == "head":
            self.in_head = False


def check(condition, message):
    if not condition:
        raise ValueError(message)


def main():
    site = Path("_site")
    routes = ["", "cv/", "news/", "publications/", "research/", "teaching/"]
    sitemap = ElementTree.parse(site / "sitemap.xml")
    urls = {item.text for item in sitemap.findall(".//{*}loc")}
    titles = set()
    descriptions = set()

    for route in routes:
        head = HeadMetadata((site / route / "index.html").read_text(encoding="utf-8"))
        check(len(head.titles) == 1, f"{route}: expected exactly one title")
        check("Kevin Rozmiarek" in head.titles[0], f"{route}: missing site identity")
        check("blank" not in head.titles[0], f"{route}: template title leaked")
        check(len(head.canonicals) == 1, f"{route}: expected one canonical")
        canonical = head.canonicals[0]
        check(urlsplit(canonical).scheme == "https", f"{route}: canonical must use HTTPS")
        check(urlsplit(canonical).path == "/" + route, f"{route}: incorrect canonical path")
        check(canonical in urls, f"{route}: missing from sitemap")
        check("noindex" not in " ".join(head.meta.get("robots", [])), f"{route}: noindex")
        for name in ["description", "og:title", "og:description", "og:url", "og:site_name", "og:image"]:
            values = head.meta.get(name, [])
            check(len(values) == 1 and values[0], f"{route}: missing/duplicate/empty {name}")
        check(head.meta["og:title"] == head.titles, f"{route}: conflicting sharing title")
        check(head.meta["og:url"] == head.canonicals, f"{route}: conflicting sharing URL")
        check(head.meta["og:site_name"] == ["Kevin Rozmiarek"], f"{route}: incorrect site name")
        image = urlsplit(head.meta["og:image"][0])
        check(image.scheme == "https", f"{route}: image URL must be absolute")
        check((site / image.path.lstrip("/")).is_file(), f"{route}: missing preview image")
        check(len(head.schemas) == 1, f"{route}: expected one structured-data graph")
        for key in ["google-site-verification", "msvalidate.01"]:
            values = head.meta.get(key, [])
            check(not values or (len(values) == 1 and values[0]), f"{route}: invalid {key}")
        titles.add(head.titles[0])
        descriptions.add(head.meta["description"][0])

        if not route:
            graph = head.schemas[0]["@graph"]
            check(len(graph) == 3, "Homepage must have one website, person, and profile")
            nodes = {node["@type"]: node for node in graph}
            person = nodes["Person"]
            check(nodes["WebSite"]["name"] == "Kevin Rozmiarek", "Incorrect website name")
            check(person["alternateName"] == "Kevin S. Rozmiarek", "Missing publication name")
            check(person["image"].startswith(canonical), "Missing person portrait")
            check(nodes["ProfilePage"]["mainEntity"]["@id"] == person["@id"], "Unlinked profile")
            check(len(person["sameAs"]) >= 5, "Missing professional profile links")
            check(all(url and url.startswith("https://") for url in person["sameAs"]), "Invalid profile URL")

    check(len(titles) == len(routes), "Main pages must have distinct titles")
    check(len(descriptions) == len(routes), "Main pages must have distinct descriptions")
    for path in [site / "404.html", *site.glob("news/*/index.html")]:
        html = path.read_text(encoding="utf-8")
        head = HeadMetadata(html)
        if "noindex" in " ".join(head.meta.get("robots", [])):
            route = "/" + path.relative_to(site).as_posix().replace("index.html", "")
            check(all(urlsplit(url).path != route for url in urls), f"{route}: noindex page in sitemap")

    print("SEO checks passed: unique metadata, linked identity, images, and sitemap on all six main pages.")


if __name__ == "__main__":
    main()
