SELECT cities.name, cities.population, cities.country_code
FROM cities
HAVING cities.population >  500000 AND cities.country_code = "MEX"
ORDER BY cities.population DESC