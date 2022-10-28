import { IconButton } from '@mui/material';
import React from 'react';
import share from '../../assets/images/Type=Share, State=Default.svg';
import './Header.css';
const ShareButton = () => {
    return (
        <IconButton
            aria-label='delete'
            sx={{
                position: 'absolute',
                bottom: '5rem',
                width: '45px',
                height: '45px',
                right: '10rem',
                '&:focus': {
                    border: '3px solid #EBE9FE',
                },
            }}>
            <img src={share} alt='share' className='share__button' />{' '}
        </IconButton>
    );
};

export default ShareButton;
