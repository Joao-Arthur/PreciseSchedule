import { StrictMode } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import GlobalStyle from './GlobalStyle';
import BasePage from './Pages/BasePage';
import Routes from './Pages/Routes';
import setupStore from './Store';
import { Toaster } from 'react-hot-toast';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';

const queryClient = new QueryClient();
const store = setupStore();

export default function App() {
    return (
        <StrictMode>
            <QueryClientProvider client={queryClient}>
                <Toaster />
                <GlobalStyle />
                <ReactQueryDevtools initialIsOpen={false} />
                <Provider store={store}>
                    <BrowserRouter>
                        <BasePage>
                            <Routes />
                        </BasePage>
                    </BrowserRouter>
                </Provider>
            </QueryClientProvider>
        </StrictMode>
    );
}
