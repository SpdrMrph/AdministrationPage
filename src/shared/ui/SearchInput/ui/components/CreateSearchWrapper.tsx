import { alpha, styled } from '@mui/material/styles'
import { FC, ReactNode } from 'react'

interface Options {
    // Example expression: bgColor: theme.palette.common.white
    bgColor: string
    // Example expression: bgColorHover: theme.palette.common.white
    bgColorHover: string
    opacity: number | 0.15
    opacityHover: number | 0.25
    breakPoints: 'xs' | 'sm' | 'md' | 'lg' | 'xl'
}

interface PropsInputWrapper {
    children: ReactNode
    options: Options
}

export const CreateSearchWrapper: FC<PropsInputWrapper> = ({
    options,
    children,
}) => {
    const { bgColor, bgColorHover, opacity, opacityHover, breakPoints } =
        options
    const Search = styled('div')(({ theme }) => {
        type TBgColorKeys = keyof typeof theme.palette.common
        return {
            position: 'relative',
            borderRadius: theme.shape.borderRadius,
            backgroundColor: alpha(
                theme.palette.common[bgColor as TBgColorKeys] || bgColor,
                opacity,
            ),
            '&:hover': {
                backgroundColor: alpha(
                    theme.palette.common[bgColorHover as TBgColorKeys] ||
                        bgColorHover,
                    opacityHover,
                ),
            },
            marginLeft: 0,
            width: '100%',
            [theme.breakpoints.up(breakPoints)]: {
                marginLeft: theme.spacing(1),
                width: 'auto',
            },
        }
    })

    return <Search>{children}</Search>
}
