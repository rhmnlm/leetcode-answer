-- # Write your MySQL query statement below
SELECT w.id
FROM Weather as w
JOIN Weather as w2 
    on CAST(w.recordDate AS DATE) = DATE_ADD(CAST(w2.recordDate AS DATE), INTERVAL 1 DAY)
    AND w.temperature > w2.temperature
;
