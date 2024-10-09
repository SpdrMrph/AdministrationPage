'use client'

import { CreateSearchWrapper } from './components/CreateSearchWrapper'
import { CreateIconWrapper } from './components/CreateIconWrapper'
import SearchIcon from '@mui/icons-material/Search'
import { CreateStyleInput } from './components/CreateStyleInput'
import React, { type FC } from 'react'
import { Button, Stack } from '@mui/material'

interface SearchInput {
    onChange?: (value: string) => void
    tokenList: { value: string; active: boolean }[]
}

export const SearchInput: FC<SearchInput> = () => {
    return (
        <Stack direction={'row'}>
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
                    sx={{
                        borderTopRightRadius: '0px',
                        borderBottomRightRadius: '0px',
                    }}
                />
            </CreateSearchWrapper>
            <Button variant={'contained'} sx={{ backgroundColor: 'orange' }}>
                Disable
            </Button>
        </Stack>
    )
}
