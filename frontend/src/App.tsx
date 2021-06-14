import { StrictMode } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import GlobalStyle from './GlobalStyle';
import BasePage from './Pages/BasePage';
import Routes from './Pages/Routes';
import setupStore from './Store';
import { Toaster } from 'react-hot-toast';

const store = setupStore();

export default function App() {
    return (
        <StrictMode>
            <Toaster />
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
