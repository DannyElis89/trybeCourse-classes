-- Sintaxe IF:
	-- SELECT IF(condicao, valor_se_verdadeiro, valor_se_falso);
    -- Ex: 
		-- SELECT IF(idade >= 18, 'Maior de idade', 'Menor de Idade')
			-- FROM pessoas;
		-- SELECT IF(aberto, 'Entrada permitida', 'Entrada não permitida')
			-- FROM estabelecimentos;

-- Exemplos utilizando o banco sakila:

USE sakila;
SELECT * FROM film;

-- Ex 1:
SELECT 
	title, 
    rental_rate,
	IF (rental_rate > 0.99, 'CARO', 'BARATO')
    AS 'Classificação valor'
    FROM film;

-- Ex 2:
SELECT 
	first_name, 
    IF(active, 'Cliente Ativo', 'Cliente Inativo') 
    AS 'Status cliente'
	FROM sakila.customer
	LIMIT 20;
