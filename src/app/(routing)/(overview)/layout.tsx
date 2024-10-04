import { TLayout } from '@/shared/types/layout'
import { Header } from '@/widgets/Header'
import { Container } from '@/shared/ui/Container'
import s from './s.module.scss'

export default function Layout({ children }: TLayout) {
    return (
        <Container className={s['main-layout']}>
            <Header />
            {children}
        </Container>
    )
}
