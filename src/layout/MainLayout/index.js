import { Box } from '@mui/system';
import Footer from 'components/Footer/index';
import React from 'react';
import { Outlet } from 'react-router-dom';

import './Main.css';
const MainLayout = () => {
    return (
        <Box className='main'>
            {' '}
            <Outlet />
            <Footer />
        </Box>
    );
};

export default MainLayout;
