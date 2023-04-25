const Engineer = require('../lib/Engineer');
const engineer = new Engineer('Joey', '8675309', 'jhtest@gmail.com', 'josephehayes');

test('get constructor values for Engineer object', () => {
    expect(engineer.name).toBe('Joey');
    expect(engineer.id).toBe('8675309');
    expect(engineer.email).toBe('jhtest@gmail.com');
    expect(engineer.github).toBe('josephehayes')
});

test('get the name from getName() method', () => {
    expect(engineer.getName()).toBe('Joey');
});

test('get the ID from getID() method', () => {
    expect(engineer.getId()).toBe('8675309');
});

test('get the Email from getEmail() method', () => {
    expect(engineer.getEmail()).toBe('jhtest@gmail.com');
});

test('get the GitHub ID from getGithub() method', () => {
    expect(engineer.getGithub()).toBe('josephehayes');
});

test('get the ID from getRole() method', () => {
    expect(engineer.getRole()).toBe('Engineer');
});