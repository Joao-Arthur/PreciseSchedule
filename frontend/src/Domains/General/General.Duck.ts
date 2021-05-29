import produce from 'immer';

export enum Types {
    GENERAL_SET_ACTUAL_PAGE = 'GENERAL_SET_ACTUAL_PAGE',
    GENERAL_SWITCH_SIDEBAR_OPEN = 'GENERAL_SWITCH_SIDEBAR_OPEN'
}

export const Creators = {
    setActualPage: (payload: string) =>
        <const>{
            type: Types.GENERAL_SET_ACTUAL_PAGE,
            payload
        },
    switchSidebarOpen: () =>
        <const>{
            type: Types.GENERAL_SWITCH_SIDEBAR_OPEN
        }
};

export type CreatorsType = {
    [action in keyof typeof Creators]: ReturnType<typeof Creators[action]>;
};

type Action = ReturnType<typeof Creators[keyof typeof Creators]>;

const initialState = {
    actualPage: '',
    isSidebarOpen: false
};

export const Reducer = produce((draft, action: Action) => {
    switch (action.type) {
        case Types.GENERAL_SET_ACTUAL_PAGE:
            draft.actualPage = action.payload;
            break;
        case Types.GENERAL_SWITCH_SIDEBAR_OPEN:
            draft.isSidebarOpen = !draft.isSidebarOpen;
            break;
    }
}, initialState);
