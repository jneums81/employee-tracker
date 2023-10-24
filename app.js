const inquirer = require('inquirer');
const {
  getAllDepartments,
  getAllRoles,
  getAllEmployees,
  addDepartment,
  addRole,
  addEmployee,
  updateEmployeeRole,
} = require('./queries');

async function main() {
  console.log('Welcome to the Company Management System!');

  while (true) {
    const userChoice = await inquirer.prompt({
      type: 'list',
      name: 'action',
      message: 'What would you like to do?',
      choices: [
        'View all departments',
        'View all roles',
        'View all employees',
        'Add a department',
        'Add a role',
        'Add an employee',
        'Update an employee role',
        'Exit',
      ],
    });

    switch (userChoice.action) {
      case 'View all departments':
        // Implement code to view all departments
        break;
      case 'View all roles':
        // Implement code to view all roles
        break;
      case 'View all employees':
        // Implement code to view all employees
        break;
      case 'Add a department':
        // Implement code to add a department
        break;
      case 'Add a role':
        // Implement code to add a role
        break;
      case 'Add an employee':
        // Implement code to add an employee
        break;
      case 'Update an employee role':
        // Implement code to update an employee role
        break;
      case 'Exit':
        console.log('Goodbye!');
        process.exit(0);
        break;
    }
  }
}

main();
