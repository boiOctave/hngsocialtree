import { Box, Typography, Button } from '@mui/material';
import React from 'react';
import profile__img from '../../assets/images/191524445_485615882776435_2153808452692865499_n.jpg';
import camera__icon from '../../assets/images/camera-01.svg';
import './Header.css';

const ProfileImage = ({ name }) => {
    return (
        <Box
            sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'column',
                gap: '0.5rem',
                flex: '0.5',
                marginBottom: '4rem',
            }}>
            {/* <Avatar
                alt='Profile Image'
                id='profile__img'
                src={profile__img}
                sx={{ width: 56, height: 56 }}
            /> */}
            <div className='profile__img-container'>
                <Button
                    variant='outlined'
                    sx={{
                        width: '90px',
                        height: '90px',
                        borderRadius: '50%',
                        border: 'none',
                        '&:hover': {
                            border: 'none',
                        },
                        '&:focus': {
                            border: '3px solid #EBE9FE',
                        },
                    }}>
                    <img
                        src={profile__img}
                        alt='profile avatar'
                        id='profile__img'
                        className='profile__img'
                    />
                </Button>
                <img
                    src={camera__icon}
                    alt='profile avatar'
                    id='profile__img'
                    className='camera__icon'
                />
            </div>
            <Typography
                sx={{
                    fontFamily: `'Inter', sans-serif`,
                    fontWeight: '700',
                }}>
                {name}
            </Typography>
        </Box>
    );
};

export default ProfileImage;
