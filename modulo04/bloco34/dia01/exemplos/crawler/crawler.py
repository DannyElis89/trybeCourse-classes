import pip._vendor.requests as requests
import time

for _ in range(15):
    response = requests.get("https://www.cloudflare.com/rate-limit-test/")
    print(response.status_code)
    time.sleep(1.5)
