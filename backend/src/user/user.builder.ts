import { User } from './user.entity';

export class UserBuilder {
    active: boolean;
    firstName: string;
    lastName: string;
    email: string;
    birthdate: Date;
    language: string;
    username: string;
    hash: string;
    salt: string;
    iterations: number;

    setActive(active: boolean) {
        this.active = active;
        return this;
    }

    setFirstName(firstName: string) {
        this.firstName = firstName;
        return this;
    }

    setLastName(lastName: string) {
        this.lastName = lastName;
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

    setLanguage(language: string) {
        this.language = language;
        return this;
    }

    setUsername(username: string) {
        this.username = username;
        return this;
    }

    setHash(hash: string) {
        this.hash = hash;
        return this;
    }

    setSalt(salt: string) {
        this.salt = salt;
        return this;
    }

    setIterations(iterations: number) {
        this.iterations = iterations;
        return this;
    }

    build() {
        const user = new User();
        user.active = this.active;
        user.firstName = this.firstName;
        user.lastName = this.lastName;
        user.email = this.email;
        user.birthdate = this.birthdate;
        user.language = this.language;
        user.username = this.username;
        user.hash = this.hash;
        user.salt = this.salt;
        user.iterations = this.iterations;
        return user;
    }
}
