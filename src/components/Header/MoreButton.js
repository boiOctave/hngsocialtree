import { IconButton } from '@mui/material';
import { Box } from '@mui/system';
import React, { useState } from 'react';
import more from '../../assets/images/Type=more, State=Default.svg';
import share from '../../assets/images/Type=Share, State=Default.svg';
import './Header.css';
const MoreButton = () => {
    const [visibility, SetVisibility] = useState('hidden');
    const onMore = () => {
        if (visibility === 'hidden') {
            SetVisibility('Visible');
        } else {
            SetVisibility('hidden');
        }
    };
    return (
        <div className='share__container'>
            <IconButton
                onClick={onMore}
                className='more__button-container'
                aria-label='delete'
                sx={{
                    position: 'absolute',
                    bottom: '2rem',
                    width: '45px',
                    height: '45px',
                    left: '5rem',

                    '&:focus': {
                        border: '3px solid #EBE9FE',
                    },
                }}>
                <img src={more} alt='share' className='more__button' />{' '}
            </IconButton>
            <Box
                className='share'
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '1rem',
                    backgroundColor: '#EAECF0',
                    padding: '0.2rem 1rem',
                    borderRadius: '1rem',
                    cursor: 'pointer',
                    position: 'absolute',
                    left: '-35px',
                    bottom: '-35px',
                    visibility: { visibility },
                }}>
                <img src={share} alt='share' className='mobile__share-button' />
                <span className='span'>Share Page</span>
            </Box>
        </div>
    );
};

export default MoreButton;
