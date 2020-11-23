const Employee = require('../lib/Employee');

class Manager extends Employee {
    constructor(employee, office) {
        // call parent constructor here:
        super(employee);
        
        this.office = office;
    }

    getRole() {
        return 'Manager';
    }
}

module.exports = Manager;