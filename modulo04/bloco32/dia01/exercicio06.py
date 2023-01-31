def is_triangle(num1, num2, num3):
    if num1 + num2 < num3 or num1 + num3 < num2 or num2 + num3 < num1:
        return 'Não é triangulo'
    if num1 == num2 == num3:
        return 'Triângulo Equilátero'
    if num1 == num2 or num1 == num3 or num2 == num3:
        return 'Triângulo Isósceles'
    return 'Triângulo Escaleno'


print(is_triangle(3, 4, 5))
print(is_triangle(4, 4, 5))
print(is_triangle(3, 3, 3))
print(is_triangle(3, 4, 15))
