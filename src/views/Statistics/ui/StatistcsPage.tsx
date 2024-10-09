'use client'

import { Paper, Stack, Typography } from '@mui/material'
import { useState } from 'react'
import { SideBar } from './components/SideBar'

export function StatisticsPage() {
    const [open, setOpen] = useState<boolean>(false)

    const handleClick = () => {
        setOpen(!open)
    }

    return (
        <Stack sx={{ position: 'relative' }} flexGrow={1} direction="column">
            <Stack
                spacing={2}
                direction="row"
                flexGrow={1}
                sx={{ padding: '10px 25px' }}
            >
                <Stack direction="column" flexGrow={1} spacing={1} pl={2}>
                    <Typography variant="body2" color="textSecondary">
                        Statistics
                    </Typography>
                    <Paper
                        sx={{ flexGrow: '1', borderColor: 'dimgrey' }}
                        variant="outlined"
                    />
                </Stack>
                <Stack direction="column" flexGrow={2} spacing={1}>
                    <Typography variant="body2" color="textSecondary">
                        Information
                    </Typography>
                    <Paper
                        sx={{ flexGrow: '1', borderColor: 'dimgrey' }}
                        variant="outlined"
                    />
                </Stack>
                <Stack direction="column" flexGrow={2} spacing={1}>
                    <Typography variant="body2" color="textSecondary">
                        Diagrams
                    </Typography>
                    <Paper
                        sx={{ flexGrow: '1', borderColor: 'dimgrey' }}
                        variant="outlined"
                    />
                </Stack>
            </Stack>
            <SideBar toggleOpen={handleClick} open={open} />
        </Stack>
    )
}
