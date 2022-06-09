USE pixar;
SELECT * FROM box_office;
SELECT * FROM movies;
SELECT * FROM theater;


-- 01. Utilizando o INNER JOIN, encontre as vendas nacionais (domestic_sales)
	-- e internacionais (international_sales) de cada filme.
SELECT
    m.title AS 'Nome do filme', 
    b.domestic_sales AS 'Vendas nacionais', 
    b.international_sales AS 'Vendas internacionais'
	FROM movies AS m
		INNER JOIN box_office b 
		ON b.movie_id = m.id
		ORDER BY 
			'Nome do filme',
			'Vendas internacionais';    