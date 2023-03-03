def sum(n):
    if n == 0:
        return 0
    else:
        return n + sum(n - 1)


number = int(input('Digite um número: '))
print(sum(number))
