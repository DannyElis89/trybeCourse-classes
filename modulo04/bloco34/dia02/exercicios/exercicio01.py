from selenium import webdriver
from selenium.webdriver.common.by import By
from time import sleep

firefox = webdriver.Firefox()


def scrape(url):
    firefox.get(url)

    quote = firefox.find_element(
        By.CLASS_NAME, 'text'
        ).get_attribute('innerHTML')

    print(quote)


scrape('https://quotes.toscrape.com/')
sleep(5)

firefox.quit()
