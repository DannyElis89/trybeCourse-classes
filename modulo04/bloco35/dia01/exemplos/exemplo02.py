def multiply_arrays(array1, array2):
    result = []
    number_of_iterations = 0

    for number1 in array1:
        print(f'Array 1: {number1}')
        for number2 in array2:
            print(f'Array 2: {number2}')
            result.append(number1 * number2)
            number_of_iterations += 1

    print(f'{number_of_iterations} iterações!')
    print(result)
    return result


# meu_array = [1, 2, 3, 4, 5]
'''
real    0m0,204s
user    0m0,145s
sys     0m0,069s
'''

n = 1000  # onde n será o número total de elementos dentro do array
meu_array = list(range(1, n))
# '''
# real    0m7,292s
# user    0m1,909s
# sys     0m1,228s
# '''


multiply_arrays(meu_array, meu_array)
