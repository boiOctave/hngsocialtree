import { Button } from '@mui/material';
import React from 'react';

const Links = ({ name, id, link, title }) => {
    return (
        <Button
            component='a'
            target='_blank'
            href={link}
            id={id}
            title={title}
            variant='contained'
            disableElevation
            sx={{
                width: '80%',
                height: '43px',
                backgroundColor: '#EAECF0',
                color: '#101828',
                fontWeight: '700',
                fontSize: '13x',
                fontFamily: 'Roboto Condensed',

                '&:hover': {
                    backgroundColor: '#D0D5DD',
                },
                '&:focus': {
                    border: '2px solid #98A2B3',
                    backgroundColor: '#EAECF0',
                },
            }}>
            {name}
        </Button>
    );
};

export default Links;
