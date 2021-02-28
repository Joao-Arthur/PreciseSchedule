import { Reducer, Types } from './General.Duck';

describe('User reducer', () => {
    it('Should handle GENERAL_SET_ACTUAL_PAGE', () => {
        const payload = 'MOCK PAGE';
        const { actualPage } = Reducer(undefined, {
            type: Types.GENERAL_SET_ACTUAL_PAGE,
            payload
        });
        expect(actualPage).toBe(payload);
    });

    it('Should handle GENERAL_SWITCH_SIDEBAR_OPEN', () => {
        const firstState = Reducer(undefined, {
            type: Types.GENERAL_SWITCH_SIDEBAR_OPEN
        });
        const secondState = Reducer(firstState, {
            type: Types.GENERAL_SWITCH_SIDEBAR_OPEN
        });
        expect(firstState.isSidebarOpen).toBe(true);
        expect(secondState.isSidebarOpen).toBe(false);
    });
});
