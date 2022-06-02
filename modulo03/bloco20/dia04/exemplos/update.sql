USE sakila;
SET SQL_SAFE_UPDATES = 0;
SELECT * FROM staff;
SELECT * FROM actor;
SELECT * FROM category;

UPDATE sakila.staff
	SET first_name = 'ElisDanny'
	WHERE staff_id = 4;

UPDATE staff
	SET first_name = 'Rannveig', last_name = 'Jordan', username = 'Rannveig'
	WHERE staff_id = 4;

-- Opção 1 - Incluindo a lista de condições fixas
UPDATE actor
	SET first_name = 'JOE'
	WHERE actor_id IN (1,2,3);

-- Opção 2 - Especificando como cada entrada será alterada individualmente
UPDATE sakila.actor
	SET first_name = (
	CASE actor_id WHEN 1 THEN 'JOE' -- se actor_id = 1, alterar first_name para 'JOE'
				  WHEN 2 THEN 'DAVIS' -- se actor_id = 2, alterar first_name para 'DAVIS'
				  WHEN 3 THEN 'CAROLINE' -- se actor_id = 3, alterar first_name para 'CAROLINE'
			  ELSE first_name -- em todos os outros casos, mantém-se o first_name
	END);

UPDATE staff
	SET password = 'FavorResetarSuaSenha123'
	WHERE active = 1
	ORDER BY last_update
	LIMIT 2;
    
-- 01. Atualize todas as linhas da tabela sakila.actor 
-- que possuem o primeiro nome "JULIA" para "JULES".
SELECT * FROM actor;
UPDATE actor
	SET first_name = 'JULES'
	WHERE first_name = 'JULIA';

-- 02. Altere a linha da tabela categoria onde o valor
-- da coluna x é igual "Sci-fi" para "Science Fiction".
SELECT * FROM category;
UPDATE category
	SET name = 'Science Fiction'
	WHERE name = 'Sci-fi';

-- 03. Corrija para $25 o valor do aluguel da tabela filmes 
-- com duração maior que 100 minutos 
-- e que possuem classificação "G", "PG" ou "PG-13" 
-- e um custo de substituição maior que $20.
SELECT * FROM film;
UPDATE film
	SET rental_rate = 25
    WHERE length > 100
    AND rating <> 'NC-17'
    AND replacement_cost > 20;


-- 04. Agora, o aluguel dos filmes com duração 
-- entre 0 e 100 minutos passará a ser $10,00 
-- e o aluguel dos filmes com duração
-- acima de 100 minutos passará a ser de $20,00.
 SELECT * FROM film;
UPDATE film
	SET rental_rate = (
		CASE 
			WHEN length <= 100 THEN 10
            WHEN length > 100 THEN 20
    END);
    