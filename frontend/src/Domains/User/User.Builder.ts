import Cryptography from '../../Core/Cryptography';

export interface User {
    firstName?: string;
    lastName?: string;
    birthdate?: Date;
    username?: string;
    password?: string;
}
export default class UserBuilder implements User {
    firstName?: string;
    lastName?: string;
    email?: string;
    birthdate?: Date;
    username?: string;
    password?: string;

    setFirstName(name: string) {
        this.firstName = name;
        return this;
    }

    setLastName(name: string) {
        this.lastName = name;
        return this;
    }

    setEmail(email: string) {
        this.email = email;
        return this;
    }

    setBirthdate(birthdate: Date) {
        this.birthdate = birthdate;
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
        return {
            firstName: this.firstName,
            lastName: this.lastName,
            email: this.email,
            birthdate: this.birthdate,
            username: this.username,
            password: this.password,
            language: 'pt-BR'
        };
    }
}
