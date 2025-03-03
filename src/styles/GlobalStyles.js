import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: Nunito, sans-serif;
        list-style: none;
    }

    a {
        text-decoration: none;
        color: #000;
    }
`;