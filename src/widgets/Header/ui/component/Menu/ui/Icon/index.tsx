import { Badge, IconButton } from '@mui/material'
import DatasetIcon from '@mui/icons-material/Dataset'
import { memo, type FC, type MouseEventHandler } from 'react'

interface IconProps {
    onClick?: MouseEventHandler<HTMLButtonElement>
    label: string
}

export const Icon: FC<IconProps> = memo((props) => {
    const { onClick, label } = props

    return (
        <IconButton onClick={onClick}>
            <Badge
                badgeContent={<p style={{ textWrap: 'nowrap' }}>{label}</p>}
                color="warning"
            >
                <DatasetIcon fontSize="large" sx={{ color: 'snow' }} />
            </Badge>
        </IconButton>
    )
})

Icon.displayName = 'Icon'
