import { put, takeLatest, delay } from 'redux-saga/effects';
import { Types, Creators } from './User.Duck';

function* signIn(user: any) {
    try {
        delay(3000);
        console.log(user);
        //UserApi.signIn();
        yield put(Creators.signInSuccess('fake token'));
    } catch (e) {
        yield put(Creators.signInFailure());
    }
}

function* UserSaga() {
    yield takeLatest(Types.SIGN_IN, signIn);
}

export default UserSaga;
