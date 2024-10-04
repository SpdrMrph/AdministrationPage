import { Divider, Paper, Stack, Typography } from '@mui/material'
import { styled } from '@mui/material/styles'
import { useAdminPanelState } from '@/views/log-page/AdminPanel.context'

export const PaperArea = () => {
    const { selectedItem } = useAdminPanelState()

    const TextAreaPaper = styled(Paper)(({ theme }) => ({
        padding: theme.spacing(2),
        width: '100%',
        minHeight: '600px',
        ...theme.typography.body2,
        background: theme.palette.grey['300'],
        textAlign: 'left',
    }))

    return (
        <TextAreaPaper elevation={16}>
            <Stack direction={'column'} gap={'10px'}>
                <Typography>{selectedItem}</Typography>
                <Divider />
                <Typography>Some Text Two</Typography>
            </Stack>
        </TextAreaPaper>
    )
}
