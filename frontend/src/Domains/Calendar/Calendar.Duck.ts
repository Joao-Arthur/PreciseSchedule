import produce from 'immer';

export enum Types {
    CALENDAR_SET_SELECTED_DAY = 'CALENDAR_SET_SELECTED_DAY'
}

export const Creators = {
    setSelectedDay: (payload: Date | null) =>
        <const>{
            type: Types.CALENDAR_SET_SELECTED_DAY,
            payload
        }
};

export type CreatorsType = {
    [action in keyof typeof Creators]: ReturnType<typeof Creators[action]>;
};

type Action = ReturnType<typeof Creators[keyof typeof Creators]>;

type state = {
    selectedDay: Date | null;
};

const initialState: state = {
    selectedDay: null
};

export const Reducer = produce((draft, action: Action) => {
    switch (action.type) {
        case Types.CALENDAR_SET_SELECTED_DAY:
            if (
                draft.selectedDay?.toLocaleString() ===
                action.payload?.toLocaleString()
            ) {
                draft.selectedDay = null;
            } else {
                draft.selectedDay = action.payload;
            }
            break;
    }
}, initialState);
