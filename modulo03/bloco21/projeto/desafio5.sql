SELECT 
	musicas.musica_name AS cancao, 
    COUNT(usuario_musicas.musica_id) AS reproducoes
FROM SpotifyClone.musicas
	INNER JOIN SpotifyClone.usuario_musicas
	ON musicas.musica_id = usuario_musicas.musica_id
GROUP BY cancao
ORDER BY reproducoes DESC, 
cancao LIMIT 2;