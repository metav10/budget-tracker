import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, Store, combineReducers, Reducer } from 'redux'
import { Provider } from 'react-redux'
import { GlobalStyle } from './style/GlobalStyle'
import App from './App'
import { InitialState } from './lib/interfaces'
import expensesReducer from './store/expenses'
import userReducer from './store/user'

const reducers = combineReducers({
    user: userReducer,
    expenses: expensesReducer,
})

const store: Store<InitialState> = createStore(
    reducers,
    //@ts-ignore
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

ReactDOM.render(
    <React.StrictMode>
        <GlobalStyle />
        <Provider store={store}>
            <App />
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
)
