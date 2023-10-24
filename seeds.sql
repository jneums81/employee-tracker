-- Insert sample departments
INSERT INTO department (name) VALUES
  ('Sales'),
  ('Marketing'),
  ('Finance'),
  ('Engineering');

-- Insert sample roles
INSERT INTO role (title, salary, department_id) VALUES
  ('Sales Manager', 80000.00, 1),
  ('Sales Representative', 50000.00, 1),
  ('Marketing Manager', 75000.00, 2),
  ('Marketing Coordinator', 45000.00, 2),
  ('Financial Analyst', 70000.00, 3),
  ('Accountant', 55000.00, 3),
  ('Software Engineer', 90000.00, 4),
  ('Quality Assurance Engineer', 75000.00, 4);

-- Insert sample employees
INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES
  ('John', 'Doe', 1, NULL),
  ('Jane', 'Smith', 2, 1),
  ('Bob', 'Johnson', 4, 1),
  ('Alice', 'Brown', 3, 2),
  ('Ella', 'Davis', 5, 3);
