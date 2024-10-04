import { ToggleButtonProps } from '@mui/material'
import { SxProps, Theme } from '@mui/system'

export interface ResToggleBtnProps extends Omit<ToggleButtonProps, 'value'> {
    options: { value: string; label: string; active: boolean }[]
    className?: string
    alignment: string | null
    sx?: SxProps<Theme>
    exclusive?: boolean
}
