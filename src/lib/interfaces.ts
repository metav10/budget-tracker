export interface InitialState {
    user: User
    expenses: ExpenseItem[]
}
export interface ExpenseItem {
    _id: string
    name: string
    cost: number
    userId: string
    createdAt?: string
    updatedAt?: string
}

export interface User {
    _id: string
    username: string
    password?: string
    budget: number
    createdAt?: string
    updatedAt?: string
}

export type ActivePage = 'home' | 'stats' | 'user'

//? API REQ
export enum API_PATHS {
    expenses = '/expenses/:userId',
    addExpense = '/expenses/:userId/add',
    deleteExpense = '/expenses/:userId/delete/:_id',
    getUser = '/users',
}
interface BaseApiTypes {
    message: string
    status: string
}
export interface GetExpensesApi extends BaseApiTypes {
    expenses: ExpenseItem[]
}

export interface AddExpenseApi extends BaseApiTypes {
    expenses: ExpenseItem[]
}

export interface RemoveExpenseApi extends BaseApiTypes {
    expenses: ExpenseItem[]
}

export interface GetUserApi extends BaseApiTypes {
    user: User
}
