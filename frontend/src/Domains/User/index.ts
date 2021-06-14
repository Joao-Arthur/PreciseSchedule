import { Reducer, Creators } from './User.Duck';
import Saga from './User.Saga';
import Builder from './User.Builder';
import API from './User.api';

const User = {
    Reducer,
    Creators,
    Saga,
    Builder,
    API
};

export default User;
