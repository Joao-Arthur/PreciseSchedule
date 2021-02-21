import { StrictMode } from 'react';
import { Provider } from 'react-redux';
import GlobalStyle from './GlobalStyle';
import BasePage from './Pages/BasePage';
import Routes from './Pages/Routes';
import { BrowserRouter } from 'react-router-dom';
import configureStore from './Store';

const store = configureStore();

export default function App() {
    return (
        <StrictMode>
            <GlobalStyle />
            <Provider store={store}>
                <BrowserRouter>
                    <BasePage>
                        <Routes />
                    </BasePage>
                </BrowserRouter>
            </Provider>
        </StrictMode>
    );
}
