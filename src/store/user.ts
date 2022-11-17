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

const getUserByEmail = (email: string, users: User[]): User | null => {
    const user = users.filter((user) => user.email === email)
    return user.length === 0 ? null : user[0]
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        register: (state, action: PayloadAction<User>) => {
            const isEmailAvailable = !getUserByEmail(action.payload.email, state.users)
            if (isEmailAvailable) {
                state.users.push(action.payload)
            }
        },

        login: (state, action: PayloadAction<Omit<User, 'name'>>) => {
            const user = getUserByEmail(action.payload.email, state.users)
            state.currentUser = user?.password === action.payload.password ? user : null
        },

        logout: (state) => { state.currentUser = null }
    }
})

export const { register, login, logout } = userSlice.actions

export default userSlice.reducer