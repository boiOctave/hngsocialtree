import { Button } from '@mui/material';
import React from 'react';

const Links = ({ name }) => {
    return (
        <Button
            variant='contained'
            disableElevation
            sx={{
                width: '80%',
                backgroundColor: '#EAECF0',
                color: '#101828',
                fontWeight: '700',
                fontFamily: 'Roboto Condensed',
            }}>
            {name}
        </Button>
    );
};

export default Links;
