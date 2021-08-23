import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { getExpenses, getUser } from './lib/API'
import Home from './modals/home/Home'
import { logUser } from './store/user'
import { updateExpenses } from './store/expenses'
import NavBar from './components/NavBar/NavBar'

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
    }, [dispatch])

    return (
        <>
            <Home />
            <NavBar activePage={'home'} />
        </>
    )
}

export default App
