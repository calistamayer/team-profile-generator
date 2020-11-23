const Engineer = require('../lib/Engineer');
const Employee = require('../lib/Employee');
const { test, expect } = require('@jest/globals');

jest.mock('../lib/Employee.js');

test('creates new engineer object', () => {
    const employee = new Employee;
    const engineer = new Engineer(employee, 'ghub');

    expect(engineer.name).toBe('John Doe');
    expect(engineer.github).toBe('ghub');
});