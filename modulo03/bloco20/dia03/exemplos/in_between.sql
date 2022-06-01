USE sakila; 
SELECT * FROM film;

SELECT * FROM actor
	WHERE first_name = 'PENELOPE'
	OR first_name = 'NICK'
	OR first_name = 'ED'
	OR first_name = 'JENNIFER';

SELECT * FROM actor
	WHERE first_name IN ('PENELOPE','NICK','ED','JENNIFER');
    
SELECT * FROM customer
	WHERE customer_id in (1, 2, 3, 4, 5);

SELECT * FROM payment;
SELECT * FROM payment
	WHERE rental_id IN (269, 239, 126, 399, 142);

SELECT * FROM address;
SELECT * FROM address
	WHERE district IN ('QLD', 'Nagasaki', 'California', 'Attika', 'Mandalay', 'Nantou', 'Texas');

SELECT title, length FROM film
	WHERE length BETWEEN 50 AND 120;

SELECT * FROM language
	WHERE name BETWEEN 'Italian' AND 'Mandarin'
	ORDER BY name;

SELECT rental_id, rental_date FROM rental
	WHERE rental_date
	BETWEEN '2005-05-27' AND '2005-07-17';