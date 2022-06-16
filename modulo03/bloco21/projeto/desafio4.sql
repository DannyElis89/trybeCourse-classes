SELECT usuario.user_name AS usuario,
	IF(	MAX(YEAR(usuario_musicas.data_reproducao)) >= 2021, 
		'Usuário ativo', 'Usuário inativo'
	) AS condicao_usuario
	FROM SpotifyClone.usuario
		INNER JOIN SpotifyClone.usuario_musicas
		ON usuario.user_id = usuario_musicas.user_id
	GROUP BY usuario.user_name
	ORDER BY usuario.user_name; 
    