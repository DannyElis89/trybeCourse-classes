def mdc(a, b):
    if b == 0:
        return a
    return mdc(b, a % b)


num1 = int(input('Digite um número: '))
num2 = int(input('Digite outro número: '))
print(mdc(num1, num2))
