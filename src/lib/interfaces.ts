export interface InitialState {
    budget: number
    expenses: ExpenseItem[]
}
export interface ExpenseItem {
    _id: string
    name: string
    cost: number
    createdAt?: string
    updatedAt?: string
}

export type Actions =
    | { type: ActionsTypes.UPDATE_EXPENSES; payload: ExpenseItem[] }
    | { type: ActionsTypes.ADD_EXPENSE; payload: ExpenseItem }
    | { type: ActionsTypes.REMOVE_EXPENSE; payload: { _id: string } }

export enum ActionsTypes {
    UPDATE_EXPENSES = 'UPDATE_EXPENSES',
    ADD_EXPENSE = 'ADD_EXPENSE',
    REMOVE_EXPENSE = 'REMOVE_EXPENSE',
}

//? API REQ
export enum API_PATHS {
    expenses = '/expenses',
    addExpense = '/add-expense',
    deleteExpense = '/delete-expense/$_id',
}

export interface GetExpensesApi {
    message: string
    status: string
    expenses: ExpenseItem[]
}

export interface AddExpenseApi {
    message: string
    status: string
    expenses: ExpenseItem[]
}

export interface RemoveExpenseApi {
    message: string
    status: string
    expenses: ExpenseItem[]
}
