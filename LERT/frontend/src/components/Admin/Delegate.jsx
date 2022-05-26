import { useState } from "react";
import {
    Box,
    Button,
    FormControl,
    InputLabel,
    MenuItem,
    Select,
    TextField,
    Typography,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper,
} from "@mui/material";
import { ArrowForwardOutlined, SearchOutlined } from "@mui/icons-material";

const createData = (id, adminMail, managerMail, country, status) => {
    return { id, adminMail, managerMail, country, status };
};

const rows = [
    createData(
        "IBA2962",
        "luisalonsomg@ibm.com",
        "carolina.soto@ibm.com",
        "Mexico",
        "Active"
    ),
    createData(
        "IBC4729",
        "abrahammp@ibm.com",
        "carolina.soto@ibm.com",
        "Mexico",
        "Active"
    ),
    createData(
        "IBD9451",
        "aldoalejandrodp@ibm.com",
        "ivan.wilebaldo@ibm.com",
        "Mexico",
        "Active"
    ),
    createData(
        "IBC2932",
        "sebastianandresrs@ibm.com",
        "carolina.soto@ibm.com",
        "Mexico",
        "Inactive"
    ),
    createData(
        "IBZ2031",
        "diegovm@ibm.com",
        "ken.bauer@ibm.com",
        "Mexico",
        "Active"
    ),
    createData(
        "IBZ3431",
        "manuelignaciocc@ibm.com",
        "memo.gutierrez@ibm.com",
        "Mexico",
        "Inactive"
    ),
];

export const Delegate = () => {
    const [profile, setProfile] = useState("");

    const handleChange = (e) => {
        setProfile(e.target.value);
    };

    return (
        <>
            <Box sx={{ display: "flex", alignItems: "center", mb: "20px" }}>
                <FormControl variant="standard" sx={{ m: 1, minWidth: 280 }}>
                    <InputLabel id="demo-simple-select-standard-label">
                        Select profile to log in
                    </InputLabel>
                    <Select
                        value={profile}
                        onChange={handleChange}
                        label="Profile"
                    >
                        <MenuItem value={"IBA123"}>someone1@ibm.com</MenuItem>
                        <MenuItem value={"IBB123"}>someone2@ibm.com</MenuItem>
                        <MenuItem value={"IBC123"}>someone3@ibm.com</MenuItem>
                    </Select>
                </FormControl>
                <Button
                    variant="contained"
                    sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        textTransform: "none",
                        borderRadius: "0px",
                        width: "12rem",
                        height: "40px",
                        fontSize: "15px",
                        fontWeight: "400",
                        bgcolor: "#0062ff",
                        ":hover": {
                            bgcolor: "#0255DA",
                        },
                    }}
                >
                    Submit <ArrowForwardOutlined />
                </Button>
            </Box>
            <Box
                sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    mb: "15px",
                }}
            >
                <Typography
                    component="h1"
                    variant="h4"
                    sx={{
                        fontWeight: "600",
                    }}
                >
                    Delegates:
                </Typography>
                <Box sx={{ display: "flex", alignItems: "flex-end" }}>
                    <SearchOutlined
                        sx={{ color: "action.active", mr: 1, my: 0.5 }}
                    />
                    <TextField label="Search" variant="standard" />
                </Box>
            </Box>
            <TableContainer
                component={Paper}
                sx={{
                    "& .MuiTableCell-head": {
                        color: "#0062ff",
                        textTransform: "uppercase",
                        fontWeight: "500",
                    },
                    padding: "5px 20px",
                }}
            >
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>ID</TableCell>
                            <TableCell align="left">Admin Mail</TableCell>
                            <TableCell align="left">Manager Mail</TableCell>
                            <TableCell align="left">Country</TableCell>
                            <TableCell align="left">Status</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map((row) => (
                            <TableRow
                                key={row.id}
                                sx={{
                                    "&:last-child td, &:last-child th": {
                                        border: 0,
                                    },
                                }}
                            >
                                <TableCell component="th" scope="row">
                                    {row.id}
                                </TableCell>
                                <TableCell align="left">
                                    {row.adminMail}
                                </TableCell>
                                <TableCell align="left">
                                    {row.managerMail}
                                </TableCell>
                                <TableCell align="left">
                                    {row.country}
                                </TableCell>
                                <TableCell align="left">{row.status}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </>
    );
};
