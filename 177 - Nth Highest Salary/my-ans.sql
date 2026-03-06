CREATE OR REPLACE FUNCTION NthHighestSalary(N INT) RETURNS TABLE (Salary INT) AS $$
BEGIN
  IF N <= 0 THEN
    RETURN;
  END IF;
  RETURN QUERY (
    -- Write your PostgreSQL query statement below.
    WITH ranked_salary AS (
        SELECT DISTINCT employee.salary
        FROM employee
    )
    SELECT ranked_salary.salary
    FROM ranked_salary
    ORDER BY ranked_salary.salary DESC
    OFFSET (NthHighestSalary.N - 1) LIMIT 1
  );
END;
$$ LANGUAGE plpgsql;
