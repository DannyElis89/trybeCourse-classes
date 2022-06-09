USE pixar;

SELECT * FROM box_office;
SELECT * FROM movies;
SELECT * FROM theater;

-- 03. Utilizando o INNER JOIN, faça uma busca que retorne 
	-- os filmes e sua avaliação (rating) em ordem decrescente.

SELECT
	m.title AS titulo,
    b.rating AS avaliacao
    FROM movies AS m
	INNER JOIN box_office AS b
		ON m.id = b.movie_id
	ORDER BY avaliacao DESC;