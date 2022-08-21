import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    :root {
        --color-primary: #B4C33A;
        --color-primary-op05: rgba(180, 195, 58, 0.5);
        --color-primary-dark: #6C7424;
        --color-light: #FFFFFF;
        --color-dark: #000000;
    }
    *, 
    *::before, 
    *::after {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html {
        font-size: 62.5%;
        background-color: var(--color-dark);
        color: var(--color-light);
        font-family: 'Josefin Sans', sans-serif;
    }
`
