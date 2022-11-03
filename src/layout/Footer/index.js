import { Card, Typography } from '@mui/material';
import React from 'react';

const Footer = () => {
    return (
        <Card
            raised
            sx={{
                width: '100%',
                height: '60px',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: '#E9F7FF',
            }}>
            <Typography variant='body1' fontWeight={'500'} fontFamily='poppins'>
                {' '}
                © Design By JTECH
            </Typography>{' '}
        </Card>
    );
};

export default Footer;
