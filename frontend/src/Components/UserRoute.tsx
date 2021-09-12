import { ReactElement } from 'react';
import { useSelector } from 'react-redux';
import { Redirect, Route } from 'react-router-dom';
import { StateType } from '../Store';

type props = {
    children: ReactElement<any, any>;
    path: string;
};

export default function UserRouter({ children, path }: props) {
    const shouldLogin = useSelector(
        (state: StateType) => !state.User.isLogged && state.User.isVerified
    );
    return !shouldLogin ? (
        <Route path={path}>{children}</Route>
    ) : (
        <Redirect to='/signin' />
    );
}
