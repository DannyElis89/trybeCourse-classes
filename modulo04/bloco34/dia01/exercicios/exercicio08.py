import pip._vendor.requests as requests
from parsel import Selector

BASE_URL = "https://en.wikipedia.org/wiki/Gallery_of_sovereign_state_flags"

request = requests.get(BASE_URL)
selector = Selector(request.text)

flags_url = selector.css(
    ".gallerybox .image img::attr(src)"
    ).getall()

for img_url in flags_url:
    filename = img_url.split("/")[-1]
    image_content = requests.get("https:" + img_url).content
    with open("./country_flags/" + filename, "wb") as file:
        file.write(image_content)
