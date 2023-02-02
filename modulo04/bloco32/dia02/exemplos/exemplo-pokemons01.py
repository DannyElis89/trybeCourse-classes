import json


with open('pokemons.json') as file:
    content = file.read()  # Leitura do arquivo
    pokemons = json.loads(content)['results']
    # transforma o conteúdo em dictionary
    # 'loads' carrega o JSON a partir de um texto

print(pokemons[0])
