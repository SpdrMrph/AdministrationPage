import React, { FC } from 'react'
import { HeaderProps } from '@/views/log-page/shared/ui/Header/header.props'
import { AppBar, Box, Toolbar } from '@mui/material'

const Header: FC<HeaderProps> = ({
    children,
    position = 'static',
    sx,
    className,
}) => {
    const childrenArray = React.Children.toArray(children)
    const childrenCount = childrenArray.length
    const justifyContent =
        childrenCount === 1
            ? 'center'
            : childrenCount === 2
              ? 'space-between'
              : 'flex-start'
    return (
        <AppBar position={position} sx={sx} className={className}>
            <Toolbar variant={'dense'}>
                <Box
                    sx={{
                        display: 'flex',
                        width: '100%',
                        justifyContent,
                        alignItems: 'center',
                    }}
                >
                    {childrenArray.map((child, index) => (
                        <Box key={index} sx={{ ml: index > 0 ? 2 : 0 }}>
                            {child}
                        </Box>
                    ))}
                </Box>
            </Toolbar>
        </AppBar>
    )
}

export default Header
