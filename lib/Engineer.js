const Employee = require('../lib/Employee');

class Engineer extends Employee {
    constructor(employee, github) {
        super(employee);

        this.github = github;
        this.role = 'Engineer';
    }

    getGithub() {
        if (!this.github) {
            return false;
        }
        return this.github;
    }

    getRole() {
        return this.role;
    }
}

module.exports = Engineer;