SELECT countries.name AS name, languages.language AS language, languages.percentage AS percentage
FROM countries
JOIN languages 
ON countries.id = languages.country_id 
WHERE percentage > 89
ORDER BY languages.percentage DESC