import { SxProps, Theme, TypographyProps } from '@mui/system';

export interface ResponsiveTypographyProps extends TypographyProps {
    text: string;
    appearance?: string;
    sx?: SxProps<Theme>;
    className?: string;
}
