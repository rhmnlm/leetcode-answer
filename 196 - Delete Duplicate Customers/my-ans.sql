-- # Write your MySQL query statement below
DELETE p
FROM Person as p WHERE p.id in
(SELECT id FROM
    (
        SELECT p1.id FROM Person as p1 JOIN Person as p2 on p1.email = p2.email AND p1.id > p2.id
    ) as j
)