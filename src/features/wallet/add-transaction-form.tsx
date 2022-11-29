import { useRouter } from 'next/router'
import { FormEvent, useState } from 'react'
import styled from 'styled-components'
import { useAppDispatch } from '@/store/hooks'
import { createEntry } from '@/store/entry'

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

export const AddTransactionForm = () => {
    const [data, setData] = useState({
        value: 5,
        currency: '',
        method: '',
        category: '',
        description: '',
    })
    const dispatch = useAppDispatch()
    const router = useRouter()

    const handleInput = (target: HTMLInputElement) => {
        const name = target.name
        const value = target.value
        setData({ ...data, [name]: value })
    }

    const handleRegister = (e: FormEvent) => {
        e.preventDefault()
        dispatch(createEntry(data))
        router.push('/wallet')
    }

    return (
        <FormContainer onSubmit={(e) => handleRegister(e)}>
            <h1>Adicionar Despesa</h1>
            <FieldContainer>
                <FieldLabel>
                    <LabelText>Valor:</LabelText>
                    <FieldInput
                        name='value'
                        value={data.value}
                        type='number'
                        min={0}
                        step={0.01}
                        onInput={(e) => handleInput(e.target as HTMLInputElement)}
                        required
                    />
                </FieldLabel>

                <FieldLabel>
                    <LabelText>Método:</LabelText>
                    <FieldInput
                        name='method'
                        value={data.method}
                        type='text'
                        onInput={(e) => handleInput(e.target as HTMLInputElement)}
                        required
                    />
                </FieldLabel>
            </FieldContainer>

            <FieldLabel>
                <LabelText>Categoria:</LabelText>
                <FieldInput
                    name='category'
                    value={data.category}
                    type='text'
                    onInput={(e) => handleInput(e.target as HTMLInputElement)}
                    required
                />
            </FieldLabel>

            <FieldLabel>
                <LabelText>Description:</LabelText>
                <FieldInput
                    name='description'
                    value={data.description}
                    type='textarea'
                    onInput={(e) => handleInput(e.target as HTMLInputElement)}
                    required
                />
            </FieldLabel>

            <Anchors>
                <RegisterButton name='add-transaction' type='submit' value='CADASTRAR' />
                <BackButton href='/wallet'>VOLTAR</BackButton>
            </Anchors>
        </FormContainer>
    )
}
