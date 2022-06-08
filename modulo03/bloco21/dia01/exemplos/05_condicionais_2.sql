USE sakila;
SELECT * FROM film;

-- Sintaxe:
-- SELECT CASE
  -- WHEN condicao THEN valor
  -- ELSE valor padrao
-- END;

-- Sintaxe CASE:
	-- SELECT 
		-- CASE
			-- WHEN 'Nome da coluna base para comparação' + 'condição 1' THEN 'valor retornado 1')
            -- WHEN 'Nome da coluna base para comparação' + 'condição 2' THEN 'valor retornado 2')
            -- WHEN 'Nome da coluna base para comparação' + 'condição 3' THEN 'valor retornado 3')
            -- WHEN 'Nome da coluna base para comparação' + 'condição 4' THEN 'valor retornado 4')
            -- ELSE 'valor genérico retornado'
		-- END AS 'nome da coluna onde os valores retornados serão exibidos'
        -- FROM 'nome da tabela de onde os dados serão extraídos';


-- Exemplos utilizando a tabela sakila.film:
SELECT * FROM film;

-- Ex 1:
SELECT 
	title, 
    rental_rate,
	CASE
		WHEN rental_rate = 0.99 THEN 'BARATO'
        WHEN rental_rate = 2.99 THEN 'MÉDIO'
        WHEN rental_rate = 4.99 THEN 'CARO'
		ELSE rental_rate = 'NÃO CLASSIFICADO'
    END AS Valor
    FROM film;


-- Ex 2:
SELECT
    first_name,
    email,
    CASE
        WHEN email = 'MARY.SMITH@sakilacustomer.org' THEN 'Cliente de baixo valor'
        WHEN email = 'PATRICIA.JOHNSON@sakilacustomer.org' THEN 'Cliente de médio valor'
        WHEN email = 'LINDA.WILLIAMS@sakilacustomer.org' THEN 'Cliente de alto valor'
        ELSE 'não classificado'
    END AS 'Classificação cliente'
	FROM sakila.customer
	LIMIT 10;

