-- # Write your MySQL query statement below
SELECT c.name as Customers
FROM Customers as c
LEFT JOIN Orders as o on o.customerId = c.id
WHERE o.id is NULL
; 