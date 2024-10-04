import { ReactNode } from 'react';
import { SxProps, Theme } from '@mui/system';

export interface HeaderProps {
    children: ReactNode;
    position?: 'static' | 'fixed' | 'relative' | 'absolute' | 'sticky';
    sx?: SxProps<Theme>;
    className?: string;
}
