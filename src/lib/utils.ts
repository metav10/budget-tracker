import { ExpenseItem } from './interfaces'

export const totalExpenses = (expenses: ExpenseItem[]) =>
    expenses.reduce((total, exp) => (total += exp.cost), 0)
