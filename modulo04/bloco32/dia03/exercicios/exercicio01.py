def fizzbuzz(number):
    list_numbers = []
    for number in range(1, number + 1):
        if number % 15 == 0:
            list_numbers.append('FizzBuzz')
        elif number % 3 == 0:
            list_numbers.append('Fizz')
        elif number % 5 == 0:
            list_numbers.append('Buzz')
        else:
            list_numbers.append(number)
    return list_numbers


# numero = int(input('Digite um número inteiro: '))

# print(fizzbuzz(numero))
