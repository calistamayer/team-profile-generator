const { test, expect } = require('@jest/globals');
const Manager = require('../lib/Manager');
const Employee = require('../lib/Employee');

jest.mock('../lib/Employee.js');

test('creates a manager object', () => {
    const employee = new Employee;

    expect(employee.name).toBe('John Doe');
    expect(employee.id).toBe(101);
    expect(employee.email).toBe('john@aol.com');
});