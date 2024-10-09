'use client'

import { Typography, AppBar } from '@mui/material'
import { SearchInput } from '@/shared/ui/SearchInput'
import { MenuBtn } from './component/Menu'
import s from './s.module.scss'
import { useRouter } from 'next/navigation'
import { navigation } from '@/shared/consts/navigation'

const menuItems = [
    { label: 'Logs', value: '/' },
    { label: 'Statistics', value: '/statistics' },
    { label: 'Dashboards', value: '/dashboards' },
] as const

const personalToken = [
    {
        value: 'FlexToken',
        active: false,
    },
    {
        value: 'BoosterKey',
        active: false,
    },
    {
        value: 'PowerPass',
        active: false,
    },
]

export const Header = () => {
    const router = useRouter()

    const navigate = {
        Logs: () => router.push(navigation.logs),
        Statistics: () => router.push(navigation.statistics),
        Dashboards: () => router.push(navigation.dashboards),
    }

    return (
        <AppBar position="static" color="info">
            <div className={s.content}>
                <MenuBtn
                    items={menuItems}
                    onChange={(data) => {
                        navigate[data.label as keyof typeof navigate]()
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
                <SearchInput tokenList={personalToken} />
            </div>
        </AppBar>
    )
}
