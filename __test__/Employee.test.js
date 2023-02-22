const Employee = require('../lib/Employee');

test('creates a new employee object', () => {
    const employee = new Employee();

    expect(typeof(employee)).toBe('object');
});

