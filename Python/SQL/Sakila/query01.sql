# customer first name, last name, email, and address
SELECT first_name, last_name, email, address.address FROM customer
JOIN address ON  address.address_id = customer.address_id
JOIN city ON address.city_id = city.city_id WHERE address.city_id = 312