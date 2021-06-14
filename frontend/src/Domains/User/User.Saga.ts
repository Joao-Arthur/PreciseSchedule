import { put, takeLatest, call } from 'redux-saga/effects';
import { Types, Creators, CreatorsType } from './User.Duck';
import UserApi, { userInfo } from './User.api';

function saveToken(token: string) {
    localStorage.setItem('@precise_schedule_token', token);
}

function* signIn({ payload }: CreatorsType['signIn']) {
    try {
        const { token } = (yield call(UserApi.signIn, payload)) as userInfo;
        saveToken(token);
        yield put(Creators.signInSuccess(token));
    } catch (e) {
        console.error(e);
        yield put(Creators.signInFailure());
    }
}

function* signUp({ payload }: CreatorsType['signUp']) {
    try {
        const { token } = yield call(UserApi.signUp, payload);
        saveToken(token);
        yield put(Creators.signUpSuccess(token));
    } catch (e) {
        console.error(e);
        yield put(Creators.signUpFailure());
    }
}

function* passwordForgot({ payload }: CreatorsType['passwordForgot']) {
    try {
        const { token } = yield call(UserApi.forgotPassword, payload);
        saveToken(token);
        yield put(Creators.passwordForgotSuccess(token));
    } catch (e) {
        console.error(e);
        yield put(Creators.passwordForgotFailure());
    }
}

function* passwordNew({ payload }: CreatorsType['passwordNew']) {
    try {
        const { token } = yield call(UserApi.newPassword, payload);
        saveToken(token);
        yield put(Creators.passwordNewSuccess(token));
    } catch (e) {
        console.error(e);
        yield put(Creators.passwordNewFailure());
    }
}

function* verifyToken() {
    try {
        const token = localStorage.getItem('@precise_schedule_token');
        if (!token) throw new Error();
        yield put(Creators.verifyTokenSuccess());
    } catch (e) {
        console.error(e);
        yield put(Creators.verifyTokenFailure());
    }
}

function signOut() {
    localStorage.removeItem('@precise_schedule_token');
}

function* UserSaga() {
    yield takeLatest(Types.USER_SIGN_IN, signIn);
    yield takeLatest(Types.USER_SIGN_UP, signUp);
    yield takeLatest(Types.USER_PASSWORD_FORGOT, passwordForgot);
    yield takeLatest(Types.USER_PASSWORD_NEW, passwordNew);
    yield takeLatest(Types.VERIFY_TOKEN, verifyToken);
    yield takeLatest(Types.USER_SIGN_OUT, signOut);
}

export default UserSaga;
