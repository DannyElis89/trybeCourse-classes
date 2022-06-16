USE sakila;

-- Entenda o impacto do INDEX
	CREATE INDEX index_first_name ON actor(first_name);
	SELECT * FROM actor WHERE first_name = 'RITA';
	-- Custo com índice: 0.35

	DROP INDEX index_first_name ON actor;
	SELECT * FROM actor WHERE first_name = 'RITA';
    -- Custo sem índice: 20.25
    
-- Entenda o impacto do FULLTEXT INDEX
	CREATE FULLTEXT INDEX index_address ON address(address);
    SELECT * FROM address WHERE MATCH(address) AGAINST('drive');
    -- Custo com índice: 0.95
    
    DROP INDEX index_address ON address;
    SELECT * FROM address WHERE address LIKE '%drive%';
    -- Custo sem índice: 65.40

-- Entenda o impacto do UNIQUE INDEX
		-- A Sintaxe para criar um UNIQUE INDEX é a seguinte:
		-- CREATE UNIQUE INDEX nome_do_indice ON nome_tabela(nome_coluna);
		
		-- Para dropar (excluir), pode-se usar:
		-- DROP INDEX nome_do_indice ON nome_tabela;

	CREATE UNIQUE INDEX unique_name_index ON language(name);
    SELECT * FROM language WHERE name = 'Mandarin';
    -- Custo com índice: 1.00
    
    DROP INDEX unique_name_index ON sakila.language;
	SELECT * FROM language WHERE name = 'Mandarin';
    -- Custo sem índice: 0.85


