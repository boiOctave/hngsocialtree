import { Box, Typography } from '@mui/material';
import React from 'react';
import profile__img from '../../assets/images/profile__img.png';
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
                gap: '1rem',
                flex: '0.5',
            }}>
            {/* <Avatar
                alt='Profile Image'
                id='profile__img'
                src={profile__img}
                sx={{ width: 56, height: 56 }}
            /> */}
            <div className='profile__img-container'>
                <img
                    src={profile__img}
                    alt='profile avatar'
                    id='profile__img'
                    className='profile__img'
                />
                <img
                    src={camera__icon}
                    alt='profile avatar'
                    id='profile__img'
                    className='camera__icon'
                />
            </div>
            <Typography
                sx={{
                    fontFamily: `'Roboto Condensed', sans-serif`,
                    fontWeight: '700',
                }}>
                {name}
            </Typography>
        </Box>
    );
};

export default ProfileImage;
