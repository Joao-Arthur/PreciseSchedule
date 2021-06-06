import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import Authorization from '../Core/Authorization';
import {
    CreateUserDTO,
    LoginUserDTO,
    UserInfoBuilder,
    UserDTO
} from './user.dto';
import { UserBuilder } from './user.builder';
import { User } from './user.entity';

@Injectable()
export class UserService {
    constructor(
        @InjectRepository(User)
        private usersRepository: Repository<User>
    ) {}

    create({
        firstName,
        lastName,
        email,
        birthdate,
        language,
        username,
        password
    }: CreateUserDTO): UserDTO {
        const [hash, salt] = Authorization.generatePassword(password);

        this.usersRepository.save(
            new UserBuilder()
                .setActive(true)
                .setFirstName(firstName)
                .setLastName(lastName)
                .setEmail(email)
                .setBirthdate(birthdate)
                .setLanguage(language)
                .setUsername(username)
                .setHash(hash)
                .setSalt(salt)
                .setIterations(Authorization.getIterations())
                .build()
        );

        return new UserInfoBuilder().setToken('MOCK TOKEN').build();
    }

    login({ username, password }: LoginUserDTO): UserDTO {
        const decryptedPassword = Authorization.decryptRSA(password);
        console.log(decryptedPassword);

        return new UserInfoBuilder().setToken('MOCK TOKEN').build();
    }

    findAll(): Promise<User[]> {
        return this.usersRepository.find();
    }

    findOne(id: string): Promise<User> {
        return this.usersRepository.findOne(id);
    }
}
