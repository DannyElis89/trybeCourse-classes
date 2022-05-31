USE sakila;

SELECT * FROM address
	ORDER BY address ASC;

SELECT * FROM address
	ORDER BY address DESC;

SELECT * FROM address
	ORDER BY address, district ASC;
    
SELECT * FROM address
	ORDER BY address DESC, district ;
    
SELECT * FROM address
	ORDER BY district ASC, address DESC;