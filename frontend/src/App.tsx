import GlobalStyle from './GlobalStyle';
import Calendar from './Pages/Calendar';
import SignIn from './Pages/SignIn';
import SignUp from './Pages/SignUp';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

const App = () => (
    <>
        <GlobalStyle />
        <BrowserRouter>
            <Switch>
                <Route exact path='/'>
                    <Calendar />
                </Route>
                <Route path='/signin'>
                    <SignIn />
                </Route>
                <Route path='/signup'>
                    <SignUp />
                </Route>
                <Route>pegadinha do malandro</Route>
            </Switch>
        </BrowserRouter>
    </>
);

export default App;
