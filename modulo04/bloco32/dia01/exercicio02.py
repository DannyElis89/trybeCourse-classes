lista_de_valores = [9.0, 8.0, 5.0, 10.0, 7.0, 7.5, 4.0, 10.0, 7.0, 8.0, 7.5]
soma = 0
quantidade = len(lista_de_valores)

for valor in lista_de_valores:
    soma += valor

print(soma)
print(quantidade)


def media(soma, quantidade):
    return soma/quantidade


print(media(soma, quantidade))
