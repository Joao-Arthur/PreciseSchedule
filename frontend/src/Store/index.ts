import { createStore, combineReducers, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { UserDuck, UserSaga } from '../Domains/User';
import General from '../Domains/General';

const sagaMiddleware = createSagaMiddleware();

export const CombinedReducers = combineReducers({
    User: UserDuck,
    General
});

export type RootState = ReturnType<typeof CombinedReducers>;

export default function configureStore() {
    return createStore(CombinedReducers, applyMiddleware(sagaMiddleware));
}

sagaMiddleware.run(UserSaga);
