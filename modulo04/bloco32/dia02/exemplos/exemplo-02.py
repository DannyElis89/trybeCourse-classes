numeros = input("Insira valores aqui, separados por espaço: ")

lista_numeros = numeros.split(" ")

sum = 0
for num in lista_numeros:
    if not num.isdigit():
        print(f"Erro ao somar valores, {num} não é um dígito.")
    else:
        sum += int(num)

print(f"A soma dos valores válidos é: {sum}")
