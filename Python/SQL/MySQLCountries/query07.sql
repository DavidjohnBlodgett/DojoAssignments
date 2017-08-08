# Country Name, City Name, District and Population
SELECT countries.name AS country_name, cities.name AS city_name, cities.district, cities.population FROM countries
JOIN cities ON countries.id = cities.country_id WHERE countries.name = 'Argentina' AND district = 'Buenos Aires' AND cities.population > 500000
