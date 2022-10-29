import { IconButton, Tooltip } from '@mui/material';
import React from 'react';
import more from '../../assets/images/Type=more, State=Default.svg';
import './Header.css';
const MoreButton = () => {
    return (
        <IconButton
            className='more__button-container'
            aria-label='delete'
            sx={{
                position: 'absolute',
                bottom: '5rem',
                width: '45px',
                height: '45px',
                right: '0rem',
                '&:focus': {
                    border: '3px solid #EBE9FE',
                },
            }}>
            <img src={more} alt='share' className='more__button' />{' '}
        </IconButton>
    );
};

export default MoreButton;
