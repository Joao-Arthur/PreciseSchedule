export class CreateUserDTO {
    name: string;
    email: string;
    birthday: Date;
    username: string;
    password: string;
}

export class UserDB {
    constructor(
        public id: number,
        public name: string,
        public username: string,
        public email: string,
        public birthday: Date,
        public hash: string,
        public salt: string,
        public iterations: number
    ) {}
}
