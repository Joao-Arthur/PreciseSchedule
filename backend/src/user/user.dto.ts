export class CreateUserDTO {
    firstName: string;
    lastName: string;
    email: string;
    birthdate: Date;
    language: string;
    username: string;
    password: string;
}

export class LoginUserDTO {
    username: string;
    password: string;
}

export class ValidateUserDTO {
    token: string;
}

export class UserInfoBuilder {
    token: string;

    setToken(token: string) {
        this.token = token;
        return this;
    }

    build() {
        return new UserDTO(this);
    }
}

export class UserDTO {
    private token: string;

    constructor(builder: UserInfoBuilder) {
        this.token = builder.token;
    }
}
