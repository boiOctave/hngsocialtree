import { IconButton } from '@mui/material';
import React from 'react';
import share from '../../assets/images/Type=Share, State=Default.svg';
import './Header.css';
const ShareButton = () => {
    return (
        <IconButton
            aria-label='delete'
            sx={{ position: 'absolute', bottom: '5rem', right: '10rem' }}>
            <img src={share} alt='share' className='share__button' />{' '}
        </IconButton>
    );
};

export default ShareButton;
