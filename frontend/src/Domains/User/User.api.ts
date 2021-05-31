import Fetch from '../../Core/Fetch';
import { User } from './User.Builder';

type userInfo = {
    token: string;
};

function signIn(user: User) {
    return Promise.resolve({ token: 'mock token' });
    //return Fetch.post<userInfo>('user/login', user);
}

function signUp(user: User) {
    return Fetch.post<userInfo>('user', user);
}

function forgotPassword(user: User) {
    return Fetch.post('user/forgotpassword', user);
}

function newPassword(user: User) {
    return Fetch.patch('user/password', user);
}

const UserApi = {
    signIn,
    signUp,
    forgotPassword,
    newPassword
};

export default UserApi;
