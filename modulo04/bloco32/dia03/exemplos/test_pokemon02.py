import json
from unittest.mock import mock_open, patch
from pokemon02 import retrieve_pokemons_by_type02


def test_retrieve_pokemons_by_type02():
    grass_type_pokemon02 = {
        "national_number": "001",
        "evolution": None,
        "name": "Bulbasaur",
        "type": ["Grass", "Poison"],
        "total": 318,
        "hp": 45,
        "attack": 49,
        "defense": 49,
        "sp_atk": 65,
        "sp_def": 65,
        "speed": 45,
    }

    water_type_pokemon02 = {
        "national_number": "007",
        "evolution": None,
        "name": "Squirtle",
        "type": ["Water"],
        "total": 314,
        "hp": 44,
        "attack": 48,
        "defense": 65,
        "sp_atk": 50,
        "sp_def": 64,
        "speed": 43,
    }

    pokemon_json_content = json.dumps({
        "results": [grass_type_pokemon02, water_type_pokemon02]
    })

    with patch("builtins.open", mock_open(read_data=pokemon_json_content)):
        assert retrieve_pokemons_by_type02("Grass", "dummy") == [
            grass_type_pokemon02
        ]
