import { Box } from '@mui/system';
import React from 'react';
import Links from './Links';

const index = () => {
    return (
        <Box
            sx={{
                marginTop: '3rem',
                display: 'flex',
                justifyContent: 'center',
            }}>
            <Links name={'Twitter Link'} />
        </Box>
    );
};

export default index;
