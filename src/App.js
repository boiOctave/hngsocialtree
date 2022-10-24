import { StyledEngineProvider } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline/CssBaseline';
import './App.css';
import Main from './views/Main';

function App() {
    return (
        <StyledEngineProvider injectFirst>
            <CssBaseline />
            <Main />
        </StyledEngineProvider>
    );
}

export default App;
