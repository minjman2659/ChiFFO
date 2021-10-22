SELECT ins.animal_id, ins.name
FROM ANIMAL_INS as ins
LEFT JOIN ANIMAL_OUTS as outs
ON ins.animal_id = outs.animal_id
WHERE ins.datetime > outs.datetime
ORDER BY ins.datetime