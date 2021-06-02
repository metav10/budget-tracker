import { Actions, ActionsTypes, InitialState } from '../lib/interfaces'

// export const ActionsDispatcher: Actions = {
//     addExpense: p => dispatch('addExpense', p),
// }

// export const actionsImpl: Actions = {
//     addExpense: p => {
//         return { ...newState }
//     },
// }

// export interface Actions {
//     addExpense: (payload: ExpenseItem) => InitialState
//     // removeExpense: (payload: { id: string }) => InitialState
// }

export default function AppReducer(
    state: InitialState,
    action: Actions
): InitialState {
    switch (action.type) {
        case ActionsTypes.ADD_EXPENSE:
            return {
                ...state,
                expenses: [action.payload, ...state.expenses],
            }
        case ActionsTypes.REMOVE_EXPENSE:
            return {
                ...state,
                expenses: state.expenses.filter(
                    exp => exp.id !== action.payload.id
                ),
            }
    }
}
