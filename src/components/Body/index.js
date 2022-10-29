import { Box } from '@mui/system';
import React from 'react';
import Links from './Links';
import './Body.css';

const index = () => {
    return (
        <Box
            sx={{
                marginTop: '3rem',
                display: 'flex',
                flexDirection: 'column',
                gap: '1rem',
                justifyContent: 'center',
                alignItems: 'center',
            }}>
            <Links
                name={'Twitter Link'}
                id={'twitter'}
                link={'http://twitter.com/nonymoustechbro'}
            />
            <Links
                name={'Zuri Team'}
                id={'btn_zuri'}
                link={'http://training.zuri.team'}
            />
            <Links
                name={'Zuri Books'}
                id={'books'}
                link={'http://books.zuri.team'}
                title={
                    'Zuri Books: This is where you find Books about Designing and Coding'
                }
            />
            <Links
                name={'Phython Books'}
                id={'book__python'}
                link={
                    'http://books.zuri.team/phython-for-begineers?ref_id=OctaveMusic'
                }
                title={
                    'Phython Books : Are You a complete beginer in phython? are you stuck in tutorial hell? Then this is the only phython guide you will ever need to kickstart your journey into the world of phython programming '
                }
            />
            <Links
                name={'Background Checks for Coders'}
                id={'pitch'}
                link={'http://background.zuri.team'}
                title={
                    'We offer complete comprehensive backround checks for coders, with a 30 days money back guarantee'
                }
            />
            <Links
                name={'Design Books'}
                id={'book__design'}
                link={'http://books.zuri.team/design-rules'}
                title={
                    'You can get free design books from here to help start you journey into design'
                }
            />
        </Box>
    );
};

export default index;
