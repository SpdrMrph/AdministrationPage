import React from 'react'
import { Badge, Box, IconButton, Menu, MenuItem } from '@mui/material'
import DatasetIcon from '@mui/icons-material/Dataset'
import { useAdminPanelState } from '@/views/log-page/AdminPanel.context'

export const MenuBtn = () => {
    const {
        selectedItem,
        handleClick,
        anchorEl,
        isOpen,
        handleClose,
        handleMenuItemClick,
    } = useAdminPanelState()

    return (
        <Box sx={{ position: 'relative', display: 'inline-block' }}>
            <IconButton onClick={(e) => handleClick(e)}>
                <Badge color="warning" badgeContent={selectedItem}>
                    <DatasetIcon fontSize="large" sx={{ color: 'snow' }} />
                </Badge>
            </IconButton>
            <Menu anchorEl={anchorEl} open={isOpen} onClose={handleClose}>
                <MenuItem
                    selected={selectedItem === 'Page'}
                    onClick={() => handleMenuItemClick('Page')}
                >
                    Profile
                </MenuItem>
                <MenuItem
                    selected={selectedItem === 'Dashboard'}
                    onClick={() => handleMenuItemClick('Dashboard')}
                >
                    My account
                </MenuItem>
                <MenuItem
                    selected={selectedItem === 'Statistics'}
                    onClick={() => handleMenuItemClick('Statistics')}
                >
                    Logout
                </MenuItem>
            </Menu>
        </Box>
    )
}
