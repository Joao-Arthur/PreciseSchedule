import { Switch, Route } from 'react-router-dom';
import Home from './Home';
import Calendar from './Calendar';
import SignIn from './SignIn';
import SignUp from './SignUp';
import NotFound from './NotFound';
import Settings from './Settings';
import ForgotPassword from './ForgotPassword';

export default function Routes() {
    return (
        <Switch>
            <Route exact path='/'>
                <Home />
            </Route>
            <Route path='/calendar'>
                <Calendar />
            </Route>
            <Route path='/signin'>
                <SignIn />
            </Route>
            <Route path='/signup'>
                <SignUp />
            </Route>
            <Route path='/settings'>
                <Settings />
            </Route>
            <Route path='/password/forgot'>
                <ForgotPassword />
            </Route>
            <Route path='/password/new'>
                <ForgotPassword />
            </Route>
            <Route>
                <NotFound />
            </Route>
        </Switch>
    );
}
