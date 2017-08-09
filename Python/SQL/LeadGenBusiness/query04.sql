SELECT clients.client_id, COUNT(sites.site_id), MONTHNAME(sites.created_datetime) AS month_created, YEAR(sites.created_datetime) FROM clients
JOIN sites ON sites.client_id = clients.client_id
WHERE clients.client_id = 1
GROUP BY MONTH(sites.created_datetime), YEAR(sites.created_datetime)
