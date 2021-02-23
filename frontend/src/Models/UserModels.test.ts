import UserBuilder from './UserBuilder';

test('Should generate a 256 characters long salt', () => {
    expect(new UserBuilder()).toBe(undefined);
});
