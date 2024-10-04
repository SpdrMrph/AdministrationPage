'use client'
import { Container } from '@/shared/ui/Container'
import { SearchAppBar } from '@/shared/ui/Header'
import { PaperArea } from '@/shared/ui/PaperArea'
import { AdminPanelProvider } from '@/views/log-page/AdminPanel.context'
import s from '../../shared/ui/Container/ui/Container.module.css'
import { SideBarMenu } from '@/shared/ui/SideBarMenu'
import { Grid } from '@mui/system'

const LogsPage = () => {
    return (
        <Container className={s.container}>
            <AdminPanelProvider>
                <SearchAppBar />
                <Grid
                    container
                    spacing={3}
                    flexDirection="row"
                    sx={{ padding: '30px' }}
                >
                    <Grid size={{ xs: 12, md: 8, lg: 9 }}>
                        <PaperArea />
                    </Grid>
                    <Grid size={{ xs: 12, md: 4, lg: 3 }}>
                        <SideBarMenu />
                    </Grid>
                </Grid>
            </AdminPanelProvider>
        </Container>
    )
}

export default LogsPage
