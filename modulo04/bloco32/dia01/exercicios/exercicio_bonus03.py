def somatorio(num):
    soma = 0
    for numero in range(1, num + 1):
        soma += numero
    return soma


print(somatorio(5))
