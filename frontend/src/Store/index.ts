import { createStore, combineReducers, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import User from '../Domains/User';
import General from '../Domains/General';

const sagaMiddleware = createSagaMiddleware();

export const CombinedReducers = combineReducers({
    User: User.Reducer,
    General: General.Reducer
});

export type StateType = ReturnType<typeof CombinedReducers>;

export default function configureStore() {
    const store = createStore(
        CombinedReducers,
        applyMiddleware(sagaMiddleware)
    );
    sagaMiddleware.run(User.Saga);
    return store;
}
