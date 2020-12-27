export const Types = {
    SIGN_IN: 'SIGN_IN/SIGN_IN',
    SIGN_IN_SUCCESS: 'SIGN_IN/SIGN_IN',
    LOGIN_FAILURE: 'SIGN_IN/SIGN_IN',
    LOGOUT: 'SIGN_IN/LOGOUT'
};

const initialState = {
    loadingLogin: false,
    isLogged: false,
    token: null,
    user: {}
};

const SignIn = (state = initialState, action: any) => {
    switch (action.type) {
        case Types.SIGN_IN:
            //    console.log(state);
            return { ...state, isLogged: true };
        case Types.LOGOUT:
            //      console.log(state);
            return { ...state, isLogged: false };
        //   case Types.SIGN_IN_SUCCESS:
        //       return { loadingLogin: false, isLogged: true };
        //   case Types.LOGIN_FAILURE:
        //       return { loadingLogin: false };
        default:
            return state;
    }
};

export const Creators = {
    signIn: (payload: any) => ({ type: Types.SIGN_IN, payload }),
    logout: () => ({ type: Types.LOGOUT })
};

export default SignIn;
