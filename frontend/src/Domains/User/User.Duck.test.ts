import { Reducer, Types } from './User.Duck';

describe('User reducer', () => {
    it('Should handle USER_SIGN_IN', () => {
        const payload = 'MOCK TOKEN';
        const { isLogged, token } = Reducer(undefined, {
            type: Types.USER_SIGN_IN,
            payload
        });
        expect(isLogged).toBe(true);
        expect(token).toBe(payload);
    });

    it('Should handle USER_SIGN_UP', () => {
        const payload = 'MOCK TOKEN';
        const { isLogged, token } = Reducer(undefined, {
            type: Types.USER_SIGN_UP,
            payload
        });
        expect(isLogged).toBe(true);
        expect(token).toBe(payload);
    });
});
