USE pixar;

SELECT * FROM box_office;
SELECT * FROM movies;
SELECT * FROM theater;

-- 05. Utilizando o RIGHT JOIN, faça uma busca que retorne todos os dados dos filmes,
	-- mesmo os que não estão em cartaz e, adicionalmente, 
    -- os dados dos cinemas que possuem estes filmes em cartaz. 
    -- Retorne os nomes dos cinemas em ordem alfabética

SELECT
	t.id AS 'id cinema',
    t.name AS cinema,
    t.location AS cidade,
    m.title AS titulo,
    m.director AS diretor,
    m.year AS ano,
    m.length_minutes AS duracao
    FROM theater AS t
    RIGHT JOIN movies AS m
		ON t.id = m.theater_id
	ORDER BY t.name ASC;