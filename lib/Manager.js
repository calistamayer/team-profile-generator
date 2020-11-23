const Employee = require('../lib/Employee');

class Manager extends Employee {
    constructor(employee, office) {
        // call parent constructor here:
        super(employee);
        
        this.office = office;
        this.role = 'Manager';
    }

    getRole() {
        return this.role;
    }
}

module.exports = Manager;