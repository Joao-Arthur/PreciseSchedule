export class CreateUserDTO {
    name: string;
    email: string;
    birthday: Date;
    username: string;
    password: string;
}

export class LoginUserDTO {
    username: string;
    password: string;
}

export class UserBuilder {
    id: number;
    name: string;
    username: string;
    email: string;
    birthday: Date;
    hash: string;
    salt: string;
    iterations: number;

    setId(id: number) {
        this.id = id;
        return this;
    }

    setName(name: string) {
        this.name = name;
        return this;
    }

    setUsername(username: string) {
        this.username = username;
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
}

export class UserInfoBuilder {
    token: string;

    setToken(token: string) {
        this.token = token;
        return this;
    }

    build() {
        return new User(this);
    }
}

export class User {
    private token: string;

    constructor(builder: UserInfoBuilder) {
        this.token = builder.token;
    }
}
