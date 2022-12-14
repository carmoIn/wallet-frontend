import React from 'react'
import { Provider } from 'react-redux';
import { TransactionTable } from '../../features/wallet/table';
import { store } from '../../store';
import { Entry } from '../../store/entry';

export default {
    title: "Components/TransactionTable",
    component: TransactionTable,
    decorators: [
        (Component: any) => {
            return <Provider store={store}>{Component()}</Provider>;
          },
    ]
}

export const Empty = () => <TransactionTable entries={[]} />

const content: Entry[] = [{
    id: 0,
    value: 23,
    currency: "brl",
    method: "PIX",
    category: "Entretenimento",
    description: "Filme no Cinema",
    date: new Date()
}]

export const WithEntries = () => <TransactionTable entries={content} />