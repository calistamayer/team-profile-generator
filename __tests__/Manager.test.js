const { test, expect } = require('@jest/globals');
const Manager = require('../lib/Manager');
const Employee = require('../lib/Employee');

jest.mock('../lib/Employee.js');

test('creates new manager object', () => {
    const employee = new Employee;
    const manager = new Manager(employee, 1);

    expect(manager.name).toBe('John Doe');
    expect(manager.id).toBe(101);
    expect(manager.email).toBe('john@aol.com');
    expect(manager.office).toBe(1);
});

test("getRole() method returns 'Manager'", () => {
    const employee = new Employee;
    const manager = new Manager(employee, 1);

    const role = manager.getRole();

    expect(role).toBe('Manager');
})