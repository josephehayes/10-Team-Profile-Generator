import Intern from '../lib/Intern';
const intern = new Intern('Joey', '8675309', 'jhtest@gmail.com', 'UofU');

test('get constructor values for intern object', () => {
    expect(intern.name).toBe('Joey ');
    expect(intern.id).toBe('8675309');
    expect(intern.email).toBe('jhtest@gmail.com');
    expect(intern.school).toBe('UofU');
});

test('get the name from getName() method', () => {
    expect(intern.getName()).toBe('Joey');
});

test('get the ID from getID() method', () => {
    expect(intern.getId()).toBe('8675309');
});

test('get the Email from getEmail() method', () => {
    expect(intern.getEmail()).toBe('jhtest@gmail.com');
});

test('get the School from getSchool() method', () => {
    expect(intern.getSchool()).toBe('UofU');
});

test('get the ID from getRole() method', () => {
    expect(intern.getRole()).toBe('Intern');
});