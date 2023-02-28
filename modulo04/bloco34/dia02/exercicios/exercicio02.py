from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.firefox.options import Options
from time import sleep

options = Options()
options.add_argument('--headless')

firefox = webdriver.Firefox(options=options)

URL_BASE = 'https://www.wikimetal.com.br/'


def scrape(url):
    firefox.get(url)
    paragraphs = firefox.find_elements(By.TAG_NAME, 'p')
    for p in paragraphs:
        print(p.text)


scrape(
    URL_BASE +
    'iron-maiden-scorpions-kiss-veja-melhores-albuns-1982/'
    )

sleep(5)

firefox.quit()
