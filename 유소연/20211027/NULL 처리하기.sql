SELECT animal_type, IFNULL(name, 'No name') as 'name', sex_upon_intake
FROM ANIMAL_INS
ORDER BY animal_id