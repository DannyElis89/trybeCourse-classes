class Pet():
    def __init__(self, nome, especie, idade, humano):
        self.nome = nome
        self.especie = especie
        self.idade = idade
        self.humano = humano

    def __str__(self) -> str:
        return f"""
        - Nome do pet: {self.nome}
        - Espécie do pet: {self.especie}
        - Idade do pet: {self.idade}
        - Tutor do pet: {self.humano}
        """


thor = Pet('Thor', 'Gato', 5, 'Felipe')
print(thor)
