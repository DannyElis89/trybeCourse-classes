from eletrodomestico import Eletrodomestico


class Ventilador(Eletrodomestico):
    pass
    # @property
    # def cor(self):
    #     return self.__cor.upper()

    # @cor.setter
    # def cor(self, nova_cor):
    #     if nova_cor.lower() == "pink":
    #         raise ValueError("Não existe ventilador pink")

    #     self.__cor = nova_cor

    # def __init__(self, cor, potencia, tensao, preco):
    #     self.cor = cor
    #     self._potencia = potencia
    #     self._tensao = tensao
    #     self.preco = preco
    #     self.__ligado = False


ventilador_branco = Ventilador("branco", potencia=250, tensao=220, preco=100)
