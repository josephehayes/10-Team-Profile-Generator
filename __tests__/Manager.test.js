import Manager from '../lib/Manager';
const manager = new Manager('Joey', '8675309', 'jhtest@gmail.com', '123');

test('get constructor values for manager object', () => {
    expect(manager.name).toBe('Joey');
    expect(manager.id).toBe('8675309');
    expect(manager.email).toBe('jhtest@gmail.com');
    expect(manager.officeNumber).toBe('123')
});

test('get the name from getName() method', () => {
    expect(manager.getName()).toBe('Joey');
});

test('get the ID from getID() method', () => {
    expect(manager.getId()).toBe('8675309');
});

test('get the Email from getEmail() method', () => {
    expect(manager.getEmail()).toBe('jhtest@gmail.com');
});

test('get the Office Number from getofficeNumber() method', () => {
    expect(manager.getOfficeNumber()).toBe('123');
});

test('get the ID from getRole() method', () => {
    expect(manager.getRole()).toBe('Manager');
});