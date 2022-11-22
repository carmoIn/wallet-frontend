import { Entry } from '@/store/entry'
import styled from 'styled-components'

const TotalInfo = styled.div`
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

    font-size: 32px;
`

export const Total = (props: { entries: Entry[] }) => {
    const getTotal = () => {
        const total = props.entries.reduce((accum, entry) => accum + entry.value, 0)

        return total.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
    }

    return <TotalInfo>Total: {getTotal()}</TotalInfo>
}
