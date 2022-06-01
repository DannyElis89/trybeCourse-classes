USE Scientists;
SELECT * FROM AssignedTo;
SELECT * FROM Projects;
SELECT * FROM Scientists;


-- 01. Escreva uma query para exibir todas as informações 
-- de todos os cientistas que possuam a letra 'e' em seu nome.
SELECT * FROM Scientists
	WHERE Name LIKE '%e%';


-- 02. Escreva uma query para exibir o nome de todos os projetos 
-- cujo o código inicie com a letra A. 
-- Ordene o resultado em ordem alfabética.
SELECT * FROM Projects
	WHERE Name LIKE 'A%'
    ORDER BY Name;

-- 03. Escreva uma query para exibir o código e nome de todos os projetos 
-- que possuam em seu código o número 3. 
-- Ordene o resultado em ordem alfabética.
SELECT Name, Code FROM Projects
	WHERE Code LIKE '%3%'
    ORDER BY Name;

-- 04. Escreva uma query para exibir todos os cientistas (valores numéricos) 
-- cujos projetos sejam AeH3, Ast3 ou Che1.
SELECT * FROM AssignedTo
	WHERE Project IN ('AeH3', 'Ast3', 'Che1')
    ORDER BY Scientist;

-- 05. Escreva uma query para exibir todas as informações 
-- de todos os projetos com mais de 500 horas.
SELECT * FROM Projects
	WHERE Hours > 500;

-- 06. Escreva uma query para exibir todas as informações 
-- de todos os projetos cujas horas sejam maiores que 250 e menores 800.
SELECT * FROM Projects
	WHERE Hours BETWEEN 250 AND 800
    ORDER BY Hours;

-- 07. Escreva uma query para exibir o nome e o código de 
-- todos os projetos cujo nome NÃO inicie com a letra A.
SELECT Name, Code FROM Projects
	WHERE Name NOT LIKE 'A%'
    ORDER BY Name;

-- 08. Escreva uma query para exibir o nome de todos os projetos 
-- cujo código contenha a letra H.
SELECT Name FROM Projects
	WHERE Code LIKE '%H%';