import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    html {
        --primary: #1976d2;
        --light: #63a4ff;
        --dark: #004ba0;
        
        --primaryGray: #c2c2c2;
        --lightGray: #f5f5f5;
        --darkGray: #929292;
        --defaultGray: #e8e8e8;

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

    #root {
        height: 100vh;
    }
`;

export default GlobalStyle;
