from time import sleep


def saudacao():
    print("Oi")


def despedida():
    print("Tchau")


def init():
    print("Inicio")
    sleep(1)
    saudacao()
    sleep(1)
    print("Fim")
    sleep(1)
    despedida()


init()
