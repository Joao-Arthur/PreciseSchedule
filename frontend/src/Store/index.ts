import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { fork } from 'redux-saga/effects';
import User from '../Domains/User';
import General from '../Domains/General';
import Calendar from '../Domains/Calendar';
import StoreDevTools from '../StoreDevTools';

const sagaMiddleware = createSagaMiddleware();

const reducers = combineReducers({
    User: User.Reducer,
    General: General.Reducer,
    Calendar: Calendar.Reducer
});

function* sagas() {
    yield fork(User.Saga);
    yield fork(Calendar.Saga);
}

export type StateType = ReturnType<typeof reducers>;

const enhancer = compose(
    applyMiddleware(sagaMiddleware),
    StoreDevTools.instrument()
);

export default function setupStore() {
    const store = createStore(reducers, enhancer);
    sagaMiddleware.run(sagas);
    return store;
}
