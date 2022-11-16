import { Filters } from '@/features/wallet/filters'
import { TransactionTable } from '@/features/wallet/table'
import { Total } from '@/features/wallet/total'
import { useState } from 'react'
import styled from 'styled-components'

const MainContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    min-height: 100vh;
    width: 100%;
    padding-top: 3em;
`

const AddEntry = styled.a`
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
    text-decoration: none;
    font-size: 32px;
`

export default function Wallet() {
    const entries = [
        {
            id: 0,
            category: 'Entretenimento',
            value: 10.23,
            description: 'Cinema',
            method: 'PIX',
            date: new Date(),
        },
    ]

    const [filteredEntries, setFilteredEntries] = useState(entries)

    return (
        <MainContainer>
            <h1>Histórico de Gastos</h1>
            <div style={{ display: 'flex', justifyContent: 'space-between', width: '85%' }}>
                <Total entries={entries} />
                <AddEntry href='/wallet/add-transaction'>Adicionar Despesa</AddEntry>
            </div>
            <Filters entries={entries} setFilteredEntries={setFilteredEntries} />
            <TransactionTable entries={entries} />
        </MainContainer>
    )
}
