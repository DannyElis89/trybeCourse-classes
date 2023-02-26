import pip._vendor.requests as requests
from bs4 import BeautifulSoup

url = "https://quotes.toscrape.com"
page = requests.get(url)
html_content = page.text

soup = BeautifulSoup(html_content, "html.parser")

title = soup.title
print(title)
print(title.string)
print(type(title.string))
