import { put, takeLatest, call } from 'redux-saga/effects';
import { Types, Actions, ActionsType } from './User.Duck';
import UserApi from './User.api';

function saveToken(token: string) {
    localStorage.setItem('@PreciseSchedule/token', token);
}

function signIn({ payload }: ActionsType['signIn']) {
    saveToken(payload);
}

function signUp({ payload }: ActionsType['signUp']) {
    saveToken(payload);
}

function* passwordForgot({ payload }: ActionsType['passwordForgot']) {
    try {
        const { token } = yield call(UserApi.forgotPassword, payload);
        saveToken(token);
        yield put(Actions.passwordForgotSuccess(token));
    } catch (e) {
        console.error(e);
        yield put(Actions.passwordForgotFailure());
    }
}

function* passwordNew({ payload }: ActionsType['passwordNew']) {
    try {
        const { token } = yield call(UserApi.newPassword, payload);
        saveToken(token);
        yield put(Actions.passwordNewSuccess(token));
    } catch (e) {
        console.error(e);
        yield put(Actions.passwordNewFailure());
    }
}

function* verifyToken() {
    try {
        const token = localStorage.getItem('@PreciseSchedule/token');
        if (!token) throw new Error();
        yield put(Actions.verifyTokenSuccess());
    } catch (e) {
        console.error(e);
        yield put(Actions.verifyTokenFailure());
    }
}

function signOut() {
    localStorage.removeItem('@PreciseSchedule/token');
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
