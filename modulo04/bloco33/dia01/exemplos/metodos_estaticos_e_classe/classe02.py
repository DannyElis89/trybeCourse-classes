class Classe02:
    atributo_da_classe = 1

    def __init__(self) -> None:
        self.atributo_do_objeto = 2

    def metodo_normal(self):
        print(self)

    @classmethod
    def metodo_de_classe(cls):
        print(cls)

    @staticmethod
    def metodo_estatico():
        print('Olá!')


# Acessando atributo do objeto
objeto = Classe02()
print(objeto.atributo_do_objeto)
# print(Classe.atributo_do_objeto) === ERRO
print('######')

# Acessando atributo da classe
print(Classe02.atributo_da_classe)
print(objeto.atributo_da_classe)
print('######')

# Chamando o método normal
Classe02.metodo_estatico()
objeto.metodo_estatico()
print('######')

# Chamando o método de classe
Classe02.metodo_de_classe()
objeto.metodo_de_classe()
print('######')
