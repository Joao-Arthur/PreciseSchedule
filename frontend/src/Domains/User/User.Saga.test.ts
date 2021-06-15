import SagaTester from 'redux-saga-tester';
import { Types, Creators } from './User.Duck';
import UserSaga from './User.Saga';

describe('UserSaga test', () => {
    let sagaTester: SagaTester<object>;

    beforeAll(() => {
        sagaTester = new SagaTester();
        sagaTester.start(UserSaga);
    });

    it('should handle USER_SIGN_IN', async () => {
        sagaTester.dispatch(
            Creators.signIn({ username: 'Ringo', password: 'BaDumTsssss' })
        );
        await Promise.race([
            sagaTester.waitFor(Types.USER_SIGN_IN_SUCCESS),
            sagaTester.waitFor(Types.USER_SIGN_IN_FAILURE)
        ]);
    });
    it('should handle USER_SIGN_UP', async () => {
        sagaTester.dispatch(
            Creators.signUp({
                firstName: 'Ringo',
                lastName: 'Starr',
                email: 'Ringo_Drum@outlook.com',
                birthdate: new Date(1940, 6, 7),
                username: 'Ringo',
                password: 'BaDumTsssss'
            })
        );
        await Promise.race([
            sagaTester.waitFor(Types.USER_SIGN_UP_SUCCESS),
            sagaTester.waitFor(Types.USER_SIGN_UP_FAILURE)
        ]);
    });
});
