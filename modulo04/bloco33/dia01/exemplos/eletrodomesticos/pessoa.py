from liquidificador import liquidificador_vermelho
from exemplos.eletrodomesticos.ventilador import ventilador_branco


class Pessoa:
    def __init__(self, nome, saldo_na_conta):
        self.nome = nome
        self.saldo_na_conta = saldo_na_conta
        self.liquidificador = None
        self.ventilador = None

    def comprar_liquidificador(self, liquidificador):
        if liquidificador.preco <= self.saldo_na_conta:
            self.saldo_na_conta -= liquidificador.preco
            self.liquidificador = liquidificador

    def comprar_ventilador(self, ventilador):
        if ventilador.preco <= self.saldo_na_conta:
            self.saldo_na_conta -= ventilador.preco
            self.ventilador = ventilador

    def __str__(self):
        if (self.ventilador):
            return f"{self.nome} - possui um ventilador."
        return f"{self.nome} - não possui um ventilador."


pessoa_cozinheira = Pessoa("Jacquin", 1000)
pessoa_cozinheira.comprar_liquidificador(liquidificador_vermelho)
print(pessoa_cozinheira)

danny = Pessoa('Danny', saldo_na_conta=3000)
print(danny)
danny.comprar_ventilador(ventilador_branco)
print(danny)
