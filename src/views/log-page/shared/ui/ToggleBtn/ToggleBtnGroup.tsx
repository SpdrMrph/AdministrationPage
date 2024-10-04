import React, { FC } from 'react'
import { ResToggleBtnProps } from '@/views/log-page/shared/ui/ToggleBtn/ToggleBtn.props'
import { ToggleButton, ToggleButtonGroup } from '@mui/material'
import { StyledEngineProvider } from '@mui/material/styles'
import s from './ToggleBtn.module.css'
import cn from 'classnames'
import { createTheme } from '@mui/system'
import { ThemeProvider } from '@mui/styles'

const theme = createTheme({
    palette: {
        primary: {
            '& .MuiToggleButton-root.Mui-selected': {
                backgroundColor: '#4CAF50', // Задаем цвет для нажатой кнопки
                color: '#FFF',
            },
        },
    },
})

export const ResToggleBtnGroup: FC<ResToggleBtnProps> = ({
    options,
    onChange,
    exclusive = true,
    alignment,
    sx,
}) => {
    return (
        <ThemeProvider theme={theme}>
            <ToggleButtonGroup
                exclusive={exclusive}
                value={alignment}
                onChange={onChange}
                sx={sx}
                fullWidth={true}
            >
                <StyledEngineProvider injectFirst={true}>
                    {options.map((option) => (
                        <ToggleButton
                            sx={{
                                '&.Mui-selected': {
                                    backgroundColor: '#4caf50',
                                    color: '#fff',
                                    '&:hover': {
                                        backgroundColor: '#6eaf6e',
                                    },
                                },
                            }}
                            className={cn(s.toggle)}
                            value={option.value}
                            key={option.value}
                        >
                            {option.label}
                        </ToggleButton>
                    ))}
                </StyledEngineProvider>
            </ToggleButtonGroup>
        </ThemeProvider>
    )
}
