export interface InitialState {
    budget: number
    expenses: ExpenseItem[]
}
export interface ExpenseItem {
    id: string
    name: string
    cost: number
}

export type Actions =
    | { type: ActionsTypes.ADD_EXPENSE; payload: ExpenseItem }
    | { type: ActionsTypes.REMOVE_EXPENSE; payload: { id: string } }

export enum ActionsTypes {
    ADD_EXPENSE = 'ADD_EXPENSE',
    REMOVE_EXPENSE = 'REMOVE_EXPENSE',
}
