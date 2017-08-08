SELECT COUNT(countries.name) AS country_count, countries.region FROM countries
GROUP BY countries.region
ORDER BY country_count DESC
