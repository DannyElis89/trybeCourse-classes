import math


def calc_latas_de_tinta(area):
    litros_de_tinta = area / 3
    latas_de_tinta = math.ceil(litros_de_tinta / 18)
    custo = latas_de_tinta * 80
    print(latas_de_tinta, custo)


calc_latas_de_tinta(300)
