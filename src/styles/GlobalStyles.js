import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    *, 
    *::before, 
    *::after {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html {
        font-size: 62.5%;
        background-color: #000;
        color: #fff;
        font-family: 'Josefin Sans', sans-serif;
    }
`