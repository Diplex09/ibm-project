import { useState } from "react";
import { useDispatch } from "react-redux";
import {
    Box,
    Typography,
    TextField,
    FormControlLabel,
    Checkbox,
    Button,
    Grid,
    Link,
} from "@mui/material";
import { ArrowForwardOutlined } from "@mui/icons-material";

import { startLogin } from "../../actions/auth";

export const Right = () => {
    const dispatch = useDispatch();

    const [user, setUser] = useState("");
    const [password, setPassword] = useState("");

    const validLogin = (e) => {
        e.preventDefault();
        dispatch(startLogin(user, password));
    };

    return (
        <Box
            sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                width: "50%",
                height: "100%",
                backgroundColor: "#ffffff",
            }}
        >
            <Typography
                component="h1"
                variant="h5"
                sx={{
                    display: "flex",
                    alignItems: "center",
                    width: "70%",
                }}
            >
                Log in to IBM{" "}
                <Typography
                    sx={{
                        fontSize: "1em",
                        fontWeight: "600",
                        marginLeft: "0.3rem",
                    }}
                >
                    LERT
                </Typography>
            </Typography>

            <Box
                component="form"
                noValidate
                sx={{
                    mt: 1,
                    width: "70%",
                    display: "flex",
                    flexDirection: "column",
                }}
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
                    control={<Checkbox value="remember" color="primary" />}
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
                        width: "50%",
                        height: "45px",
                        borderRadius: "0px",
                        bgcolor: "#0062ff",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        textTransform: "none",
                        fontSize: "15px",
                        fontWeight: "300",
                        ":hover": {
                            bgcolor: "#0255DA",
                        },
                    }}
                >
                    Log in <ArrowForwardOutlined fontSize="small" />
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
    );
};
