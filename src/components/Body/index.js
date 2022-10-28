import { Box } from '@mui/system';
import React from 'react';
import Links from './Links';

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
            />
            <Links
                name={'Phython Books'}
                id={'book__python'}
                link={
                    'http://books.zuri.team/phython-for-begineers?ref_id=OctaveMusic'
                }
            />
            <Links
                name={'Background Checks for Coders'}
                id={'pitch'}
                link={'http://background.zuri.team'}
            />
            <Links
                name={'Design Books'}
                id={'book__design'}
                link={'http://books.zuri.team/design-rules'}
            />
        </Box>
    );
};

export default index;
