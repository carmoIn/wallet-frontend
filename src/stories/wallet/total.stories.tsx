import React from 'react'
import { Provider } from 'react-redux';
import { Total } from '../../features/wallet/total';
import { store } from '../../store';
import { Entry } from '../../store/entry';

export default {
    title: "Components/Total",
    component: Total,
    decorators: [
        (Component: any) => {
            return <Provider store={store}>{Component()}</Provider>;
          },
    ]
}

export const NoEntries = () => <Total entries={[]} />

const content: Entry[] = [{
    id: 0,
    value: 23,
    currency: "brl",
    method: "PIX",
    category: "Entretenimento",
    description: "Filme no Cinema",
    date: new Date()
}, {
    id: 1,
    value: 72,
    currency: "brl",
    method: "Dinheiro",
    category: "Entretenimento",
    description: "Jantar fora",
    date: new Date()
}]

export const WithEntries = () => <Total entries={content} />