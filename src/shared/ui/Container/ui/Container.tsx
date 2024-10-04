import { FC, ReactNode } from 'react'

interface ContainerProps {
    children: ReactNode
    className?: string
}

export const Container: FC<ContainerProps> = (props) => {
    const { children, className } = props
    return <div className={className}>{children}</div>
}
