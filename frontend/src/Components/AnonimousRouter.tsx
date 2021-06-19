import { ReactElement } from 'react';
import { useSelector } from 'react-redux';
import { Redirect, Route } from 'react-router-dom';
import { StateType } from '../Store';

type props = {
    children: ReactElement<any, any>;
    path: string;
};

export default function AnonimousRouter({ children, path }: props) {
    const logged = useSelector((state: StateType) => state.User.isLogged);
    return !logged ? (
        <Route path={path}>{children}</Route>
    ) : (
        <Redirect to='/' />
    );
}
