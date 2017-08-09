SELECT clients.client_id, SUM(billing.amount) AS total_revenue FROM billing
JOIN clients ON billing.client_id = clients.client_id
WHERE clients.client_id = 2
