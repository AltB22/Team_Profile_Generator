const Employee = require('./lib/Employee');

test('creates a new employee object', () => {
    const employee = new Employee();

    expect(typeof(employee)).toBe('object');
});

test('gets employee name', () => {
    const employee = new Employee('Employee1');

    expect(employee.getName()).toBe('Employee1');
});

