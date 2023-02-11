from figura_geometrica import Figura_geometrica
from math import pi as PI


class Circulo(Figura_geometrica):
    def __init__(self, raio):
        self.raio = raio

    def area(self):
        return PI * (self.raio ** 2)

    def perimetro(self):
        return 2 * PI * self.raio
