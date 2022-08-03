USE sakila;
SELECT * FROM film;

SELECT title, release_year, rating, length, replacement_cost FROM film
	ORDER BY length DESC, replacement_cost ASC
    LIMIT 20;
