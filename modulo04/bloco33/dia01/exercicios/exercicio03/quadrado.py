from figura_geometrica import Figura_geometrica


class Quadrado(Figura_geometrica):
    def __init__(self, lado):
        self.lado = lado

    def area(self):
        return self.lado ** 2

    def perimetro(self):
        return self.lado * 4
