const Intern = require('../lib/Intern');
const Employee = require('../lib/Employee');
const { test, expect } = require('@jest/globals');

jest.mock('../lib/Employee.js');

test('creates new intern object', () => {
    const employee = new Employee;
    const intern = new Intern(employee, 'AHS');

    expect(intern.name).toBe('John Doe');
    expect(intern.school).toBe('AHS');
});

test('getSchool() and getRole() methods return appropriately', () => {
    const employee = new Employee;
    const intern = new Intern(employee, 'AHS');

    const school = intern.getSchool();
    const role = intern.getRole();

    expect(school).toBe('AHS');
    expect(role).toBe('Intern');
});