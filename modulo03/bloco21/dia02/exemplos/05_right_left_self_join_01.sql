USE hr;

SELECT * FROM departments;
SELECT * FROM employees;

-- 01. Queremos saber o Nome das pessoas colaboradoras e suas respectivas
	-- gerências (manager) cujos departamentos (department) são diferentes.
    
SELECT
	CONCAT(e.first_name, ' ', e.last_name) AS colaborador,
    CONCAT(m.first_name, ' ', m.last_name) AS gerente
    FROM employees AS e
    INNER JOIN employees AS m
		ON e.manager_id = m.employee_id
	WHERE e.department_id <> m.department_id
    ORDER BY colaborador ASC;

-- 02. Exiba o Nome e a quantidade de pessoas lideradas de cada pessoa gerente.
SELECT
	CONCAT(m.first_name, ' ', m.last_name) AS gerente,
    COUNT(*) AS total
	FROM employees AS e
    INNER JOIN employees AS m
		ON e.manager_id = m.employee_id
	GROUP BY m.employee_id;
