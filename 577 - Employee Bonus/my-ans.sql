SELECT e.name, b.bonus
FROM EMPLOYEE e
LEFT JOIN Bonus b on e.empId = b.empId
WHERE b.bonus < 1000 OR b.bonus is NULL
;