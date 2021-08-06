import { takeLatest, select, put, delay } from 'redux-saga/effects';
import { StateType } from '../../Store';
import { Types, Actions, ActionsType } from './Calendar.Duck';

function* toggleSelectedDay({ payload }: ActionsType['toggleSelectedDay']) {
    const selectedDay: Date | null = yield select(
        (state: StateType) => state.Calendar.selectedDay
    );

    if (selectedDay?.getTime() === payload?.getTime()) {
        yield put(Actions.hideSelectedDay());
        yield delay(600);
        yield put(Actions.removeSelectedDay());
    } else {
        if (payload) yield put(Actions.setSelectedDay(payload));
    }
}

function* UserSaga() {
    yield takeLatest(Types.CALENDAR_TOGGLE_SELECTED_DAY, toggleSelectedDay);
}

export default UserSaga;
