import { Box } from '@mui/system';
import React from 'react';
import slack from '../../assets/images/slack.svg';
import footer from '../../assets/images/Container.svg';
import footer2 from '../../assets/images/Container2.svg';

import './Footer.css';

const index = () => {
    return (
        <>
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginTop: '3rem',
                }}>
                <img src={slack} alt='slack' className='slack__icon' />
            </Box>
            <Box
                className='footer__web'
                sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginBottom: '5rem',
                    marginTop: '1.7rem',
                }}>
                <img src={footer} alt='footer' />
            </Box>
            <Box
                className='footer__web2'
                sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginBottom: '5rem',
                    marginTop: '1.7rem',
                }}>
                <img src={footer2} alt='footer' />
            </Box>
        </>
    );
};

export default index;
