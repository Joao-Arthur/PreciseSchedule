import produce from 'immer';
import { User } from './User.Builder';

export enum Types {
    USER_SIGN_IN = 'USER_SIGN_IN',
    USER_SIGN_UP = 'USER_SIGN_UP',
    USER_PASSWORD_FORGOT = 'USER_PASSWORD_FORGOT',
    USER_PASSWORD_FORGOT_SUCCESS = 'USER_PASSWORD_FORGOT_SUCCESS',
    USER_PASSWORD_FORGOT_FAILURE = 'USER_PASSWORD_FORGOT_FAILURE',
    USER_PASSWORD_NEW = 'USER_PASSWORD_NEW',
    USER_PASSWORD_NEW_SUCCESS = 'USER_PASSWORD_NEW_SUCCESS',
    USER_PASSWORD_NEW_FAILURE = 'USER_PASSWORD_NEW_FAILURE',
    USER_SIGN_OUT = 'USER_SIGN_OUT',
    VERIFY_TOKEN = 'VERIFY_TOKEN',
    VERIFY_TOKEN_SUCCESS = 'VERIFY_TOKEN_SUCCESS',
    VERIFY_TOKEN_FAILURE = 'VERIFY_TOKEN_FAILURE'
}

export const Actions = {
    signIn: (payload: string) =>
        <const>{
            type: Types.USER_SIGN_IN,
            payload
        },
    signUp: (payload: string) =>
        <const>{
            type: Types.USER_SIGN_UP,
            payload
        },
    passwordForgot: (payload: User) =>
        <const>{
            type: Types.USER_PASSWORD_FORGOT,
            payload
        },
    passwordForgotSuccess: (payload: string) =>
        <const>{
            type: Types.USER_PASSWORD_FORGOT_SUCCESS,
            payload
        },
    passwordForgotFailure: () =>
        <const>{
            type: Types.USER_PASSWORD_FORGOT_FAILURE
        },
    passwordNew: (payload: User) =>
        <const>{
            type: Types.USER_PASSWORD_NEW,
            payload
        },
    passwordNewSuccess: (payload: string) =>
        <const>{
            type: Types.USER_PASSWORD_NEW_SUCCESS,
            payload
        },
    passwordNewFailure: () =>
        <const>{
            type: Types.USER_PASSWORD_NEW_FAILURE
        },
    signOut: () => <const>{ type: Types.USER_SIGN_OUT },
    verifyToken: () => <const>{ type: Types.VERIFY_TOKEN },
    verifyTokenSuccess: () => <const>{ type: Types.VERIFY_TOKEN_SUCCESS },
    verifyTokenFailure: () => <const>{ type: Types.VERIFY_TOKEN_FAILURE }
};

export type ActionsType = {
    [action in keyof typeof Actions]: ReturnType<typeof Actions[action]>;
};

type Action = ReturnType<typeof Actions[keyof typeof Actions]>;

const initialState = {
    loading: false,
    isLogged: false,
    isVerified: false,
    token: ''
};

export const Reducer = produce((draft, action: Action) => {
    switch (action.type) {
        case Types.USER_SIGN_IN:
        case Types.USER_SIGN_UP:
            draft.loading = false;
            draft.isLogged = true;
            draft.isVerified = true;
            draft.token = action.payload;
            break;
        case Types.USER_SIGN_OUT:
            draft.isLogged = false;
            break;
        //case Types.USER_PASSWORD_FORGOT:
        //case Types.USER_PASSWORD_FORGOT_SUCCESS:
        //case Types.USER_PASSWORD_FORGOT_FAILURE:
        //case Types.USER_PASSWORD_NEW:
        //case Types.USER_PASSWORD_NEW_SUCCESS:
        //case Types.USER_PASSWORD_NEW_FAILURE:
        case Types.VERIFY_TOKEN:
            draft.loading = true;
            break;
        case Types.VERIFY_TOKEN_SUCCESS:
            draft.loading = false;
            draft.isLogged = true;
            draft.isVerified = true;
            break;
        case Types.VERIFY_TOKEN_FAILURE:
            draft.loading = false;
            draft.isLogged = false;
            draft.isVerified = true;
            break;
    }
}, initialState);
