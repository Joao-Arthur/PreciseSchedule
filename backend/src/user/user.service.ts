import { Injectable } from '@nestjs/common';
import { CreateUserDTO } from './user.dto';

@Injectable()
export class UserService {
    create(user: CreateUserDTO): string {
        console.log(user);

        return 'user created!';
    }
}
