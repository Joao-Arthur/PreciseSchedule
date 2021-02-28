import produce from 'immer';
import { User } from './User.Builder';

export enum Types {
    USER_SIGN_IN = 'USER_SIGN_IN',
    USER_SIGN_IN_SUCCESS = 'USER_SIGN_IN_SUCCESS',
    USER_SIGN_IN_FAILURE = 'USER_SIGN_IN_FAILURE',
    USER_SIGN_UP = 'USER_SIGN_UP',
    USER_SIGN_UP_SUCCESS = 'USER_SIGN_UP_SUCCESS',
    USER_SIGN_UP_FAILURE = 'USER_SIGN_UP_FAILURE',
    USER_PASSWORD_FORGOT = 'USER_PASSWORD_FORGOT',
    USER_PASSWORD_FORGOT_SUCCESS = 'USER_PASSWORD_FORGOT_SUCCESS',
    USER_PASSWORD_FORGOT_FAILURE = 'USER_PASSWORD_FORGOT_FAILURE',
    USER_PASSWORD_NEW = 'USER_PASSWORD_NEW',
    USER_PASSWORD_NEW_SUCCESS = 'USER_PASSWORD_NEW_SUCCESS',
    USER_PASSWORD_NEW_FAILURE = 'USER_PASSWORD_NEW_FAILURE',
    USER_SIGN_OUT = 'USER_SIGN_OUT'
}

export interface SignIn {
    type: Types.USER_SIGN_IN;
    payload: User;
}

interface SignInSuccess {
    type: Types.USER_SIGN_IN_SUCCESS;
    payload: string;
}
interface SignInFailure {
    type: Types.USER_SIGN_IN_FAILURE;
}

export interface SignUp {
    type: Types.USER_SIGN_UP;
    payload: User;
}

interface SignUpSuccess {
    type: Types.USER_SIGN_UP_SUCCESS;
    payload: string;
}

interface SignUpFailure {
    type: Types.USER_SIGN_UP_FAILURE;
}

export interface PasswordForgot {
    type: Types.USER_PASSWORD_FORGOT;
    payload: User;
}

interface PasswordForgotSuccess {
    type: Types.USER_PASSWORD_FORGOT_SUCCESS;
    payload: string;
}

interface PasswordForgotFailure {
    type: Types.USER_PASSWORD_FORGOT_FAILURE;
}

export interface PasswordNew {
    type: Types.USER_PASSWORD_NEW;
    payload: User;
}

interface PasswordNewSuccess {
    type: Types.USER_PASSWORD_NEW_SUCCESS;
    payload: string;
}

interface PasswordNewFailure {
    type: Types.USER_PASSWORD_NEW_FAILURE;
}

interface SignOut {
    type: Types.USER_SIGN_OUT;
}

interface Action {
    type:
        | SignIn['type']
        | SignInSuccess['type']
        | SignInFailure['type']
        | SignUp['type']
        | SignUpSuccess['type']
        | SignUpFailure['type']
        | PasswordForgot['type']
        | PasswordForgotSuccess['type']
        | PasswordForgotFailure['type']
        | PasswordNew['type']
        | PasswordNewSuccess['type']
        | PasswordNewFailure['type']
        | SignOut['type'];
    payload:
        | SignIn['payload']
        | SignInSuccess['payload']
        | SignUp['payload']
        | SignUpSuccess['payload']
        | PasswordForgot['payload']
        | PasswordForgotSuccess['payload']
        | PasswordNew['payload']
        | PasswordNewSuccess['payload'];
}

export const Creators = {
    signIn: (payload: SignIn['payload']): SignIn => ({
        type: Types.USER_SIGN_IN,
        payload
    }),
    signInSuccess: (payload: SignInSuccess['payload']): SignInSuccess => ({
        type: Types.USER_SIGN_IN_SUCCESS,
        payload
    }),
    signInFailure: (): SignInFailure => ({
        type: Types.USER_SIGN_IN_FAILURE
    }),
    signUp: (payload: SignUp['payload']): SignUp => ({
        type: Types.USER_SIGN_UP,
        payload
    }),
    signUpSuccess: (payload: SignUpSuccess['payload']): SignUpSuccess => ({
        type: Types.USER_SIGN_UP_SUCCESS,
        payload
    }),
    signUpFailure: (): SignUpFailure => ({ type: Types.USER_SIGN_UP_FAILURE }),
    passwordForgot: (payload: PasswordForgot['payload']): PasswordForgot => ({
        type: Types.USER_PASSWORD_FORGOT,
        payload
    }),
    passwordForgotSuccess: (
        payload: PasswordForgotSuccess['payload']
    ): PasswordForgotSuccess => ({
        type: Types.USER_PASSWORD_FORGOT_SUCCESS,
        payload
    }),
    passwordForgotFailure: (): PasswordForgotFailure => ({
        type: Types.USER_PASSWORD_FORGOT_FAILURE
    }),
    passwordNew: (payload: PasswordNew['payload']): PasswordNew => ({
        type: Types.USER_PASSWORD_NEW,
        payload
    }),
    passwordNewSuccess: (
        payload: PasswordNewSuccess['payload']
    ): PasswordNewSuccess => ({
        type: Types.USER_PASSWORD_NEW_SUCCESS,
        payload
    }),
    passwordNewFailure: (): PasswordNewFailure => ({
        type: Types.USER_PASSWORD_NEW_FAILURE
    }),
    signOut: (): SignOut => ({ type: Types.USER_SIGN_OUT })
};

const initialState = {
    loading: false,
    isLogged: false,
    token: null
};

export const Reducer = produce((draft, { type, payload }: Action) => {
    switch (type) {
        case Types.USER_SIGN_IN:
        case Types.USER_SIGN_UP:
            draft.loading = true;
            break;
        case Types.USER_SIGN_IN_SUCCESS:
        case Types.USER_SIGN_UP_SUCCESS:
            draft.loading = false;
            draft.isLogged = true;
            draft.token = payload;
            break;
        case Types.USER_SIGN_IN_FAILURE:
        case Types.USER_SIGN_UP_FAILURE:
            draft.loading = false;
            break;
        case Types.USER_SIGN_OUT:
            return initialState;
    }
}, initialState);
