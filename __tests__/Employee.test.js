const { test, expect } = require('@jest/globals');
const Employee = require('../lib/Employee');

test('creates an employee object', () => {
    const employee = new Employee('Calista', 56, 'calista.a.mayer@gmail.com');

    expect(employee.name).toBe('Calista');
    expect(employee.id).toBe(56);
    expect(employee.email).toBe('calista.a.mayer@gmail.com');
});