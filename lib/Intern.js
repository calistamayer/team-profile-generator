const Employee = require('../lib/Employee');

class Intern extends Employee {
    constructor(employee, school) {
        // call parent constructor here
        super(employee);

        this.school = school;
    }
}

module.exports = Intern;