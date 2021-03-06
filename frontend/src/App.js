import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import './config/ReactotronConfig';
import store from './store';
import Routes from './routes';
import GlobalStyle from './styles/global';
import Header from './components/Header';

function App() {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <Header />
                <Routes />
                <GlobalStyle />
                <ToastContainer autoClose={5000} />
            </BrowserRouter>
        </Provider>
    );
}

export default App;
