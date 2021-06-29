import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { User } from '../lib/interfaces'
import initialState from './initialState'

const userSlice = createSlice({
    name: 'user',
    initialState: initialState.user,
    reducers: {
        logUser: (state, action: PayloadAction<User>) => action.payload,
    },
})

export const { logUser } = userSlice.actions
export default userSlice.reducer
