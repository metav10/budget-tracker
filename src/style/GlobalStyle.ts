import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    html,
    body {
        height: 100%;
    }

    * {
        box-sizing: border-box;
        padding: 0;
        margin: 0;
    }

    a {
        text-decoration: none;
    }
`
