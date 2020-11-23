const inquirer = require('inquirer');

inquirer.prompt([
    {
        type: 'input',
        name: 'manager-name',
        message: "What is your team manager's name?"
    }
]);