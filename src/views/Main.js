import { Container, Typography } from '@mui/material';
import React from 'react';
import Header from '../components/Header';

const Main = () => {
    return (
        <Container maxWidth='lg' sx={{ margin: '4rem auto' }}>
            <Header />
        </Container>
    );
};

export default Main;
