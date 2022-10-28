import { Container, Typography } from '@mui/material';
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Body from '../components/Body/index';

const Main = () => {
    return (
        <Container maxWidth='lg' sx={{ margin: '4rem auto' }}>
            <Header />
            <Body />
            <Footer />
        </Container>
    );
};

export default Main;
