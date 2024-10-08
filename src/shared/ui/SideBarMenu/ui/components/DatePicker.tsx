import * as React from 'react'
import dayjs from 'dayjs'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { DatePicker } from '@mui/x-date-pickers/DatePicker'

export default function CustomFieldFormat() {
    return (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker
                label="Date Picker"
                format="YYYY/MM/DD"
                defaultValue={dayjs('2022-04-17')}
            />
        </LocalizationProvider>
    )
}
