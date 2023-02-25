import pip._vendor.requests as requests

request = requests.get('https://api.github.com/users')

# print(request.text)
users = request.json()

for user in users:
    print(f"{user['login']} {user['url']}")
