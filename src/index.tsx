import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { AppProvider } from './context/AppContext'
import { GlobalStyle } from './style/GlobalStyle'

ReactDOM.render(
    <React.StrictMode>
        <GlobalStyle />
        <AppProvider>
            <App />
        </AppProvider>
    </React.StrictMode>,
    document.getElementById('root')
)
