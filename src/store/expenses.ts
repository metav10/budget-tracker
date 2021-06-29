import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { ExpenseItem } from '../lib/interfaces'
import initialState from './initialState'

const expensesSlice = createSlice({
    name: 'expenses',
    initialState: initialState.expenses,
    reducers: {
        updateExpenses: (state, action: PayloadAction<ExpenseItem[]>) =>
            action.payload,
        addExpense: (state, action: PayloadAction<ExpenseItem>) => {
            state.push(action.payload)
        },
        removeExpense: (state, action: PayloadAction<{ _id: string }>) =>
            state.filter(exp => exp._id !== action.payload._id),
    },
})

export const { updateExpenses, addExpense, removeExpense } =
    expensesSlice.actions
export default expensesSlice.reducer
