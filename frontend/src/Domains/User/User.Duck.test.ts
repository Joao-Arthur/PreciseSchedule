import { Reducer, Types } from './User.Duck';

describe('User reducer', () => {
    it('Should handle USER_SIGN_IN', () => {
        const { loading } = Reducer(undefined, { type: Types.USER_SIGN_IN });
        expect(loading).toBe(true);
    });

    it('Should handle USER_SIGN_IN', () => {
        const payload = 'MOCK TOKEN';
        const { loading, isLogged, token } = Reducer(undefined, {
            type: Types.USER_SIGN_IN,
            payload
        });
        expect(loading).toBe(false);
        expect(isLogged).toBe(true);
        expect(token).toBe(payload);
    });

    it('Should handle USER_SIGN_IN_FAILURE', () => {
        const { loading } = Reducer(undefined, {
            type: Types.USER_SIGN_IN_FAILURE
        });
        expect(loading).toBe(false);
    });

    it('Should handle USER_SIGN_UP', () => {
        const { loading } = Reducer(undefined, { type: Types.USER_SIGN_UP });
        expect(loading).toBe(true);
    });

    it('Should handle USER_SIGN_UP', () => {
        const payload = 'MOCK TOKEN';
        const { loading, isLogged, token } = Reducer(undefined, {
            type: Types.USER_SIGN_UP,
            payload
        });
        expect(loading).toBe(false);
        expect(isLogged).toBe(true);
        expect(token).toBe(payload);
    });

    it('Should handle USER_SIGN_UP_FAILURE', () => {
        const { loading } = Reducer(undefined, {
            type: Types.USER_SIGN_UP_FAILURE
        });
        expect(loading).toBe(false);
    });
});
