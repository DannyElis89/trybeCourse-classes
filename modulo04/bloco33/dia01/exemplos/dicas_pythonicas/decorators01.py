from functools import cache


@cache
def fibonacci(n):
    if n <= 1:
        print('ativou')
        return n
    else:
        print('ativou')
        return fibonacci(n-1) + fibonacci(n-2)


print(fibonacci(5))
