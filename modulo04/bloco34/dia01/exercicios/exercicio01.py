import pip._vendor.requests as requests

request = requests.get('https://httpbin.org/encoding/utf8')

print(request.text)
