import Cryptography from '../../Core/Cryptography';

export interface User {
    name?: string;
    email?: string;
    birthday?: Date;
    username?: string;
    password?: string;
}
export default class UserBuilder implements User {
    name?: string;
    email?: string;
    birthday?: Date;
    username?: string;
    password?: string;

    setName(name: string) {
        this.name = name;
        return this;
    }

    setEmail(email: string) {
        this.email = email;
        return this;
    }

    setBirthday(birthday: Date) {
        this.birthday = birthday;
        return this;
    }

    setUsername(username: string) {
        this.username = username;
        return this;
    }

    setPassword(password: string) {
        this.password = Cryptography.encryptRSA(password);
        return this;
    }
}
