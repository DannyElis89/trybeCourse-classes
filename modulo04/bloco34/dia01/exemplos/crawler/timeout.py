import pip._vendor.requests as requests

# response = requests.get("https://httpbin.org/delay/10")
# print(response)

try:
    # recurso demora muito a responder
    print('try')
    response = requests.get("http://httpbin.org/delay/10", timeout=2)
except requests.ReadTimeout:
    # vamos fazer uma nova requisição
    response = requests.get("http://httpbin.org/delay/1", timeout=2)
    print('except')
finally:
    print(response.status_code)
    print('finally')
