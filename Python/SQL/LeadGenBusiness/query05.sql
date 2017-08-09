SELECT sites.domain_name, COUNT(leads.leads_id) AS number_of_leads, leads.registered_datetime FROM leads
JOIN sites ON leads.site_id = sites.site_id
WHERE leads.registered_datetime BETWEEN DATE('January 1st 2011') AND DATE('February 15th 2011')

#GROUP BY MONTH(leads.registered_datetime), YEAR(leads.registered_datetime)