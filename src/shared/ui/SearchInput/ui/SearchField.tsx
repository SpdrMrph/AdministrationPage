'use client'

import { CreateSearchWrapper } from './components/CreateSearchWrapper'
import { CreateIconWrapper } from './components/CreateIconWrapper'
import SearchIcon from '@mui/icons-material/Search'
import { CreateStyleInput } from './components/CreateStyleInput'

export const SearchField = () => {
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
            <CreateStyleInput
                options={{}}
                placeholder="Token"
                inputProps={{ 'aria-label': 'search' }}
            />
        </CreateSearchWrapper>
    )
}
