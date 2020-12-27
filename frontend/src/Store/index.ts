import { createStore, combineReducers } from 'redux';
import SignIn from './SignIn';

export const rootReducer = combineReducers({
    SignIn
});

export type RootState = ReturnType<typeof rootReducer>;

const configureStore = () => createStore(rootReducer);

export default configureStore;
