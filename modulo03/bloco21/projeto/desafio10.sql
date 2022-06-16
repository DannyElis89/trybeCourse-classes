SELECT 
	musicas.musica_name AS nome,
    COUNT(usuario_musicas.musica_id) AS reproducoes
FROM SpotifyClone.musicas
INNER JOIN SpotifyClone.usuario_musicas
	ON musicas.musica_id = usuario_musicas.musica_id
INNER JOIN SpotifyClone.usuario
	ON usuario.user_id = usuario_musicas.user_id
WHERE usuario.plano_id IN(1, 3)
GROUP BY musicas.musica_name
ORDER BY nome;