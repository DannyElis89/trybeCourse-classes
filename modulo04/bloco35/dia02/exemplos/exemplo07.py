def fibonacci(num):  # nome da função e parâmetro
    if (num <= 1):  # condição de parada
        return num
    else:
        return fibonacci(num - 2) + fibonacci(num - 1)
        # chamada de si mesma com um novo valor


# number = int(input('Digite um número: '))
print(fibonacci(5))
