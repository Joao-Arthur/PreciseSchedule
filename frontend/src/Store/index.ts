import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';
import User from '../Domains/User';
import General from '../Domains/General';
import Calendar from '../Domains/Calendar';

const sagaMiddleware = createSagaMiddleware();

export const CombinedReducers = combineReducers({
    User: User.Reducer,
    General: General.Reducer,
    Calendar: Calendar.Reducer
});

export type StateType = ReturnType<typeof CombinedReducers>;

export default function setupStore() {
    const store = createStore(
        CombinedReducers,
        composeWithDevTools(applyMiddleware(sagaMiddleware))
    );
    sagaMiddleware.run(User.Saga);
    return store;
}
