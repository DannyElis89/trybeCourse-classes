USE sakila;

-- 1. Usando a query a seguir, modifique-a de forma que exiba apenas
	-- as durações médias que estão entre 115.0 a 121.50.
    -- Além disso, dê um alias (apelido) à coluna gerada por AVG(length),
    -- de forma que deixe a query mais legível.
    -- Finalize ordenando os resultados de forma decrescente.
    SELECT * FROM film;
    
    SELECT 
		rating AS classificacao_indicativa,
		AVG(length) AS duracao_media
		FROM film
		GROUP BY rating
        HAVING duracao_media BETWEEN 115.0 AND 121.50
        ORDER BY duracao_media DESC;

-- 2. Usando a query a seguir, exiba apenas os valores de total do custo
	-- de substituição que estão acima de $3950.50.
    -- Dê um alias que faça sentido para SUM(replacement_cost),
    -- de forma que deixe a query mais legível.
    -- Finalize ordenando os resultados de forma crescente.
    SELECT * FROM film;
    
	SELECT 
		rating AS classificacao_indicativa, 
        SUM(replacement_cost) as custo_substituicao
		FROM film
		GROUP BY rating
		HAVING custo_substituicao  > 3950.50
		ORDER BY custo_substituicao ASC;

