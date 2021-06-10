import axios, { AxiosResponse } from 'axios'
import {
    GetExpensesApi,
    AddExpenseApi,
    ExpenseItem,
    RemoveExpenseApi,
    API_PATHS,
} from './lib/interfaces'

const baseUrl: string = 'http://localhost:9000'

export const getExpenses = async (): Promise<AxiosResponse<GetExpensesApi>> => {
    try {
        const expenses: AxiosResponse<GetExpensesApi> = await axios.get(
            baseUrl + API_PATHS.expenses
        )
        return expenses
    } catch (err) {
        throw new Error(err)
    }
}

export const addExpense = async (
    data: Omit<ExpenseItem, '_id'>
): Promise<AxiosResponse<AddExpenseApi>> => {
    try {
        const expense: Omit<ExpenseItem, '_id'> = {
            name: data.name,
            cost: data.cost,
        }
        const saveExpense: AxiosResponse<AddExpenseApi> = await axios.post(
            baseUrl + API_PATHS.addExpense,
            expense
        )
        return saveExpense
    } catch (err) {
        throw new Error(err)
    }
}

export const deleteTodo = async (
    _id: string
): Promise<AxiosResponse<RemoveExpenseApi>> => {
    try {
        const deletedExpense: AxiosResponse<RemoveExpenseApi> =
            await axios.delete(
                baseUrl + API_PATHS.deleteExpense.replace('$_id', _id)
            )
        return deletedExpense
    } catch (err) {
        throw new Error(err)
    }
}
