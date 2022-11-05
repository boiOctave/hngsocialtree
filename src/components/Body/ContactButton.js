import { Button, Typography } from '@mui/material';
import React from 'react';
import share from '../../assets/images/Type=Share, State=Default.svg';
import './Body.css';

const ContactButton = ({ name, id, link, title }) => {
    return (
        <Button
            className='buttons'
            component='a'
            href={link}
            id={id}
            title={title}
            variant='contained'
            disableElevation
            sx={{
                textTransform: 'capitalize',
                width: '80%',
                height: '43px',

                backgroundColor: '#EAECF0',
                color: '#101828',
                fontWeight: '700',
                fontSize: '16x',
                fontFamily: 'Roboto Condensed',

                '&:hover': {
                    backgroundColor: '#D0D5DD',
                },
                '&:focus': {
                    border: '2px solid #98A2B3',
                    backgroundColor: '#EAECF0',
                },
            }}>
            <Typography className='links__text'>{name}</Typography>
            <img src={share} className='share__hover' alt={name} />
        </Button>
    );
};

export default ContactButton;
