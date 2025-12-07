-- # Write your MySQL query statement below
SELECT e.name as Employee
FROM Employee as e
JOIN Employee as e2 on e.managerId = e2.id AND e.salary > e2.salary
;