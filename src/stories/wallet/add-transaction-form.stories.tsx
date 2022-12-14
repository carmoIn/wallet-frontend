import React from 'react'
import { Provider } from 'react-redux';
import { AddTransactionForm } from '../../features/wallet/add-transaction-form';
import { store } from '../../store';

export default {
    title: "Components/AddTransactionForm",
    component: AddTransactionForm,
    decorators: [
        (Component: any) => {
            return <Provider store={store}>{Component()}</Provider>;
          },
    ]
}

export const AddTransactionFormComponent = () => <AddTransactionForm />