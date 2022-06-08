USE sakila;

-- Sintaxe GROUP BY:
	-- SELECT coluna(s) FROM tabela
		-- GROUP BY coluna(s);
-- Ex 1:
	SELECT first_name FROM actor
		GROUP BY first_name;
-- Ex 2:
    SELECT 
		first_name, 
        COUNT(*) AS ocorrencias
        FROM actor
		GROUP BY first_name;

-- GROUP BY + Funções agregativas:
	-- Média de duração de filmes agrupados por classificação indicativa:
		SELECT 
			rating AS 'Classificação indicativa', 
			AVG(length) AS 'Média de duração'
			FROM film
			GROUP BY rating;

	-- Valor mínimo de substituição dos filmes agrupados por classificação indicativa
		SELECT 
			rating AS 'Classificação indicativa',  
            MIN(replacement_cost) AS 'Valor mínimo de substituição'
			FROM film
			GROUP BY rating;

	-- Valor máximo de substituição dos filmes agrupados por classificação indicativa
		SELECT 
			rating AS 'Classificação indicativa', 
            MAX(replacement_cost) AS 'Valor máximo de substituição'
			FROM film
			GROUP BY rating;

	-- Custo total de substituição de filmes agrupados por classificação indicativa
		SELECT 
			rating AS 'Classificação indicativa',  
            SUM(replacement_cost) AS 'Valor total de substituição'
			FROM film
			GROUP by rating;



