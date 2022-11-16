import { useState } from 'react'
import styled from 'styled-components'

interface Entry {
    id: number
    category: string
    value: number
    description: string
    method: string
    date: Date
}

const MainContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    padding: 2em 0;
    gap: 2em;
`

const FilterInput = styled.input`
    border-radius: 5px;
    border: 3px solid #eeeeee;
    background-color: #eeeeee;
    height: 70px;
    padding: 0px 10px;
    width: 100%;

    font-size: 25px;
`

const FilterLabel = styled.label`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.3em;
`

const LabelText = styled.p`
    font-size: 25px;
`

const TopFilters = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    width: 85%;
`

const CenterFilters = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    width: 85%;
    gap: 5em;
`

const BottomFilters = styled.div`
    display: flex;
    justify-content: space-evenly;
    gap: 2em;
    width: 100%;
`

export const Filters = (props: {
    entries: Entry[]
    setFilteredEntries: React.Dispatch<React.SetStateAction<Entry[]>>
}) => {
    const [filters, setFilters] = useState({
        description: '',
        method: '',
        minValue: 0,
        maxValue: undefined,
        category: '',
        startDate: undefined,
        endDate: undefined,
    })

    const handleInput = (target: HTMLInputElement) => {
        const name = target.name
        const value = target.value
        setFilters({ ...filters, [name]: value })
    }

    return (
        <MainContainer>
            <TopFilters>
                <FilterInput
                    style={{ width: '70%' }}
                    name='description'
                    placeholder='Pesquisar por Descrição'
                    value={filters.description}
                    type='text'
                    onInput={(e) => handleInput(e.target as HTMLInputElement)}
                />

                <FilterLabel>
                    <LabelText>Método</LabelText>
                    <FilterInput
                        name='method'
                        value={filters.method}
                        type='text'
                        onInput={(e) => handleInput(e.target as HTMLInputElement)}
                    />
                </FilterLabel>
            </TopFilters>

            <CenterFilters>
                <FilterLabel>
                    <LabelText>Valor Min</LabelText>
                    <FilterInput
                        name='minValue'
                        value={filters.minValue}
                        type='number'
                        onInput={(e) => handleInput(e.target as HTMLInputElement)}
                    />
                </FilterLabel>

                <FilterLabel style={{ flexGrow: 1 }}>
                    <LabelText>Categoria</LabelText>
                    <FilterInput
                        name='category'
                        value={filters.category}
                        type='text'
                        onInput={(e) => handleInput(e.target as HTMLInputElement)}
                    />
                </FilterLabel>

                <FilterLabel>
                    <LabelText>Valor Max</LabelText>
                    <FilterInput
                        name='maxValue'
                        value={filters.maxValue}
                        type='number'
                        onInput={(e) => handleInput(e.target as HTMLInputElement)}
                    />
                </FilterLabel>
            </CenterFilters>

            <BottomFilters>
                <FilterLabel>
                    <LabelText>Data Inicio</LabelText>
                    <FilterInput
                        name='startDate'
                        value={filters.startDate}
                        type='date'
                        onInput={(e) => handleInput(e.target as HTMLInputElement)}
                    />
                </FilterLabel>

                <FilterLabel>
                    <LabelText>Data Fim</LabelText>
                    <FilterInput
                        name='endDate'
                        value={filters.endDate}
                        type='date'
                        onInput={(e) => handleInput(e.target as HTMLInputElement)}
                    />
                </FilterLabel>
            </BottomFilters>
        </MainContainer>
    )
}
