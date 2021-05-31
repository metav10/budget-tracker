import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    html,
    body {
        height: 100%;
        background: #fafafa;
        font-family: Arial, Helvetica, sans-serif;
    }

    * {
        box-sizing: border-box;
        padding: 0;
        margin: 0;
    }

    a {
        text-decoration: none;
    }

    h1, h2 {
        padding: 20px;
        font-weight: 500;
    }
`
