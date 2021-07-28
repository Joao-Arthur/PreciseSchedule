import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import User from '../Domains/User';
import General from '../Domains/General';
import Calendar from '../Domains/Calendar';
import StoreDevTools from '../StoreDevTools';

const sagaMiddleware = createSagaMiddleware();

const CombinedReducers = combineReducers({
    User: User.Reducer,
    General: General.Reducer,
    Calendar: Calendar.Reducer
});

export type StateType = ReturnType<typeof CombinedReducers>;

const enhancer = compose(
    applyMiddleware(sagaMiddleware),
    StoreDevTools.instrument()
);

export default function setupStore() {
    const store = createStore(CombinedReducers, enhancer);
    sagaMiddleware.run(User.Saga);
    return store;
}
