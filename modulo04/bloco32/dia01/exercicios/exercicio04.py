lista_de_nomes = ["José", "Lucas", "Nádia", "Fernanda", "Cairo", "Joana"]


def maior_nome(lista):
    maior_nome = lista[0]
    for nome in lista:
        if len(nome) > len(maior_nome):
            maior_nome = nome
    return maior_nome


print(maior_nome(lista_de_nomes))
