import { Box } from '@mui/material';
import { ExpensesTypes } from './OPManager/ExpensesTypes';
import { AdminRouter } from '../router/Roles Routers/AdminRouter';
import { ManagerRouter } from '../router/Roles Routers/ManagerRouter';

export const MainContent = () => {
    return (
        <Box
            component="main"
            sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                flexGrow: 1,
                bgcolor: '#f2f4f8',
                color: '#000',
                mr: '3.5rem', // Navbar width}
                mt: '65px',
                p: '2rem 4rem',
            }}
        >
            <Box sx={{ width: '100%', height: '100%' }}>
                <ManagerRouter />
            </Box>
        </Box>
    );
};
