from eletrodomestico import Eletrodomestico


class MaquinaDeLavar(Eletrodomestico):
    pass


maquina_de_lavar = MaquinaDeLavar("Preta", "6000", "127", "1300")
print(
    f"A máquina de lavar {maquina_de_lavar.cor} "
    f"custa {maquina_de_lavar.preco}."
)
