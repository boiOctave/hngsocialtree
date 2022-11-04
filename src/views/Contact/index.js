import { Box, Typography } from '@mui/material';
import React from 'react';
import Form from './Form';
import './Form.css';

const Contact = () => {
    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                marginTop: '6rem',
                justifyContent: 'center',
                alignItems: 'center',
            }}>
            <div className='contact__container'>
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
                    fontSize='1.1rem'
                    sx={{ letterSpacing: '0', marginBottom: '2rem' }}>
                    Hi there, contact me to ask anything you have in mind.{' '}
                </Typography>
                <Box>
                    {' '}
                    <Form />
                </Box>
            </div>
        </Box>
    );
};

export default Contact;
