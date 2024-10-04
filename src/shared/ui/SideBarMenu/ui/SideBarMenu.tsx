import { Box, Button, Stack, Typography } from '@mui/material'
import { Grid } from '@mui/system'
import { CheckBoxLabel } from '@/shared/ui/SideBarMenu/ui/ui/CheckBoxLabel'
import { DatePicker } from '@mui/x-date-pickers/DatePicker'
import CustomFieldFormat from '@/shared/ui/SideBarMenu/ui/ui/DatePicker'
import MessageSelector from '@/shared/ui/SideBarMenu/ui/ui/MessageSelector'

export const SideBarMenu = () => {
    return (
        <Grid
            container
            spacing={2}
            flexDirection={'column'}
            justifyContent={'space-between'}
            sx={{ height: '100%' }}
        >
            <Typography variant={'h4'}>Configuration:</Typography>
            <Stack direction={'column'} spacing={2}>
                <Typography variant={'body1'}>Type output message:</Typography>
                <CheckBoxLabel />
            </Stack>
            <Stack direction={'column'} spacing={2}>
                <CustomFieldFormat />
                <MessageSelector />
            </Stack>
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'flex-end',
                }}
            >
                <Stack direction={'column'} spacing={2}>
                    <Button variant="contained" color="primary">
                        Accept
                    </Button>
                    <Button disabled variant="contained" color="primary">
                        Export
                    </Button>
                </Stack>
            </Box>
        </Grid>
    )
}
