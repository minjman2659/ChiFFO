SELECT outs.animal_id, outs.animal_type, outs.name
FROM ANIMAL_OUTS as outs
LEFT JOIN ANIMAL_INS as ins
ON outs.animal_id = ins.animal_id
WHERE outs.sex_upon_outcome != ins.sex_upon_intake
ORDER BY outs.animal_id