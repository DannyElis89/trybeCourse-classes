def maior_numero(num1, num2):
    if num1 > num2:
        return num1
    else:
        return num2


def maior_numero_2(num1, num2):
    return max(num1, num2)


print(maior_numero(15, 38))
print(maior_numero(45, 700))
print(maior_numero(25, 2))
print(maior_numero(189, 1568))

print(maior_numero_2(15, 38))
print(maior_numero_2(45, 700))
print(maior_numero_2(25, 2))
print(maior_numero_2(189, 1568))
