const Employee = require('../lib/Employee');

class Intern extends Employee {
    constructor(employee, school) {
        // call parent constructor here
        super(employee);

        this.school = school;
        this.role = 'Intern';
    }

    getSchool() {
        if (!this.school) {
            return false;
        }
        return this.school;
    }

    getRole() {
        return this.role;
    }
}

module.exports = Intern;