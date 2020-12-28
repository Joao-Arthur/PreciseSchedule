const Types = {
    SIGN_IN: 'AUTH/SIGN_IN',
    SIGN_IN_SUCCESS: 'AUTH/SIGN_IN_SUCCESS',
    SIGN_IN_FAILURE: 'AUTH/SIGN_IN_FAILURE',
    LOGOUT: 'AUTH/LOGOUT'
};

type Keys = keyof typeof Types;
type ActionTypes = typeof Types[Keys];

interface Action {
    type: ActionTypes;
    payload: any;
}

const initialState = {
    loadingLogin: false,
    isLogged: false,
    token: null,
    user: {}
};

const Auth = (state = initialState, { type, payload }: Action) => {
    switch (type) {
        case Types.SIGN_IN:
            //    console.log(state);
            return { ...state, isLogged: true };
        case Types.LOGOUT:
            //      console.log(state);
            return { ...state, isLogged: false };
        //   case Types.SIGN_IN_SUCCESS:
        //       return { loadingLogin: false, isLogged: true };
        //   case Types.SIGN_IN_FAILURE:
        //       return { loadingLogin: false };
        default:
            return state;
    }
};

export const Creators = {
    signIn: (payload: any) => ({ type: Types.SIGN_IN, payload }),
    logout: () => ({ type: Types.LOGOUT })
};

export default Auth;
