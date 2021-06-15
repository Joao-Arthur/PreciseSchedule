import Authorization from '../Core/Authorization';
import { User } from './user.entity';

type user = {
    firstName: string;
    lastName: string;
    email: string;
    birthdate: Date;
    language: string;
    username: string;
    hash: string;
    salt: string;
};

export function UserBuilder({
    firstName,
    lastName,
    email,
    birthdate,
    language,
    username,
    hash,
    salt
}: user) {
    const user = new User();
    user.active = true;
    user.firstName = firstName;
    user.lastName = lastName;
    user.email = email;
    user.birthdate = birthdate;
    user.language = language;
    user.username = username;
    user.hash = hash;
    user.salt = salt;
    user.iterations = Authorization.getIterations();
    return user;
}
