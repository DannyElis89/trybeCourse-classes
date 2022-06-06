USE sakila;

-- 1. Monte uma query que exiba a quantidade de clientes cadastrados
	-- na tabela sakila.customer que estão ativos e a quantidade que estão inativos.
    SELECT * FROM customer;
    SELECT 
		active AS 'Status clientes', 
        COUNT(*) AS Total
        FROM customer
		GROUP BY active;
  
-- 2. Monte uma query para a tabela sakila.customer
	-- que exiba a quantidade de clientes ativos e inativos por loja. 
    -- Os resultados devem conter o ID da loja, o status dos clientes 
    -- (ativos ou inativos) e a quantidade de clientes por status.
    SELECT * FROM customer;
    SELECT 
		store_id AS Loja,
        active AS 'Status clientes', 
        COUNT(*) AS Total
        FROM customer
		GROUP BY store_id, active;

-- 3. Monte uma query que exiba a média de duração de locação
	-- por classificação indicativa (rating) dos filmes cadastrados na tabela film. 
    -- Os resultados devem ser agrupados pela classificação indicativa 
    -- e ordenados da maior média para a menor.
    SELECT * FROM film;
    SELECT 
		AVG(rental_duration) AS 'Duração média de locação',
        rating AS 'Classificação indicativa', 
        COUNT(*) AS Total
        FROM film
		GROUP BY rating
        ORDER BY 'Duração média de locação' DESC;

-- 4. Monte uma query para a tabela address
	-- que exiba o nome do distrito e a quantidade de endereços registrados nele.
	-- Os resultados devem ser ordenados da maior quantidade para a menor.
	SELECT * FROM address;
	SELECT 
		district AS 'Distrito', 
		COUNT(*) AS Total
		FROM address
		GROUP BY district
		ORDER BY Total DESC;
