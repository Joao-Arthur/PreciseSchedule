import { Types, Creators } from './User.Duck';

import { put, takeLatest } from 'redux-saga/effects';

function* fetchUser() {
    try {
        yield put(Creators.signInSuccess());
    } catch (e) {
        yield put(Creators.signInFailure());
    }
}

function* UserSaga() {
    yield takeLatest(Types.SIGN_IN, fetchUser);
}

export default UserSaga;
