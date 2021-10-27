SELECT ins.name, ins.datetime
FROM ANIMAL_INS as ins
LEFT JOIN ANIMAL_OUTS as outs
ON ins.animal_id = outs.animal_id
WHERE outs.animal_id IS NULL
ORDER BY datetime
limit 3