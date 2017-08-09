# first name, last name, email, and address
SELECT customer.first_name, customer.last_name, customer.email, store.store_id, store.address_id, city.city_id FROM customer
JOIN store ON customer.store_id = store.store_id 
JOIN address ON customer.address_id = address.address_id
JOIN city ON address.city_id = city.city_id
WHERE store.store_id = 1 AND address.city_id IN (1, 42, 312, 459)
