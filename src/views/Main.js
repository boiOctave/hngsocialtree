import { Container, Typography } from '@mui/material';
import React from 'react';
import Header from '../components/Header';
import Body from '../components/Body/index';

const Main = () => {
    return (
        <Container maxWidth='lg' sx={{ margin: '4rem auto' }}>
            <Header />
            <Body />
        </Container>
    );
};

export default Main;
