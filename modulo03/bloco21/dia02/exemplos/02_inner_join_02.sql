USE sakila;


-- 01. Monte uma query que exiba o id do ator,
	-- nome do ator e id do filme em que ele já atuou, 
    -- usando as tabelas actor e film_actor.
SELECT * FROM actor;
SELECT * FROM film_actor;

SELECT
	actor.actor_id AS id_ator,
    actor.first_name AS nome_ator,
    filme.film_id AS id_filme
    FROM actor AS actor
		INNER JOIN film_actor AS filme
		ON actor.actor_id = filme.actor_id;

-- 02. Use o JOIN para exibir o nome, sobrenome e endereço 
	-- de cada um dos funcionários do banco.
    -- Use as tabelas staff e address.
SELECT * FROM staff;
SELECT * FROM address;

SELECT 
	func.first_name AS nome,
    func.last_name AS sobrenome,
    ender.address AS endereco
    FROM staff AS func
		INNER JOIN address AS ender
		ON func.address_id = ender.address_id;


-- 03. Exiba o id do cliente, nome e email dos primeiros 100 clientes, 
	-- ordenados pelo nome em ordem decrescente,
    -- juntamente com o id do endereço e o nome da rua onde o cliente mora. 
    -- Essas informações podem ser encontradas nas tabelas customer e address.
SELECT * FROM customer;
SELECT * FROM address;

SELECT
	cliente.customer_id AS id_cliente,
    cliente.first_name AS nome,
    cliente.email AS email,
    cliente.address_id AS id_end,
    ender.address AS endereco
    FROM customer AS cliente
		INNER JOIN address AS ender
		ON cliente.address_id = ender.address_id
    ORDER BY cliente.first_name DESC
    LIMIT 100;

-- 04. Exiba o nome, email, id do endereço, endereço e distrito dos clientes 
	-- que moram no distrito da California e que contêm "rene" em seus nomes. 
    -- As informações podem ser encontradas nas tabelas address e customer.
SELECT * FROM customer;
SELECT * FROM address;

SELECT
	cliente.first_name,
    cliente.email,
    cliente.address_id,
    ender.address,
    ender.district
	FROM customer AS cliente
		INNER JOIN address AS ender
		ON cliente.address_id = ender.address_id
	WHERE ender.district = 'California'
    AND cliente.first_name LIKE '%rene%';

-- 05. Exiba o nome e a quantidade de endereços dos clientes cadastrados.
	-- Ordene seus resultados por nomes de forma decrescente.
    -- Exiba somente os clientes ativos. 
    -- As informações podem ser encontradas na tabela address e customer.
SELECT * FROM customer;
SELECT * FROM address;

SELECT
	cliente.first_name AS nome,
    ender.address AS endereco,
    COUNT(ender.address) AS quantidade_endereco
	FROM customer AS cliente
		INNER JOIN address AS ender
		ON cliente.address_id = ender.address_id
	WHERE cliente.active = 1
    GROUP BY cliente.customer_id
    ORDER BY 
		cliente.first_name DESC,
        cliente.last_name DESC;


-- 06. Monte uma query que exiba o nome, sobrenome
	-- e a média de valor (amount) paga aos funcionários no ano de 2006. 
    -- Use as tabelas payment e staff.
    -- Os resultados devem estar agrupados pelo nome e sobrenome do funcionário.
SELECT * FROM payment;
SELECT * FROM staff;

SELECT
	funcionario.first_name AS nome,
    funcionario.last_name AS sobrenome,
    AVG(pagamentos.amount) AS media_salario
    FROM payment AS pagamentos
		INNER JOIN staff AS funcionario
        ON funcionario.staff_id = pagamentos.staff_id
	WHERE YEAR(pagamentos.payment_date) = 2006
    GROUP BY
		funcionario.first_name,
        funcionario.last_name;

-- 07. Monte uma query que exiba o id do ator, nome, id do filme e título do filme,
	-- usando as tabelas actor, film_actor e film. 
    -- Dica: você precisará fazer mais de um JOIN na mesma query.
SELECT * FROM actor;
SELECT * FROM film_actor;
SELECT * FROM film;

SELECT
	actor.actor_id AS idator,
    actor.first_name AS nome,
    filmActor.film_id AS idfilme,
    film.title AS titulo
    FROM actor AS actor
		INNER JOIN film_actor AS filmActor
			ON actor.actor_id = filmActor.actor_id
		INNER JOIN film AS film
			ON film.film_id = filmActor.film_id;

