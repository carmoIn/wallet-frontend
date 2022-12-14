import React from 'react'
import { Provider } from 'react-redux';
import { SignUpForm } from "../../features/sign-up/Form";
import { store } from '../../store';

export default {
    title: "Components/SignUpForm",
    component: SignUpForm,
    decorators: [
        (Component: any) => {
            return <Provider store={store}>{Component()}</Provider>;
          },
    ]
}

export const SignUpFormComponent = () => <SignUpForm />