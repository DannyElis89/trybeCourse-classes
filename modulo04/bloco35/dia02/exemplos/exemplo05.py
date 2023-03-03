from time import sleep


def iterative_countdown(n):
    while n > 0:
        sleep(1)
        print(n)
        n = n - 1
    sleep(1)
    print("FIM!")


iterative_countdown(5)
