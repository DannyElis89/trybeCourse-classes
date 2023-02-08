from eletrodomestico import Eletrodomestico


class Liquidificador(Eletrodomestico):
    def esta_ligado(self):
        return "Sim" if super().esta_ligado() else "Não"


meu_liquidificador = Liquidificador("Azul", 200, 127, 200)
seu_liquidificador = Liquidificador(
    cor="Vermelho",
    potencia=250,
    tensao=220,
    preco=100
)

liquidificador_vermelho = Liquidificador("Vermelho", 250, 220, 100)
liquidificador_vermelho.ligar(1)
print("Está ligado?", liquidificador_vermelho.esta_ligado())

liquidificador_vermelho.desligar()
print("Está ligado?", liquidificador_vermelho.esta_ligado())

liquidificador = Liquidificador("Rosa", "110", "127", "200")

print(liquidificador.cor)  # ROSA
liquidificador.cor = "Vermelho"
print(liquidificador.cor)  # VERMELHO
