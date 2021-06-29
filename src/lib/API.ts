import { AxiosResponse } from 'axios'
import {
    ExpenseItem,
    User,
    GetExpensesApi,
    AddExpenseApi,
    RemoveExpenseApi,
    GetUserApi,
    API_PATHS,
} from './interfaces'
import axios from './axios'

const pathWithUserId = (path: string, userId: string) =>
    path.replace(':userId', userId)
const pathWithId = (path: string, _id: string) => path.replace(':_id', _id)

export const getExpenses = async (
    userId: string
): Promise<AxiosResponse<GetExpensesApi>> => {
    try {
        const expenses: AxiosResponse<GetExpensesApi> = await axios.get(
            pathWithUserId(API_PATHS.expenses, userId)
        )
        return expenses
    } catch (err) {
        throw new Error(err)
    }
}

export const addExpense = async (
    data: Omit<ExpenseItem, '_id'>,
    userId: string
): Promise<AxiosResponse<AddExpenseApi>> => {
    try {
        const { name, cost } = data
        const expense: Omit<ExpenseItem, '_id' | 'userId'> = {
            name,
            cost,
        }
        const saveExpense: AxiosResponse<AddExpenseApi> = await axios.post(
            pathWithUserId(API_PATHS.addExpense, userId),
            expense
        )
        return saveExpense
    } catch (err) {
        throw new Error(err)
    }
}

export const deleteTodo = async (
    _id: string,
    userId: string
): Promise<AxiosResponse<RemoveExpenseApi>> => {
    try {
        const deletedExpense: AxiosResponse<RemoveExpenseApi> =
            await axios.delete(
                pathWithId(pathWithUserId(API_PATHS.deleteExpense, userId), _id)
            )
        return deletedExpense
    } catch (err) {
        throw new Error(err)
    }
}

export const getUser = async (
    loginInfo: Pick<User, 'username' | 'password'>
): Promise<AxiosResponse<GetUserApi>> => {
    try {
        const userData: AxiosResponse<GetUserApi> = await axios.post(
            API_PATHS.getUser,
            loginInfo
        )
        return userData
    } catch (err) {
        throw new Error(err)
    }
}
