import { configureStore } from '@reduxjs/toolkit';
import userReducer from '@/store/user'
import entryReducer from '@/store/entry'

export const store = configureStore({
    reducer: {
        user: userReducer,
        entry: entryReducer
    },
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch