SELECT HOUR(datetime) AS 'HOUR', count(animal_id) AS 'COUNT'
FROM ANIMAL_OUTS
WHERE HOUR(datetime) >= 9 AND HOUR(datetime) < 20
GROUP BY HOUR(datetime)
ORDER BY HOUR(datetime)