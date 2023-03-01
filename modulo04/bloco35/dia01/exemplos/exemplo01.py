def sum_array(numbers):
    sum = 0
    for number in numbers:
        sum += number

    return sum


# Suponha que, para o array abaixo, o tempo de execução seja `n`
sum_array('array_com_dez_mil_numeros')


'''
Nesse caso, aqui o tempo de execução vai ser `10 * n`,
ou `10n`, já que o array é dez vezes maior que o anterior
'''
sum_array('array_com_cem_mil_numeros')

'''
Já esse é dez mil vezes maior que o primeiro, então esse aqui executa em `100n`
'''
sum_array('array_com_um_milhão_de_numeros')


def squared_array(numbers):
    array_of_squares = []
    for number in numbers:
        array_of_squares.append(number * number)

    return array_of_squares
