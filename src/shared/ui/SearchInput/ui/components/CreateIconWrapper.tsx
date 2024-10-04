import { styled } from '@mui/material/styles'
import { FC, ReactNode } from 'react'

interface Options {
    padding: { topBot: number; rightLeft: number }
    height?: string
}
interface CreateIconWrapperProps {
    children?: ReactNode
    options: Options
}

export const CreateIconWrapper: FC<CreateIconWrapperProps> = ({
    options,
    children,
}) => {
    const { padding, height = '100%' } = options
    const SearchIconWrapper = styled('div')(({ theme }) => ({
        padding: theme.spacing(padding.topBot, padding.rightLeft),
        height: height,
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    }))

    return <SearchIconWrapper>{children}</SearchIconWrapper>
}
