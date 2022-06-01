USE sakila; 
SELECT * FROM film;

-- 01. Mostre todos os detalhes dos filmes que contêm a palavra ace no nome.
SELECT * FROM film
	WHERE title LIKE '%ace%';

-- 02. Mostre todos os detalhes dos filmes cujas 
	-- descrições finalizam com china.
SELECT * FROM film
	WHERE description LIKE '%china';

-- 03. Mostre todos os detalhes dos dois filmes cujas 
	-- descrições contêm a palavra girl 
    -- e o título finaliza com a palavra lord.
SELECT * FROM film
	WHERE description LIKE '%girl%'
    AND title LIKE '%lord';

-- 04. Mostre os dois casos em que, 
	-- a partir do 4° caractere no título do filme, 
    -- tem-se a palavra gon.
SELECT * FROM film
	WHERE title LIKE '___gon%';

-- 05. Mostre o único caso em que, 
	-- a partir do 4° caractere no título do filme, 
    -- tem-se a palavra gon e a descrição contém a palavra Documentary.
SELECT * FROM film
	WHERE title LIKE '___gon%'
    AND description LIKE '%documentary%';

-- 06. Mostre os dois filmes cujos títulos ou finalizam com academy ou iniciam com mosquito.
SELECT * FROM film
	WHERE title LIKE '%academy'
    OR title LIKE 'mosquito%';

-- 07. Mostre os seis filmes que contêm as palavras monkey e sumo em suas descrições.
SELECT * FROM film
	WHERE description LIKE '%monkey%'
    AND description LIKE '%sumo%';