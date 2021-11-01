-- hour 변수를 -1로 선언해 22까지 +1씩 증가 시킴
-- DATETIME의 hour과 hour변수의 값이 동일할 때의 행 카운트
-- 어렵다..

SET @hour := -1;
SELECT (@hour := @hour +1) as HOUR,
    (SELECT COUNT(*)
     FROM ANIMAL_OUTS
     WHERE HOUR(datetime) = @hour) AS COUNT
FROM ANIMAL_OUTS
WHERE @hour < 23