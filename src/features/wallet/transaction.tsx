import styled from 'styled-components'

const Item = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0.5em 0;
    width: 100%;

    background-color: #eeeeee;
    border: 1px solid black;
    border-left: none;
    border-top: none;
    font-size: 32px;
`

export const TableEntry = (props: {
    category: string
    value: string
    description: string
    method: string
    date: string
}) => (
    <div style={{ display: 'flex', flexDirection: 'row' }}>
        <Item>{props.category}</Item>
        <Item>{props.value}</Item>
        <Item>{props.description}</Item>
        <Item>{props.method}</Item>
        <Item>{props.date}</Item>
    </div>
)
