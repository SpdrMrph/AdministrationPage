'use client'

import { CreateSearchWrapper } from './components/CreateSearchWrapper'
import { CreateIconWrapper } from './components/CreateIconWrapper'
import SearchIcon from '@mui/icons-material/Search'
import { CreateStyleInput } from './components/CreateStyleInput'
import { type FC } from 'react'

interface SearchInput {
    onChange?: (value: string) => void
}

export const SearchInput: FC<SearchInput> = () => {
    return (
        <CreateSearchWrapper
            options={{
                bgColor: 'white',
                bgColorHover: 'white',
                breakPoints: 'sm',
                opacity: 0.15,
                opacityHover: 0.25,
            }}
        >
            <CreateIconWrapper
                options={{ padding: { topBot: 0, rightLeft: 2 } }}
            >
                <SearchIcon />
            </CreateIconWrapper>
            {/* TODO: как прокинуть onChange, чтобы получать значения из поля?
             * Правильнее назвать компонент не СreateStyleInput, а CustomInput
             */}

            <CreateStyleInput
                options={{}}
                placeholder="Token"
                inputProps={{ 'aria-label': 'search' }}
            />
        </CreateSearchWrapper>
    )
}
