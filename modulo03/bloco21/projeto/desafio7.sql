SELECT
	artistas.artista_name AS artista,
    albuns.album_name AS album,
    COUNT(usuario_artista.user_id) AS seguidores
FROM SpotifyClone.artistas
	INNER JOIN SpotifyClone.albuns
		ON artistas.artista_id = albuns.artista_id
    INNER JOIN SpotifyClone.usuario_artista
		ON artistas.artista_id = usuario_artista.artista_id
GROUP BY artista, album
ORDER BY seguidores DESC, artista, album;
