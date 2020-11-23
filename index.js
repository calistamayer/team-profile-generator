const inquirer = require('inquirer');
const Manager = require('./lib/Manager');

// initialize empty array to store all employees
const employeeArr = [];

// array of initial prompts (team manager)
const managerPrompts = [
    {
        type: 'input',
        name: 'name',
        message: "Enter team manager's name"
    },
    {
        type: 'input',
        name: 'id',
        message: "Enter team manager's employee ID"
    },
    {
        type: 'input',
        name: 'email',
        message: "Enter team manager's email address"
    },
    {
        type: 'input',
        name: 'office',
        message: "Enter team manager's office number"
    }
];

// function to initialize program
const init = () => {
    // prompt user with managerPrompts
    inquirer.prompt(managerPrompts).then((managerInfo) => {
        const manager = new Manager;
        manager.name = managerInfo.name;
        manager.id = managerInfo.id;
        manager.email = managerInfo.email;
        manager.office = managerInfo.office;
    });
}

init();