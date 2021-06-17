import { createContext, useReducer } from 'react'
import { Actions, InitialState } from '../lib/interfaces'
import AppReducer from './AppReducer'

const initialState: InitialState = {
    user: {
        _id: '',
        username: '',
        budget: 0,
    },
    expenses: [],
}

export const AppContext = createContext<{
    state: InitialState
    dispatch: React.Dispatch<Actions>
}>({
    state: initialState,
    dispatch: () => null,
})

export const AppProvider: React.FC = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, initialState)

    return (
        <AppContext.Provider value={{ state, dispatch }}>
            {children}
        </AppContext.Provider>
    )
}
