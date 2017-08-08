SELECT countries.name AS country_name, COUNT(cities.name) AS city_count
FROM countries
JOIN cities
ON countries.id = cities.country_id
GROUP BY countries.id
ORDER BY city_count DESC