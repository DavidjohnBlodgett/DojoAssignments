# film title, description, release year, rating, special features, and genre (category)
SELECT title, description, release_year, rating, special_features , category.name AS genre FROM film
JOIN film_category ON film_category.film_id = film.film_id
JOIN category ON film_category.category_id = category.category_id WHERE category.name = 'Comedy'