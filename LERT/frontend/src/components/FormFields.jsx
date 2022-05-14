import {
    Box,
    Divider,
    IconButton,
    InputAdornment,
    InputBase,
    Typography,
    TextField,
    Grid,
} from "@mui/material";

export const FormFields = () => {
    return (
        <Box
            sx={{
                marginTop: "1.5rem",
                marginBottom: "1.5rem",
            }}
        >
            <TextField
                sx={{ marginRight: "10rem", width: "20rem" }}
                id="standard-basic"
                label="Employee Mail"
                variant="standard"
            />

            <TextField
                sx={{ marginRight: "9.8rem", width: "20rem" }}
                id="standard-basic"
                label="Date"
                variant="standard"
            />

            <TextField
                sx={{ width: "20rem" }}
                id="standard-basic"
                label="Standard"
                variant="standard"
            />

            <TextField
                sx={{ marginRight: "10rem", width: "20rem" }}
                id="standard-basic"
                label="Comment"
                variant="standard"
            />

            <TextField
                sx={{ marginRight: "9.8rem", width: "20rem" }}
                id="standard-basic"
                label="ICA"
                variant="standard"
            />

            <TextField
                sx={{ width: "20rem" }}
                id="standard-basic"
                label="Type"
                variant="standard"
            />
        </Box>
    );
};

export default FormFields;
