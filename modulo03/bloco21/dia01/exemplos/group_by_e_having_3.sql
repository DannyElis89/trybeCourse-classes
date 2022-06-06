USE sakila;
-- A query a seguir busca o nome e a quantidade de nomes cadastrados na
	-- tabela actor e os agrupa por quantidade. 
    -- Por fim, filtramos os resultados agrupados usando o HAVING, 
    -- para que somente os nomes que estão cadastrados
	-- mais de duas vezes sejam exibidos.
	SELECT 
		first_name, 
		COUNT(*)
		FROM actor
		GROUP BY first_name
		HAVING COUNT(*) > 2
		ORDER BY COUNT(*) ASC;

-- Ou, melhor ainda, usando o AS para dar nomes às colunas de agregação,
	-- melhorando a leitura do resultado
	SELECT 
		first_name AS Nome,
        COUNT(*) AS Total
		FROM actor
		GROUP BY first_name
		HAVING Total > 2;

-- Observação: o alias não funciona com strings para o HAVING,
	-- então use o underline ("_") para separar palavras
	-- Ou seja, o exemplo abaixo não vai funcionar
	SELECT 
		first_name, 
		COUNT(*) AS 'nomes cadastrados'
		FROM actor
		GROUP BY first_name
		HAVING 'nomes cadastrados' > 2;