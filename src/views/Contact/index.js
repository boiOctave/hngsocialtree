import { Box, Typography } from '@mui/material';
import React from 'react';
import Form from './Form';

const Contact = () => {
    return (
        <Box
            sx={{
                margin: '50px auto',
                display: 'flex',
                justifyContent: 'center',
            }}>
            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                <Typography
                    variant='h5'
                    fontWeight={700}
                    fontFamily={`'Roboto Condensed',sans-serif`}
                    marginBottom='0.4rem'>
                    Contact Me
                </Typography>
                <Typography
                    variant='h6'
                    fontFamily={`'Roboto Condensed',sans-serif`}
                    fontSize='1rem'>
                    Hi there,Contact me to ask anything you have in mind.{' '}
                </Typography>
            </Box>
        </Box>
    );
};

export default Contact;
