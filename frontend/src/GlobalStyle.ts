import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    html {
        --primary: #1976d2;
        --light: #63a4ff;
        --dark: #004ba0;
        --primaryGrey: #c2c2c2;
        --lightGrey: #f5f5f5;
        --darkGrey: #929292;

        --calendarprimary: #42a5f5;
        --calendarlight: #80d6ff;
        --calendardark: #0077c2;
        --calendarprimarygray: #f2f2f2;
        --calendardarkgray: #aeaeae;
    }

    body {
        margin: 0;
        font-family: Roboto, sans-serif;
    }
`;

export default GlobalStyle;
