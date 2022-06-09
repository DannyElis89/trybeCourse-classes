USE pixar;

SELECT * FROM box_office;
SELECT * FROM movies;
SELECT * FROM theater;

-- 06. Utilizando o INNER JOIN, selecione todas as informações dos filmes
	-- que estão em cartaz (possuem theater_id diferente de NULL)
    -- com avaliação maior que 8.

SELECT 
    m.title AS titulo,
    m.director AS diretor,
    m.year AS ano,
    m.length_minutes AS duracao
    FROM movies AS m
	INNER JOIN theater AS t
		ON m.theater_id = t.id
	INNER JOIN box_office AS b
		ON b.movie_id = m.id
	WHERE b.rating > 8;