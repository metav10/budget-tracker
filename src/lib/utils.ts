import { MONTHS } from './constant'
import { ExpenseItem } from './interfaces'

export const totalExpenses = (expenses: ExpenseItem[]) =>
    expenses.reduce((total, exp) => (total += exp.cost), 0)

export const printMongoDBDate = (getDate: string) => {
    const date = new Date(getDate)

    return date instanceof Date
        ? `${date.getDate()} ${MONTHS[date.getMonth()]}`
        : ''
}
