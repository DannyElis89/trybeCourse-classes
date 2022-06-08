-- Sintaxe INNER JOIN:
	-- SELECT 
		-- nome_tabela1.nome_coluna1
        -- nome_tabela2.nome_coluna2 ....
        -- FROM tabela1
        -- INNER JOIN tabela2
        -- ON coluna_presente_em_ambas_tabelas
        
	-- SELECT t1.coluna, t2.coluna
		-- FROM tabela1 AS t1
		-- INNER JOIN tabela2 AS t2
		-- ON t1.coluna_em_comum = t2.coluna_em_comum;


USE sakila;

SELECT * FROM city;
SELECT * FROM country;

-- Exemplo sem utilizar o AS para renomear colunas e tabelas:
	-- Queries mais confusas e de menor legibilidade:
SELECT 
	actor.first_name, 
    actor.actor_id, 
    film_actor.actor_id
	FROM actor
	INNER JOIN film_actor
	ON actor.actor_id = film_actor.actor_id;

SELECT 
	city.city AS Cidade,
    city.country_id AS Id_pais,
    country.country AS Pais
    FROM city AS city
    INNER JOIN country AS country
    ON city.country_id = country.country_id;

SELECT * FROM film;
SELECT * FROM language;

-- Exemplos utilizando o AS para renomear colunas e tabelas:
	-- Queries mais legíveis e resultados mais claros:

SELECT
	filme.title,
    filme.language_id,
    idioma.name
    FROM film AS filme
    INNER JOIN language AS idioma
    ON filme.language_id = idioma.language_id
    ORDER BY filme.title;


