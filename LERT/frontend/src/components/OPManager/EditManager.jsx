import { useState, useEffect, Fragment } from "react";
import {
    Box,
    Divider,
    IconButton,
    InputAdornment,
    InputBase,
    Typography,
    Paper,
    TextField,
    Button,
} from "@mui/material";
import { Search, FilterList, ArrowForwardOutlined } from "@mui/icons-material";
import { makeStyles } from "@material-ui/core/styles";

export const EditManager = () => {
    return (
        <>
            <Typography
                component="h1"
                variant="h4"
                sx={{
                    marginBottom: "1rem",
                    fontWeight: "600",
                }}
            >
                Edit Manager Employees or Types
            </Typography>
            <Paper
                sx={{
                    width: 1300,
                    height: 300,

                    marginLeft: "auto",
                    marginRight: "auto",
                }}
            >
                <Box
                    sx={{
                        paddingTop: "2rem",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                    }}
                >
                    <TextField
                        sx={{
                            width: 350,
                            paddingRight: "2rem",
                        }}
                        id="standard-basic"
                        label="Email"
                        variant="standard"
                    />
                    <Button sx={{ marginTop: "1rem" }} variant="outlined">
                        LOG AS MANAGER
                    </Button>
                </Box>
                <Box
                    sx={{
                        paddingTop: "2rem",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                    }}
                >
                    <Button sx={{ marginRight: "3rem" }} variant="outlined">
                        RETURN TO YOUR SESSION
                    </Button>
                    <Button variant="outlined">
                        GO EMPLOYEE SECTION OF THIS MANAGER
                    </Button>
                </Box>

                <Box
                    sx={{
                        paddingTop: "2rem",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                    }}
                >
                    <Button variant="outlined">
                        GO TO EXPENSES SECTION OF THIS MANAGER
                    </Button>
                </Box>
            </Paper>
        </>
    );
};

export default EditManager;
