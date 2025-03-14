import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: Nunito, sans-serif;
        list-style: none;
    }

    body {
        background-color: ${({ theme }) => theme.background};
        color: ${({ theme }) => theme.text};
        transition: background-color 0.3s ease, color 0.3s ease;
    }

    a {
        text-decoration: none;
        color: #000;
    }
`;