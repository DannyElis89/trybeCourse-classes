USE pixar;

SELECT * FROM box_office;
SELECT * FROM movies;
SELECT * FROM theater;

-- 02. Utilizando o INNER JOIN, faça uma busca que retorne o número de vendas para 
	-- cada filme que possui um número maior de vendas internacionais (international_sales)
	-- do que vendas nacionais (domestic_sales).
 SELECT 
	m.title AS Titulo,
    (b.domestic_sales + b.international_sales) AS Vendas
    FROM movies AS m
	INNER JOIN box_office AS b
		ON b.movie_id = m.id
	WHERE b.domestic_sales < b.international_sales
    ORDER BY Vendas DESC;