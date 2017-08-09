# film title, description, release year, rating, and special feature
SELECT film.title, film.description, film.release_year, film.rating, film.special_features, actor.first_name FROM film
JOIN film_actor ON film.film_id = film_actor.film_id
JOIN actor ON film_actor.actor_id = actor.actor_id 
WHERE actor.actor_id = 15 AND film.rating = 'G' AND film.special_features LIKE '%Behind the Scenes%' # = 'Behind the Scenes' #AND film.special_features LIKE %B%
#GROUP BY film.film_id