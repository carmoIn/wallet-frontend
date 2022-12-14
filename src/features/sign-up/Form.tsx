import { useRouter } from 'next/router'
import { FormEvent, useState } from 'react'
import styled from 'styled-components'
import { useAppDispatch } from '../../store/hooks'
import { register } from '../../store/user'

const FormContainer = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;

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
    width: 100%;
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

const RegisterButton = styled.input`
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

const BackButton = styled.a`
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

export const SignUpForm = () => {
    const [credentials, setCredentials] = useState({ name: '', email: '', password: '' })
    const dispatch = useAppDispatch()
    const router = useRouter()

    const handleInput = (target: HTMLInputElement) => {
        const name = target.name
        const value = target.value
        setCredentials({ ...credentials, [name]: value })
    }

    const handleRegister = (e: FormEvent) => {
        e.preventDefault()
        dispatch(register(credentials))
        router.push('/')
    }

    return (
        <FormContainer onSubmit={(e) => handleRegister(e)}>
            <h1>Cadastrar Usúario</h1>
            <FieldContainer>
                <FieldLabel>
                    <LabelText>Nome:</LabelText>
                    <FieldInput
                        name='name'
                        placeholder='Jonathan Corwin'
                        value={credentials.name}
                        type='text'
                        onInput={(e) => handleInput(e.target as HTMLInputElement)}
                        required
                    />
                </FieldLabel>

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
                <RegisterButton name='sign-up' type='submit' value='CADASTRAR' />
                <BackButton href='/'>VOLTAR</BackButton>
            </Anchors>
        </FormContainer>
    )
}
