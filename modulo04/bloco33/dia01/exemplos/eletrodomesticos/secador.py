from eletrodomestico import Eletrodomestico


class Secador(Eletrodomestico):
    pass


secador = Secador("Branco", "450", "127", "400")
print(f"O secador {secador.cor} custa {secador.preco}.")
