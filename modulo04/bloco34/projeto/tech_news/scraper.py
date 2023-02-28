import time
import requests
from parsel import Selector
from tech_news.database import create_news


# Requisito 1
def fetch(url):
    try:
        request = requests.get(url)
        request.raise_for_status()
        time.sleep(1)
    except (requests.HTTPError, requests.ReadTimeout):
        None
    else:
        return request.text


# Requisito 2
def scrape_updates(html_content):
    updates_news = Selector(html_content).css(
      ".cs-overlay-link::attr(href)"
    ).getall()
    return updates_news


# Requisito 3
def scrape_next_page_link(html_content):
    next_page_link = Selector(html_content).css(".next::attr(href)").get()
    return next_page_link


# Requisito 4
def scrape_news(html_content):
    selector = Selector(text=html_content)
    summary = selector.css(
        "div.entry-content > p:nth-of-type(1) ::text"
      ).getall()

    reading_time = selector.css("li.meta-reading-time::text").get()

    objToReturn = {
        "url": selector.css("head > link[rel='canonical'] ::attr(href)").get(),
        "title":  selector.css("h1.entry-title::text").get().rstrip(),
        "timestamp": selector.css("li.meta-date::text").get(),
        "writer": selector.css("a.url.fn.n::text").get(),
        "reading_time": int(reading_time.split(" ")[0]),
        "summary": "".join(summary).rstrip(),
        "category": selector.css("span.label::text").get(),
    }

    return objToReturn


# Requisito 5
def get_tech_news(amount):
    page = fetch("https://blog.betrybe.com/")
    urls = scrape_updates(page)

    while len(urls) < amount:
        next_page = scrape_next_page_link(page)
        page = fetch(next_page)
        urls.extend(scrape_updates(page))

    news = list()
    for url in urls[:amount]:
        page = fetch(url)
        news.append(scrape_news(page))

    create_news(news)

    return news
