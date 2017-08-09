# film title, description, release year, rating, special features and genre
SELECT film.title, film.description, film.release_year, film.rating, film.special_features, film.rating, category.name AS genre, film.rental_rate FROM film
JOIN film_category ON film_category.film_id = film.film_id
JOIN category ON film_category.category_id = category.category_id
WHERE film.rental_rate = 2.99 AND category.name = 'Drama'