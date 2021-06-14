import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
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

    async login({ username, password }: LoginUserDTO): Promise<UserDTO> {
        try {
            const user = await this.usersRepository.findOne({
                username
            });

            if (!user) throw new Error();

            if (user.hash !== Authorization.encryptRSA(password + user.hash))
                throw new Error();

            return new UserInfoBuilder().setToken('MOCK TOKEN').build();
        } catch {
            throw new HttpException('User not found!', HttpStatus.UNAUTHORIZED);
        }
    }

    findAll(): Promise<User[]> {
        return this.usersRepository.find();
    }

    findOne(id: string): Promise<User> {
        return this.usersRepository.findOne(id);
    }
}
