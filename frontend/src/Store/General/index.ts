const Types = {
    SET_ACTUAL_PAGE: 'GENERAL/SET_ACTUAL_PAGE'
};

type Keys = keyof typeof Types;
type ActionTypes = typeof Types[Keys];

interface Action {
    type: ActionTypes;
    payload: any;
}

const initialState = {
    actualPage: null
};

const General = (state = initialState, { type, payload }: Action) => {
    switch (type) {
        case Types.SET_ACTUAL_PAGE:
            return { ...state, actualPage: payload };
        default:
            return state;
    }
};

export const Creators = {
    setActualPage: (payload: any) => ({ type: Types.SET_ACTUAL_PAGE, payload })
};

export default General;
