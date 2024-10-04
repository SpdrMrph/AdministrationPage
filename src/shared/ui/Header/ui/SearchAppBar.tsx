import * as React from 'react'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import { SearchField } from '@/shared/ui/SearchInput/ui/SearchField'
import { MenuBtn } from '@/shared/ui/Menu'

const user = 'Ivan'

export const SearchAppBar = () => {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static" color={'info'}>
                <Toolbar
                    sx={{
                        gap: '25px',
                    }}
                >
                    <MenuBtn />
                    <Typography
                        variant="h6"
                        noWrap
                        component="div"
                        sx={{
                            display: { xs: 'none', sm: 'block' },
                            flexGrow: '1',
                        }}
                    >
                        Administration panel | User: {user}
                    </Typography>
                    <SearchField />
                </Toolbar>
            </AppBar>
        </Box>
    )
}
