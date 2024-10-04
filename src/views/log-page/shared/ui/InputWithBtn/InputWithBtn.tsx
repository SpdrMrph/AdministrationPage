'use client'
import React, { FC, useState } from 'react'
import { InputWithBtnProps } from './InputWithBtn.props'
import { Box, Button, TextField } from '@mui/material'

const InputWithBtn: FC<InputWithBtnProps> = ({
    placeholder,
    btnText,
    onSubmit,
}) => {
    const [inputValue, setInputValue] = useState('')

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.target.value)
    }
    const handleSubmit = () => {
        onSubmit(inputValue)
        setInputValue('')
    }
    return (
        <Box sx={{ display: 'flex', gap: 2 }}>
            <TextField
                variant="filled"
                id={'filled-basic'}
                label={placeholder}
                value={inputValue}
                onChange={handleChange}
                sx={{ flexGrow: 1 }}
            />
            <Button
                variant="contained"
                onClick={handleSubmit}
                disabled={!inputValue.trim()}
            >
                {btnText}
            </Button>
        </Box>
    )
}

export default InputWithBtn
