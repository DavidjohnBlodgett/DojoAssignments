SELECT sites.domain_name, clients.client_id FROM clients
JOIN sites ON sites.client_id = clients.client_id
WHERE clients.client_id = 10