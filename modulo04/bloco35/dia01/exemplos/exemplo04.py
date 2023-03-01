# A estrutura deve estar ordenada para que a busca binária funcione


def binary_search(numbers, target):
    number_of_iterations = 0
    # definir os índices
    start = 0
    end = len(numbers) - 1

    while start <= end:
        # os índices podem ser no máximo iguais,
        # # o início não pode ultrapassar o fim
        mid = (start + end) // 2  # encontro o meio
        number_of_iterations += 1

        if numbers[mid] == target:
            # se o elemento do meio for o alvo, devolve a posição do meio
            number_of_iterations += 1
            print(f'{number_of_iterations} iterações!')
            return mid

        if target < numbers[mid]:
            # se o elemento for menor, atualiza o índice do fim
            number_of_iterations += 1
            end = mid - 1
        else:  # caso contrário, atualiza o índice do inicio
            number_of_iterations += 1
            start = mid + 1
    return -1  # Não encontrou? Retorna -1


# numbers = [2, 3, 4, 10, 40]
n = 900000  # onde n será o número total de elementos dentro do array
numbers = list(range(1, n))
target = 790


result = binary_search(numbers, target)
print(f"Elemento encontrado na posição: {result}")
