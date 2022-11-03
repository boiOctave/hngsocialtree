import { lazy } from 'react';

import MainLayout from 'layout/MainLayout';
import Loadable from 'ui-component/Loadable';
import Contact from 'views/Contact';
// import Loadable from 'ui-component/Loadable';

// dashboard routing
const Main = Loadable(lazy(() => import('views/Main.js')));

// ==============================|| MAIN ROUTING ||============================== //

const MainRoutes = {
    path: '/',
    element: <MainLayout />,
    children: [
        {
            path: '/',
            element: <Main />,
        },
        {
            path: '/contact',
            element: <Contact />,
        },
    ],
};

export default MainRoutes;
