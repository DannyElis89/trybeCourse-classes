SELECT 
	COUNT(usuario_musicas.musica_id) AS quantidade_musicas_no_historico
FROM SpotifyClone.usuario_musicas
INNER JOIN SpotifyClone.usuario
	ON usuario.user_id = usuario_musicas.user_id
WHERE usuario.user_name = 'Bill';