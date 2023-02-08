from eletrodomestico import Eletrodomestico


class Batedeira(Eletrodomestico):
    pass


batedeira = Batedeira("Prata", "200", "127", "290")
print(f"A batedeira {batedeira.cor} custa {batedeira.preco}.")
