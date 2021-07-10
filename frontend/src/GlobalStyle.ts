import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    html {        
        --lighter: #a1e9ff;
        --light: #6ab7ff;
        --primary: #1e88e5;
        --dark: #005cb2;
        --darker:#003482;
       
        --lighterGray: #f5f5f5;
        --lightGray: #e8e8e8;
        --Gray: #ccc;
        --darkGray: #929292;
        --darkerGray: #333;
    }

    body {
        margin: 0;
        font-family: Roboto, sans-serif;
    }
`;

export default GlobalStyle;
