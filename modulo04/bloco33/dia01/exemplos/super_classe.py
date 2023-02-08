class A:
    def faz_algo(self, valor):
        print(valor)


class B(A):
    def faz_outra_coisa(self):
        print('Vou printar aqui o valor pelo método criado em A')
        super().faz_algo(valor=1)


b = B()
b.faz_outra_coisa()
