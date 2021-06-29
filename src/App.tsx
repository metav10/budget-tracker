import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { getExpenses, getUser } from './lib/API'
import AddExpenses from './components/AddExpenses/AddExpenses'
import ExpenseList from './components/ExpenseList/ExpenseList'
import Status from './components/Status/Status'
import { logUser } from './store/user'
import { updateExpenses } from './store/expenses'

function App() {
    const dispatch = useDispatch()

    useEffect(() => {
        ;(async function fetchUserData() {
            await getUser({
                username: 'metav',
                password: '1',
            })
                .then(async ({ data: { user } }) => {
                    dispatch(logUser(user))
                    await getExpenses(user._id)
                        .then(({ data: { expenses } }) =>
                            dispatch(updateExpenses(expenses))
                        )
                        .catch((err: Error) => console.error(err))
                })
                .catch((err: Error) => console.error(err))
        })()
    }, [])

    return (
        <>
            <div>
                <h1>Budget Tracker</h1>
                <Status />
                <h2>Add Expense</h2>
                <AddExpenses />
                <h2>Expenses</h2>
                <ExpenseList />
            </div>
        </>
    )
}

export default App
