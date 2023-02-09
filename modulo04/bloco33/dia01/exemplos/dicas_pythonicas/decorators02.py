from dataclasses import dataclass


@dataclass
class Pessoa:
    nome: str
    sobrenome: str


danny = Pessoa('Danny', 'Simioni')
luciano = Pessoa('Luciano', 'Berchon')

print(f"{danny} e {luciano} possuem representação")
print(danny != luciano)
