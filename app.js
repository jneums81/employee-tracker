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

function main() {
  console.log('Welcome to the Company Management System!');

  inquirer
    .prompt({
      type: 'list',
      name: 'action',
      message: 'What wouldn you like to do?',
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
    })
    .then(function (userChoice) {
      switch (userChoice.action) {
        case 'View all departments':
          getAllDepartments()
            .then(function (departments) {
              console.table(departments[0]);
              askUserForNextAction();
            })
            .catch(function (error) {
              console.error('Error fetching departments:', error);
              askUserForNextAction();
            });
          break;

        case 'View all roles':
          getAllRoles()
            .then(function (roles) {
              console.table(roles[0]);
              askUserForNextAction();
            })
            .catch(function (error) {
              console.error('Error fetching roles:', error);
              askUserForNextAction();
            });
          break;

        case 'View all employees':
          getAllEmployees()
            .then(function (employees) {
              console.table(employees[0]);
              askUserForNextAction();
            })
            .catch(function (error) {
              console.error('Error fetching employees:', error);
              askUserForNextAction();
            });
          break;

        case 'Add a department':
          inquirer
            .prompt({
              type: 'input',
              name: 'name',
              message: 'Enter the name of the department:',
            })
            .then(function (departmentName) {
              addDepartment(departmentName.name)
                .then(function () {
                  console.log('Department added successfully.');
                  askUserForNextAction();
                })
                .catch(function (error) {
                  console.error('Error adding a department:', error);
                  askUserForNextAction();
                });
            });
          break;

        case 'Add a role':
          inquirer
            .prompt([
              {
                type: 'input',
                name: 'title',
                message: 'Enter the title of the role:',
              },
              {
                type: 'number',
                name: 'salary',
                message: 'Enter the salary for the role:',
              },
              {
                type: 'number',
                name: 'departmentId',
                message: 'Enter the department ID for the role:',
              },
            ])
            .then(function (roleData) {
              addRole(roleData.title, roleData.salary, roleData.departmentId)
                .then(function () {
                  console.log('Role added successfully.');
                  askUserForNextAction();
                })
                .catch(function (error) {
                  console.error('Error adding a role:', error);
                  askUserForNextAction();
                });
            });
          break;

        case 'Add an employee':
          inquirer
            .prompt([
              {
                type: 'input',
                name: 'firstName',
                message: "Enter the employee's first name:",
              },
              {
                type: 'input',
                name: 'lastName',
                message: "Enter the employee's last name:",
              },
              {
                type: 'number',
                name: 'roleId',
                message: 'Enter the role ID for the employee:',
              },
              {
                type: 'number',
                name: 'managerId',
                message: "Enter the manager's employee ID (or leave blank if none):",
              },
            ])
            .then(function (employeeData) {
              addEmployee(
                employeeData.firstName,
                employeeData.lastName,
                employeeData.roleId,
                employeeData.managerId || null
              )
                .then(function () {
                  console.log('Employee added successfully.');
                  askUserForNextAction();
                })
                .catch(function (error) {
                  console.error('Error adding an employee:', error);
                  askUserForNextAction();
                });
            });
          break;

        case 'Update an employee role':
          inquirer
            .prompt({
              type: 'number',
              name: 'employeeId',
              message: 'Enter the ID of the employee to update:',
            })
            .then(function (employeeToUpdate) {
              inquirer
                .prompt({
                  type: 'number',
                  name: 'roleId',
                  message: 'Enter the new role ID for the employee:',
                })
                .then(function (newRoleId) {
                  updateEmployeeRole(employeeToUpdate.employeeId, newRoleId.roleId)
                    .then(function () {
                      console.log('Employee role updated successfully.');
                      askUserForNextAction();
                    })
                    .catch(function (error) {
                      console.error('Error updating an employee role:', error);
                      askUserForNextAction();
                    });
                });
            });
          break;

        case 'Exit':
          console.log('Goodbye!');
          process.exit(0);
          break;
      }
    });

  function askUserForNextAction() {
    inquirer
      .prompt({
        type: 'confirm',
        name: 'continue',
        message: 'Do you want to perform another action?',
      })
      .then(function (answer) {
        if (answer.continue) {
          main();
        } else {
          console.log('Goodbye!');
          process.exit(0);
        }
      });
  }
}

main();
