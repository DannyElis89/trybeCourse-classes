from parsel import Selector
import pip._vendor.requests as requests

URL_BASE = "http://books.toscrape.com/catalogue/"

response = requests.get(URL_BASE + "page-1.html")
selector = Selector(text=response.text)

href = selector.css(".product_pod h3 a::attr(href)").get()
# print(href)
# print(URL_BASE + href)
detail_page_url = URL_BASE + href

detail_response = requests.get(detail_page_url)
detail_selector = Selector(text=detail_response.text)

description = detail_selector.css("#product_description ~ p::text").get()
print(description)

URL_BASE = "http://books.toscrape.com/catalogue/"
next_page_url = 'page-1.html'

while next_page_url:
    for product in selector.css(".product_pod"):
        detail_href = product.css("h3 a::attr(href)").get()
        detail_page_url = URL_BASE + detail_href

        # Baixa o conteúdo da página de detalhes
        detail_response = requests.get(detail_page_url)
        detail_selector = Selector(text=detail_response.text)

        # Extrai a descrição do produto
        description = detail_selector.css(
            "#product_description ~ p::text"
            ).get()
        print(description)
