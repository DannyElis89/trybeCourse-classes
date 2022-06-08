USE sakila;

SELECT * FROM actor; -- 200 resultados
SELECT * FROM customer; -- 599 resultados

-- LEFT JOIN:
	-- São retornados todos os registros da tabela da esquerda 
		-- e valores correspondentes da tabela da direita, caso existam. 
        -- Valores que não possuem correspondentes são exibidos como nulos.
        
SELECT 
	c.customer_id AS clienteID,
    c.first_name AS nomeCliente,
    c.last_name AS sobrenomeCliente,
    a.actor_id AS atorID,
    a.first_name AS nomeAtor,
    a.last_name AS sobrenomeAtor
    FROM customer AS c
		LEFT JOIN actor AS a
			-- quando não encontra correspondência com a coluna da esquerda, 
				-- retorna campos vazios a direita
        ON c.last_name = a.last_name
	ORDER BY c.last_name;
    
    
-- RIGHT JOIN:
	--  São retornados todos os registros da tabela da direita 
		-- e valores correspondentes da tabela da esquerda, caso existam. 
		-- Valores que não possuem correspondentes são exibidos como nulos.
        
	SELECT 
		c.customer_id AS clienteID, 
		c.first_name AS nomeCliente,
		c.last_name AS sobrenomeCliente,
		a.actor_id AS atorID,
		a.first_name AS nomeAtor,
		a.last_name AS sobrenomeAtor
		FROM customer AS c
			RIGHT JOIN actor AS a
				-- quando não encontra correspondência com a coluna da direita, 
					-- retorna campos vazios a esquerda
			ON c.last_name = a.last_name
		ORDER BY c.last_name;
    
    
-- INNER JOIN:
	-- Traz somente os registros que possuem valores correspondentes em ambas as tabelas.
    
	SELECT 
		c.customer_id AS clienteID, 
		c.first_name AS nomeCliente,
		c.last_name AS sobrenomeCliente,
		a.actor_id AS atorID,
		a.first_name AS nomeAtor,
		a.last_name AS sobrenomeAtor
		FROM customer AS c
			INNER JOIN actor AS a 
				-- não retorna campos vazios
			ON c.last_name = a.last_name
		ORDER BY c.last_name;