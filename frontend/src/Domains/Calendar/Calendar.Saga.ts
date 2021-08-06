import { takeLatest, select, put, delay } from 'redux-saga/effects';
import { StateType } from '../../Store';
import { Types, Creators, CreatorsType } from './Calendar.Duck';

function* toggleSelectedDay({ payload }: CreatorsType['toggleSelectedDay']) {
    const selectedDay: Date | null = yield select(
        (state: StateType) => state.Calendar.selectedDay
    );

    if (selectedDay?.getTime() === payload?.getTime()) {
        yield put(Creators.hideSelectedDay());
        yield delay(600);
        yield put(Creators.removeSelectedDay());
    } else {
        if (payload) yield put(Creators.setSelectedDay(payload));
    }
}

function* UserSaga() {
    yield takeLatest(Types.CALENDAR_TOGGLE_SELECTED_DAY, toggleSelectedDay);
}

export default UserSaga;
