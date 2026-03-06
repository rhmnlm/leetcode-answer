-- Write your PostgreSQL query statement below
WITH ranked_salary AS (
    SELECT DISTINCT salary
    FROM Employee
)
SELECT (
    SELECT salary 
    FROM ranked_salary 
    ORDER BY salary DESC 
    OFFSET 1 LIMIT 1
) AS "SecondHighestSalary";
