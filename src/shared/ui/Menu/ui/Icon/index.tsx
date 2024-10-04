import { Badge, IconButton } from '@mui/material'
import DatasetIcon from '@mui/icons-material/Dataset'
import { type FC } from 'react'

interface IconProps {
    onClick?: () => void
    label: string
}

export const Icon: FC<IconProps> = (props) => {
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
}
