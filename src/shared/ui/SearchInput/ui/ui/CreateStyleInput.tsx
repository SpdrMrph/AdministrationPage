import { styled } from '@mui/material/styles'
import InputBase, { InputBaseProps } from '@mui/material/InputBase'

interface Options {
    color?: string
    width?: string
    customSpacing?: number
    placeholder?: string
}

interface PropsStyleInput extends InputBaseProps {
    options: Options
}

export const CreateStyleInput = ({ options, ...props }: PropsStyleInput) => {
    const { color = 'inherit', width = '100%', customSpacing = 1 } = options

    const StyledInputBase = styled(InputBase)(({ theme }) => ({
        color: color,
        width: width,
        '& .MuiInputBase-input': {
            padding: `theme.spacing(${customSpacing}, ${customSpacing}, ${customSpacing}, 0)`,
            paddingLeft: `calc(1em + ${theme.spacing(4)})`,
            transition: theme.transitions.create('width'),
            [theme.breakpoints.up('sm')]: {
                width: '12ch',
                '&:focus': {
                    width: '20ch',
                },
            },
        },
    }))

    return <StyledInputBase {...props} />
}
