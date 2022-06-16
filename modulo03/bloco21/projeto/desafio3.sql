SELECT 
	usuario.user_name AS usuario, 
	COUNT(usuario_musicas.musica_id) AS qtde_musicas_ouvidas, 
	ROUND(SUM(musicas.musica_duracao / 60), 2) AS total_minutos
	FROM SpotifyClone.usuario
		INNER JOIN SpotifyClone.usuario_musicas
			ON usuario.user_id = usuario_musicas.user_id
		INNER JOIN SpotifyClone.musicas
			ON usuario_musicas.musica_id = musicas.musica_id
	GROUP BY usuario.user_name
	ORDER BY usuario.user_name; 