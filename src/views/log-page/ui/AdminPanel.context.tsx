'use client'

import React, {
    createContext,
    FC,
    ReactNode,
    useContext,
    useState,
} from 'react'

interface ContextProps {
    children: ReactNode
}

interface AdminPanelContextType {
    anchorEl: HTMLButtonElement | null
    selectedItem: string | null
    isOpen: boolean
    handleClick: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
    handleClose: () => void
    handleMenuItemClick: (item: string) => void
}

const AdminPanelContext = createContext<AdminPanelContextType>(
    {} as AdminPanelContextType,
)

export const AdminPanelProvider: FC<ContextProps> = ({ children }) => {
    const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null)
    const [selectedItem, setSelectedItem] = useState<string | null>(null)

    const isOpen = Boolean(anchorEl)

    const handleClick = (
        e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    ) => {
        setAnchorEl(e.target as HTMLButtonElement)
    }
    const handleClose = () => {
        setAnchorEl(null)
    }
    const handleMenuItemClick = (item: string) => {
        setSelectedItem(item)
        setAnchorEl(null)
    }

    return (
        <AdminPanelContext.Provider
            value={{
                anchorEl,
                selectedItem,
                isOpen,
                handleClick,
                handleClose,
                handleMenuItemClick,
            }}
        >
            {children}
        </AdminPanelContext.Provider>
    )
}

export const useAdminPanelState = () => useContext(AdminPanelContext)
