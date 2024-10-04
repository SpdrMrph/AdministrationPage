import { Stack } from '@mui/material'
import { ResToggleBtnGroup } from '@/views/log-page/shared/ui/ToggleBtn/ToggleBtnGroup'
import React, { useState } from 'react'

const SelectedPageBtn = () => {
    const [alignment, setAlignment] = useState<string | null>(null)
    const handleAlignment = (
        _event: React.MouseEvent<HTMLElement>,
        newAlignment: string | null,
    ) => {
        if (newAlignment) {
            options.map((item) =>
                item.value === newAlignment ? (item.active = true) : false,
            )
        }
        setAlignment(newAlignment)
    }

    const options = [
        {
            value: 'logs',
            label: 'Logs Page',
            active: false,
        },
        {
            value: 'statistic',
            label: 'Statistic Page',
            active: false,
        },
        {
            value: 'dashboards',
            label: 'Dashboards Page',
            active: false,
        },
        {
            value: 'users',
            label: 'Users Page',
            active: false,
        },
        {
            value: 'posts',
            label: 'Posts Page',
            active: false,
        },
        {
            value: 'anotherStatistic',
            label: 'Another Statistic Page',
            active: false,
        },
    ]

    return (
        <Stack direction={'row'}>
            <ResToggleBtnGroup
                sx={{
                    gap: '30px',
                    width: '100%',
                    justifyContent: 'space-between',
                    padding: '20px',
                }}
                alignment={alignment}
                onChange={handleAlignment}
                options={options}
            />
        </Stack>
    )
}

export default SelectedPageBtn
