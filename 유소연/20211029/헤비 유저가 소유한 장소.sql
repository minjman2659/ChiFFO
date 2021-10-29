SELECT id, name, host_id
FROM PLACES
WHERE host_id IN (
  SELECT host_id
  FROM PLACES
  GROUP BY host_id
  HAVING count(host_id) > 1
)