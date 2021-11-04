SELECT outs.animal_id, outs.name
FROM ANIMAL_OUTS AS outs
INNER JOIN ANIMAL_INS AS ins
ON outs.animal_id = ins.animal_id
ORDER BY outs.datetime - ins.datetime DESC
LIMIT 2