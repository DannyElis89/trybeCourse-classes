USE sakila;
SELECT * FROM film_text;

DELETE FROM film_text
	WHERE title = 'ACADEMY DINOSAUR';

-- 01. Exclua do banco de dados o ator com o nome de "KARL".
DELETE FROM actor
	WHERE first_name = 'KARL';

DELETE FROM film_actor
	WHERE actor_id = 12;

DELETE FROM actor
	WHERE first_name = 'KARL';

-- 02. Exclua do banco de dados o ator com o nome de "MATTHEW".
DELETE FROM actor
	WHERE first_name = 'MATTHEW';

DELETE FROM film_actor
	WHERE actor_id IN (8, 103, 181);
    
DELETE FROM actor
	WHERE first_name = 'MATTHEW';    
    
-- 03. Exclua da tabela film_text todos os registros que possuem a palavra "saga"
-- em suas descrições.    
DELETE FROM film_text
	WHERE description LIKE '%saga%';
 
-- 04. Apague da maneira mais performática possível 
-- todos os registros das tabelas film_actor e film_category.
TRUNCATE film_actor;
TRUNCATE film_category;
 
-- 06. Exclua o banco de dados e o recrie (use as instruções do início desta aula).
DELETE sakila; 
 