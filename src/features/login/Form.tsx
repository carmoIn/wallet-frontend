import { useRouter } from 'next/router'
import { FormEvent, useEffect, useState } from 'react'
import styled from 'styled-components'
import { useAppDispatch, useAppSelector } from '@/store/hooks'
import { login } from '@/store/user'

const InfoBox = styled.div`
    visibility: visible;
    height: 125px;
`

const FormContainer = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: space-around;

    background-color: #eeeeee;
    border: 5px solid #65dd63;
    border-radius: 5px;
    height: 75%;
    width: 25%;
    color: black;
    padding: 2em 3em;
`

const FieldContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1em;
`

const FieldLabel = styled.label`
    display: flex;
    flex-direction: column;
    gap: 0.5em;
`

const FieldInput = styled.input`
    border-radius: 5px;
    border: 3px solid #65dd63;
    height: 50px;
    padding: 0px 10px;
`

const LabelText = styled.p`
    font-size: 20px;
`

const Login = styled.input`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    color: black;
    background-color: #65dd63;
    border: 5px solid #65dd63;
    border-radius: 5px;
    width: 300px;
    height: 75px;

    cursor: pointer;

    font-weight: bold;
    font-size: 32px;
`

const SignUp = styled.a`
    color: #505050;
    cursor: pointer;

    font-size: 20px;
    text-decoration: underline;
`

const Anchors = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1em;
`

export const LoginForm = () => {
    const [credentials, setCredentials] = useState({ email: '', password: '' })
    const currentUser = useAppSelector((state) => state.user.currentUser)
    const dispatch = useAppDispatch()
    const router = useRouter()

    const handleInput = (target: HTMLInputElement) => {
        const name = target.name
        const value = target.value
        setCredentials({ ...credentials, [name]: value })
    }

    const handleLogin = (e: FormEvent) => {
        e.preventDefault()
        dispatch(login(credentials))
    }

    useEffect(() => {
        if (currentUser) {
            router.push('/wallet')
        }
    }, [currentUser])

    return (
        <FormContainer onSubmit={(e) => handleLogin(e)}>
            <InfoBox />
            <FieldContainer>
                <FieldLabel>
                    <LabelText>Email:</LabelText>
                    <FieldInput
                        name='email'
                        placeholder='placeholder@example.com'
                        value={credentials.email}
                        type='email'
                        onInput={(e) => handleInput(e.target as HTMLInputElement)}
                        required
                    />
                </FieldLabel>

                <FieldLabel>
                    <LabelText>Senha:</LabelText>
                    <FieldInput
                        name='password'
                        placeholder='********'
                        value={credentials.password}
                        type='password'
                        onInput={(e) => handleInput(e.target as HTMLInputElement)}
                        required
                    />
                </FieldLabel>
            </FieldContainer>

            <Anchors>
                <Login name='login' type='submit' value='LOGIN' />
                <SignUp href='/sign-up'>CADASTRAR</SignUp>
            </Anchors>
        </FormContainer>
    )
}
