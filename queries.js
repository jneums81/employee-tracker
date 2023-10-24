const db = require('./db'); // Import your MySQL database connection

// Function to retrieve all departments
function getAllDepartments() {
  return db.promise().query('SELECT * FROM department');
}

// Function to retrieve all roles
function getAllRoles() {
  return db.promise().query('SELECT * FROM role');
}

// Function to retrieve all employees
function getAllEmployees() {
  return db.promise().query('SELECT * FROM employee');
}

// Function to add a new department
function addDepartment(name) {
  return db.promise().query('INSERT INTO department (name) VALUES (?)', [name]);
}

// Function to add a new role
function addRole(title, salary, departmentId) {
  return db.promise().query('INSERT INTO role (title, salary, department_id) VALUES (?, ?, ?)', [title, salary, departmentId]);
}

// Function to add a new employee
function addEmployee(firstName, lastName, roleId, managerId) {
  return db.promise().query('INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES (?, ?, ?, ?)', [firstName, lastName, roleId, managerId]);
}

// Function to update an employee's role
function updateEmployeeRole(employeeId, roleId) {
  return db.promise().query('UPDATE employee SET role_id = ? WHERE id = ?', [roleId, employeeId]);
}

module.exports = {
  getAllDepartments,
  getAllRoles,
  getAllEmployees,
  addDepartment,
  addRole,
  addEmployee,
  updateEmployeeRole
};
