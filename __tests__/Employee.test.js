import Employee from '../lib/Employee';
const employee = new Employee('Joey', '8675309', 'jhtest@gmail.com');

test('get constructor values for employee object', () => {
    expect(employee.name).toBe('Joey');
    expect(employee.id).toBe('8675309');
    expect(employee.email).toBe('jhtest@gmail.com');
});

test('get name from getName() method', () => {
    expect(employee.getName()).toBe('Joey');
});

test('get ID from getID() method', () => {
    expect(employee.getId()).toBe('8675309');
});

test('get email from getEmail() method', () => {
    expect(employee.getEmail()).toBe('jhtest@gmail.com');
});

test('get ID from getRole() method', () => {
    expect(employee.getRole()).toBe('Employee');
});