import {
    Box,
    CssBaseline,
    Container,
    Avatar,
    Typography,
    TextField,
    FormControlLabel,
    Checkbox,
    Button,
    Grid,
    Link,
    CardMedia,
} from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { useState } from 'react';
import { useDispatch } from 'react-redux';

import { startLogin } from '../actions/auth';

const Login = () => {
    const dispatch = useDispatch();

    const [user, setUser] = useState('');
    const [password, setPassword] = useState('');

    const validLogin = (e) => {
        e.preventDefault();
        dispatch(startLogin(user, password));
    };

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
                    backgroundColor: '#f2f4f8',
                }}
            >
                <Box
                    sx={{
                        width: '80%',
                        height: '70%',
                        display: 'flex',
                        alignItems: 'center',
                        boxShadow: '0 10px 50px #9a9a9a',
                    }}
                >
                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            justifyContent: 'center',
                            width: '50%',
                            height: '100%',
                            backgroundColor: '#ffffff',
                        }}
                    >
                        <Avatar sx={{ m: 1, bgcolor: '#000D4B' }}>
                            <LockOutlinedIcon />
                        </Avatar>
                        <Typography component="h1" variant="h5">
                            Sign in
                        </Typography>

                        <Box
                            component="form"
                            noValidate
                            sx={{ mt: 1, width: '70%' }}
                        >
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                id="email"
                                label="Email Address"
                                name="email"
                                autoComplete="email"
                                autoFocus
                                onChange={(e) => {
                                    setUser(e.target.value);
                                }}
                            />
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                name="password"
                                label="Password"
                                type="password"
                                id="password"
                                onChange={(e) => {
                                    setPassword(e.target.value);
                                }}
                                autoComplete="current-password"
                            />
                            <FormControlLabel
                                control={
                                    <Checkbox
                                        value="remember"
                                        color="primary"
                                    />
                                }
                                label="Remember me"
                            />
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                onClick={validLogin}
                                sx={{
                                    mt: 3,
                                    mb: 2,
                                    borderRadius: '0px',
                                    bgcolor: '#0062ff',
                                    ':hover': {
                                        bgcolor: '#0255DA',
                                    },
                                }}
                            >
                                Sign In
                            </Button>
                            <Grid container>
                                <Grid item xs>
                                    <Link href="#" variant="body2">
                                        Forgot password?
                                    </Link>
                                </Grid>
                            </Grid>
                        </Box>
                    </Box>
                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            justifyContent: 'center',
                            width: '50%',
                            height: '100%',
                            backgroundColor: '#000D4B',
                            color: '#ffffff',
                        }}
                    >
                        <Box
                            sx={{
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                            }}
                        >
                            <Box sx={{ width: '110px', marginRight: '20px' }}>
                                <CardMedia
                                    component="img"
                                    sx={{
                                        width: 160,
                                    }}
                                    image="/assets/ibmBW.png"
                                    alt="IBM"
                                />
                            </Box>

                            <Typography
                                variant="h3"
                                sx={{ fontWeight: 'bold' }}
                            >
                                LERT
                            </Typography>
                        </Box>
                        <Box
                            sx={{
                                width: '80%',
                                height: '2px',
                                marginTop: '20px',
                                marginBottom: '20px',
                                backgroundColor: '#ffffff',
                            }}
                        ></Box>
                        <Typography component="p">
                            Labor Expenses Recovery Tool
                        </Typography>
                    </Box>
                </Box>
            </Box>
        </Container>
    );
};

export default Login;
