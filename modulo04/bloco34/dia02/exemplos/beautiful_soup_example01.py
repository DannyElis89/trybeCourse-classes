import pip._vendor.requests as requests
from bs4 import BeautifulSoup

url = "https://quotes.toscrape.com"
page = requests.get(url)
# print(page.content)
html_content = page.text

soup = BeautifulSoup(html_content, "html.parser")

print(soup.prettify())
