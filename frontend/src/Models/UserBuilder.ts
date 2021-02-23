import Cryptography from '../Core/Cryptography';

export default class UserBuilder {
    private name?: string;
    private email?: string;
    private birthday?: Date;
    private username?: string;
    private password?: string;

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

    build() {
        return this;
    }
}
