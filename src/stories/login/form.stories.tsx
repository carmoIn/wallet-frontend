import React from 'react'
import { Provider } from 'react-redux';
import { LoginForm } from "../../features/login/Form";
import { store } from '../../store';

export default {
    title: "Components/LoginForm",
    component: LoginForm,
    decorators: [
        (Component: any) => {
            return <Provider store={store}>{Component()}</Provider>;
          },
    ]
}

export const LoginFormComponent = () => <LoginForm />