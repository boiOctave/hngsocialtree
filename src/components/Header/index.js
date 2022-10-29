import { Box, Tooltip } from '@mui/material';
import React from 'react';
import MoreButton from './MoreButton';
import ProfileImage from './ProfileImage';
import ShareButton from './ShareButton';

const Header = () => {
    return (
        <Box
            sx={{
                display: 'flex',
                justifyContent: 'center',
                position: 'relative',
                alignItems: 'center',
            }}>
            <ProfileImage name={'Annette Black'} />
            <div className='tip'>
                {' '}
                <ShareButton />
            </div>

            <MoreButton />
        </Box>
    );
};

export default Header;
