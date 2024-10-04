import { CreateSearchWrapper } from '@/shared/ui/SearchInput/ui/ui/CreateSearchWrapper'
import { CreateIconWrapper } from '@/shared/ui/SearchInput/ui/ui/CreateIconWrapper'
import SearchIcon from '@mui/icons-material/Search'
import { CreateStyleInput } from '@/shared/ui/SearchInput/ui/ui/CreateStyleInput'
import * as React from 'react'

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
