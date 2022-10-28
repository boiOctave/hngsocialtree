import { Box } from '@mui/system';
import React from 'react';
import slack from '../../assets/images/slack.svg';
import './Footer.css';

const index = () => {
    return (
        <Box
            sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                marginTop: '3rem',
            }}>
            <img src={slack} alt='slack' className='slack__icon' />
        </Box>
    );
};

export default index;
