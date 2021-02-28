import { put, takeLatest, call } from 'redux-saga/effects';
import { Types, Creators, SignIn, SignUp } from './User.Duck';
import UserApi from './User.api';

function* signIn({ payload }: SignIn) {
    try {
        const token = yield call(UserApi.signIn, payload);
        yield put(Creators.signInSuccess(token));
    } catch (e) {
        yield put(Creators.signInFailure());
    }
}

function* signUp({ payload }: SignUp) {
    try {
        const token = yield call(UserApi.signUp, payload);
        yield put(Creators.signUpSuccess(token));
    } catch (e) {
        yield put(Creators.signUpFailure());
    }
}

function* UserSaga() {
    yield takeLatest(Types.USER_SIGN_IN, signIn);
    yield takeLatest(Types.USER_SIGN_UP, signUp);
}

export default UserSaga;
