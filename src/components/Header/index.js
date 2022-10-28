import { Box } from '@mui/material';
import React from 'react';
import ProfileImage from './ProfileImage';
import ShareButton from './ShareButton';

const Header = () => {
    return (
        <Box>
            <ProfileImage name={'Annette Black'} />
            <ShareButton />
        </Box>
    );
};

export default Header;
