import { Entry } from '@/store/entry'
import styled from 'styled-components'
import { TableEntry } from './transaction'

const MainContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    padding: ;
    border-top: 1px solid black;
`

export const TransactionTable = (props: { entries: Entry[] }) => {
    // TODO add delete / edit buttons
    return (
        <MainContainer id='transactionTable'>
            <TableEntry
                category='Categoria'
                value='Valor'
                description='Descrição'
                method='Método'
                date='Data'
            />

            {props.entries.map((entry) => (
                <TableEntry
                    category={entry.category}
                    value={entry.value.toLocaleString('pt-BR', {
                        style: 'currency',
                        currency: 'BRL',
                    })}
                    description={entry.description}
                    method={entry.method}
                    date={entry.date.toDateString()}
                />
            ))}
        </MainContainer>
    )
}
