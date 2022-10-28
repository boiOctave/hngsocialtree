import { IconButton } from '@mui/material';
import React from 'react';
import share from '../../assets/images/Type=Share, State=Default.svg';

const ShareButton = () => {
    return (
        <IconButton aria-label='delete'>
            <img src={share} alt='share' />{' '}
        </IconButton>
    );
};

export default ShareButton;
