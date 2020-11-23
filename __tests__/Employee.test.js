const { test, expect } = require('@jest/globals');
const Employee = require('../lib/Employee');

test('creates an employee object', () => {
    const employee = new Employee('Calista', 56, 'calista.a.mayer@gmail.com');

    expect(employee.name).toBe('Calista');
    expect(employee.id).toBe(56);
    expect(employee.email).toBe('calista.a.mayer@gmail.com');
});

test('getName() method returns employee name', () => {
    const employee = new Employee('Jane Doe', 102, 'jane@aol.com');

    const name = employee.getName();

    expect(name).toBe('Jane Doe');
});

test('getId() method returns employee id', () => {
    const employee = new Employee('Jane Doe', 102, 'jane@aol.com');

    const id = employee.getId();

    expect(id).toBe(102);
});

test('getEmail() method returns employee email', () => {
    const employee = new Employee('Jane Doe', 102, 'jane@aol.com');

    const email = employee.getEmail();

    expect(email).toBe('jane@aol.com');
});

test("getRole() method returns 'Employee'", () => {
    const employee = new Employee('Jane Doe', 102, 'jane@aol.com');

    const role = employee.getRole();

    expect(role).toBe('Employee');
});