import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface Entry {
    id: number
    value: number
    currency: string
    method: string
    category: string
    description: string
    date: Date
}

interface EntryState {
    entries: Entry[]
}

const initialState: EntryState = {
    entries: [],
}

export const entrySlice = createSlice({
    name: 'entry',
    initialState,
    reducers: {
        createEntry: (state, action: PayloadAction<Omit<Entry, 'id' | 'date'>>) => {
            const entryCount = state.entries.length
            const id = entryCount === 0 ? 0 : state.entries[entryCount - 1].id + 1

            state.entries.push({
                ...action.payload,
                date: new Date(),
                id,
            })
        },
    },
})

export const { createEntry } = entrySlice.actions

export default entrySlice.reducer
