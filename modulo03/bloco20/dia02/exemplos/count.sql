USE sakila;
SELECT * FROM actor;
SELECT COUNT(*) FROM actor;
SELECT COUNT(first_name) FROM actor;
SELECT COUNT(DISTINCT first_name) FROM actor;
SELECT COUNT(DISTINCT first_name, last_name) FROM actor;

SELECT COUNT(*) FROM address;
SELECT COUNT(address) FROM address;
SELECT COUNT(address2) FROM address;
SELECT district FROM address;
SELECT COUNT(district) FROM address;
SELECT COUNT(DISTINCT district) FROM address;
SELECT COUNT(district) FROM address
	WHERE district = 'Alberta';
SELECT COUNT(address2) FROM address
	WHERE address2 = '';

SELECT * FROM staff;
SELECT password FROM staff;
SELECT COUNT(password) FROM staff;
SELECT CONCAT(first_name, ' ', last_name) AS 'Nome Completo' FROM staff;
SELECT COUNT(CONCAT (first_name, ' ', last_name)) FROM staff;
SELECT email FROM staff;
SELECT COUNT(email) FROM staff;
