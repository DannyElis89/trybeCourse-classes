class Player:
    # ...

    def tournaments(self, game_id):
        """Retorna os torneios de um jogo da pessoa"""
        return Tournament.query.filter(game_id=game_id, user_id=self.id).all()


class Tournament:
    """Classe contendo vários métodos e que herda de algum banco de dados"""


# Código cliente
player = Player(id=1)
print(player.tournaments(1))
