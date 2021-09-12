import { Switch, Route } from 'react-router-dom';
import UserRoute from '../Components/UserRoute';
import AnonimousRoute from '../Components/AnonimousRoute';
import Calendar from './Calendar';
import SignIn from './SignIn';
import SignUp from './SignUp';
import NotFound from './NotFound';
import Settings from './Settings';
import ForgotPassword from './ForgotPassword';
import NewPassword from './NewPassword';
import Charts from './Charts';

export default function Routes() {
    return (
        <Switch>
            <Route exact path='/'>
                <Calendar />
            </Route>
            <AnonimousRoute path='/signin'>
                <SignIn />
            </AnonimousRoute>
            <AnonimousRoute path='/signup'>
                <SignUp />
            </AnonimousRoute>
            <AnonimousRoute path='/password/forgot'>
                <ForgotPassword />
            </AnonimousRoute>
            <AnonimousRoute path='/password/new'>
                <NewPassword />
            </AnonimousRoute>
            <UserRoute path='/settings'>
                <Settings />
            </UserRoute>
            <UserRoute path='/charts'>
                <Charts />
            </UserRoute>
            <Route>
                <NotFound />
            </Route>
        </Switch>
    );
}
