import { Box, CssBaseline } from '@mui/material';
import { useSelector } from 'react-redux';

import { NavBar } from './components/NavBar';
import { Header } from './components/Header';
import { MainContent } from './components/MainContent';

export default function MainView() {
    const { rol } = useSelector((state) => state.auth);

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
            <NavBar userRole={rol} />
            <MainContent />
        </Box>
    );
}
