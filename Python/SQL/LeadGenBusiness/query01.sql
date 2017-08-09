SELECT SUM(billing.amount) AS total_revenue FROM billing
WHERE MONTH(charged_datetime) = 03 AND YEAR(charged_datetime) = 2012 