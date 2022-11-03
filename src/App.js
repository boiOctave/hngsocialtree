import { StyledEngineProvider } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline/CssBaseline';

import './App.css';

import Routes from 'routes';

function App() {
    return (
        <StyledEngineProvider injectFirst>
            <CssBaseline />
            <Routes />
        </StyledEngineProvider>
    );
}

export default App;
