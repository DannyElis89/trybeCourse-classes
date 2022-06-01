USE PecasFornecedores;
SELECT * FROM Fornecedores;
SELECT * FROM Fornecimentos;
SELECT * FROM Pecas;
SELECT * FROM Vendas;

-- 01. Vamos lá! Faça uma consulta que retorne 
-- todas as peças que começam com as letras GR.
SELECT * FROM Pecas
	WHERE name LIKE 'GR%';

-- 02. Agora, escreva uma query para mostrar todos os fornecimentos 
-- que contenham a peça com code 2. 
-- Organize o resultado por ordem alfabética de fornecedor.
SELECT * FROM Fornecimentos
	WHERE code = 2;

-- 03. Em seguida, faça uma consulta para exibir as peças, preço e fornecedor 
-- de todos os fornecimentos em que o código do fornecedor tenha a letra N.
SELECT peca, Preco, Fornecedor FROM Fornecimentos
	WHERE Fornecedor LIKE '%N%'
    OR Fornecedor LIKE 'N%'
    OR Fornecedor LIKE '%N';

-- 04. Avante, falta pouco! Escreva uma query para exibir todas as informações 
-- dos fornecedores que são empresas limitadas (LTDA). 
-- Ordene esses resultados em ordem alfabética decrescente.
SELECT * FROM Fornecedores
	WHERE name LIKE '%LTDA'
    ORDER BY name;

-- 05. Agora, faça uma consulta para exibir o número de empresas
-- (fornecedores) que contém a letra F no código.
SELECT * FROM Fornecedores
	WHERE code LIKE '%F%';

-- 06. Quase lá! Agora escreva uma query para exibir os fornecimentos 
-- onde as peças custam mais de R$15,00 e menos de $40,00. 
-- Ordene os resultados por ordem crescente.
SELECT * FROM Fornecimentos
	WHERE Preco BETWEEN 16 AND 39
    ORDER BY Preco;

-- 07. Ufa! Por fim, faça uma query para exibir o número de vendas
-- feitas entre o dia 15/04/2018 e o dia 30/07/2019.
SELECT COUNT(*) FROM Vendas
	WHERE DATE(order_date) BETWEEN '2018-04-15' AND '2019-07-30';
    
    
-- SELECT * FROM payment
	-- WHERE DATE(payment_date) >= '2005-07-28 22:00:00';