import { put, takeLatest, delay } from 'redux-saga/effects';
import { Types, Creators } from './User.Duck';
function* signIn() {
    try {
        delay(3000);
        //UserApi.signIn();
        yield put(Creators.signInSuccess({ token: 'fake token' }));
    } catch (e) {
        yield put(Creators.signInFailure());
    }
}

function* UserSaga() {
    yield takeLatest(Types.SIGN_IN, signIn);
}

export default UserSaga;
