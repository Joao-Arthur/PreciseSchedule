export const Types = {
    SIGN_IN: 'AUTH/SIGN_IN',
    SIGN_IN_SUCCESS: 'AUTH/SIGN_IN_SUCCESS',
    SIGN_IN_FAILURE: 'AUTH/SIGN_IN_FAILURE',
    SIGN_UP: 'AUTH/SIGN_UP',
    SIGN_UP_SUCCESS: 'AUTH/SIGN_UP_SUCCESS',
    SIGN_UP_FAILURE: 'AUTH/SIGN_UP_FAILURE',
    PASSWORD_FORGOT: 'AUTH/PASSWORD_FORGOT',
    PASSWORD_FORGOT_SUCCESS: 'AUTH/PASSWORD_FORGOT_SUCCESS',
    PASSWORD_FORGOT_FAILURE: 'AUTH/PASSWORD_FORGOT_FAILURE',
    PASSWORD_NEW: 'AUTH/PASSWORD_NEW',
    PASSWORD_NEW_SUCCESS: 'AUTH/PASSWORD_NEW_SUCCESS',
    PASSWORD_NEW_FAILURE: 'AUTH/PASSWORD_NEW_FAILURE',
    LOGOUT: 'AUTH/LOGOUT'
};

type Keys = keyof typeof Types;
type ActionTypes = typeof Types[Keys];

interface Action {
    type: ActionTypes;
    payload: any;
}

const initialState = {
    loading: false,
    isLogged: false,
    token: null,
    user: {}
};

const Auth = (state = initialState, { type, payload }: Action) => {
    switch (type) {
        case Types.SIGN_IN:
            return { ...state, loading: true };
        case Types.SIGN_IN_SUCCESS:
            return { ...state, loading: false };
        case Types.SIGN_IN_FAILURE:
            return { ...state, loading: false };
        case Types.LOGOUT:
            return { ...state, isLogged: false };
        default:
            return state;
    }
};

interface SignInPayload {
    username: string;
    password: string;
}

export const Creators = {
    signIn: (payload: SignInPayload) => ({ type: Types.SIGN_IN, payload }),
    signInSuccess: () => ({ type: Types.SIGN_IN }),
    signInFailure: () => ({ type: Types.SIGN_IN }),
    logout: () => ({ type: Types.LOGOUT })
};

export default Auth;
