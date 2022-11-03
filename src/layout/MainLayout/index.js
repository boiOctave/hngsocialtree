import { Box } from '@mui/system';
import Footer from 'components/Footer/index';
import React from 'react';
import { Outlet } from 'react-router-dom';

const MainLayout = () => {
    return (
        <Box
            sx={{
                width: '100%',
                minHeight: '100vh',
                backgroundColor: '#fff',
            }}>
            {' '}
            <Outlet />
            <Footer />
        </Box>
    );
};

export default MainLayout;
