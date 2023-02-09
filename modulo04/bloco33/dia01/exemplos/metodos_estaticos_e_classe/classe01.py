class Classe01:
    @staticmethod
    def método_estático():
        print("Olá")

    atributo_da_classe = 1


Classe01.método_estático()
objeto = Classe01()
objeto.método_estático()
print('##########')

objeto_1 = Classe01()
objeto_2 = Classe01()

print(Classe01.atributo_da_classe)  # print 1
print(objeto_1.atributo_da_classe)  # print 2
print(objeto_2.atributo_da_classe)  # print 3
print('##########')

Classe01.atributo_da_classe01 = 2
print(Classe01.atributo_da_classe)  # print 4
print(objeto_1.atributo_da_classe)  # print 5
print(objeto_2.atributo_da_classe)  # print 6
print('##########')

objeto_1.atributo_da_classe01 = 3
print(Classe01.atributo_da_classe)  # print 7
print(objeto_1.atributo_da_classe)  # print 8
print(objeto_2.atributo_da_classe)  # print 9
print('##########')
