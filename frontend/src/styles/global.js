import { createGlobalStyle } from 'styled-components';
import background from '../assets/background.svg';
import 'react-toastify/dist/ReactToastify.css';

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;
    }

    body {
        background: #191920 url(${background}) no-repeat center top;
        -webkit-font-smoothing: antialiazed !important;
    }

    body, input, button {
        font: 14px Roboto, sans-serif;
    }

    #root {
        margin: 0 auto;
        max-width: 1024px;
        padding: 0 20px 50px;
    }

    button {
        cursor: pointer;
    }

    .notification {
        padding: 5px 10px;
        border-radius: 8px;

        .Toastify__toast-body {
            padding: 0 5px;
        }
    }

    .info-notification {
        background: #7159c1;
    }
`;