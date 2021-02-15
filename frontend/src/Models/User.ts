import Cryptography from '../Core/Cryptography';

export class UserSignUp {
    constructor(
        private name: string,
        private email: string,
        private birthday: Date,
        private username: string,
        private password: string
    ) {}

    toSDK() {
        return {
            name: this.name,
            email: this.email,
            birthday: this.birthday,
            username: this.username,
            password: Cryptography.encryptRSA(this.password)
        };
    }
}

export class UserSignIn {
    constructor(private username: string, private password: string) {}

    toSDK() {
        return {
            username: this.username,
            password: Cryptography.encryptRSA(this.password)
        };
    }
}
