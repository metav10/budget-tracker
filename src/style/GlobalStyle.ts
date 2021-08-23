import { createGlobalStyle } from 'styled-components'
import { Colors } from './CssVars'

export const GlobalStyle = createGlobalStyle`
    html,
    body {
        height: 100%;
        background: #fafafa;
        font-family: Arial, Helvetica, sans-serif;
        color: ${Colors.MainBlack};
        max-width: 400px;
        margin: auto;
    }

    #root {
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
