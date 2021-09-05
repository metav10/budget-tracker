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

export enum tags {
    'Food',
    'Entertament',
    'Going Out',
}

type tagsInterface = {
    [tag in tags]: string
}

export const tagsAndColors: tagsInterface = {
    [tags['Food']]: '#443322',
    [tags['Entertament']]: '#223344',
    [tags['Going Out']]: '#903441',
}

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
