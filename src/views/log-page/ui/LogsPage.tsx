import { AdminPanelProvider } from './AdminPanel.context'
import { SideBarMenu } from '@/shared/ui/SideBarMenu'
import s from './LogsPage.module.scss'

export const LogsPage = () => {
    return (
        <div className={s.page}>
            <AdminPanelProvider>
                <div className={s['log-screen']}>Left col</div>
                <SideBarMenu />
            </AdminPanelProvider>
        </div>
    )
}
