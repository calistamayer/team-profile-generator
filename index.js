const inquirer = require('inquirer');

inquirer.prompt([
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
]);