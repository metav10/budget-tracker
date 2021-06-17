import { useContext, useEffect } from 'react'
import { getExpenses, getUser } from './API'
import AddExpenses from './components/AddExpenses/AddExpenses'
import ExpenseList from './components/ExpenseList/ExpenseList'
import Status from './components/Status/Status'
import { AppContext } from './context/AppContext'
import { ActionsTypes } from './lib/interfaces'

function App() {
    const { dispatch } = useContext(AppContext)

    useEffect(() => {
        ;(async function fetchUserData() {
            await getUser({
                username: 'metav',
                password: '1',
            })
                .then(async ({ data: { user } }) => {
                    dispatch({
                        type: ActionsTypes.USER_LOGGED,
                        payload: user,
                    })
                    await getExpenses(user._id)
                        .then(({ data: { expenses } }) =>
                            dispatch({
                                type: ActionsTypes.UPDATE_EXPENSES,
                                payload: expenses,
                            })
                        )
                        .catch((err: Error) => console.error(err))
                })
                .catch((err: Error) => console.error(err))
        })()
    }, [dispatch])

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
