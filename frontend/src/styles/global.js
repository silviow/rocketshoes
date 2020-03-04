import { createGlobalStyle } from 'styled-components';
import background from '../assets/background.svg';

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
`;