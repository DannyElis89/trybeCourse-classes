import json


with open('pokemons.json') as file:
    pokemons = json.load(file)['results']
    # 'load' carrega o JSON a partir de um arquivo

print(pokemons[0])
