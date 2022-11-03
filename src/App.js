import { StyledEngineProvider } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline/CssBaseline';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Main from './views/Main';

function App() {
    return (
        <StyledEngineProvider injectFirst>
            <CssBaseline />
            <Routes>
                <Route path='/' element={<Main />} exact />
            </Routes>
            <Main />
        </StyledEngineProvider>
    );
}

export default App;
