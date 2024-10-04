'use client'

import { Button, Typography } from '@mui/material'
import { CheckBoxLabel } from './components/CheckBoxLabel'
import CustomFieldFormat from './components/DatePicker'
import MessageSelector from './components/MessageSelector'
import s from './SideBar.module.scss'

export const SideBarMenu = () => {
    return (
        <div className={s['side-bar']}>
            <Typography variant={'h4'}>Configuration:</Typography>
            <Typography variant={'body1'}>Type output message:</Typography>
            <CheckBoxLabel />
            <CustomFieldFormat />
            <MessageSelector />

            <Button variant="contained" color="primary">
                Accept
            </Button>
            <Button disabled variant="contained" color="primary">
                Export
            </Button>
        </div>
    )
}
