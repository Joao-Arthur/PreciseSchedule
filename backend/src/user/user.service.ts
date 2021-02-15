import { Injectable } from '@nestjs/common';
import { CreateUserDTO, UserDB } from './user.dto';
import Authorization from '../Core/Authorization';

@Injectable()
export class UserService {
    create({ name, username, password, email, birthday }: CreateUserDTO) {
        //TODO: validations
        const [hash, salt] = Authorization.generatePassword(password);

        console.log(
            new UserDB(
                0,
                name,
                username,
                email,
                birthday,
                hash,
                salt,
                Authorization.getIterations()
            )
        );
    }
}
