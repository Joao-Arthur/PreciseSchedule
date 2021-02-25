import UserBuilder from './User.Builder';

describe('UserBuilder', () => {
    it('Should generate an empty object', () => {
        expect(new UserBuilder()).toEqual({});
    });

    it('Should generate an object with all the setted properties', () => {
        const birthday = new Date(1942, 5, 18);
        const email = 'paul_on_the_run@gmail.com';
        const name = 'Paul McCartney';
        const username = 'paul.wings';
        const password = 'linda123';

        const user = new UserBuilder()
            .setBirthday(new Date(birthday))
            .setEmail(email)
            .setName(name)
            .setUsername(username)
            .setPassword(password);

        expect(user.birthday).toStrictEqual(birthday);
        expect(user.email).toBe(email);
        expect(user.name).toBe(name);
        expect(user.username).toBe(username);
        expect(user.password).not.toBe(undefined);
    });
});
