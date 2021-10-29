SELECT animal_id, name,
CASE
  WHEN sex_upon_intake LIKE 'Neutered%' OR sex_upon_intake LIKE 'Spayed%' THEN 'O'
  ELSE 'X'
END as '중성화'
FROM ANIMAL_INS
ORDER BY animal_id