import { FC } from 'react';
import { ResponsiveTypographyProps } from './ResponsiveTypography.props';
import { Typography } from '@mui/material';

const ResponsiveTypography: FC<ResponsiveTypographyProps> = ({
    text,
    sx,
    className,
}) => {
    return (
        <Typography variant={'body1'} sx={sx} className={className}>
            {text}
        </Typography>
    );
};

export default ResponsiveTypography;
