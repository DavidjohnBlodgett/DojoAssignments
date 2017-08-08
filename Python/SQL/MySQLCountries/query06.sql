SELECT countries.name AS country_name, countries.government_form AS government, countries.capital, cities.population, cities.name AS city_name, countries.life_expectancy AS life_expectancy
FROM countries
JOIN cities
ON countries.id = cities.country_id AND countries.capital > 200
WHERE government_form = 'Constitutional Monarchy' AND life_expectancy > 75
GROUP BY countries.id
