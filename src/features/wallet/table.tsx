import { Entry } from '@/store/entry'
import styled from 'styled-components'

const MainContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    width: 100%;
    padding: ;
    border-top: 1px solid black;
`

const Item = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0.5em 0;

    background-color: #eeeeee;
    border: 1px solid black;
    border-left: none;
    border-top: none;
    font-size: 32px;
`

export const TransactionTable = (props: { entries: Entry[] }) => {
    // TODO add delete / edit buttons
    return (
        <MainContainer>
            <Item>Categoria</Item>
            <Item>Valor</Item>
            <Item>Descrição</Item>
            <Item>Método</Item>
            <Item>Data</Item>

            {props.entries.map((entry) => (
                <>
                    <Item>{entry.category}</Item>
                    <Item>{entry.value}</Item>
                    <Item>{entry.description}</Item>
                    <Item>{entry.method}</Item>
                    <Item>{entry.date.toDateString()}</Item>
                </>
            ))}
        </MainContainer>
    )
}
