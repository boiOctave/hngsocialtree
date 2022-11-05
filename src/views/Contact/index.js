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
                marginTop: '3rem',
                justifyContent: 'center',
                alignItems: 'center',
            }}>
            <div className='contact__container'>
                <Typography
                    variant='h5'
                    sx={{
                        color: '#101828',
                        fontSize: '35px',
                        letterSpacing: '-0.05em',
                    }}
                    fontWeight={600}
                    fontFamily={`'Inter', sans-serif`}
                    marginBottom='0.4rem'>
                    Contact Me
                </Typography>
                <Typography
                    fontWeight={400}
                    variant='h6'
                    fontFamily={`'Inter', sans-serif`}
                    fontSize='1.1rem'
                    sx={{
                        fontSize: '18px',

                        marginBottom: '2rem',
                        color: '#101828',
                    }}>
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
