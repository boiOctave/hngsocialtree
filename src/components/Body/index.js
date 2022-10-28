import { Box } from '@mui/system';
import React from 'react';
import Links from './Links';

const index = () => {
    return (
        <Box
            sx={{
                marginTop: '3rem',
                display: 'flex',
                flexDirection: 'column',
                gap: '1rem',
                justifyContent: 'center',
                alignItems: 'center',
            }}>
            <Links name={'Twitter Link'} />
            <Links name={'Zuri Team'} />
            <Links name={'Zuri Books'} />
            <Links name={'Phython Books'} />
            <Links name={'Background Checks for Coders'} />
            <Links name={'Design Books'} />
        </Box>
    );
};

export default index;
