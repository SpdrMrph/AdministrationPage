'use client'

import { Typography, AppBar } from '@mui/material'
import { SearchField } from '@/shared/ui/SearchInput'
import { MenuBtn } from '@/shared/ui/Menu'
import s from './s.module.scss'
import { useRouter } from 'next/navigation'
import { navigation } from '@/shared/consts/navigation'

const menuItems = [
    { label: 'Logs', value: 'logs' },
    { label: 'Statistics', value: 'statistics' },
    { label: 'Dashboards', value: 'dashboards' },
] as const

export const Header = () => {
    const router = useRouter()

    const navigate = {
        logs: () => router.push(navigation.logs),
        statistics: () => router.push(navigation.statistics),
        dashboards: () => router.push(navigation.dashboards),
    }

    return (
        <AppBar position="static" color="info">
            <div className={s.content}>
                <MenuBtn
                    items={menuItems}
                    onChange={(data) => {
                        navigate[data.value as keyof typeof navigate]()
                    }}
                />
                <Typography
                    variant="h6"
                    noWrap
                    component="div"
                    sx={{
                        display: { xs: 'none', sm: 'block' },
                        flexGrow: '1',
                    }}
                >
                    Administration panel | User: Ivan
                </Typography>
                <SearchField />
            </div>
        </AppBar>
    )
}
