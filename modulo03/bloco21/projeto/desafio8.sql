SELECT
	artistas.artista_name AS artista,
    albuns.album_name AS album
FROM SpotifyClone.artistas
	INNER JOIN SpotifyClone.albuns
	ON albuns.artista_id = artistas.artista_id
WHERE artistas.artista_name = "Walter Phoenix"
ORDER BY album;
    