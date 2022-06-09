USE pixar;

SELECT * FROM box_office;
SELECT * FROM movies;
SELECT * FROM theater;

-- 04. Utilizando o LEFT JOIN, faça uma busca que retorne todos os dados dos cinemas,
	-- mesmo os que não possuem filmes em cartaz e, adicionalmente,
    -- os dados dos filmes que estão em cartaz nestes cinemas. 
    -- Retorne os nomes dos cinemas em ordem alfabética.

SELECT 
    t.name AS 'Cinema',
    t.location AS 'Cidade',
    m.title AS 'Título do filme',
    m.director AS 'Diretor do filme',
    m.year AS 'Ano',
    m.length_minutes AS 'Duração'
    FROM theater AS t
    LEFT JOIN movies as m
		ON m.theater_id = t.id
	ORDER BY t.name;