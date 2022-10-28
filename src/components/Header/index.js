import { Box } from '@mui/material';
import React from 'react';
import ProfileImage from './ProfileImage';
import ShareButton from './ShareButton';

const Header = () => {
    return (
        <Box
            sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
            }}>
            <ProfileImage name={'Annette Black'} />
            <ShareButton />
        </Box>
    );
};

export default Header;
