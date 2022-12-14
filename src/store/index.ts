import { configureStore } from '@reduxjs/toolkit';
import userReducer from './user'
import entryReducer from './entry'

export const store = configureStore({
    reducer: {
        user: userReducer,
        entry: entryReducer
    },
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch