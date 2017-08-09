# actor id, actor name, film title, description, and release year
SELECT actor.actor_id, CONCAT(first_name, ' ' ,last_name) AS name, film.title, film.description, film.release_year FROM actor 
JOIN film_actor ON film_actor.actor_id = actor.actor_id #WHERE actor.actor_id = 5
JOIN film ON film_actor.film_id = film.film_id WHERE actor.actor_id = 5