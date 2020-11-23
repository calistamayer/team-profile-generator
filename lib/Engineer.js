const Employee = require('../lib/Employee');

class Engineer extends Employee {
    constructor(employee, github) {
        super(employee);

        this.github = github;
    }
}

module.exports = Engineer;