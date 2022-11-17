import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface User {
    name: string
    email: string
    password: string
}

interface UserState {
    users: User[]
    currentUser: User | null
}

const initialState: UserState = {
    users: [],
    currentUser: null
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        register: (state, action: PayloadAction<User>) => {
            state.users.push(action.payload)
        },

        login: (state, action: PayloadAction<Omit<User, 'name'>>) => {
            const user = state.users.filter((user) => user.email === action.payload.email)[0]
            state.currentUser = user.password === action.payload.password ? user : null
        },

        logout: (state) => { state.currentUser = null }
    }
})

export const { register, login, logout } = userSlice.actions

export default userSlice.reducer