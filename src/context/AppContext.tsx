import { createContext, useReducer } from 'react'
import { Actions, InitialState } from '../lib/interfaces'
import AppReducer from './AppReducer'

const initialState: InitialState = {
    budget: 2000,
    expenses: [
        { id: '12', name: 'shopping', cost: 40 },
        { id: '13', name: 'holiday', cost: 400 },
        { id: '14', name: 'car service', cost: 50 },
    ],
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
