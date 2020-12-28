import { createStore, combineReducers } from 'redux';
import Auth from './Auth';
import General from './General';

export const rootReducer = combineReducers({
    Auth,
    General
});

export type RootState = ReturnType<typeof rootReducer>;

const configureStore = () => createStore(rootReducer);

export default configureStore;
