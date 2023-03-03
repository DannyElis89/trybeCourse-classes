from time import sleep


def countdown(n):
    if n == 0:
        print('Fim!')
        return

    print(n)
    sleep(1)
    countdown(n - 1)  # chamada recursiva


number = int(input('Digite um número: '))
# countdown(5)
countdown(number)
