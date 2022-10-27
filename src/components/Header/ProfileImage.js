import { Avatar, Box, Typography } from '@mui/material';
import React from 'react';
import profile__img from '../../assets/images/profile__img.png';

const ProfileImage = ({ name }) => {
    return (
        <Box flex>
            <Avatar
                alt='Profile Image'
                id='profile__img'
                src={profile__img}
                sx={{ width: 56, height: 56 }}
            />
            <Typography>{name}</Typography>
        </Box>
    );
};

export default ProfileImage;
