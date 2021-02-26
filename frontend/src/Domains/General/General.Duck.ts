const Types = {
    SET_ACTUAL_PAGE: 'GENERAL/SET_ACTUAL_PAGE',
    SWITCH_SIDEBAR_OPEN: 'GENERAL/SWITCH_SIDEBAR_OPEN'
};

type Keys = keyof typeof Types;

interface Action {
    type: Keys;
    payload: any;
}

export const Creators = {
    setActualPage: (payload: any) => ({ type: Types.SET_ACTUAL_PAGE, payload }),
    switchSidebarOpen: () => ({
        type: Types.SWITCH_SIDEBAR_OPEN
    })
};

const initialState = {
    actualPage: null,
    isSidebarOpen: false
};

export function Reducer(state = initialState, { type, payload }: Action) {
    switch (type) {
        case Types.SET_ACTUAL_PAGE:
            return { ...state, actualPage: payload };
        case Types.SWITCH_SIDEBAR_OPEN:
            return { ...state, isSidebarOpen: !state.isSidebarOpen };
        default:
            return state;
    }
}
