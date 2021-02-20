import { createStore, combineReducers } from 'redux';
import Auth from './Auth';
import General from './General';

export const rootReducer = combineReducers({
    Auth,
    General
});

export type RootState = ReturnType<typeof rootReducer>;

export default function configureStore() {
    return createStore(rootReducer);
}
