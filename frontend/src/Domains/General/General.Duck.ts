import produce from 'immer';

enum Types {
    GENERAL_SET_ACTUAL_PAGE = 'GENERAL_SET_ACTUAL_PAGE',
    GENERAL_SWITCH_SIDEBAR_OPEN = 'GENERAL_SWITCH_SIDEBAR_OPEN'
}

interface SetActualPage {
    type: Types.GENERAL_SET_ACTUAL_PAGE;
    payload: string;
}

interface SwitchSidebarOpen {
    type: Types.GENERAL_SWITCH_SIDEBAR_OPEN;
}

interface Action {
    type: SetActualPage['type'] | SwitchSidebarOpen['type'];
    payload: SetActualPage['payload'];
}

export const Creators = {
    setActualPage: (payload: SetActualPage['payload']): SetActualPage => ({
        type: Types.GENERAL_SET_ACTUAL_PAGE,
        payload
    }),
    switchSidebarOpen: (): SwitchSidebarOpen => ({
        type: Types.GENERAL_SWITCH_SIDEBAR_OPEN
    })
};

const initialState = {
    actualPage: '',
    isSidebarOpen: false
};

export const Reducer = produce((draft, { type, payload }: Action) => {
    switch (type) {
        case Types.GENERAL_SET_ACTUAL_PAGE:
            draft.actualPage = payload;
            break;
        case Types.GENERAL_SWITCH_SIDEBAR_OPEN:
            draft.isSidebarOpen = !draft.isSidebarOpen;
            break;
    }
}, initialState);
