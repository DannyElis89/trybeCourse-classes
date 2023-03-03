def factorial(n):
    print(n)
    if n == 1:
        return 1
    else:
        return n * factorial(n - 1)


number = int(input('Digite um número: '))
factorial(number)
