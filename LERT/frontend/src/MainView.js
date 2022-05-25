import { Box, CssBaseline } from '@mui/material';

import { NavBar } from './components/NavBar';
import { Header } from './components/Header';
import { MainContent } from './components/MainContent';

export default function MainView() {
    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                width: '100%',
                height: '100%',
            }}
        >
            <CssBaseline />
            <Header />
            <NavBar />
            <MainContent />
        </Box>
    );
}
