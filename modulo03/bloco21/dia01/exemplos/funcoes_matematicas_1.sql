-- Adição, subtração, multiplicação e divisão:
	SELECT 5 + 5;
	SELECT 5 - 5;
	SELECT 5 * 5;
	SELECT 5 / 5;

	USE sakila;
	SELECT rental_duration + rental_rate FROM film LIMIT 10;
	SELECT rental_duration - rental_rate FROM film LIMIT 10;
	SELECT rental_duration / rental_rate FROM film LIMIT 10;
	SELECT rental_duration * rental_rate FROM film LIMIT 10;

-- Divisão de inteiros com DIV e como encontrar seus restos com o MOD:
	-- O DIV retorna o resultado inteiro de uma divisão, 
		-- ignorando as casas decimais de um número:
			SELECT 10 DIV 3; -- 3
			SELECT 10 DIV 2; -- 5
			SELECT 14 DIV 3; -- 4
			SELECT 13 DIV 2; -- 6

	-- Já o operador MOD retorna o resto de uma divisão como resultado. Por exemplo:
			SELECT 10 MOD 3; -- Resto 1
			SELECT 10 MOD 2; -- Resto 0
			SELECT 14 MOD 3; -- Resto 2
			SELECT 13 MOD 2; -- Resto 1
			SELECT 10.5 MOD 2; -- Resto 0.5