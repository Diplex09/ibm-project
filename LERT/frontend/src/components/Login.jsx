import { Box, CssBaseline, Container } from '@mui/material';

import { Left } from './Login/Left';
import { Right } from './Login/Right';

const Login = () => {
    return (
        <Container component="main" maxWidth="false">
            <CssBaseline />
            <Box
                sx={{
                    width: '100%',
                    height: '100vh',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    backgroundColor: 'var(--cool-gray10)',
                }}
            >
                <Box
                    sx={{
                        width: '80%',
                        height: '70%',
                        display: 'flex',
                        alignItems: 'center',
                    }}
                >
                    <Left />
                    <Right />
                </Box>
            </Box>
        </Container>
    );
};

export default Login;
