def produto(num, other_num=1):
    return num * other_num


# print(produto(2, 2))
# print(produto(2))
# print(produto(other_num=10, num=20))
# print('########')


def produtorio(lista, /, inicio=1):
    """a barra dentro dos parametros, obriga que os itens
    antes sejam passados sempre de maneira posicional.
    não é possível passar estes elementos de forma nomeada."""
    total = inicio or 1
    for item in lista:
        total *= item
    return total


print(produtorio([1, 2, 3]))


def outra_funcao(a, b, *, option):
    """
    o asterisco dentro dos parâmetros da função obriga
    que os elementos passados depois sejam
    obrigatoriamentenomeados na chamada da função
    """
    print(option)


outra_funcao(1, 2, option=42)
