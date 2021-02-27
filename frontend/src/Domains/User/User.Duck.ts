import { User } from './User.Builder';

const SIGN_IN: 'USER/SIGN_IN' = 'USER/SIGN_IN';
const SIGN_IN_SUCCESS: 'USER/SIGN_IN_SUCCESS' = 'USER/SIGN_IN_SUCCESS';
const SIGN_IN_FAILURE: 'USER/SIGN_IN_FAILURE' = 'USER/SIGN_IN_FAILURE';
const SIGN_UP: 'USER/SIGN_UP' = 'USER/SIGN_UP';
const SIGN_UP_SUCCESS: 'USER/SIGN_UP_SUCCESS' = 'USER/SIGN_UP_SUCCESS';
const SIGN_UP_FAILURE: 'USER/SIGN_UP_FAILURE' = 'USER/SIGN_UP_FAILURE';
const PASSWORD_FORGOT: 'USER/PASSWORD_FORGOT' = 'USER/PASSWORD_FORGOT';
const PASSWORD_FORGOT_SUCCESS: 'USER/PASSWORD_FORGOT_SUCCESS' =
    'USER/PASSWORD_FORGOT_SUCCESS';
const PASSWORD_FORGOT_FAILURE: 'USER/PASSWORD_FORGOT_FAILURE' =
    'USER/PASSWORD_FORGOT_FAILURE';
const PASSWORD_NEW: 'USER/PASSWORD_NEW' = 'USER/PASSWORD_NEW';
const PASSWORD_NEW_SUCCESS: 'USER/PASSWORD_NEW_SUCCESS' =
    'USER/PASSWORD_NEW_SUCCESS';
const PASSWORD_NEW_FAILURE: 'USER/PASSWORD_NEW_FAILURE' =
    'USER/PASSWORD_NEW_FAILURE';
const SIGN_OUT: 'USER/SIGN_OUT' = 'USER/SIGN_OUT';

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
    SIGN_OUT
};

export interface SignIn {
    type: typeof Types.SIGN_IN;
    payload: User;
}

interface SignInSuccess {
    type: typeof Types.SIGN_IN_SUCCESS;
    payload: string;
}
interface SignInFailure {
    type: typeof Types.SIGN_IN_FAILURE;
    payload: never;
}

export interface SignUp {
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
    signUpSuccess: (payload: SignUpSuccess['payload']): SignUpSuccess => ({
        type: Types.SIGN_UP_SUCCESS,
        payload
    }),
    signUpFailure: () => ({ type: Types.SIGN_UP_FAILURE }),
    passwordForgot: (payload: PasswordForgot['payload']): PasswordForgot => ({
        type: Types.PASSWORD_FORGOT,
        payload
    }),
    signOut: () => ({ type: Types.SIGN_OUT })
};

const initialState = {
    loading: false,
    isLogged: false,
    token: null
};

export function Reducer(state = initialState, { type, payload }: any) {
    switch (type) {
        case Types.SIGN_IN:
        case Types.SIGN_UP:
            return { ...state, loading: true };
        case Types.SIGN_IN_SUCCESS:
        case Types.SIGN_UP_SUCCESS:
            return { ...state, loading: false, isLogged: true, token: payload };
        case Types.SIGN_IN_FAILURE:
        case Types.SIGN_UP_FAILURE:
            return { ...state, loading: false };
        case Types.SIGN_OUT:
            return initialState;
        default:
            return state;
    }
}
