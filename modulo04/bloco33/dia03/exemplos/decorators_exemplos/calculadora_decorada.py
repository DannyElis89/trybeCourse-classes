from calculadora import Calculadora


class CalculadoraDecorada:
    def __init__(self, calculadora):
        self.calculadora = calculadora

    def converterNumero(self, numero):
        if not isinstance(numero, str):
            return numero

        return {
            "um": 1, "one": 1, "dois": 2, "two": 2,
            "três": 3, "three": 3, "quatro": 4, "four": 4,
            "cinco": 5, "five": 5, "seis": 6, "six": 6,
            "sete": 7, "seven": 7, "oito": 8, "eight": 8,
            "nove": 9, "nine": 9, "dez": 10, "ten": 10,
        }.get(numero)

    def soma(self, x, y):
        return self.calculadora.soma(
            self.converterNumero(x), self.converterNumero(y)
        )


if __name__ == "__main__":
    calculadora = Calculadora()
    print("10 + 20 =", calculadora.soma(10, 20))

    calculadoraDecorada = CalculadoraDecorada(calculadora)
    print("'oito' + 'dois' =", calculadoraDecorada.soma("oito", "dois"))
    print("'nine' + 'nine' =", calculadoraDecorada.soma("nine", "nine"))
