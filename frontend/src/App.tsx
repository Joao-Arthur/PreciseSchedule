import { StrictMode } from 'react';
import { Provider } from 'react-redux';
import GlobalStyle from './GlobalStyle';
import Home from './Pages/Home';
import Calendar from './Pages/Calendar';
import SignIn from './Pages/SignIn';
import SignUp from './Pages/SignUp';
import BasePage from './Pages/BasePage';
import NotFound from './Pages/NotFound';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import configureStore from './Store';

const store = configureStore();

export default function App() {
    return (
        <StrictMode>
            <GlobalStyle />
            <Provider store={store}>
                <BrowserRouter>
                    <BasePage>
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
                            <Route>
                                <NotFound />
                            </Route>
                        </Switch>
                    </BasePage>
                </BrowserRouter>
            </Provider>
        </StrictMode>
    );
}
