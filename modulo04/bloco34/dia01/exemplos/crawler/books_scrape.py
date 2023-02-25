import pip._vendor.requests as requests
from parsel import Selector

response = requests.get('http://books.toscrape.com/')
# print(response.status_code)

selector = Selector(text=response.text)
# print(selector.css('img.thumbnail').getall()[0])

# for thumbnail in selector.css('img.thumbnail').getall():
#     print(thumbnail)

thumb_url_selector = 'div.image_container a::attr(href)'

for url in selector.css(thumb_url_selector).getall():
    thumbnail_request = requests.get('http://books.toscrape.com/' + url)
    thumbnail_selector = Selector(text=thumbnail_request.text)
    book_title = thumbnail_selector.css('div.product_main h1')
    print(book_title.get())
