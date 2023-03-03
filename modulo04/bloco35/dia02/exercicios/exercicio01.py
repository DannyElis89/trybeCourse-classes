def count_even_numbers(num):
    count = 0
    for num in range(num + 1):
        if num % 2 == 0 and num != 0:
            count += 1
    return count


number = int(input('Digite um número: '))
print(count_even_numbers(number))
