import React from 'react'
import { Provider } from 'react-redux';
import { Filters } from '../../features/wallet/filters';
import { store } from '../../store';

export default {
    title: "Components/Filters",
    component: Filters,
    decorators: [
        (Component: any) => {
            return <Provider store={store}>{Component()}</Provider>;
          },
    ]
}
