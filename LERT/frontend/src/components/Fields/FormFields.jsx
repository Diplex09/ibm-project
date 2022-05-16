import React from "react";
import {
    Box,
    Divider,
    IconButton,
    InputAdornment,
    InputBase,
    Typography,
    TextField,
    Grid,
    Button,
} from "@mui/material";

import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import {
    AttachMoney,
    EmailOutlined,
    CommentOutlined,
    Send,
} from "@mui/icons-material";

export const FormFields = () => {
    const [value, setValue] = React.useState(null);
    return (
        <Box
            sx={{
                marginTop: "1rem",
                marginBottom: "2rem",
            }}
        >
            <Typography
                sx={{
                    marginBottom: "1.5rem",
                    textAlign: "center",
                    fontWeight: "1000",
                    fontSize: "1.5rem",
                }}
            >
                ADD NEW EXPENSES
            </Typography>

            <TextField
                sx={{
                    marginRight: "10rem",
                    marginLeft: "3rem",
                    width: "18rem",
                }}
                InputProps={{
                    startAdornment: (
                        <InputAdornment position="start">
                            <EmailOutlined size="10rem" />
                        </InputAdornment>
                    ),
                }}
                id="standard-basic"
                label="Employee Mail"
                variant="standard"
            />

            <LocalizationProvider
                marginRight="50rem"
                dateAdapter={AdapterDateFns}
            >
                <DatePicker
                    inputFormat="yyyy-MM-dd"
                    label="Basic example"
                    value={value}
                    onChange={(newValue) => {
                        setValue(newValue);
                    }}
                    renderInput={(params) => (
                        <TextField
                            sx={{
                                marginRight: "9.8rem",
                                width: "18rem",
                                border: "0",
                            }}
                            {...params}
                        />
                    )}
                />
            </LocalizationProvider>

            <TextField
                sx={{ width: "18rem", marginRight: "3rem" }}
                InputProps={{
                    startAdornment: (
                        <InputAdornment position="start">
                            <AttachMoney size="10rem" />
                        </InputAdornment>
                    ),
                }}
                id="standard-basic"
                label="Standard"
                variant="standard"
            />

            <TextField
                sx={{
                    marginRight: "10rem",
                    marginLeft: "3rem",
                    width: "18rem",
                }}
                InputProps={{
                    startAdornment: (
                        <InputAdornment position="start">
                            <CommentOutlined size="10rem" />
                        </InputAdornment>
                    ),
                }}
                id="standard-basic"
                label="Comment"
                variant="standard"
            />

            <TextField
                sx={{ marginRight: "9.8rem", width: "18rem" }}
                id="standard-basic"
                label="ICA"
                variant="standard"
            />

            <TextField
                sx={{ width: "18rem", marginRight: "3rem" }}
                id="standard-basic"
                label="Type"
                variant="standard"
            />

            <Box
                sx={{
                    textAlign: "center",
                    marginTop: "2rem",
                }}
            >
                <Button
                    sx={{
                        width: "500",
                        borderRadius: "0",
                        bgcolor: "#0062ff",
                        ":hover": {
                            bgcolor: "#0255DA",
                        },
                    }}
                    variant="contained"
                    endIcon={<Send />}
                >
                    Submit
                </Button>
            </Box>
        </Box>
    );
};

export default FormFields;
