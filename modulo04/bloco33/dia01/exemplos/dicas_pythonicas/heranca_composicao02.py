class Funcionario:
    def __init__(self, nome) -> None:
        self.nome = nome

    def retorna_nome(self):
        return self.nome


class Empresa:
    func = []

    def __init__(self) -> None:
        print('Empresa fictícia em funcionamento')

    def funcionar(self):
        while True:
            print("1. Contratar")
            print("2. Exibir lista de funcionários")
            op = int((input()))

            if op == 1:
                self.contratar()
            elif op == 2:
                self.exibir()
            else:
                print('Opção inválida')

    def contratar(self):
        nome = input('Nome: ')
        self.func.append(Funcionario(nome))

    def exibir(self):
        for funcionario in self.func:
            print(funcionario.retorna_nome())


empresa = Empresa()
empresa.funcionar()
