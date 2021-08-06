import produce from 'immer';

export enum Types {
    CALENDAR_TOGGLE_SELECTED_DAY = 'CALENDAR_TOGGLE_SELECTED_DAY',
    CALENDAR_SET_SELECTED_DAY = 'CALENDAR_SET_SELECTED_DAY',
    CALENDAR_REMOVE_SELECTED_DAY = 'CALENDAR_REMOVE_SELECTED_DAY',
    CALENDAR_HIDE_SELECTED_DAY = 'CALENDAR_HIDE_SELECTED_DAY'
}

export const Actions = {
    toggleSelectedDay: (payload: Date | null) =>
        <const>{
            type: Types.CALENDAR_TOGGLE_SELECTED_DAY,
            payload
        },
    setSelectedDay: (payload: Date) =>
        <const>{
            type: Types.CALENDAR_SET_SELECTED_DAY,
            payload
        },
    removeSelectedDay: () =>
        <const>{
            type: Types.CALENDAR_REMOVE_SELECTED_DAY
        },
    hideSelectedDay: () =>
        <const>{
            type: Types.CALENDAR_HIDE_SELECTED_DAY
        }
};

export type ActionsType = {
    [action in keyof typeof Actions]: ReturnType<typeof Actions[action]>;
};

type Action = ReturnType<typeof Actions[keyof typeof Actions]>;

type state = {
    selectedDay: Date | null;
    showSelectedDay: boolean;
};

const initialState: state = {
    selectedDay: null,
    showSelectedDay: false
};

export const Reducer = produce((draft, action: Action) => {
    switch (action.type) {
        case Types.CALENDAR_TOGGLE_SELECTED_DAY:
            return draft;
        case Types.CALENDAR_SET_SELECTED_DAY:
            draft.selectedDay = action.payload;
            draft.showSelectedDay = true;
            break;
        case Types.CALENDAR_REMOVE_SELECTED_DAY:
            draft.selectedDay = null;
            break;
        case Types.CALENDAR_HIDE_SELECTED_DAY:
            draft.showSelectedDay = false;
            break;
    }
}, initialState);
