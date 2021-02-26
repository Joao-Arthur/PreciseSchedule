import { User } from './User.Builder';

const SIGN_IN: 'AUTH/SIGN_IN' = 'AUTH/SIGN_IN';
const SIGN_IN_SUCCESS: 'AUTH/SIGN_IN_SUCCESS' = 'AUTH/SIGN_IN_SUCCESS';
const SIGN_IN_FAILURE: 'AUTH/SIGN_IN_FAILURE' = 'AUTH/SIGN_IN_FAILURE';
const SIGN_UP: 'AUTH/SIGN_UP' = 'AUTH/SIGN_UP';
const SIGN_UP_SUCCESS: 'AUTH/SIGN_UP_SUCCESS' = 'AUTH/SIGN_UP_SUCCESS';
const SIGN_UP_FAILURE: 'AUTH/SIGN_UP_FAILURE' = 'AUTH/SIGN_UP_FAILURE';
const PASSWORD_FORGOT: 'AUTH/PASSWORD_FORGOT' = 'AUTH/PASSWORD_FORGOT';
const PASSWORD_FORGOT_SUCCESS: 'AUTH/PASSWORD_FORGOT_SUCCESS' =
    'AUTH/PASSWORD_FORGOT_SUCCESS';
const PASSWORD_FORGOT_FAILURE: 'AUTH/PASSWORD_FORGOT_FAILURE' =
    'AUTH/PASSWORD_FORGOT_FAILURE';
const PASSWORD_NEW: 'AUTH/PASSWORD_NEW' = 'AUTH/PASSWORD_NEW';
const PASSWORD_NEW_SUCCESS: 'AUTH/PASSWORD_NEW_SUCCESS' =
    'AUTH/PASSWORD_NEW_SUCCESS';
const PASSWORD_NEW_FAILURE: 'AUTH/PASSWORD_NEW_FAILURE' =
    'AUTH/PASSWORD_NEW_FAILURE';
const LOGOUT: 'AUTH/LOGOUT' = 'AUTH/LOGOUT';

export const Types = {
    SIGN_IN,
    SIGN_IN_SUCCESS,
    SIGN_IN_FAILURE,
    SIGN_UP,
    SIGN_UP_SUCCESS,
    SIGN_UP_FAILURE,
    PASSWORD_FORGOT,
    PASSWORD_FORGOT_SUCCESS,
    PASSWORD_FORGOT_FAILURE,
    PASSWORD_NEW,
    PASSWORD_NEW_SUCCESS,
    PASSWORD_NEW_FAILURE,
    LOGOUT
};

interface SignIn {
    type: typeof Types.SIGN_IN;
    payload: User;
}

interface SignInSuccess {
    type: typeof Types.SIGN_IN_SUCCESS;
    payload: string;
}
interface SignInFailure {
    type: typeof Types.SIGN_IN_SUCCESS;
    payload: never;
}

interface SignUp {
    type: typeof Types.SIGN_UP;
    payload: User;
}

interface SignUpSuccess {
    type: typeof Types.SIGN_UP_SUCCESS;
    payload: string;
}

interface SignUpFailure {
    type: typeof Types.SIGN_UP_FAILURE;
    payload: never;
}

interface PasswordForgot {
    type: typeof Types.PASSWORD_FORGOT;
    payload: User;
}

interface PasswordForgotSuccess {
    type: typeof Types.PASSWORD_FORGOT_SUCCESS;
    payload: string;
}

interface PasswordForgotFailure {
    type: typeof Types.PASSWORD_FORGOT_FAILURE;
    payload: never;
}

type Action =
    | SignIn
    | SignInSuccess
    | SignInFailure
    | SignUp
    | SignUpSuccess
    | SignUpFailure
    | PasswordForgot
    | PasswordForgotSuccess
    | PasswordForgotFailure;

export const Creators = {
    signIn: (payload: SignIn['payload']): SignIn => ({
        type: Types.SIGN_IN,
        payload
    }),
    signInSuccess: (payload: SignInSuccess['payload']): SignInSuccess => ({
        type: Types.SIGN_IN_SUCCESS,
        payload
    }),
    signInFailure: () => ({ type: Types.SIGN_IN_FAILURE }),
    signUp: (payload: SignUp['payload']): SignUp => ({
        type: Types.SIGN_UP,
        payload
    }),
    passwordForgot: (payload: PasswordForgot['payload']): PasswordForgot => ({
        type: Types.PASSWORD_FORGOT,
        payload
    }),
    logout: () => ({ type: Types.LOGOUT })
};

const initialState = {
    loading: false,
    isLogged: false,
    token: null
};

export function Reducer(state = initialState, { type, payload }: any) {
    switch (type) {
        case Types.SIGN_IN:
            return { ...state, loading: true };
        case Types.SIGN_IN_SUCCESS:
            return { ...state, loading: false, isLogged: true, token: payload };
        default:
            return state;
    }
}
