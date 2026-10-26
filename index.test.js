const { add, greet } = require('./index');

test('adds two numbers correctly', () => {
    expect(add(2, 3)).toBe(5);
});

test('greets a user correctly', () => {
    expect(greet('Student')).toBe('Hello, Student!');
});