import { Injectable } from '@nestjs/common';
import {
    CreateUserDTO,
    LoginUserDTO,
    UserBuilder,
    UserInfoBuilder,
    User
} from './user.dto';
import Authorization from '../Core/Authorization';

@Injectable()
export class UserService {
    create({ name, username, password, email, birthday }: CreateUserDTO): User {
        //TODO: validations
        const [hash, salt] = Authorization.generatePassword(password);

        console.log(
            new UserBuilder()
                .setId(0)
                .setName(name)
                .setUsername(username)
                .setEmail(email)
                .setBirthday(birthday)
                .setHash(hash)
                .setSalt(salt)
                .setIterations(Authorization.getIterations())
        );

        return new UserInfoBuilder().setToken('MOCK TOKEN').build();
    }

    login({ username, password }: LoginUserDTO): User {
        const decryptedPassword = Authorization.decryptRSA(password);
        console.log(decryptedPassword);

        return new UserInfoBuilder().setToken('MOCK TOKEN').build();
    }
}
