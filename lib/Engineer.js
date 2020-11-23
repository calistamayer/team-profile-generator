const Employee = require('../lib/Employee');

class Engineer extends Employee {
    constructor(employee, github) {
        super(employee);

        this.github = github;
    }

    getGithub() {
        if (!this.github) {
            return false;
        }
        return this.github;
    }

    getRole() {
        return 'Engineer';
    }
}

module.exports = Engineer;