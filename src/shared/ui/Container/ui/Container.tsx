import type { FC, ReactNode } from 'react'
import s from './Container.module.scss'
import { clsx } from 'clsx'

interface ContainerProps {
    children: ReactNode
    className?: string
    size?: 'full'
}

export const Container: FC<ContainerProps> = (props) => {
    const { children, size = 'full', className } = props

    return (
        <div className={clsx(s.container, s[size], className)}>{children}</div>
    )
}
