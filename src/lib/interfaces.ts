export interface InitialState {
    budget: number
    expenses: ExpenseItem[]
}
export interface ExpenseItem {
    id: number
    name: string
    cost: number
}
