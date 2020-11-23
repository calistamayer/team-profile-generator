class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
        this.role = 'Employee';
    }

    getName() {
        if (!this.name) {
            return false;
        }
        return this.name;
    }

    getId() {
        if (!this.id) {
            return false;
        }
        return this.id;
    }

    getEmail() {
        if (!this.email) {
            return false;
        }
        return this.email;
    }

    getRole() {
        return this.role;
    }
}

module.exports = Employee;