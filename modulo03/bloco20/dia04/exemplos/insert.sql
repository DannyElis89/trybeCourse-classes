USE sakila;
SELECT * FROM staff;
SELECT * FROM customer;
SELECT * FROM actor;
SELECT * FROM category;
SELECT * FROM store;

-- 01. Insira um novo funcionário na tabela sakila.staff.
INSERT INTO staff 
		(first_name, last_name, address_id, email, store_id, active, username, password)
    VALUES ('DannyElis', 'Simioni', 4, 'teste.teste@teste.com', 1, 1, 'Danny', '123456789');

-- 02. Insira dois funcionários novos em apenas uma query.
INSERT IGNORE INTO staff 
		(first_name, last_name, address_id, email, store_id, active, username, password)
    VALUES
		('Elis', 'Simioni', 5, 'teste@teste.com', 2, 2, 'Elis', '987654321'),
        ('Regina', 'Carvalho', 6, 'test@teste.com', 1, 1, 'Regina', '98765321');

-- 03. Selecione os cinco primeiros nomes e sobrenomes da tabela sakila.customer 
	-- e cadastre essas pessoas como atores na tabela sakila.actor.		
INSERT IGNORE INTO actor (first_name, last_name)
	SELECT first_name, last_name FROM customer
		LIMIT 5;

-- 04. Cadastre três categorias de uma vez só na tabela sakila.category.
INSERT INTO category (name)
	VALUES
		('Fantasy'),
        ('Biography'),
        ('Sci-Fi');

-- 05: Cadastre 1 nova loja na tabela sakila.store.
INSERT INTO store 
		(address_id, manager_staff_id)
	VALUES
		(3, 3);
