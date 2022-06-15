import './App.css';
import React, { useEffect } from 'react';
import axios from 'axios';
import { Box, CssBaseline } from '@mui/material';

import './App.css';
import { AppRouter } from './router/AppRouter';

function App() {
    // const [getMessage, setGetMessage] = useState({});

    useEffect(() => {
        axios
            .get('/flask/hello')
            .then((response) => {
                console.log('SUCCESS', response);
                // setGetMessage(response);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);
    return (
        <Box
            sx={{
                fontFamily: 'IBM Plex Sans',
                width: '100vw',
                height: '100vh',
                '& .MuiContainer-root': {
                    padding: '0px',
                    fontFamily: 'IBM Plex Sans, sans-serif',
                },
                '& .MuiTypography-root': {
                    fontFamily: 'IBM Plex Sans, sans-serif',
                },
                '& .MuiTableCell-root': {
                    fontFamily: 'IBM Plex Sans, sans-serif',
                },
                '& .MuiInputBase-root': {
                    fontFamily: 'IBM Plex Sans, sans-serif',
                },
            }}
        >
            <CssBaseline />
            <AppRouter />
        </Box>
    );
}

export default App;
