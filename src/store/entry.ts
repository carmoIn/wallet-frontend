import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import exp from 'constants';

interface Entry {
    value: number
    currency: string
    method: string
    category: string
    description: string
}

interface EntryState {
    entries: Entry[]
}

const initialState: EntryState = {
    entries: []
}

export const entrySlice = createSlice({
    name: 'entry',
    initialState,
    reducers: {
        createEntry: (state, action: PayloadAction<Entry>) => {
            state.entries.push(action.payload)
        }
    }
})

export const { createEntry } = entrySlice.actions

export default entrySlice.reducer