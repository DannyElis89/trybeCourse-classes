class Liquidificador:
    # def get_cor(self):
    #       return self.__cor.upper()

    # def set_cor(self, nova_cor):
    #     if nova_cor.lower() == "turquesa":
    #         raise ValueError("Não existe liquidificador turquesa")

    #     self.__cor = nova_cor

    @property
    def cor(self):
        return self.__cor.upper()

    @cor.setter
    def cor(self, nova_cor):
        if nova_cor.lower() == "turquesa":
            raise ValueError("Não existe liquidificador turquesa")

        self.__cor = nova_cor

    def __init__(self, cor, potencia, tensao, preco):
        self.set_cor(cor)
        self.preco = preco
        self.cor = cor
        self._potencia = potencia
        self._tensao = tensao
        self.__ligado = False
        self.__velocidade = 0
        self.__velocidade_maxima = 3
        self.__corrente_atual_no_motor = 0

    def ligar(self, velocidade):
        if velocidade > self.__velocidade_maxima or velocidade < 0:
            raise ValueError(
                f"Velocidade deve estar entre 0 e {self.__velocidade_maxima}"
            )

        self.__velocidade = velocidade
        self.__corrente_atual_no_motor = (
            (self._potencia / self._tensao) / self.__velocidade_maxima
        ) * velocidade
        self.__ligado = True

    def desligar(self):
        self.__ligado = False
        self.__velocidade = 0

    def esta_ligado(self):
        return self.__ligado

meu_liquidificador = Liquidificador("Azul", 200, 127, 200)
seu_liquidificador = Liquidificador(cor="Vermelho", potencia=250, tensao=220, preco=100)

liquidificador_vermelho = Liquidificador("Vermelho", 250, 220, 100)
liquidificador_vermelho.ligar(1)
    print("Está ligado?", liquidificador_vermelho.esta_ligado())
liquidificador_vermelho.desligar()
    print("Está ligado?", liquidificador_vermelho.esta_ligado())

# liquidificador = Liquidificador("Azul", "110", "127", "200")
# print(f"A cor atual é {liquidificador.get_cor()}")

# liquidificador.set_cor("Preto")
# print(f"Após pintarmos, a nova cor é {liquidificador.get_cor()}")
