import {
    Box,
    IconButton,
    Paper,
    ToggleButton,
    ToggleButtonGroup,
    Typography,
} from '@mui/material'
import { type FC } from 'react'
import { ArrowRightIcon } from '@mui/x-date-pickers'

interface SideBarProps {
    open?: boolean
    toggleOpen: () => void
}

export const SideBar: FC<SideBarProps> = (props) => {
    const { open, toggleOpen } = props

    return (
        <div
            style={{
                height: '100%',
                position: 'absolute',
                left: 0,
                pointerEvents: 'none',
            }}
        >
            <Paper
                sx={{
                    height: '100%',
                    left: open ? 0 : '-100%',
                    transition: 'var(--transition-1)',
                    padding: '20px',
                    position: 'relative',
                    pointerEvents: 'all',
                }}
                elevation={4}
            >
                <Box>
                    <Typography variant={'body2'}>Period</Typography>
                    <ToggleButtonGroup orientation={'horizontal'}>
                        <ToggleButton value={'Day'}>Day</ToggleButton>
                        <ToggleButton value={'Day'}>Day</ToggleButton>
                        <ToggleButton value={'Day'}>Day</ToggleButton>
                        <ToggleButton value={'Day'}>Day</ToggleButton>
                    </ToggleButtonGroup>
                </Box>
                <Button open={open} toggleOpen={toggleOpen} />
            </Paper>
        </div>
    )
}

function Button({ toggleOpen, open }: SideBarProps) {
    return (
        <IconButton
            onClick={toggleOpen}
            sx={{
                borderRadius: '0px',
                position: 'absolute',
                left: '100%',
                top: 0,
                height: '100%',
            }}
            edge={'end'}
            color={'info'}
            size={'small'}
        >
            <ArrowRightIcon sx={{ transform: open ? 'rotate(180deg)' : '' }} />
        </IconButton>
    )
}
