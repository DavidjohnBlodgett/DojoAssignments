SELECT countries.name AS name, countries.surface_area AS surface_area, countries.population AS population
FROM countries
WHERE surface_area < 501 AND population > 100000