from selenium import webdriver
from selenium.webdriver.common.keys import Keys
from time import sleep

firefox = webdriver.Firefox()


response = firefox.get("https://www.google.com.br/")

search_input = firefox.find_element("name", "q")
sleep(3)
search_input.send_keys("selenium")
sleep(3)
search_input.send_keys(Keys.ENTER)

sleep(5)
firefox.quit()
