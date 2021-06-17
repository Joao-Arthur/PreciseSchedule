import { Switch, Route } from 'react-router-dom';
import UserRouter from '../Components/UserRouter';
import AnonimousRouter from '../Components/AnonimousRouter';
import Home from './Home';
import Calendar from './Calendar';
import SignIn from './SignIn';
import SignUp from './SignUp';
import NotFound from './NotFound';
import Settings from './Settings';
import ForgotPassword from './ForgotPassword';
import NewPassword from './NewPassword';

export default function Routes() {
    return (
        <Switch>
            <Route exact path='/'>
                <Home />
            </Route>
            <Route path='/calendar'>
                <Calendar />
            </Route>
            <AnonimousRouter path='/signin'>
                <SignIn />
            </AnonimousRouter>
            <AnonimousRouter path='/signup'>
                <SignUp />
            </AnonimousRouter>
            <UserRouter path='/settings'>
                <Settings />
            </UserRouter>
            <Route path='/password/forgot'>
                <ForgotPassword />
            </Route>
            <Route path='/password/new'>
                <NewPassword />
            </Route>
            <Route>
                <NotFound />
            </Route>
        </Switch>
    );
}
